const t = require('tap')
const requireInject = require('require-inject')
const fs = require('fs')
const {statSync} = fs
const path = require('path').win32
const mkdirp = require('mkdirp')

t.test('basic shim bin', async t => {
  const dir = t.testdir({
    pkg: {
      'hello.js': `#!/usr/bin/env node\r\nconsole.log('hello')`,
    },
    otherpkg: {
      'hello.js': `#!/usr/bin/env node\r\nconsole.log('hello')`,
    },
    notashim: 'definitely not',
  })
  const shimBin = requireInject('../lib/shim-bin.js', { path, mkdirp })
  await shimBin({
    path: `${dir}/pkg`,
    to: `${dir}/bin/hello`,
    from: `../pkg/hello.js`,
    absFrom: `${dir}/pkg/hello.js`,
  })
  {
    const shims = ['hello', 'hello.cmd', 'hello.ps1'].map(f => `${dir}/bin/${f}`)
    for (const shim of shims) {
      t.equal(statSync(shim).mode & 0o100, 0o100, 'exists and executable')
    }
  }
  shimBin.resetSeen()

  await t.rejects(shimBin({
    path: `${dir}/otherpkg`,
    to: `${dir}/bin/hello`,
    from: `../otherpkg/hello.js`,
    absFrom: `${dir}/otherpkg/hello.js`,
  }), { code: 'EEXIST' })
  shimBin.resetSeen()
  await t.rejects(shimBin({
    path: `${dir}/otherpkg`,
    to: `${dir}/notashim`,
    from: `./otherpkg/hello.js`,
    absFrom: `${dir}/otherpkg/hello.js`,
  }), { code: 'EEXIST' })
  shimBin.resetSeen()

  await shimBin({
    path: `${dir}/otherpkg`,
    to: `${dir}/notashim`,
    from: `./otherpkg/hello.js`,
    absFrom: `${dir}/otherpkg/hello.js`,
    force: true
  })
  statSync(`${dir}/notashim.cmd`)
  shimBin.resetSeen()
  await shimBin({
    path: `${dir}/pkg`,
    to: `${dir}/bin/hello`,
    from: `../pkg/hello.js`,
    absFrom: `${dir}/pkg/hello.js`,
  })
  shimBin.resetSeen()
  await shimBin({
    path: `${dir}/pkg`,
    to: `${dir}/bin/missing`,
    from: `../pkg/missing.js`,
    absFrom: `${dir}/pkg/missing.js`,
  })
  t.throws(() => statSync(`${dir}/bin/missing.cmd`))
  shimBin.resetSeen()
})

t.test('eperm on stat', async t => {
  const dir = t.testdir({
    pkg: {
      'hello.js': `#!/usr/bin/env node\r\nconsole.log('hello')`,
    },
    otherpkg: {
      'hello.js': `#!/usr/bin/env node\r\nconsole.log('hello')`,
    },
    notashim: 'definitely not',
  })
  const shimBin = requireInject('../lib/shim-bin.js', {
    path,
    mkdirp,
    fs: {
      ...fs,
      lstat: (path, cb) => cb(Object.assign(new Error('wakawaka'), {
        code: 'EPERM',
      })),
    },
  })
  shimBin.resetSeen()
  await t.rejects(shimBin({
    path: `${dir}/pkg`,
    to: `${dir}/bin/hello`,
    from: `../pkg/hello.js`,
    absFrom: `${dir}/pkg/hello.js`,
  }), { code: 'EPERM' })
  shimBin.resetSeen()
})

t.test('strange enoent from read-cmd-shim', async t => {
  const dir = t.testdir({
    pkg: {
      'hello.js': `#!/usr/bin/env node\r\nconsole.log('hello')`,
    },
    otherpkg: {
      'hello.js': `#!/usr/bin/env node\r\nconsole.log('hello')`,
    },
    notashim: 'definitely not',
  })
  const shimBin = requireInject('../lib/shim-bin.js', {
    path,
    mkdirp,
    'read-cmd-shim': path => Promise.reject(Object.assign(new Error('xyz'), {
      code: 'ENOENT',
    }))
  })

  // run two so that we do hit the seen path
  await Promise.all([
    shimBin({
      path: `${dir}/pkg`,
      to: `${dir}/bin/hello`,
      from: `../pkg/hello.js`,
      absFrom: `${dir}/pkg/hello.js`,
    }),
    shimBin({
      path: `${dir}/pkg`,
      to: `${dir}/bin/hello`,
      from: `../pkg/hello.js`,
      absFrom: `${dir}/pkg/hello.js`,
    }),
  ])

  {
    const shims = ['hello', 'hello.cmd', 'hello.ps1'].map(f => `${dir}/bin/${f}`)
    for (const shim of shims) {
      t.equal(statSync(shim).mode & 0o100, 0o100, 'exists and executable')
    }
  }
  shimBin.resetSeen()
  await shimBin({
    path: `${dir}/pkg`,
    to: `${dir}/bin/hello`,
    from: `../pkg/hello.js`,
    absFrom: `${dir}/pkg/hello.js`,
  })
  shimBin.resetSeen()
})

t.test('unknown error from read-cmd-shim', async t => {
  const dir = t.testdir({
    pkg: {
      'hello.js': `#!/usr/bin/env node\r\nconsole.log('hello')`,
    },
    otherpkg: {
      'hello.js': `#!/usr/bin/env node\r\nconsole.log('hello')`,
    },
    notashim: 'definitely not',
  })
  const shimBin = requireInject('../lib/shim-bin.js', {
    path,
    mkdirp,
    'read-cmd-shim': path => Promise.reject(Object.assign(new Error('xyz'), {
      code: 'ELDERGAWDS',
    }))
  })
  shimBin.resetSeen()
  await shimBin({
    path: `${dir}/pkg`,
    to: `${dir}/bin/hello`,
    from: `../pkg/hello.js`,
    absFrom: `${dir}/pkg/hello.js`,
  })
  {
    const shims = ['hello', 'hello.cmd', 'hello.ps1'].map(f => `${dir}/bin/${f}`)
    for (const shim of shims) {
      t.equal(statSync(shim).mode & 0o100, 0o100, 'exists and executable')
    }
  }
  shimBin.resetSeen()
  await t.rejects(shimBin({
    path: `${dir}/pkg`,
    to: `${dir}/bin/hello`,
    from: `../pkg/hello.js`,
    absFrom: `${dir}/pkg/hello.js`,
  }), { code: 'ELDERGAWDS' })
  shimBin.resetSeen()
})
