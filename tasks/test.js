import gulp from 'gulp';
import mocha from 'gulp-mocha';

/**
 * Run unit tests.
 * @param {Gulp} gulp 
 * @param {IGulpPlugins} plugins 
 * @param {object} config 
 * @returns {function}
 */
export default function test(config) {
    return gulp.src(config.paths.test)
        .pipe(mocha(config.mocha))
        .on('error', () => {
            this.emit('end');
        });
}