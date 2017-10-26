# Pong

Pong game made with [Phaser](http://phaser.io/). Written in [TypeScript](https://www.typescriptlang.org/). Playground to test various packages.

## Setup

- Clone repo.
- Install npm.
- Run `npm install` to install dependencies.

## Run/build

- Start: `gulp` or `npm start`.
    - Default task will build, start server and watch for changes.
    - Open game in browser (check console for which URL to use).
- Lint: `gulp tslint` or `npm run lint`. Runs automatically with default task.
- Test: `gulp test` or `npm run test`. Runs automatically with default task.
- Test coverage: `npm run coverage`.

## Config

See files in root.

## Development notes

### Module resolution

Use absolute paths to import modules. Inform TypeScript and Babel how to resolve these paths.

For TypeScript:

- Open file `tsconfig.json`.
- Configure variables `compilerOptions.baseUrl` and `compilerOptions.paths`.

For Babel:

- Open file `.babelrc`.
- Configure variables `root` and `alias` for `module-resolver` under `plugins`.

More info on [Using absolute paths with TypeScript, Babel and Browserify](http://www.broculos.net/2017/10/using-absolute-paths-with-typescript.html#.WfDAmWhSyUk).

## Credits

### Development

- Game framework: [Phaser](http://phaser.io/).
- Language: [TypeScript](http://www.typescriptlang.org/).
- Tasks: [gulp](https://gulpjs.com/).
- Build: [Browserify](http://browserify.org/), [Babel](https://babeljs.io/)
- Tests: [Mocha](https://mochajs.org), [Chai](http://chaijs.com/), [Istanbul](https://istanbul.js.org/).
- Lint: [TSLint](https://palantir.github.io/tslint/).

### Art

- Music: [At Night (PSG Version)](https://opengameart.org/content/at-night-psg-version-0) by [Snabisch](https://www.facebook.com/SnabischCreator?ref=bookmarks). License: [CC-BY 3.0](https://creativecommons.org/licenses/by/3.0/).
- Font: [Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P) by CodeMan38. License: [Open Font License](http://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL_web).

#### Art tools

- [Bitmap Font Generator](http://www.angelcode.com/products/bmfont/): to create bitmap fonts from TrueType.
- [Bfxr](http://www.bfxr.net/): to create sound effects.
- [Piskel](http://www.piskelapp.com/): to draw sprites.
