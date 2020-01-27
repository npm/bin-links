const t = require('tap')
const requireInject = require('require-inject')
const fs = require('fs')

t.test('make links gently', t => {
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

  const linkGently = requireInject('../lib/link-gently.js', {})
  return linkGently({
    path: `${dir}/pkg`,
    to: `${dir}/bin/hello`,
    from: `../pkg/hello.js`,
    absFrom: `${dir}/pkg/hello.js`,
  }).then(() =>
    t.equal(fs.readlinkSync(`${dir}/bin/hello`), '../pkg/hello.js'))
  // call it again to test the 'SKIP' code path
  .then(() => linkGently({
    path: `${dir}/pkg`,
    to: `${dir}/bin/hello`,
    from: `../pkg/hello.js`,
    absFrom: `${dir}/pkg/hello.js`,
  }))
  .then(() => t.rejects(linkGently({
    path: `${dir}/otherpkg`,
    to: `${dir}/bin/hello`,
    from: `../otherpkg/hello.js`,
    absFrom: `${dir}/otherpkg/hello.js`,
  }), { code: 'EEXIST' }))
  .then(() => linkGently({
    path: `${dir}/otherpkg`,
    to: `${dir}/bin/hello`,
    from: `../otherpkg/hello.js`,
    absFrom: `${dir}/otherpkg/hello.js`,
    force: true,
  }))
  .then(() =>
    t.equal(fs.readlinkSync(`${dir}/bin/hello`), '../otherpkg/hello.js'))
  .then(() => t.rejects(linkGently({
    path: `${dir}/pkg`,
    to: `${dir}/existingFile/notadir`,
    from: `../pkg/hello.js`,
    absFrom: `${dir}/pkg/hello.js`,
  }), { code: 'ENOTDIR' }))
  .then(() => t.rejects(linkGently({
    path: `${dir}/pkg`,
    to: `${dir}/existingFile`,
    from: `./pkg/hello.js`,
    absFrom: `${dir}/pkg/hello.js`,
  }), { code: 'EEXIST' }))
  .then(() => linkGently({
    path: `${dir}/pkg`,
    to: `${dir}/existingFile`,
    from: `./pkg/hello.js`,
    absFrom: `${dir}/pkg/hello.js`,
    force: true,
  }))
  .then(() =>
    t.equal(fs.readlinkSync(`${dir}/existingFile`), './pkg/hello.js'))
  .then(() => linkGently({
    path: `${dir}/pkg`,
    to: `${dir}/bin/missing`,
    from: `../pkg/missing.js`,
    absFrom: `${dir}/pkg/missing.js`,
  }))
  .then(() =>
    t.throws(() => fs.readlinkSync(`${dir}/bin/missing`), { code: 'ENOENT' }))
})
