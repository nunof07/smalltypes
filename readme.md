# SmallTypes

Object-oriented utility framework written in [TypeScript](https://www.typescriptlang.org/). Heavily inspired by [Cactoos](https://github.com/yegor256/cactoos).

**Warning**: very early version. Not usable for production.

## Contribute

### Setup

- Clone repo.
- Install npm.
- Run `npm install` to install dependencies.

### Watch/build

- Start: `gulp` or `npm start`.
    - Default task will build, start server and watch for changes.
    - Main file will automatically open in the browser.
- Lint: `gulp tslint` or `npm run lint`. Runs automatically with default task.
- Test: `gulp test` or `npm run test`. Runs automatically with default task.
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
