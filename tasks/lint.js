import gulp from 'gulp';
import cache from 'gulp-cached';
import tslint from 'gulp-tslint';
import { Linter } from 'tslint';

/**
 * Lint source code.
 * @param {object} config 
 * @returns {NodeJS.ReadWriteStream}
 */
export function lint(config) {
    const options = Object.assign(
        { program: Linter.createProgram('./tsconfig.json') },
        config.tslint.options
    );

    return gulp.src(config.paths.src)
        .pipe(cache('lint'))
        .pipe(tslint(options))
        .pipe(tslint.report(config.tslint.report));
}