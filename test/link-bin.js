const requireInject = require('require-inject')
const t = require('tap')
const linkBin = requireInject('../lib/link-bin.js', {
  // only link if forced, in this mock
  '../lib/link-gently.js': ({force}) => Promise.resolve(force),
  '../lib/fix-bin.js': absFrom => Promise.resolve(absFrom),
})

t.test('if not linked, dont fix bin', t =>
  linkBin({absFrom:'/some/path', force: false}).then(f => t.equal(f, false)))

t.test('if linked, fix bin', t =>
  linkBin({absFrom:'/some/path', force: true}).then(f => t.equal(f, '/some/path')))
