# Changelog

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
