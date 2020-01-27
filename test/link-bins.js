const requireInject = require('require-inject')
const t = require('tap')
const isWindows = require('../lib/is-windows.js')

if (!process.env.__TESTING_BIN_LINKS_PLATFORM__) {
  const otherPlatform = isWindows ? 'posix' : 'win32'
  t.spawn(process.execPath, [__filename], {
    env: {
      ...process.env,
      __TESTING_BIN_LINKS_PLATFORM__: otherPlatform,
    },
  }, otherPlatform)
}

const linkBins = requireInject('../lib/link-bins.js', {
  // only link if forced, in this mock
  '../lib/link-bin.js': ({from, to}) => Promise.resolve(`LINK ${from} ${to}`),
  '../lib/shim-bin.js': ({from, to}) => Promise.resolve(`SHIM ${from} ${to}`),
  path: require('path')[isWindows ? 'win32' : 'posix'],
})

const pkg = {
  name: 'foo',
  bin: 'foo.js',
}
const {resolve} = require('path')[isWindows ? 'win32' : 'posix']

t.test('link bins', t => linkBins({
    path: resolve('/path/to/node_modules/foo'),
    binTarget: resolve('/path/to/bin'),
    pkg,
}).then(linked => t.strictSame(linked, [
  isWindows ? 'SHIM ..\\node_modules\\foo\\foo.js \\path\\to\\bin\\foo'
    : 'LINK ../node_modules/foo/foo.js /path/to/bin/foo'
])))

t.test('no bins to link', t => linkBins({
    path: resolve('/path/to/node_modules/foo'),
    binTarget: resolve('/path/to/bin'),
    pkg: { name: 'foo' },
}).then(linked => t.strictSame(linked, [])))
