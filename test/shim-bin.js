const t = require('tap')
const requireInject = require('require-inject')
const fs = require('fs')
const {statSync} = fs
const path = require('path').win32
const mkdirp = require('mkdirp')

t.test('basic shim bin', t => {
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
  return shimBin({
    path: `${dir}/pkg`,
    to: `${dir}/bin/hello`,
    from: `../pkg/hello.js`,
    absFrom: `${dir}/pkg/hello.js`,
  }).then(() => {
    const shims = ['hello', 'hello.cmd', 'hello.ps1'].map(f => `${dir}/bin/${f}`)
    for (const shim of shims) {
      t.equal(statSync(shim).mode & 0o100, 0o100, 'exists and executable')
    }
  })
  .then(() => t.rejects(shimBin({
    path: `${dir}/otherpkg`,
    to: `${dir}/bin/hello`,
    from: `../otherpkg/hello.js`,
    absFrom: `${dir}/otherpkg/hello.js`,
  }), { code: 'EEXIST' }))
  .then(() => t.rejects(shimBin({
    path: `${dir}/otherpkg`,
    to: `${dir}/notashim`,
    from: `./otherpkg/hello.js`,
    absFrom: `${dir}/otherpkg/hello.js`,
  }), { code: 'EEXIST' }))
  .then(() => shimBin({
    path: `${dir}/otherpkg`,
    to: `${dir}/notashim`,
    from: `./otherpkg/hello.js`,
    absFrom: `${dir}/otherpkg/hello.js`,
    force: true
  }))
  .then(() => statSync(`${dir}/notashim.cmd`))
  .then(() => shimBin({
    path: `${dir}/pkg`,
    to: `${dir}/bin/hello`,
    from: `../pkg/hello.js`,
    absFrom: `${dir}/pkg/hello.js`,
  }))
  .then(() => shimBin({
    path: `${dir}/pkg`,
    to: `${dir}/bin/missing`,
    from: `../pkg/missing.js`,
    absFrom: `${dir}/pkg/missing.js`,
  })).then(() => t.throws(() => statSync(`${dir}/bin/missing.cmd`)))
})

t.test('eperm on stat', t => {
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
  return t.rejects(shimBin({
    path: `${dir}/pkg`,
    to: `${dir}/bin/hello`,
    from: `../pkg/hello.js`,
    absFrom: `${dir}/pkg/hello.js`,
  }), { code: 'EPERM' })
})

t.test('strange enoent from read-cmd-shim', t => {
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
  return shimBin({
    path: `${dir}/pkg`,
    to: `${dir}/bin/hello`,
    from: `../pkg/hello.js`,
    absFrom: `${dir}/pkg/hello.js`,
  }).then(() => {
    const shims = ['hello', 'hello.cmd', 'hello.ps1'].map(f => `${dir}/bin/${f}`)
    for (const shim of shims) {
      t.equal(statSync(shim).mode & 0o100, 0o100, 'exists and executable')
    }
  })
  .then(() => shimBin({
    path: `${dir}/pkg`,
    to: `${dir}/bin/hello`,
    from: `../pkg/hello.js`,
    absFrom: `${dir}/pkg/hello.js`,
  }))
})

t.test('unknown error from read-cmd-shim', t => {
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
  return shimBin({
    path: `${dir}/pkg`,
    to: `${dir}/bin/hello`,
    from: `../pkg/hello.js`,
    absFrom: `${dir}/pkg/hello.js`,
  }).then(() => {
    const shims = ['hello', 'hello.cmd', 'hello.ps1'].map(f => `${dir}/bin/${f}`)
    for (const shim of shims) {
      t.equal(statSync(shim).mode & 0o100, 0o100, 'exists and executable')
    }
  })
  .then(() => t.rejects(shimBin({
    path: `${dir}/pkg`,
    to: `${dir}/bin/hello`,
    from: `../pkg/hello.js`,
    absFrom: `${dir}/pkg/hello.js`,
  }), { code: 'ELDERGAWDS' }))
})
