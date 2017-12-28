import gulp from 'gulp';
import batch from 'gulp-batch';
import plumber from 'gulp-plumber';
import sequence from 'gulp-sequence';
import watch from 'gulp-watch';

/**
 * Watch source files and run tasks on change.
 * @param {object} config 
 * @param {string[]} tasks
 * @returns {NodeJS.ReadWriteStream}
 */
export function dev(config, tasks) {
    return gulp
        .src(config.paths.src)
        .pipe(
            watch(
                config.paths.src,
                { ignoreInitial: false },
                batch(function (events, done) {
                    sequence(...tasks, done);
                })
            )
        )
        .pipe(plumber());
}