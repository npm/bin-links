const requireInject = require('require-inject')
const t = require('tap')
const pkg = {
  name: 'foo',
  bin: 'foo.js',
}

for (const isWindows of [true, false]) {
  t.test(isWindows ? 'win32' : 'posix', t => {
    const linkBins = requireInject('../lib/link-bins.js', {
      // only link if forced, in this mock
      '../lib/link-bin.js': ({ from, to }) => Promise.resolve(`LINK ${from} ${to}`),
      '../lib/shim-bin.js': ({ from, to }) => Promise.resolve(`SHIM ${from} ${to}`),
      '../lib/is-windows.js': isWindows,
      path: require('path')[isWindows ? 'win32' : 'posix'],
    })

    const { resolve } = require('path')[isWindows ? 'win32' : 'posix']

    t.test('link bins', t => linkBins({
      path: resolve('/path/to/lib/node_modules/foo'),
      top: true,
      pkg,
    }).then(linked => t.strictSame(linked, [
      isWindows ? 'SHIM node_modules\\foo\\foo.js \\path\\to\\lib\\foo'
      : 'LINK ../lib/node_modules/foo/foo.js /path/to/bin/foo',
    ])))

    t.test('no bins to link', t => linkBins({
      path: resolve('/path/to/node_modules/foo'),
      top: true,
      pkg: { name: 'foo' },
    }).then(linked => t.strictSame(linked, [])))

    t.end()
  })
}
