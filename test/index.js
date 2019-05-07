const fs = require('graceful-fs')
const path = require('path')
const existsSync = fs.existsSync || path.existsSync

const mkdirp = require('mkdirp')
const rimraf = require('rimraf')
const test = require('tap').test

const binLinks = require('../index.js')

const log = {
  clearProgress () {},
  info () {},
  showProgress () {},
  silly () {},
  verbose () {}
}

const pkg = {
  name: 'cli-dependency',
  description: 'fixture',
  version: '0.0.0',
  bin: {
    hashbang: './hashbang.js',
    nohashbang: './nohashbang.js',
    'hashbang-nocr': './hashbang-nocr.js'
  },
  hooks: {
    hashbang: './hashbang.js',
    nohashbang: './nohashbang.js',
    'hashbang-nocr': './hashbang-nocr.js'
  }
}

const folder = path.join(__dirname, '..', 'fixtures', 'convert-windows-newlines')
const nodeModulesFolder = path.join(folder, 'node_modules')
const pkgFolder = path.join(nodeModulesFolder, pkg.name)
console.log({pkgFolder})

test('converts windows newlines correctly', function (t) {
  cleanup()
  mkdirp.sync(pkgFolder)

  fs.writeFileSync(
    path.join(pkgFolder, 'hashbang.js'),
    '#!/usr/bin/env node\r\nconsole.log(\'Hello, world!\')\r\n'
  )
  fs.writeFileSync(
    path.join(pkgFolder, 'hashbang-nocr.js'),
    '#!/usr/bin/env node\nconsole.log(\'Hello, world!\')\r\n'
  )
  fs.writeFileSync(
    path.join(pkgFolder, 'nohashbang.js'),
    '\'use strict\'\r\nconsole.log(\'Goodbye, world!\')\r\n'
  )

  const defaultOpts = {
    log: log,
    pkgId: 'pkgId',
    umask: 0,
    prefixes: [nodeModulesFolder]
  }

  return binLinks(pkg, pkgFolder, false, defaultOpts).then(() => {
    t.ok(
      existsSync(path.resolve(folder, 'node_modules/.bin/hashbang')),
      'hashbang installed'
    )
    t.ok(
      existsSync(path.resolve(folder, 'node_modules/.bin/hashbang-nocr')),
      'hashbang installed'
    )
    t.ok(
      existsSync(path.resolve(folder, 'node_modules/.bin/nohashbang')),
      'nohashbang installed'
    )
    t.ok(
      existsSync(path.resolve(folder, 'node_modules/.hooks/hashbang')),
      'hashbang installed'
    )
    t.ok(
      existsSync(path.resolve(folder, 'node_modules/.hooks/hashbang-nocr')),
      'hashbang installed'
    )
    t.ok(
      existsSync(path.resolve(folder, 'node_modules/.hooks/nohashbang')),
      'nohashbang installed'
    )
    const content = fs.readFileSync(
      path.resolve(folder, 'node_modules/cli-dependency/hashbang.js'),
      'utf8'
    )
    t.notLike(content, /^#![^\n]+\r\n/,
      'hashbang dependency cli shebang newlines converted'
    )
    t.like(content, /\r\n/,
      'hashbang dependency cli non-shebang newlines retained'
    )

    t.like(
      fs.readFileSync(
        path.resolve(folder, 'node_modules/cli-dependency/hashbang-nocr.js'),
        'utf8'
      ), /\r\n/,
      'hashbang-nocr dependency cli newlines retained'
    )
    t.like(
      fs.readFileSync(
        path.resolve(folder, 'node_modules/cli-dependency/nohashbang.js'),
        'utf8'
      ), /\r\n/,
      'nohashbang dependency cli newlines retained'
    )
  })
})

test('cleanup', function (t) {
  cleanup()
  t.end()
})

function cleanup () {
  rimraf.sync(folder)
}
