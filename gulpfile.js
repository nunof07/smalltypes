var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var tsify = require('tsify');
var watchify = require('watchify');

var plugins = gulpLoadPlugins();
var paths = {
    build: 'dist',
    main: 'src/main.ts',
    bundle: 'game.js',
    copy: [
        'src/index.html',
        'src/assets/**/*',
        'node_modules/phaser-ce/build/phaser.min.js'
    ]
};
var watchedBrowserify =
    watchify(
        browserify({
            basedir: '.',
            debug: true,
            entries: [paths.main],
            cache: {},
            packageCache: {}
        })
        .plugin(tsify)
    );

function build() {
    return watchedBrowserify
        .bundle()
        .on('error', function(err){
            console.log(err.message);
            this.emit('end');
        })
        .pipe(source(paths.bundle))
        .pipe(gulp.dest(paths.build));
}

gulp.task('copy', function () {
    return gulp.src(paths.copy)
        .pipe(gulp.dest(paths.build));
        //.pipe(plugins.connect.reload());
});

gulp.task('server', function () {
    plugins.connect.server({
        root: [paths.build],
        livereload: true
    });
});

gulp.task('watch', function () {
    gulp.watch(paths.copy, ['copy']);
});

gulp.task('default', ['server', 'copy', 'watch'], build);
watchedBrowserify.on('update', build);
watchedBrowserify.on('log', plugins.util.log);