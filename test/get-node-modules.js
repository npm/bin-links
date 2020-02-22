const t = require('tap')
const requireInject = require('require-inject')
const getNodeModules = require('../lib/get-node-modules.js', {
  path: require('path').posix,
})

t.equal(getNodeModules('/path/to/node_modules/foo'),
  '/path/to/node_modules')
t.equal(getNodeModules('/path/to/node_modules/@foo/bar'),
  '/path/to/node_modules')

// call again to hit the memoizing code path
t.equal(getNodeModules('/path/to/node_modules/foo'),
  '/path/to/node_modules')
t.equal(getNodeModules('/path/to/node_modules/@foo/bar'),
  '/path/to/node_modules')
