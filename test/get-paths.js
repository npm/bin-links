const t = require('tap')

const both = {
  name: 'both',
  bin: {
    foo: 'bar',
  },
  man: ['foo.1.gz'],
}

const nobin = {
  name: 'nobin',
  man: ['foo.1.gz'],
}

const badman = {
  name: 'badman',
  man: ['hello.txt'],
}

const requireInject = require('require-inject')
for (const isWindows of [true, false]) {
  t.test(isWindows ? 'win32' : 'posix', t => {
    t.plan(2)
    for (const global of [true, false]) {
      t.test(global ? 'global' : 'local', t => {
        t.plan(2)
        for (const top of [true, false]) {
          t.test(top ? 'top' : 'nested', t => {
            const path = require('path')[isWindows ? 'win32' : 'posix']
            const prefix = isWindows ? (
              global ? (
                top ? 'c:\\path\\to\\prefix\\node_modules\\'
                : 'c:\\path\\to\\prefix\\node_modules\\xyz\\node_modules\\'
              ) : (
                top ? 'c:\\path\\to\\'
                : 'c:\\path\\to\\project\\node_modules\\'
              )
            ) : (
              global ? (
                top ? '/usr/local/lib/node_modules/'
                : '/usr/local/lib/node_modules/xyz/node_modules/'
              ) : (
                top ? '/path/to/'
                : '/path/to/project/node_modules/'
              )
            )

            const getPaths = requireInject('../lib/get-paths.js', {
              path,
              '../lib/is-windows.js': isWindows,
            })

            t.plan(3)
            for (const pkg of [both, nobin, badman]) {
              t.test(pkg.name, t => {
                t.matchSnapshot(getPaths({
                  path: prefix + 'foo',
                  pkg,
                  global,
                  top,
                }), 'unscoped package')

                t.matchSnapshot(getPaths({
                  path: prefix + '@foo/bar',
                  pkg,
                  global,
                  top,
                }), 'scoped package')

                t.end()
              })
            }
          })
        }
      })
    }
  })
}
