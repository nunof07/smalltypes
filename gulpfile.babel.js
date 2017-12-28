import gulp from 'gulp';
import lint from './tasks/lint';
import test from './tasks/test';
import documentation from './tasks/documentation';
import declarations from './tasks/declarations';

var gulpLoadPlugins = require('gulp-load-plugins');
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
gulp.task('declarations', () => declarations(config));
gulp.task('documentation', () => documentation(config));