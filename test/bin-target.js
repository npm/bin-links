const requireInject = require('require-inject')
const t = require('tap')
const isWindows = require('../lib/is-windows.js')

for (const isWindows of [true, false]) {
  t.test(isWindows ? 'win32' : 'posix', t => {
    const path = require('path')[isWindows ? 'win32' : 'posix']
    const binTarget = requireInject('../lib/bin-target.js', {
      '../lib/is-windows.js': isWindows,
      path,
    })
    t.matchSnapshot(binTarget({
      path: '/path/to/node_modules/foo',
      top: true,
    }), 'top (and thus global)')

    t.matchSnapshot(binTarget({
      path: '/path/to/node_modules/foo',
    }), 'not top')

    t.end()
  })
}
