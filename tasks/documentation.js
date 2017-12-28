import gulp from 'gulp';
import merge2 from 'merge2';
import typedoc from 'gulp-typedoc';
import file from 'gulp-file';

/**
 * Run typedoc app.
 * @param {object} config 
 * @returns {NodeJS.ReadWriteStream}
 */
function runTypedoc(config) {
    const options = Object.assign({}, config.documentation);

    return gulp.src(config.paths.main)
        .pipe(typedoc(options));
}

/**
 * Create empty `.nojekyll` file. GitHub will check this file and disable Jekyll.
 * @param {object} config 
 * @returns {NodeJS.ReadWriteStream}
 */
function createNoJekyllFile(config) {
    return file('.nojekyll', '', { src: true })
        .pipe(gulp.dest(config.documentation.out));
}

/**
 * Build documentation.
 * @param {object} config 
 * @returns {NodeJS.ReadWriteStream}
 */
export default function documentation(config) {
    return merge2(
        runTypedoc(config),
        createNoJekyllFile(config)
    );
}