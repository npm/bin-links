/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/index.js TAP posix global nested force=false > scoped pkg 1`] = `
Array [
  Object {
    "binTarget": "/usr/local/lib/node_modules/xyz/node_modules/.bin",
    "force": true,
    "path": "/usr/local/lib/node_modules/xyz/node_modules/@foo/bar",
    "pkg": Object {
      "bin": Object {
        "foo": "bar",
      },
      "man": Array [
        "foo.1.gz",
      ],
    },
  },
  null,
]
`

exports[`test/index.js TAP posix global nested force=false > unscoped pkg 1`] = `
Array [
  Object {
    "binTarget": "/usr/local/lib/node_modules/xyz/node_modules/.bin",
    "force": true,
    "path": "/usr/local/lib/node_modules/xyz/node_modules/foo",
    "pkg": Object {
      "bin": Object {
        "foo": "bar",
      },
      "man": Array [
        "foo.1.gz",
      ],
    },
  },
  null,
]
`

exports[`test/index.js TAP posix global nested force=true > scoped pkg 1`] = `
Array [
  Object {
    "binTarget": "/usr/local/lib/node_modules/xyz/node_modules/.bin",
    "force": true,
    "path": "/usr/local/lib/node_modules/xyz/node_modules/@foo/bar",
    "pkg": Object {
      "bin": Object {
        "foo": "bar",
      },
      "man": Array [
        "foo.1.gz",
      ],
    },
  },
  null,
]
`

exports[`test/index.js TAP posix global nested force=true > unscoped pkg 1`] = `
Array [
  Object {
    "binTarget": "/usr/local/lib/node_modules/xyz/node_modules/.bin",
    "force": true,
    "path": "/usr/local/lib/node_modules/xyz/node_modules/foo",
    "pkg": Object {
      "bin": Object {
        "foo": "bar",
      },
      "man": Array [
        "foo.1.gz",
      ],
    },
  },
  null,
]
`

exports[`test/index.js TAP posix global top force=false > scoped pkg 1`] = `
Array [
  Object {
    "binTarget": "/usr/local/bin",
    "force": false,
    "path": "/usr/local/lib/node_modules/@foo/bar",
    "pkg": Object {
      "bin": Object {
        "foo": "bar",
      },
      "man": Array [
        "foo.1.gz",
      ],
    },
  },
  Object {
    "force": false,
    "manTarget": "/usr/local/share/man",
    "path": "/usr/local/lib/node_modules/@foo/bar",
    "pkg": Object {
      "bin": Object {
        "foo": "bar",
      },
      "man": Array [
        "foo.1.gz",
      ],
    },
  },
]
`

exports[`test/index.js TAP posix global top force=false > unscoped pkg 1`] = `
Array [
  Object {
    "binTarget": "/usr/local/bin",
    "force": false,
    "path": "/usr/local/lib/node_modules/foo",
    "pkg": Object {
      "bin": Object {
        "foo": "bar",
      },
      "man": Array [
        "foo.1.gz",
      ],
    },
  },
  Object {
    "force": false,
    "manTarget": "/usr/local/share/man",
    "path": "/usr/local/lib/node_modules/foo",
    "pkg": Object {
      "bin": Object {
        "foo": "bar",
      },
      "man": Array [
        "foo.1.gz",
      ],
    },
  },
]
`

exports[`test/index.js TAP posix global top force=true > scoped pkg 1`] = `
Array [
  Object {
    "binTarget": "/usr/local/bin",
    "force": true,
    "path": "/usr/local/lib/node_modules/@foo/bar",
    "pkg": Object {
      "bin": Object {
        "foo": "bar",
      },
      "man": Array [
        "foo.1.gz",
      ],
    },
  },
  Object {
    "force": true,
    "manTarget": "/usr/local/share/man",
    "path": "/usr/local/lib/node_modules/@foo/bar",
    "pkg": Object {
      "bin": Object {
        "foo": "bar",
      },
      "man": Array [
        "foo.1.gz",
      ],
    },
  },
]
`

exports[`test/index.js TAP posix global top force=true > unscoped pkg 1`] = `
Array [
  Object {
    "binTarget": "/usr/local/bin",
    "force": true,
    "path": "/usr/local/lib/node_modules/foo",
    "pkg": Object {
      "bin": Object {
        "foo": "bar",
      },
      "man": Array [
        "foo.1.gz",
      ],
    },
  },
  Object {
    "force": true,
    "manTarget": "/usr/local/share/man",
    "path": "/usr/local/lib/node_modules/foo",
    "pkg": Object {
      "bin": Object {
        "foo": "bar",
      },
      "man": Array [
        "foo.1.gz",
      ],
    },
  },
]
`

exports[`test/index.js TAP posix local nested force=false > scoped pkg 1`] = `
Array [
  Object {
    "binTarget": "/path/to/project/node_modules/.bin",
    "force": true,
    "path": "/path/to/project/node_modules/@foo/bar",
    "pkg": Object {
      "bin": Object {
        "foo": "bar",
      },
      "man": Array [
        "foo.1.gz",
      ],
    },
  },
  null,
]
`

exports[`test/index.js TAP posix local nested force=false > unscoped pkg 1`] = `
Array [
  Object {
    "binTarget": "/path/to/project/node_modules/.bin",
    "force": true,
    "path": "/path/to/project/node_modules/foo",
    "pkg": Object {
      "bin": Object {
        "foo": "bar",
      },
      "man": Array [
        "foo.1.gz",
      ],
    },
  },
  null,
]
`

exports[`test/index.js TAP posix local nested force=true > scoped pkg 1`] = `
Array [
  Object {
    "binTarget": "/path/to/project/node_modules/.bin",
    "force": true,
    "path": "/path/to/project/node_modules/@foo/bar",
    "pkg": Object {
      "bin": Object {
        "foo": "bar",
      },
      "man": Array [
        "foo.1.gz",
      ],
    },
  },
  null,
]
`

exports[`test/index.js TAP posix local nested force=true > unscoped pkg 1`] = `
Array [
  Object {
    "binTarget": "/path/to/project/node_modules/.bin",
    "force": true,
    "path": "/path/to/project/node_modules/foo",
    "pkg": Object {
      "bin": Object {
        "foo": "bar",
      },
      "man": Array [
        "foo.1.gz",
      ],
    },
  },
  null,
]
`

exports[`test/index.js TAP posix local top force=false > scoped pkg 1`] = `
undefined
`

exports[`test/index.js TAP posix local top force=false > unscoped pkg 1`] = `
undefined
`

exports[`test/index.js TAP posix local top force=true > scoped pkg 1`] = `
undefined
`

exports[`test/index.js TAP posix local top force=true > unscoped pkg 1`] = `
undefined
`

exports[`test/index.js TAP win32 global nested force=false > scoped pkg 1`] = `
Array [
  Object {
    "binTarget": "c:\\\\path\\\\to\\\\prefix\\\\node_modules\\\\xyz\\\\node_modules/.bin",
    "force": true,
    "path": "c:\\\\path\\\\to\\\\prefix\\\\node_modules\\\\xyz\\\\node_modules\\\\@foo/bar",
    "pkg": Object {
      "bin": Object {
        "foo": "bar",
      },
      "man": Array [
        "foo.1.gz",
      ],
    },
  },
  null,
]
`

exports[`test/index.js TAP win32 global nested force=false > unscoped pkg 1`] = `
Array [
  Object {
    "binTarget": "c:\\\\path\\\\to\\\\prefix\\\\node_modules\\\\xyz\\\\node_modules/.bin",
    "force": true,
    "path": "c:\\\\path\\\\to\\\\prefix\\\\node_modules\\\\xyz\\\\node_modules\\\\foo",
    "pkg": Object {
      "bin": Object {
        "foo": "bar",
      },
      "man": Array [
        "foo.1.gz",
      ],
    },
  },
  null,
]
`

exports[`test/index.js TAP win32 global nested force=true > scoped pkg 1`] = `
Array [
  Object {
    "binTarget": "c:\\\\path\\\\to\\\\prefix\\\\node_modules\\\\xyz\\\\node_modules/.bin",
    "force": true,
    "path": "c:\\\\path\\\\to\\\\prefix\\\\node_modules\\\\xyz\\\\node_modules\\\\@foo/bar",
    "pkg": Object {
      "bin": Object {
        "foo": "bar",
      },
      "man": Array [
        "foo.1.gz",
      ],
    },
  },
  null,
]
`

exports[`test/index.js TAP win32 global nested force=true > unscoped pkg 1`] = `
Array [
  Object {
    "binTarget": "c:\\\\path\\\\to\\\\prefix\\\\node_modules\\\\xyz\\\\node_modules/.bin",
    "force": true,
    "path": "c:\\\\path\\\\to\\\\prefix\\\\node_modules\\\\xyz\\\\node_modules\\\\foo",
    "pkg": Object {
      "bin": Object {
        "foo": "bar",
      },
      "man": Array [
        "foo.1.gz",
      ],
    },
  },
  null,
]
`

exports[`test/index.js TAP win32 global top force=false > scoped pkg 1`] = `
Array [
  Object {
    "binTarget": "c:\\\\path\\\\to\\\\prefix",
    "force": false,
    "path": "c:\\\\path\\\\to\\\\prefix\\\\node_modules\\\\@foo/bar",
    "pkg": Object {
      "bin": Object {
        "foo": "bar",
      },
      "man": Array [
        "foo.1.gz",
      ],
    },
  },
  null,
]
`

exports[`test/index.js TAP win32 global top force=false > unscoped pkg 1`] = `
Array [
  Object {
    "binTarget": "c:\\\\path\\\\to\\\\prefix",
    "force": false,
    "path": "c:\\\\path\\\\to\\\\prefix\\\\node_modules\\\\foo",
    "pkg": Object {
      "bin": Object {
        "foo": "bar",
      },
      "man": Array [
        "foo.1.gz",
      ],
    },
  },
  null,
]
`

exports[`test/index.js TAP win32 global top force=true > scoped pkg 1`] = `
Array [
  Object {
    "binTarget": "c:\\\\path\\\\to\\\\prefix",
    "force": true,
    "path": "c:\\\\path\\\\to\\\\prefix\\\\node_modules\\\\@foo/bar",
    "pkg": Object {
      "bin": Object {
        "foo": "bar",
      },
      "man": Array [
        "foo.1.gz",
      ],
    },
  },
  null,
]
`

exports[`test/index.js TAP win32 global top force=true > unscoped pkg 1`] = `
Array [
  Object {
    "binTarget": "c:\\\\path\\\\to\\\\prefix",
    "force": true,
    "path": "c:\\\\path\\\\to\\\\prefix\\\\node_modules\\\\foo",
    "pkg": Object {
      "bin": Object {
        "foo": "bar",
      },
      "man": Array [
        "foo.1.gz",
      ],
    },
  },
  null,
]
`

exports[`test/index.js TAP win32 local nested force=false > scoped pkg 1`] = `
Array [
  Object {
    "binTarget": "c:\\\\path\\\\to\\\\project\\\\node_modules/.bin",
    "force": true,
    "path": "c:\\\\path\\\\to\\\\project\\\\node_modules\\\\@foo/bar",
    "pkg": Object {
      "bin": Object {
        "foo": "bar",
      },
      "man": Array [
        "foo.1.gz",
      ],
    },
  },
  null,
]
`

exports[`test/index.js TAP win32 local nested force=false > unscoped pkg 1`] = `
Array [
  Object {
    "binTarget": "c:\\\\path\\\\to\\\\project\\\\node_modules/.bin",
    "force": true,
    "path": "c:\\\\path\\\\to\\\\project\\\\node_modules\\\\foo",
    "pkg": Object {
      "bin": Object {
        "foo": "bar",
      },
      "man": Array [
        "foo.1.gz",
      ],
    },
  },
  null,
]
`

exports[`test/index.js TAP win32 local nested force=true > scoped pkg 1`] = `
Array [
  Object {
    "binTarget": "c:\\\\path\\\\to\\\\project\\\\node_modules/.bin",
    "force": true,
    "path": "c:\\\\path\\\\to\\\\project\\\\node_modules\\\\@foo/bar",
    "pkg": Object {
      "bin": Object {
        "foo": "bar",
      },
      "man": Array [
        "foo.1.gz",
      ],
    },
  },
  null,
]
`

exports[`test/index.js TAP win32 local nested force=true > unscoped pkg 1`] = `
Array [
  Object {
    "binTarget": "c:\\\\path\\\\to\\\\project\\\\node_modules/.bin",
    "force": true,
    "path": "c:\\\\path\\\\to\\\\project\\\\node_modules\\\\foo",
    "pkg": Object {
      "bin": Object {
        "foo": "bar",
      },
      "man": Array [
        "foo.1.gz",
      ],
    },
  },
  null,
]
`

exports[`test/index.js TAP win32 local top force=false > scoped pkg 1`] = `
undefined
`

exports[`test/index.js TAP win32 local top force=false > unscoped pkg 1`] = `
undefined
`

exports[`test/index.js TAP win32 local top force=true > scoped pkg 1`] = `
undefined
`

exports[`test/index.js TAP win32 local top force=true > unscoped pkg 1`] = `
undefined
`
