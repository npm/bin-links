const t = require('tap')
const requireInject = require('require-inject')
const checkBin = async ({ bin }) => {
  if (bin === 'fail') {
    throw new Error('fail')
  }
}
const checkBins = requireInject('../lib/check-bins.js', {
  '../lib/check-bin.js': checkBin,
})

const o = { global: true, force: false, top: true }

t.test('gets normalized', t =>
  t.resolves(checkBins({ pkg: { bin: 'lib/foo.js', name: 'foo' }, ...o })))

t.test('ok if all ok', t =>
  t.resolves(checkBins({ pkg: { bin: { foo: 'lib/foo.js' } }, ...o })))

t.test('no bin is fine', t =>
  t.resolves(checkBins({ pkg: {}, ...o })))

t.test('always ok if forced', t =>
  // eslint-disable-next-line max-len
  t.resolves(checkBins({ pkg: { bin: { foo: 'lib/foo.js', fail: 'fail.js' } }, ...o, force: true })))

t.test('always ok if not global', t =>
  // eslint-disable-next-line max-len
  t.resolves(checkBins({ pkg: { bin: { foo: 'lib/foo.js', fail: 'fail.js' } }, ...o, global: false })))

t.test('always ok if not top', t =>
  t.resolves(checkBins({ pkg: { bin: { foo: 'lib/foo.js', fail: 'fail.js' } }, ...o, top: false })))

t.test('fail if any fail', t =>
  t.rejects(checkBins({ pkg: { bin: { foo: 'lib/foo.js', fail: 'fail.js' } }, ...o })))
