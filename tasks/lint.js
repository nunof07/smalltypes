import gulp from 'gulp';
import tslint from 'gulp-tslint';
import { Linter } from 'tslint';

/**
 * Lint source code.
 * @param {Gulp} gulp 
 * @param {IGulpPlugins} plugins 
 * @param {object} config 
 * @returns {function}
 */
export default function lint(config) {
    const options = Object.assign(
        { program: Linter.createProgram('./tsconfig.json') },
        config.tslint.options
    );

    return gulp.src(config.paths.src)
        .pipe(tslint(options))
        .pipe(tslint.report(config.tslint.report));
}