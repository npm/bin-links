const t = require('tap')
const linkGently = require('../lib/link-gently.js')
const fs = require('fs')
const requireInject = require('require-inject')

t.test('make links gently', async t => {
  const dir = t.testdir({
    pkg: {
      'hello.js': `#!/usr/bin/env node\nconsole.log('hello')`,
    },
    otherpkg: {
      'hello.js': `#!/usr/bin/env node\nconsole.log('other hello')`,
    },
    existingLink: t.fixture('symlink', './pkg/hello.js'),
    existingFile: 'hello',
  })

  await linkGently({
    path: `${dir}/pkg`,
    to: `${dir}/bin/hello`,
    from: `../pkg/hello.js`,
    absFrom: `${dir}/pkg/hello.js`,
  })
  t.equal(fs.readlinkSync(`${dir}/bin/hello`), '../pkg/hello.js')
  linkGently.resetSeen()

  // call it again to test the 'SKIP' code path
  await linkGently({
    path: `${dir}/pkg`,
    to: `${dir}/bin/hello`,
    from: `../pkg/hello.js`,
    absFrom: `${dir}/pkg/hello.js`,
  })
  linkGently.resetSeen()
  await t.rejects(linkGently({
    path: `${dir}/otherpkg`,
    to: `${dir}/bin/hello`,
    from: `../otherpkg/hello.js`,
    absFrom: `${dir}/otherpkg/hello.js`,
  }), { code: 'EEXIST' })
  linkGently.resetSeen()
  await linkGently({
    path: `${dir}/otherpkg`,
    to: `${dir}/bin/hello`,
    from: `../otherpkg/hello.js`,
    absFrom: `${dir}/otherpkg/hello.js`,
    force: true,
  })
  t.equal(fs.readlinkSync(`${dir}/bin/hello`), '../otherpkg/hello.js')

  await t.rejects(linkGently({
    path: `${dir}/pkg`,
    to: `${dir}/existingFile/notadir`,
    from: `../pkg/hello.js`,
    absFrom: `${dir}/pkg/hello.js`,
  }), { code: 'ENOTDIR' })

  linkGently.resetSeen()
  await t.rejects(linkGently({
    path: `${dir}/pkg`,
    to: `${dir}/existingFile`,
    from: `./pkg/hello.js`,
    absFrom: `${dir}/pkg/hello.js`,
  }), { code: 'EEXIST' })
  linkGently.resetSeen()
  await linkGently({
    path: `${dir}/pkg`,
    to: `${dir}/existingFile`,
    from: `./pkg/hello.js`,
    absFrom: `${dir}/pkg/hello.js`,
    force: true,
  })
  t.equal(fs.readlinkSync(`${dir}/existingFile`), './pkg/hello.js')
  linkGently.resetSeen()

  await linkGently({
    path: `${dir}/pkg`,
    to: `${dir}/bin/missing`,
    from: `../pkg/missing.js`,
    absFrom: `${dir}/pkg/missing.js`,
  })
  t.throws(() => fs.readlinkSync(`${dir}/bin/missing`), { code: 'ENOENT' })
  linkGently.resetSeen()
})

t.test('racey race', async t => {
  const fsMock = {
    ...fs,
    symlink: (path, dest, type, cb) => {
      // throw a lag on it to ensure that one of them doesn't finish
      // before the other even starts.
      setTimeout(() => fs.symlink(path, dest, type, cb), 200)
    },
  }
  const linkGently = requireInject('../lib/link-gently.js', {
    fs: fsMock,
  })
  const dir = t.testdir({
    pkg: {
      'hello.js': `#!/usr/bin/env node\nconsole.log('hello')`,
    },
    otherpkg: {
      'hello.js': `#!/usr/bin/env node\nconsole.log('other hello')`,
    },
    existingLink: t.fixture('symlink', './pkg/hello.js'),
    existingFile: 'hello',
  })
  return Promise.all([
    linkGently({
      path: `${dir}/pkg`,
      from: `./pkg/hello.js`,
      to: `${dir}/racecar`,
      absFrom: `${dir}/pkg/hello.js`,
      force: true,
    }),
    linkGently({
      path: `${dir}/otherpkg`,
      from: `./otherpkg/hello.js`,
      to: `${dir}/racecar`,
      absFrom: `${dir}/otherpkg/hello.js`,
      force: true,
    }),
    new Promise((res) => fs.symlink(__filename, `${dir}/racecar`, 'file', res))
  ]).then(() => {
    const target = fs.readlinkSync(`${dir}/racecar`)
    t.match(target, /^\.\/(other)?pkg\/hello\.js$/, 'should link to one of them')
  })
})
