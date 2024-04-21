# Changelog

## [4.0.4](https://github.com/npm/bin-links/compare/v4.0.3...v4.0.4) (2024-04-21)

### Chores

* [`485daf3`](https://github.com/npm/bin-links/commit/485daf373e659078e7514ae28df06d88959ab030) [#116](https://github.com/npm/bin-links/pull/116) postinstall for dependabot template-oss PR (@lukekarrys)
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
