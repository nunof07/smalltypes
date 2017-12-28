import gulp from 'gulp';
import del from 'del';
import dtsBuilder from 'dts-builder';
import typescript from 'gulp-typescript';
import intermediate from 'gulp-intermediate';

/**
 * Creates the TypeScript declarations files from the source code to a temporary directory.
 * @param {object} config 
 * @param {callback} callback Callback with two arguments (path to temporary directory and done callback).
 */
function createDeclarations(config, callback) {
    const project = typescript.createProject('tsconfig.json', { declaration: true });

    return gulp.src(config.paths.main)
        .pipe(project())
        .dts.pipe(intermediate({}, (tempDir, done) => {
            gulp.dest(tempDir);
            callback(tempDir, done);
        }));
}

/**
 * Deletes the files that should be excluded from the declarations.
 * @param {object} config 
 * @param {string} tempDir 
 * @param {callback} done 
 */
function deleteExcludedFiles(config, tempDir, done) {
    return del(config.declarations.exclude, { cwd: tempDir })
        .then(done);
}

/**
 * Merge all declarations files into one.
 * @param {object} config 
 * @param {string} tempDir 
 * @param {callback} done 
 */
function mergeDeclarations(config, tempDir, done) {
    dtsBuilder.generateBundles([{
        name: config.module,
        sourceDir: tempDir,
        destDir: config.paths.destination
    }]);
    done();
}

/**
 * Build the declaration files (.d.ts).
 * @param {object} config 
 * @returns {NodeJS.ReadWriteStream}
 */
export function declarations(config) {
    return createDeclarations(config, (tempDir, done) => {
        deleteExcludedFiles(config, tempDir, () => {
            mergeDeclarations(config, tempDir, done);
        });
    });
}