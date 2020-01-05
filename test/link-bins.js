const t = require('tap')
const binLinks = require('../')

// forking between cmd-shims and symlinks is already handled by
// the gentle-fs.binLink module.  just test the unix handling here.
const _FAKE_PLATFORM_ = process.platform === 'win32' ? 'unix' : null

const fs = require('fs')
const mkdirp = require('mkdirp').sync
const rimraf = require('rimraf').sync
const { basename, resolve } = require('path')
const me = resolve(__dirname, basename(__filename, '.js'))
rimraf(me)
mkdirp(me)
const globalDir = resolve(me, 'node_modules')
t.teardown(() => rimraf(me))

const log = {
  clearProgress () {},
  info () {},
  showProgress () {},
  silly () {},
  verbose () {}
}

// create some stuff that's already in the bin/man folders
const globalBin = resolve(me, 'bin')
mkdirp(globalBin)
fs.writeFileSync(globalBin + '/foo', 'pre-existing foo bin')
mkdirp(me + '/node_modules/bar/bin')
fs.writeFileSync(me + '/node_modules/bar/bin/bar.js', 'original bar')
fs.symlinkSync(me + '/node_modules/bar/bin/bar.js', me + '/bin/bar')

const prefixes = [
  me,
  globalBin,
  globalDir,
  resolve(me, 'share/man/man1')
]

mkdirp(me + '/share/man/man1')
fs.writeFileSync(me + '/share/man/man1/foo.1', 'pre-existing foo man')
mkdirp(me + '/node_modules/bar/man')
fs.writeFileSync(me + '/node_modules/bar/man/bar.1', 'original bar man')
fs.symlinkSync(me + '/node_modules/bar/man/bar.1', me + '/share/man/man1/bar.1')

t.test('foo package cannot link, pre-existing stuff there', t => {
  const foo = resolve(me, 'node_modules/foo')
  mkdirp(foo)
  const pkg = {
    name: 'foo',
    version: '1.2.3',
    bin: 'foo.js',
    man: ['foo.1', { not: 'a manpage string' }]
  }
  fs.writeFileSync(foo + '/package.json', JSON.stringify(pkg))
  fs.writeFileSync(foo + '/foo.1', 'how to foo\n')
  fs.writeFileSync(foo + '/foo.js', '#!/usr/bin/env node\nconsole.log("foo")')

  // might get it on the bin or the man, but one of these will EEXIST
  return t.rejects(binLinks(pkg, foo, true, {
    prefix: me,
    global: true,
    globalBin,
    globalDir,
    log,
    pkgId: `${pkg.name}@${pkg.version}`,
    name: pkg.name,
    _FAKE_PLATFORM_,
    prefixes: prefixes.concat(foo)
  }), { code: 'EEXIST' }).then(() => {
    // ensure we still have our preexisting bits
    t.equal(fs.readFileSync(me + '/bin/foo', 'utf8'), 'pre-existing foo bin')
    t.equal(fs.readFileSync(me + '/share/man/man1/foo.1', 'utf8'), 'pre-existing foo man')
  })
})

t.test('foo package can link with --force link', t => {
  const cwd = process.cwd()
  t.teardown(() => process.chdir(cwd))
  process.chdir(me)
  const foo = 'node_modules/foo'
  mkdirp(foo)
  const pkg = {
    name: 'foo',
    version: '1.2.3',
    bin: 'foo.js',
    man: ['foo.1']
  }
  fs.writeFileSync(foo + '/package.json', JSON.stringify(pkg))
  fs.writeFileSync(foo + '/foo.1', 'how to foo\n')
  fs.writeFileSync(foo + '/foo.js', '#!/usr/bin/env node\nconsole.log("foo")')

  return binLinks(pkg, foo, true, {
    prefix: me,
    global: true,
    globalBin,
    globalDir,
    log,
    pkgId: `${pkg.name}@${pkg.version}`,
    name: pkg.name,
    _FAKE_PLATFORM_,
    force: true,
    prefixes: prefixes.concat(foo)
  }).then(() => {
    // ensure we got our links made
    t.equal(fs.readFileSync(me + '/bin/foo', 'utf8'), '#!/usr/bin/env node\nconsole.log("foo")')
    if (process.platform !== 'win32') {
      t.equal(fs.readFileSync(me + '/share/man/man1/foo.1', 'utf8'), 'how to foo\n')
    }
  })
})

t.test('bar package can update, links are ours', t => {
  const bar = resolve(me, 'node_modules/bar')
  mkdirp(bar)
  const pkg = {
    name: 'bar',
    version: '1.2.3',
    bin: 'bar.js',
    man: ['bar.1']
  }
  fs.writeFileSync(bar + '/package.json', JSON.stringify(pkg))
  fs.writeFileSync(bar + '/bar.1', 'how to bar\n')
  fs.writeFileSync(bar + '/bar.js', '#!/usr/bin/env node\nconsole.log("bar")')

  return binLinks(pkg, bar, true, {
    prefix: me,
    parseable: true,
    global: true,
    globalBin,
    globalDir,
    log,
    pkgId: `${pkg.name}@${pkg.version}`,
    name: pkg.name,
    _FAKE_PLATFORM_,
    prefixes: prefixes.concat(bar, bar + '/man')
  }).then(() => {
    // ensure we got our links made
    t.equal(fs.readFileSync(me + '/bin/bar', 'utf8'), '#!/usr/bin/env node\nconsole.log("bar")')
    if (process.platform !== 'win32') {
      t.equal(fs.readFileSync(me + '/share/man/man1/bar.1', 'utf8'), 'how to bar\n')
    }
  })
})

t.test('cannot overwrite with another package with the same bin', t => {
  const baz = resolve(me, 'node_modules/@scope/baz')
  mkdirp(baz)
  const pkg = {
    name: '@scope/baz',
    version: '1.2.3',
    bin: { bar: 'baz.js' }
  }
  fs.writeFileSync(baz + '/package.json', JSON.stringify(pkg))
  fs.writeFileSync(baz + '/baz.js', '#!/usr/bin/env node\nconsole.log("baz")')

  return t.rejects(binLinks(pkg, baz, true, {
    global: true,
    prefix: me,
    globalBin,
    globalDir,
    log,
    pkgId: `${pkg.name}@${pkg.version}`,
    _FAKE_PLATFORM_,
    name: pkg.name,
    prefixes: prefixes.concat(baz)
  }), { code: 'EEXIST' }).then(() => {
    // ensure bar is still intact
    t.equal(fs.readFileSync(me + '/bin/bar', 'utf8'), '#!/usr/bin/env node\nconsole.log("bar")')
  })
})

t.test('nothing to link', t => {
  const qux = resolve(me, 'node_modules/qux')
  mkdirp(qux)
  const pkg = {
    name: 'qux',
    version: '1.2.3'
  }
  fs.writeFileSync(qux + '/package.json', JSON.stringify(pkg))

  return binLinks(pkg, qux, true, {
    global: true,
    prefix: me,
    globalBin,
    globalDir,
    log,
    pkgId: `${pkg.name}@${pkg.version}`,
    _FAKE_PLATFORM_,
    name: pkg.name,
    prefixes: prefixes.concat(qux)
  })
})

t.test('invalid man page name', t => {
  const badman = resolve(me, 'node_modules/badman')
  mkdirp(badman)
  const pkg = {
    name: 'badman',
    version: '1.2.3',
    man: ['manpage']
  }
  fs.writeFileSync(badman + '/package.json', JSON.stringify(pkg))
  fs.writeFileSync(badman + '/manpage', JSON.stringify(pkg))

  return t.rejects(binLinks(pkg, badman, true, {
    global: true,
    prefix: me,
    globalBin,
    globalDir,
    log,
    pkgId: `${pkg.name}@${pkg.version}`,
    _FAKE_PLATFORM_,
    name: pkg.name,
    prefixes: prefixes.concat(badman)
  }), { message: 'manpage is not a valid name for a man file.' })
})
