# SmallTypes

[![Build Status](https://travis-ci.org/nunof07/smalltypes.svg?branch=master)](https://travis-ci.org/nunof07/smalltypes) [![codecov](https://codecov.io/gh/nunof07/smalltypes/branch/master/graph/badge.svg)](https://codecov.io/gh/nunof07/smalltypes)

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
