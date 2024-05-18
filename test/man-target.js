const t = require('tap')
const requireInject = require('require-inject')

for (const isWindows of [true, false]) {
  t.test(isWindows ? 'win32' : 'posix', t => {
    const manTarget = requireInject('../lib/man-target.js', {
      '../lib/is-windows.js': isWindows,
      path: require('path')[isWindows ? 'win32' : 'posix'],
      'ci-info': { isCI: false },
    })

    t.matchSnapshot(manTarget({
      path: '/path/to/node_modules/foo',
      top: true,
    }), 'top (and thus global)')

    t.matchSnapshot(manTarget({
      path: '/path/to/node_modules/foo',
    }), 'not top')

    t.end()
  })
}
