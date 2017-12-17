var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var tslint = require('tslint');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var tsify = require('tsify');
var watchify = require('watchify');
var babelify = require('babelify');
var path = require('path');
var dtsBuilder = require('dts-builder');
var del = require('del');
var tsConfig = require('./tsconfig.json');
var config = require('./gulp.config.json');

var watching = false;
var plugins = gulpLoadPlugins();
config.browserify.entries = [config.paths.entry];
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
        .pipe(source(config.paths.bundle))
        .pipe(gulp.dest(config.paths.destination));
}

function browserifyBuild() {
    return buildFrom(browserifyObj);
}

function watchifyBuild() {
    return buildFrom(watchedBrowserify);
}

gulp.task('tslint', function () {
    config.tslint.program = tslint.Linter.createProgram('./tsconfig.json');

    return gulp.src(config.paths.src)
        .pipe(plugins.tslint(config.tslint))
        .pipe(plugins.tslint.report({
            emitError: !watching
        }));
});

gulp.task('test', function () {
    return gulp.src(config.paths.test)
        .pipe(plugins.mocha(config.mocha))
        .on('error', function (err) {
            if (watching) {
                this.emit('end');
            }
        });
});

gulp.task('declarations', function () {
    return gulp.src(config.paths.main)
        .pipe(plugins.typescript(tsConfig.compilerOptions))
        .dts.pipe(plugins.intermediate({}, function (tempDir, cb) {
            gulp.dest(tempDir);
            del(config.declarations.exclude, { cwd: tempDir })
                .then(function () {
                    dtsBuilder.generateBundles([{
                        name: config.declarations.name,
                        sourceDir: tempDir,
                        destDir: config.paths.destination
                    }]);
                    cb();
                });
        }));
});

gulp.task('documentation:typedoc', function () {
    var typeDocConfig = Object.assign({}, config.documentation);
    return gulp.src(config.paths.main)
        .pipe(plugins.typedoc(typeDocConfig));
});

gulp.task('documentation:nojekyll', function () {
    // tell GitHub we are not using Jekyll for our Pages
    return plugins.file('.nojekyll', '', { src: true })
        .pipe(gulp.dest(config.documentation.out));
});

gulp.task('documentation', function (cb) {
    plugins.sequence(
        'documentation:typedoc',
        'documentation:nojekyll',
        cb
    );
});


gulp.task('watchify', watchifyBuild);

gulp.task('build', browserifyBuild);

gulp.task('prepublish', function (cb) {
    plugins.sequence(
        'tslint',
        'test',
        'build',
        'declarations',
        'documentation',
        cb
    );
});

gulp.task('watch', function () {
    watching = true;
    gulp.watch(config.paths.src, function () {
        plugins.sequence('tslint', 'test')(function (err) {
            if (err) {
                plugins.util.log(err);
            }
        });
    });
    gulp.watch(config.paths.test, ['test']);
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