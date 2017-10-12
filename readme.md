# Pong

Pong game made with [Phaser](http://phaser.io/). Written in [TypeScript](https://www.typescriptlang.org/).

## Credits

- Music: [At Night (PSG Version)](https://opengameart.org/content/at-night-psg-version-0) by [Snabisch](https://www.facebook.com/SnabischCreator?ref=bookmarks). License: [CC-BY 3.0](https://creativecommons.org/licenses/by/3.0/).
- Font: [Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P) by CodeMan38. License: [Open Font License](http://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL_web).

### Art tools used

- [Bitmap Font Generator](http://www.angelcode.com/products/bmfont/): to create bitmap fonts from TrueType.
- [Bfxr](http://www.bfxr.net/): to create sound effects.
- [Piskel](http://www.piskelapp.com/): to draw sprites.

## Setup

- Clone repo.
- Install npm.
- Run `npm install` to install dependencies.

## Build/Run

- Run `gulp`. Default task will build, start server and watch for changes.
- Open game in browser (check console for which URL to use).

The output is transformed with [Babel](https://babeljs.io/) and bundled with [Browserify](http://browserify.org/).

### Config

See:

- `gulp.config.json`.
- `.babelrc`.
- `tsconfig.json`.

#### Module resolution

In source code we use `@base/`, `@core/`, etc. to import modules without having to use relative paths.

We need to tell both TypeScript and Babel how to resolve these paths.

For TypeScript:

- Open file `tsconfig.json`.
- Configure variables `compilerOptions.baseUrl` and `compilerOptions.paths`.

For Babel:

- Open file `.babelrc`.
- Configure variables `root` and `alias` for `module-resolver` under `plugins`.