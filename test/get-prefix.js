const t = require('tap')
const getPrefix = require('../lib/get-prefix.js')
const { dirname } = require('path')

t.equal(getPrefix('/path/to/node_modules/foo'), dirname('/path/to/node_modules'))
t.equal(getPrefix('/path/to/node_modules/@foo/bar'), dirname('/path/to/node_modules'))
