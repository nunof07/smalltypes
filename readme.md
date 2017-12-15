# SmallTypes

[![Build Status](https://travis-ci.org/nunof07/smalltypes.svg?branch=master)](https://travis-ci.org/nunof07/smalltypes)
[![codecov](https://codecov.io/gh/nunof07/smalltypes/branch/master/graph/badge.svg)](https://codecov.io/gh/nunof07/smalltypes)
[![Maintainability](https://api.codeclimate.com/v1/badges/21adf54dc86017e175d9/maintainability)](https://codeclimate.com/github/nunof07/smalltypes/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/21adf54dc86017e175d9/test_coverage)](https://codeclimate.com/github/nunof07/smalltypes/test_coverage)
[![bitHound Overall Score](https://www.bithound.io/github/nunof07/smalltypes/badges/score.svg)](https://www.bithound.io/github/nunof07/smalltypes)
[![Dependencies](https://david-dm.org/nunof07/smalltypes.svg)](https://david-dm.org/nunof07/smalltypes)
[![Development Dependencies](https://david-dm.org/nunof07/smalltypes/dev-status.svg)](https://david-dm.org/nunof07/smalltypes?type=dev)
[![Lines of Code](https://tokei.rs/b1/github/nunof07/smalltypes)](https://github.com/Aaronepower/tokei)
[![Files](https://tokei.rs/b1/github/nunof07/smalltypes?category=files)](https://github.com/Aaronepower/tokei)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[![NPM](https://nodei.co/npm/smalltypes.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/smalltypes/)

Object-oriented utility framework written in [TypeScript](https://www.typescriptlang.org/). Heavily inspired by [Cactoos](https://github.com/yegor256/cactoos).

**Warning**: very early version. Not usable for production.

## Contribute

### Setup

- Clone repo.
- Install npm.
- Run `npm install` to install dependencies.

### Watch/build

- Start: `gulp` or `npm start`. Default task will lint, build, test and watch for changes.
- Lint: `gulp tslint` or `npm run lint`.
- Test: `gulp test` or `npm run test`.
- Test coverage: `npm run coverage`.

### Config

See files in root.

### Development notes

#### Module resolution

Use absolute paths to import modules. Inform TypeScript and Babel how to resolve these paths.

For TypeScript:

- Open file `tsconfig.json`.
- Configure variables `compilerOptions.baseUrl` and `compilerOptions.paths`.

For Babel:

- Open file `.babelrc`.
- Configure variables `root` and `alias` for `module-resolver` under `plugins`.

More info on [Using absolute paths with TypeScript, Babel and Browserify](http://www.broculos.net/2017/10/using-absolute-paths-with-typescript.html#.WfDAmWhSyUk).

## Main development dependencies

- Language: [TypeScript](http://www.typescriptlang.org/).
- Tasks: [gulp](https://gulpjs.com/).
- Build: [Browserify](http://browserify.org/), [Babel](https://babeljs.io/)
- Tests: [Mocha](https://mochajs.org), [Chai](http://chaijs.com/), [Istanbul](https://istanbul.js.org/).
- Lint: [TSLint](https://palantir.github.io/tslint/).
