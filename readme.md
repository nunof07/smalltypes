# SmallTypes

**DEPRECATED**: This package is no longer maintained.

The goal of this package was to create a pure object-oriented generic utility library (no static methods, no code in constructors, no class inheritance, etc.).

While achievable, the limitations of the JavaScript/TypeScript language make this goal very cumbersome to reach and I feel the performance penalties and extra verbosity from this approach in this context is not justified in the end.

---

[![Build Status](https://travis-ci.org/nunof07/smalltypes.svg?branch=master)](https://travis-ci.org/nunof07/smalltypes)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

[![codecov](https://codecov.io/gh/nunof07/smalltypes/branch/master/graph/badge.svg)](https://codecov.io/gh/nunof07/smalltypes)
[![Maintainability](https://api.codeclimate.com/v1/badges/21adf54dc86017e175d9/maintainability)](https://codeclimate.com/github/nunof07/smalltypes/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/21adf54dc86017e175d9/test_coverage)](https://codeclimate.com/github/nunof07/smalltypes/test_coverage)
[![bitHound Overall Score](https://www.bithound.io/github/nunof07/smalltypes/badges/score.svg)](https://www.bithound.io/github/nunof07/smalltypes)

[![Dependencies](https://david-dm.org/nunof07/smalltypes.svg)](https://david-dm.org/nunof07/smalltypes)
[![Development Dependencies](https://david-dm.org/nunof07/smalltypes/dev-status.svg)](https://david-dm.org/nunof07/smalltypes?type=dev)
[![Greenkeeper badge](https://badges.greenkeeper.io/nunof07/smalltypes.svg)](https://greenkeeper.io/)

[![Lines of Code](https://tokei.rs/b1/github/nunof07/smalltypes)](https://github.com/Aaronepower/tokei)
[![Files](https://tokei.rs/b1/github/nunof07/smalltypes?category=files)](https://github.com/Aaronepower/tokei)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[![NPM](https://nodei.co/npm/smalltypes.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/smalltypes/)

Object-oriented utility framework written in [TypeScript](https://www.typescriptlang.org/). Heavily inspired by [Cactoos](https://github.com/yegor256/cactoos).

## Getting started

### Installing

`smalltypes` is available on [npm](https://www.npmjs.com/package/smalltypes). You can install it using:

```bash
npm install --save smalltypes
```

### Documentation

- [API documentation](https://nunof07.github.io/smalltypes/).

### Usage examples

Using random numbers, mapping values, calculating sum, rounding result, and caching value.

```typescript
const randomFloat: Scalar<number> =
    new RandomizedFloat(// randomized floating point number
        new ParkMillerRandom(), // random number generator
        1,
        10
    );
new Cached(// make sure value is only computed once
    new Rounded(// round number to desired precision
        new Sum(// calculate total from iterable of numbers
            new Mapped(// map each item in an iterable to a different value
                [
                    { id: 1, value: randomFloat.value() },
                    { id: 2, value: randomFloat.value() },
                    { id: 3, value: randomFloat.value() },
                    { id: 4, value: randomFloat.value() },
                    { id: 5, value: randomFloat.value() }
                ],
                (item: { readonly value: number }): number =>
                    item.value // only want the value from each item
            )
        ),
        3
    )
).value() // calculate and retrieve value
```

Filtering, limiting, and mapping collection. Comparing two collections for equality.

```typescript
new EqualIterables(// compare iterables for equality
    ['Hello', 'World', '!'],
    new Mapped(// map each item in an iterable to a different value
        new Limited(// limit an iterable to a certain amount of items
            new Filtered(// filter an iterable to a subset of items that match callback
                [
                    { id: 1, name: 'Hello', age: 21 },
                    { id: 2, name: 'World', age: 22 },
                    { id: 3, name: '!', age: 23 },
                    { id: 4, name: 'Not', age: 16 }
                ],
                (item: { readonly age: number }): boolean =>
                    item.age > 20 // only get items with age greater than 20
            ),
            3
        ),
        (item: { readonly name: string }): string =>
            item.name // only want the name from each item
    )
).value() // calculate and retrieve value
```

## Contributing

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

- `npm run dev`: Lint, test, and watch for changes.
- `npm run build`: Build library and documentation.
- `npm run coverage`: Test coverage report.
- `npm run commit`: Adds and commits all current changes.

Execute `npm run info` for information about all available tasks.

### Project structure

- `dist`: Built files.
- `docs`: API documentation.
- `src/main`: Main source code of the library.
- `src/test`: Unit tests.
- `tasks`: Source code for build tasks and static integration.
- `typings`: Manually specified TypeScript definition files.

**Note:** the Babel configuration at `.babelrc` is mainly used for gulp. For the Babel configuration used to build the library see how the Babel Rollup plugin is setup.

## Built With

- Language: [TypeScript](http://www.typescriptlang.org/).
- Tasks: [gulp](https://gulpjs.com/).
- Build: [rollup.js](https://rollupjs.org/), [TypeScript](http://www.typescriptlang.org/), [Babel](https://babeljs.io/).
- Tests: [Mocha](https://mochajs.org), [Chai](http://chaijs.com/), [Istanbul](https://istanbul.js.org/).
- Lint: [TSLint](https://palantir.github.io/tslint/).
- Release: [semantic-release](https://github.com/semantic-release/semantic-release), [Commitizen](http://commitizen.github.io/cz-cli/).
- Dependencies: [Greenkeeper](https://greenkeeper.io/).
- Code Integration: [Travis CI](https://travis-ci.org/), [Codecov](https://codecov.io/), [Code Climate](https://codeclimate.com/), [bitHound](https://www.bithound.io/).
