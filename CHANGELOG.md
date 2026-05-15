# Changelog

## [7.0.0](https://github.com/npm/bin-links/compare/v6.0.0...v7.0.0) (2026-05-15)
### ⚠️ BREAKING CHANGES
* `bin-links` now supports node `^22.22.2 || ^24.15.0 || >=26.0.0`
* template-oss-apply
* man pages listed in a package's `man` field are no longer linked into the system man path on global install. `man <pkg>` will no longer work for newly installed global packages. Use the package's own help facilities (e.g. `npm help <cmd>`) instead.
### Features
* [`0d66567`](https://github.com/npm/bin-links/commit/0d665679449b423191dc5cc424885c8c3e1876b5) [#172](https://github.com/npm/bin-links/pull/172) bump to new node engine range (@owlstronaut)
* [`c0aaffc`](https://github.com/npm/bin-links/commit/c0aaffcfb5107d4616f8e55d014d6033531dded0) [#172](https://github.com/npm/bin-links/pull/172) template-oss-apply (@owlstronaut)
* [`2612e67`](https://github.com/npm/bin-links/commit/2612e6734ecec2401c14b55da6e59b947eac7697) [#163](https://github.com/npm/bin-links/pull/163) stop installing man pages for global installs (@owlstronaut)
### Bug Fixes
* [`ab6bf0d`](https://github.com/npm/bin-links/commit/ab6bf0dafe2b054fb4558b28be2e5fc21afe76dc) [#173](https://github.com/npm/bin-links/pull/173) use directory-boundary checks for bin ownership validation (@owlstronaut)
* [`6049f08`](https://github.com/npm/bin-links/commit/6049f089529ee38fd060a68522e75f7819de1a80) [#171](https://github.com/npm/bin-links/pull/171) don't call `chmod` if the bin already has execution permission (@felipecrs)
### Dependencies
* [`af7684c`](https://github.com/npm/bin-links/commit/af7684cd2a34b7058d8b8b60ef113bb0c7e07273) [#172](https://github.com/npm/bin-links/pull/172) `write-file-atomic@8.0.0`
* [`a09e74a`](https://github.com/npm/bin-links/commit/a09e74a21009ce3c373497aad0ce1091484a1446) [#172](https://github.com/npm/bin-links/pull/172) `read-cmd-shim@7.0.0`
* [`93ec1ba`](https://github.com/npm/bin-links/commit/93ec1ba71678d68e8af2a29ade24835defc22330) [#172](https://github.com/npm/bin-links/pull/172) `proc-log@7.0.0`
* [`5961e1f`](https://github.com/npm/bin-links/commit/5961e1ff6829449bd91118c210c9cf7a4e202986) [#172](https://github.com/npm/bin-links/pull/172) `npm-normalize-package-bin@6.0.0`
* [`47c5a72`](https://github.com/npm/bin-links/commit/47c5a72c26e6b060675a5663650134bbea4bdcba) [#172](https://github.com/npm/bin-links/pull/172) `cmd-shim@9.0.0`
### Chores
* [`0919da0`](https://github.com/npm/bin-links/commit/0919da03914d9b1ceac4cde221f56b251195eb0b) [#172](https://github.com/npm/bin-links/pull/172) template-oss-apply (@owlstronaut)
* [`897720a`](https://github.com/npm/bin-links/commit/897720af555208f1c4e7e34b8ee0b826bfc5f0bc) [#172](https://github.com/npm/bin-links/pull/172) bumping @npmcli/template-oss from 4.30.0 to 5.1.0 (@owlstronaut)
* [`0ff0be3`](https://github.com/npm/bin-links/commit/0ff0be3c62c49bbd2f283aa6d496a60744df5b1f) [#175](https://github.com/npm/bin-links/pull/175) template-oss-apply (@owlstronaut)
* [`f02cef9`](https://github.com/npm/bin-links/commit/f02cef9db1e3bf948f790620396ebe2c7402347d) [#163](https://github.com/npm/bin-links/pull/163) template-oss-apply (@owlstronaut)
* [`88eda3f`](https://github.com/npm/bin-links/commit/88eda3fbc7e0a077330e2132276b2e62cd374ed9) bump @npmcli/eslint-config from 5.1.0 to 6.0.0 (#157) (@dependabot[bot])
* [`0f07dcd`](https://github.com/npm/bin-links/commit/0f07dcd53e03c4624dd9d1901d750bae37f0216f) [#161](https://github.com/npm/bin-links/pull/161) bump @npmcli/template-oss from 4.28.1 to 4.29.0 (#161) (@dependabot[bot], @npm-cli-bot)

## [6.0.0](https://github.com/npm/bin-links/compare/v5.0.0...v6.0.0) (2025-10-23)
### ⚠️ BREAKING CHANGES
* `bin-links` now supports node `^20.17.0 || >=22.9.0`
### Bug Fixes
* [`c9a1234`](https://github.com/npm/bin-links/commit/c9a1234407b3d05d968a55f83dfcc7732081b846) [#155](https://github.com/npm/bin-links/pull/155) align to npm 11 node engine range (@owlstronaut)
### Dependencies
* [`efcd20a`](https://github.com/npm/bin-links/commit/efcd20a0cab2d0f4bb2a03201ee76e65b79695b8) [#155](https://github.com/npm/bin-links/pull/155) `write-file-atomic@7.0.0`
* [`420e37e`](https://github.com/npm/bin-links/commit/420e37e979318c016811327f57f574f7e41ce2de) [#155](https://github.com/npm/bin-links/pull/155) `read-cmd-shim@6.0.0`
* [`7c3e533`](https://github.com/npm/bin-links/commit/7c3e5330565810ef07b9f8c1a1f3c67516a18015) [#155](https://github.com/npm/bin-links/pull/155) `npm-normalize-package-bin@5.0.0`
* [`cd743b9`](https://github.com/npm/bin-links/commit/cd743b9fd3fe7d179e6f9ffbcbd464e6976fa301) [#155](https://github.com/npm/bin-links/pull/155) `proc-log@6.0.0`
* [`90efc68`](https://github.com/npm/bin-links/commit/90efc6890849e93d1148b1d336d233771490e92e) [#155](https://github.com/npm/bin-links/pull/155) `cmd-shim@8.0.0`
### Chores
* [`4263d38`](https://github.com/npm/bin-links/commit/4263d38388b607125f47d4cba96f0e0f782679a3) [#155](https://github.com/npm/bin-links/pull/155) template-oss-apply (@owlstronaut)
* [`d4631bf`](https://github.com/npm/bin-links/commit/d4631bfcea005b5779f947accda06ad84d712ea5) [#142](https://github.com/npm/bin-links/pull/142) postinstall workflow updates (#142) (@owlstronaut)
* [`6aa852d`](https://github.com/npm/bin-links/commit/6aa852d6ad1a910e4c75ce0d3dec2a7ce594e37c) [#148](https://github.com/npm/bin-links/pull/148) bump @npmcli/template-oss from 4.26.0 to 4.27.1 (#148) (@dependabot[bot], @npm-cli-bot)

## [5.0.0](https://github.com/npm/bin-links/compare/v4.0.4...v5.0.0) (2024-09-25)
### ⚠️ BREAKING CHANGES
* `bin-links` now supports node `^18.17.0 || >=20.5.0`
### Features
* [`9648a7d`](https://github.com/npm/bin-links/commit/9648a7d49589be1c991ddc3c2842c461e2a017cb) [#121](https://github.com/npm/bin-links/pull/121) ignore EACCES on linking (@antongolub)
### Bug Fixes
* [`013be50`](https://github.com/npm/bin-links/commit/013be506a28d014e0db023457e084789f414b287) [#139](https://github.com/npm/bin-links/pull/139) align to npm 10 node engine range (@reggi)
### Dependencies
* [`a08d09b`](https://github.com/npm/bin-links/commit/a08d09b7e823a8ca321bcab3f6168bdd8057e3cd) [#139](https://github.com/npm/bin-links/pull/139) `write-file-atomic@6.0.0`
* [`7d90298`](https://github.com/npm/bin-links/commit/7d9029869e4759dcaa5f90667c62840898c07c6a) [#139](https://github.com/npm/bin-links/pull/139) `read-cmd-shim@5.0.0`
* [`0c915a3`](https://github.com/npm/bin-links/commit/0c915a3daf8548f7b9d8576ff53cd92db575eeec) [#139](https://github.com/npm/bin-links/pull/139) `proc-log@5.0.0`
* [`502417c`](https://github.com/npm/bin-links/commit/502417c398b67175d9961f954eb6e54388d4559d) [#139](https://github.com/npm/bin-links/pull/139) `npm-normalize-package-bin@4.0.0`
* [`722452a`](https://github.com/npm/bin-links/commit/722452a3276803217ffd866cd5d65383d74c4591) [#139](https://github.com/npm/bin-links/pull/139) `cmd-shim@7.0.0`
* [`af7e347`](https://github.com/npm/bin-links/commit/af7e347bbf2346741500df4906c948f5f02e19fb) [#121](https://github.com/npm/bin-links/pull/121) add proc-log
### Chores
* [`463c32f`](https://github.com/npm/bin-links/commit/463c32fed8b131c9cea5488fcfe9102200cbf6e9) [#139](https://github.com/npm/bin-links/pull/139) run template-oss-apply (@reggi)
* [`ba52600`](https://github.com/npm/bin-links/commit/ba52600cf31a9bfc9db983e6fc622291a61c985a) [#133](https://github.com/npm/bin-links/pull/133) bump @npmcli/eslint-config from 4.0.5 to 5.0.0 (@dependabot[bot])
* [`fdf22ae`](https://github.com/npm/bin-links/commit/fdf22ae617daa5ad6516c14def9e291f2367542c) [#134](https://github.com/npm/bin-links/pull/134) postinstall for dependabot template-oss PR (@hashtagchris)
* [`d949f7d`](https://github.com/npm/bin-links/commit/d949f7de78aa0d58e0cf228f816215678878278c) [#134](https://github.com/npm/bin-links/pull/134) bump @npmcli/template-oss from 4.23.1 to 4.23.3 (@dependabot[bot])

## [4.0.4](https://github.com/npm/bin-links/compare/v4.0.3...v4.0.4) (2024-05-04)

### Bug Fixes

* [`100a4b7`](https://github.com/npm/bin-links/commit/100a4b73111065aebc5284f5f7060c9665c4279a) [#117](https://github.com/npm/bin-links/pull/117) linting: no-unused-vars (@lukekarrys)

### Chores

* [`e955437`](https://github.com/npm/bin-links/commit/e955437eef356ea8edb344448086a23a8fe38f03) [#117](https://github.com/npm/bin-links/pull/117) bump @npmcli/template-oss to 4.22.0 (@lukekarrys)
* [`b602aca`](https://github.com/npm/bin-links/commit/b602acab28889793a96b06dedc1c66d225223999) [#117](https://github.com/npm/bin-links/pull/117) postinstall for dependabot template-oss PR (@lukekarrys)
* [`955cc34`](https://github.com/npm/bin-links/commit/955cc3407ddcb579ef8da2d4247103c68972fb52) [#116](https://github.com/npm/bin-links/pull/116) bump @npmcli/template-oss from 4.21.3 to 4.21.4 (@dependabot[bot])

## [4.0.3](https://github.com/npm/bin-links/compare/v4.0.2...v4.0.3) (2023-10-12)

### Bug Fixes

* [`af17744`](https://github.com/npm/bin-links/commit/af1774455f0dc342840ebe6b8dd5ee946dcda5e2) [#100](https://github.com/npm/bin-links/pull/100) promisify/cleanup link-mans and simplify regex (#100) (@wraithgar)

## [4.0.2](https://github.com/npm/bin-links/compare/v4.0.1...v4.0.2) (2023-07-11)

### Bug Fixes

* [`08f8981`](https://github.com/npm/bin-links/commit/08f898114accd24f70714a6a5b253cc93f91e509) [#80](https://github.com/npm/bin-links/pull/80) don’t try to chmod unlinked files (#80) (@remcohaszing)

## [4.0.1](https://github.com/npm/bin-links/compare/v4.0.0...v4.0.1) (2022-10-17)

### Dependencies

* [`cf738fb`](https://github.com/npm/bin-links/commit/cf738fb3ec95539fe7c81f2508ba34f4662e9bc2) [#62](https://github.com/npm/bin-links/pull/62) bump read-cmd-shim from 3.0.1 to 4.0.0
* [`61717bf`](https://github.com/npm/bin-links/commit/61717bfe2f56b71b68febcc10980462b7dac72a0) [#64](https://github.com/npm/bin-links/pull/64) bump write-file-atomic from 4.0.2 to 5.0.0
* [`d26ec29`](https://github.com/npm/bin-links/commit/d26ec2945571fc7f9b27416c0f8de201d0ca0df9) [#61](https://github.com/npm/bin-links/pull/61) bump npm-normalize-package-bin from 2.0.0 to 3.0.0

## [4.0.0](https://github.com/npm/bin-links/compare/v3.0.3...v4.0.0) (2022-10-13)

### ⚠️ BREAKING CHANGES

* this module no longer attempts to change file ownership automatically
* `bin-links` is now compatible with the following semver range for node: `^14.17.0 || ^16.13.0 || >=18.0.0`

### Features

* [`4f4c58c`](https://github.com/npm/bin-links/commit/4f4c58cd30acac8e26f76f5e0e534b94f0e353db) [#59](https://github.com/npm/bin-links/pull/59) do not alter file ownership (#59) (@nlf)
* [`36b2668`](https://github.com/npm/bin-links/commit/36b2668aad3495f256b392b2ba9dd41487e72b41) [#52](https://github.com/npm/bin-links/pull/52) postinstall for dependabot template-oss PR (@lukekarrys)

## [3.0.3](https://github.com/npm/bin-links/compare/v3.0.2...v3.0.3) (2022-08-23)


### Dependencies

* bump npm-normalize-package-bin from 1.0.1 to 2.0.0 ([#50](https://github.com/npm/bin-links/issues/50)) ([3ffe1e9](https://github.com/npm/bin-links/commit/3ffe1e9192575bebaf5ec0860fa2f90ca03ba3fe))

## [3.0.2](https://github.com/npm/bin-links/compare/v3.0.1...v3.0.2) (2022-08-11)


### Bug Fixes

* linting ([#48](https://github.com/npm/bin-links/issues/48)) ([163f021](https://github.com/npm/bin-links/commit/163f021115b7d724759ab7bdd878aabc2b5a94dd))

### [3.0.1](https://github.com/npm/bin-links/compare/v3.0.0...v3.0.1) (2022-04-05)


### Bug Fixes

* remove unsafe regex ([5d01244](https://github.com/npm/bin-links/commit/5d01244a178488b3e110b967a81e5c2349316bb3))
* replace deprecated String.prototype.substr() ([#38](https://github.com/npm/bin-links/issues/38)) ([56dbfa0](https://github.com/npm/bin-links/commit/56dbfa06ee1efc9224fa7e8b8cab71643feff664))


### Dependencies

* bump cmd-shim from 4.1.0 to 5.0.0 ([#39](https://github.com/npm/bin-links/issues/39)) ([24a1f3c](https://github.com/npm/bin-links/commit/24a1f3cfb5b98a9e58ff59c0627877a20762a7ed))
* bump read-cmd-shim from 2.0.0 to 3.0.0 ([#40](https://github.com/npm/bin-links/issues/40)) ([36a652f](https://github.com/npm/bin-links/commit/36a652f50c09c88447893305a8ed9ec2c2f27b85))

## [3.0.0](https://www.github.com/npm/bin-links/compare/v2.3.0...v3.0.0) (2022-01-18)


### ⚠ BREAKING CHANGES

* This drops support for node10 and non-LTS versions of node12 and node14

### Bug Fixes

* template-oss ([#30](https://www.github.com/npm/bin-links/issues/30)) ([3a50664](https://www.github.com/npm/bin-links/commit/3a5066464dc3497be7aaa39a19444494c41bc9a9))


### dependencies

* write-file-atomic@4.0.0 ([#32](https://www.github.com/npm/bin-links/issues/32)) ([788d0ee](https://www.github.com/npm/bin-links/commit/788d0ee94841b20651d300acb4b1ca607192efcd))

## 2.0.0

* Rewrite to promisify and remove dependence on gentle-fs

<a name="1.1.7"></a>
## [1.1.7](https://github.com/npm/bin-links/compare/v1.1.6...v1.1.7) (2019-12-26)


### Bug Fixes

* resolve folder that is passed in ([0bbd303](https://github.com/npm/bin-links/commit/0bbd303))



<a name="1.1.6"></a>
## [1.1.6](https://github.com/npm/bin-links/compare/v1.1.5...v1.1.6) (2019-12-11)


### Bug Fixes

* prevent improper clobbering of man/bin links ([642cd18](https://github.com/npm/bin-links/commit/642cd18)), closes [#11](https://github.com/npm/bin-links/issues/11) [#12](https://github.com/npm/bin-links/issues/12)



<a name="1.1.5"></a>
## [1.1.5](https://github.com/npm/bin-links/compare/v1.1.4...v1.1.5) (2019-12-10)


### Bug Fixes

* don't filter out ./ man references ([b3cfd2e](https://github.com/npm/bin-links/commit/b3cfd2e))



<a name="1.1.4"></a>
## [1.1.4](https://github.com/npm/bin-links/compare/v1.1.3...v1.1.4) (2019-12-09)


### Bug Fixes

* sanitize and validate bin and man link targets ([25a34f9](https://github.com/npm/bin-links/commit/25a34f9))



<a name="1.1.3"></a>
## [1.1.3](https://github.com/npm/bin-links/compare/v1.1.2...v1.1.3) (2019-08-14)



<a name="1.1.2"></a>
## [1.1.2](https://github.com/npm/bin-links/compare/v1.1.1...v1.1.2) (2018-03-22)


### Bug Fixes

* **linkMans:** return the promise! ([5eccc7f](https://github.com/npm/bin-links/commit/5eccc7f))



<a name="1.1.1"></a>
## [1.1.1](https://github.com/npm/bin-links/compare/v1.1.0...v1.1.1) (2018-03-07)


### Bug Fixes

* **shebangs:** only convert CR when doing CRLF -> LF ([#2](https://github.com/npm/bin-links/issues/2)) ([43bf857](https://github.com/npm/bin-links/commit/43bf857))



<a name="1.1.0"></a>
# [1.1.0](https://github.com/npm/bin-links/compare/v1.0.0...v1.1.0) (2017-11-20)


### Features

* **dos2unix:** Log the fact line endings are being changed upon install. ([e9f8a6f](https://github.com/npm/bin-links/commit/e9f8a6f))



<a name="1.0.0"></a>
# 1.0.0 (2017-10-07)


### Features

* **import:** initial extraction from npm ([6ed0bfb](https://github.com/npm/bin-links/commit/6ed0bfb))
* **initial commit:** README ([3fc9cf0](https://github.com/npm/bin-links/commit/3fc9cf0))
