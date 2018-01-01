import gulp from 'gulp';
import mocha from 'gulp-mocha';

/**
 * Run unit tests.
 * @param {object} config 
 * @returns {NodeJS.ReadWriteStream}
 */
export function test(config) {
    return gulp.src(config.paths.test)
        .pipe(mocha(config.mocha))
        .on('error', () => {
            this.emit('end');
        });
}