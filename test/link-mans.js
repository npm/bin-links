const t = require('tap')

const requireInject = require('require-inject')
const linkMans = requireInject('../lib/link-mans.js', {
  '../lib/link-gently.js': ({from, to}) => Promise.resolve(`LINK ${from} ${to}`),
})

t.test('not top/global', t => linkMans({
  pkg: { man: ['foo.1'] },
  top: false,
  path: '/usr/local/lib/node_modules/pkg',
}).then(res => t.strictSame(res, [])))

t.test('man not an array', t => linkMans({
  pkg: { man: 'not an array' },
  top: true,
  path: '/usr/local/lib/node_modules/pkg',
}).then(res => t.strictSame(res, [])))

t.test('no man', t => linkMans({
  pkg: {},
  top: true,
  path: '/usr/local/lib/node_modules/pkg',
}).then(res => t.strictSame(res, [])))

t.test('link some mans', t => linkMans({
  pkg: {
    man: [
      'foo.1',
      null,
      'docs/foo.1',
      'foo.1.gz',
      '/path/to/etc/passwd.1',
      'c:\\path\\to\\passwd.2',
    ],
  },
  top: true,
  path: '/usr/local/lib/node_modules/pkg',
}).then(res => t.strictSame(res.sort((a,b)=>a.localeCompare(b)), [
  'LINK ../../../lib/node_modules/pkg/c/path/to/passwd.2 /usr/local/share/man/man2/passwd.2',
  'LINK ../../../lib/node_modules/pkg/docs/foo.1 /usr/local/share/man/man1/foo.1',
  'LINK ../../../lib/node_modules/pkg/foo.1 /usr/local/share/man/man1/foo.1',
  'LINK ../../../lib/node_modules/pkg/foo.1.gz /usr/local/share/man/man1/foo.1.gz',
  'LINK ../../../lib/node_modules/pkg/path/to/etc/passwd.1 /usr/local/share/man/man1/passwd.1',
])))

t.test('bad man', t => t.rejects(linkMans({
  pkg: {
    _id: 'foo@1.2.3',
    name: 'foo',
    version: '1.2.3',
    man: [
      'foo.readme',
      null,
      'docs/foo.1',
      'foo.1.gz',
    ],
  },
  top: true,
  path: '/usr/local/lib/node_modules/pkg',
}), { code: 'EBADMAN' }))
