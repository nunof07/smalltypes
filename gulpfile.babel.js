import gulp from 'gulp';
import lint from './tasks/lint';
import test from './tasks/test';
var gulpLoadPlugins = require('gulp-load-plugins');
var tslint = require('tslint');
var dtsBuilder = require('dts-builder');
var del = require('del');
var merge2 = require('merge2');
var config = require('./gulp.config.json');
var plugins = gulpLoadPlugins();

gulp.task('dev', function () {
    return gulp
        .src(config.paths.src)
        .pipe(plugins.watch(
            config.paths.src,
            { ignoreInitial: false },
            plugins.batch(function (events, done) {
                plugins.sequence('lint', 'test', done);
            })
        ))
        .pipe(plugins.plumber());
});

gulp.task('lint', () => lint(config));
gulp.task('test', () => test(config));

gulp.task('declarations', function () {
    var tsProject = plugins.typescript.createProject('tsconfig.json', { declaration: true });

    return gulp.src(config.paths.main)
        .pipe(tsProject())
        .dts.pipe(plugins.intermediate({}, function (tempDir, done) {
            gulp.dest(tempDir);
            del(config.declarations.exclude, { cwd: tempDir })
                .then(function () {
                    dtsBuilder.generateBundles([{
                        name: config.module,
                        sourceDir: tempDir,
                        destDir: config.paths.destination
                    }]);
                    done();
                });
        }));
});

gulp.task('documentation', function () {
    var typeDocConfig = Object.assign({}, config.documentation);

    return merge2(
        gulp.src(config.paths.main)
            .pipe(plugins.typedoc(typeDocConfig)),
        // tell GitHub we are not using Jekyll for our Pages (create empty .nojekyll file)
        plugins.file('.nojekyll', '', { src: true })
            .pipe(gulp.dest(config.documentation.out))
    );
});