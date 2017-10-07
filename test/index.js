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
    nohashbang: './nohashbang.js'
  }
}

const folder = path.join(__dirname, '..', 'fixtures', 'convert-windows-newlines')
const nodeModulesFolder = path.join(folder, 'node_modules')
const pkgFolder = path.join(nodeModulesFolder, pkg.name)

test('converts windows newlines correctly', function (t) {
  cleanup()
  mkdirp.sync(pkgFolder)

  fs.writeFileSync(
    path.join(pkgFolder, 'hashbang.js'),
    '#!/usr/bin/env node\r\nconsole.log(\'Hello, world!\')\r\n'
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
      existsSync(path.resolve(folder, 'node_modules/.bin/nohashbang')),
      'nohashbang installed'
    )
    t.notOk(
      fs.readFileSync(
        path.resolve(folder, 'node_modules/cli-dependency/hashbang.js'),
        'utf8'
      ).includes('\r\n'),
      'hashbang dependency cli newlines converted'
    )
    t.ok(
      fs.readFileSync(
        path.resolve(folder, 'node_modules/cli-dependency/nohashbang.js'),
        'utf8'
      ).includes('\r\n'),
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
