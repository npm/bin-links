const t = require('tap')
const requireInject = require('require-inject')

const mockLinkBins = opt => opt
const mockLinkMans = opt => opt.top && !opt.isWindows ? opt : null

// root unit test.  go through each combination and snapshot them all.
// the index just sets up paths and calls the appropriate functions,
// so this is enough to test that functionality.
const pkg = {
  bin: {
    foo: 'bar',
  },
  man: ['foo.1.gz'],
}
for (const isWindows of [true, false]) {
  t.test(isWindows ? 'win32' : 'posix', t => {
    t.plan(2)
    for (const global of [true, false]) {
      t.test(global ? 'global' : 'local', t => {
        t.plan(2)
        for (const top of [true, false]) {
          t.test(top ? 'top' : 'nested', t => {
            t.plan(2)
            for (const force of [true, false]) {
              t.test(`force=${force}`, t => {
                const path = require('path')[isWindows ? 'win32' : 'posix']
                const { resolve } = path
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

                const binLinks = requireInject('../', {
                  path,
                  '../lib/is-windows.js': isWindows,
                  '../lib/link-bins.js': mockLinkBins,
                  '../lib/link-mans.js': opt => mockLinkMans({
                    ...opt,
                    top,
                    isWindows,
                  }),
                })

                return Promise.all([
                  t.resolveMatchSnapshot(binLinks({
                    path: prefix + 'foo',
                    pkg,
                    force,
                    global,
                    top,
                  }), 'unscoped pkg'),
                  t.resolveMatchSnapshot(binLinks({
                    path: prefix + '@foo/bar',
                    pkg,
                    force,
                    global,
                    top,
                  }), 'scoped pkg')
                ])
              })
            }
          })
        }
      })
    }
  })
}

t.test('the resetSeen() method calls appropriate resets', t => {
  const binLinks = requireInject('../', {
    '../lib/shim-bin.js': { resetSeen: () => {
      t.pass('shimBin.resetSeen() called')
    }},
    '../lib/link-gently.js': { resetSeen: () => {
      t.pass('linkGently.resetSeen() called')
    }},
  })
  t.plan(2)
  binLinks.resetSeen()
})
