const ciInfo = require('ci-info')
const isWindows = require('./is-windows.js')
const getPrefix = require('./get-prefix.js')
const { dirname } = require('path')

module.exports = ({ top, path }) => !top || isWindows || ciInfo.isCI ? null
  : dirname(getPrefix(path)) + '/share/man'
