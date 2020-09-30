const t = require('tap')
const requireInject = require('require-inject')

t.test('always ok when forced ', async t => {
  const checkBin = requireInject('../lib/check-bin.js')
  t.resolves(checkBin({force: true}), 'ok when forced')
  t.resolves(checkBin({global: false}), 'ok when local')
  t.resolves(checkBin({global: true, top: false}), 'ok when not top')
})

t.test('windows', async t => {
  const checkBin = requireInject('../lib/check-bin.js', {
    '../lib/is-windows.js': true,
  })
  const dir = t.testdir({
    foo: `#!/bin/sh
basedir=$(dirname "$(echo "$0" | sed -e 's,\\,/,g')")

case \`uname\` in
    *CYGWIN*|*MINGW*|*MSYS*) basedir=\`cygpath -w "$basedir"\`;;
esac

"$basedir/node_modules/foo"   "$@"
exit $?
`,
    'foo.cmd': `@ECHO off
SETLOCAL
CALL :find_dp0
"%dp0%\\node_modules\\foo"   %*
ENDLOCAL
EXIT /b %errorlevel%
:find_dp0
SET dp0=%~dp0
EXIT /b
`,
    'foo.ps1': `#!/usr/bin/env pwsh
$basedir=Split-Path $MyInvocation.MyCommand.Definition -Parent

$exe=""
if ($PSVersionTable.PSVersion -lt "6.0" -or $IsWindows) {
  # Fix case when both the Windows and Linux builds of Node
  # are installed in the same directory
  $exe=".exe"
}
& "$basedir/node_modules/foo"   $args
exit $LASTEXITCODE
`,
    notashim: 'this is not a shim',
    dir: {},
  })

  t.rejects(checkBin({
    bin: 'foo',
    global: true,
    top: true,
    path: `${dir}/node_modules/bar`,
  }), { code: 'EEXIST' })

  t.rejects(checkBin({
    bin: 'notashim',
    global: true,
    top: true,
    path: `${dir}/node_modules/bar`,
  }), { code: 'EEXIST' })

  t.rejects(checkBin({
    bin: 'dir',
    global: true,
    top: true,
    path: `${dir}/node_modules/bar`,
  }), { code: 'EEXIST' })

  t.resolves(checkBin({
    bin: 'foo',
    global: true,
    top: true,
    path: `${dir}/node_modules/foo`,
  }))

  t.resolves(checkBin({
    bin: 'not-existing',
    global: true,
    top: true,
    path: `${dir}/node_modules/foo`,
  }))
})

t.test('not windows', async t => {
  const checkBin = requireInject('../lib/check-bin.js', {
    '../lib/is-windows.js': false,
  })

  const dir = t.testdir({
    bin: {
      foo: t.fixture('symlink', '../lib/node_modules/foo/foo.js'),
      notalink: 'hello',
      dir: {},
    }
  })

  t.rejects(checkBin({
    bin: 'foo',
    global: true,
    top: true,
    path: `${dir}/lib/node_modules/bar`,
  }), { code: 'EEXIST' })

  t.rejects(checkBin({
    bin: 'notalink',
    global: true,
    top: true,
    path: `${dir}/lib/node_modules/bar`,
  }), { code: 'EEXIST' })

  t.rejects(checkBin({
    bin: 'dir',
    global: true,
    top: true,
    path: `${dir}/lib/node_modules/bar`,
  }), { code: 'EEXIST' })

  t.resolves(checkBin({
    bin: 'foo',
    global: true,
    top: true,
    path: `${dir}/lib/node_modules/foo`,
  }))

  t.resolves(checkBin({
    bin: 'not-existing',
    global: true,
    top: true,
    path: `${dir}/lib/node_modules/foo`,
  }))
})
