const t = require('tap')
const isWindows = require('../lib/is-windows.js')
if (!process.env.__TESTING_BIN_LINKS_PLATFORM__) {
  t.spawn(process.execPath, [__filename], {
    env: {
      ...process.env,
      __TESTING_BIN_LINKS_PLATFORM__: isWindows ? 'posix' : 'win32',
    },
  })
}
const platform = process.env.__TESTING_BIN_LINKS_PLATFORM__ || process.platform
t.equal(isWindows, platform === 'win32')
