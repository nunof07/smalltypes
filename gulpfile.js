var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var tslint = require('tslint');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var tsify = require('tsify');
var watchify = require('watchify');
var babelify = require('babelify');
var config = require('./gulp.config.json');

var watching = false;
var plugins = gulpLoadPlugins();
config.browserify.entries = [config.main];
var browserifyObj = getBrowserify();
var watchedBrowserify =
    watchify(getBrowserify())
    .on('update', watchifyBuild)
    .on('log', plugins.util.log);

function getBrowserify() {
    return browserify(config.browserify)
        .plugin(tsify)
        .transform(babelify, config.babel);
}

function buildFrom(obj) {
    return obj
        .bundle()
        .on('error', function (error) {
            plugins.util.log(
                plugins.util.colors.bgRed(error.name),
                plugins.util.colors.yellow(error.message)
            );

            if (watching) {
                this.emit('end');
            }
        })
        .pipe(source(config.bundle))
        .pipe(gulp.dest(config.dist));
}

function browserifyBuild() {
    return buildFrom(browserifyObj);
}

function watchifyBuild() {
    return buildFrom(watchedBrowserify);
}

gulp.task('tslint', function () {
    config.tslint.program = tslint.Linter.createProgram('./tsconfig.json');

    return gulp.src(config.src)
        .pipe(plugins.tslint(config.tslint))
        .pipe(plugins.tslint.report({
            emitError: !watching
        }));
});

gulp.task('test', function () {
    return gulp.src(config.test)
        .pipe(plugins.mocha(config.mocha))
        .on('error', function (err) {
            if (watching) {
                this.emit('end');
            }
        });
});

gulp.task('watchify', watchifyBuild);

gulp.task('build', browserifyBuild);

gulp.task('watch', function () {
    watching = true;
    gulp.watch(config.src, function () {
        plugins.sequence('tslint', 'test')(function (err) {
            if (err) {
                plugins.util.log(err);
            }
        });
    });
    gulp.watch(config.test, ['test']);
});

gulp.task('default', function (cb) {
    watching = true;
    plugins.sequence(
        'tslint',
        'test',
        'watchify',
        'watch',
        cb
    );
});