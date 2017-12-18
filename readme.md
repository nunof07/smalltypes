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

## Getting started

### Installing

`smalltypes` is available on [npm](https://www.npmjs.com/package/smalltypes). You can install it using:

```bash
npm install --save smalltypes
```

### Documentation

- [API documentation](https://nunof07.github.io/smalltypes/).

## Development

### Requirements

- [Node](https://nodejs.org/en/).

### Setup

Clone the repository:

```bash
git clone https://github.com/nunof07/smalltypes.git
```

Change the working directoy:

```bash
cd smalltypes
```

Install dependencies:

```bash
npm install
```

### Running

Main tasks:

- `npm start` or `gulp`: Default task will lint, build, test and watch for changes.
- `npm run build`: Build library and TypeScript declarations.
- `npm run coverage`: Test coverage report.
- `gulp documentation`: Generate API documentation.

## Built With

- Language: [TypeScript](http://www.typescriptlang.org/).
- Tasks: [gulp](https://gulpjs.com/).
- Build: [Browserify](http://browserify.org/), [TypeScript](http://www.typescriptlang.org/), [Babel](https://babeljs.io/).
- Tests: [Mocha](https://mochajs.org), [Chai](http://chaijs.com/), [Istanbul](https://istanbul.js.org/).
- Lint: [TSLint](https://palantir.github.io/tslint/).
- Code Integration: [Travis CI](https://travis-ci.org/), [Codecov](https://codecov.io/), [Code Climate](https://codeclimate.com/), [bitHound](https://www.bithound.io/).
