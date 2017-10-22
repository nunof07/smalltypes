var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var tslint = require('tslint');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var tsify = require('tsify');
var watchify = require('watchify');
var babelify = require("babelify");
var config = require('./gulp.config.json');

var plugins = gulpLoadPlugins();
config.browserify.entries = [config.main];
var watchedBrowserify =
    watchify(
        browserify(config.browserify)
            .plugin(tsify)
            .transform(babelify, config.babel)
    )
    .on('update', build)
    .on('log', plugins.util.log);

function build() {
    return watchedBrowserify
        .bundle()
        .on('error', function(error){
            plugins.util.log(
                plugins.util.colors.bgRed(error.name),
                plugins.util.colors.yellow(error.message)
                //error.stack
            );
            this.emit('end');
        })
        .pipe(source(config.bundle))
        .pipe(gulp.dest(config.dist));
}

gulp.task('tslint', function () {
    var program = tslint.Linter.createProgram('./tsconfig.json');

    return gulp.src(config.ts)
        .pipe(plugins.tslint({
            program: program,
            formatter: 'stylish'
        }))
        .pipe(plugins.tslint.report({ emitError: false }));
});

gulp.task('copy', function () {
    return gulp.src(config.copy)
        .pipe(gulp.dest(config.dist));
        //.pipe(plugins.connect.reload());
});

gulp.task('server', function () {
    plugins.connect.server({
        root: [config.dist],
        livereload: true
    });
});

gulp.task('watch', function () {
    gulp.watch(config.copy, ['copy']);
    gulp.watch(config.ts, ['tslint']);
});

gulp.task('default', ['server', 'copy', 'watch', 'tslint'], build);