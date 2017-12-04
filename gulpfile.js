var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var tslint = require('tslint');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var tsify = require('tsify');
var watchify = require('watchify');
var babelify = require('babelify');
var path = require('path');
var dtsGenerator = require('dts-generator');
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


gulp.task('declarations:typescript', function () {
    return gulp.src(config.paths.main)
        .pipe(plugins.typescript(tsConfig.compilerOptions))
        .dts.pipe(gulp.dest(config.paths.destination));
});

gulp.task('declarations', function () {
    dtsGenerator.default({
        name: config.declarations.name,
        project: path.resolve(__dirname, './'),
        exclude: config.declarations.exclude,
        out: path.resolve(__dirname, config.paths.destination, config.declarations.out),
        resolveModuleId: function (params) {
            return replacePath(params.currentModuleId, config.declarations.replace.module, params);
        },
        resolveModuleImport: function (params) {
            return replacePath(params.importedModuleId, config.declarations.replace.import, params);
        }
    });

    function replacePath(source, config, resolveParams) {
        var result = source;

        config.forEach(function (params) {
            result = result.replace(
                new RegExp(params.search),
                replacement(params.replace, resolveParams)
            );
        });

        return result;
    }
    function replacement(replaceSource, resolveParams) {
        var result = replaceSource.replace('{{mainModuleName}}', mainModuleName());

        if (resolveParams.currentModuleId) {
            result = result.replace('{{currentModuleFullPath}}', currentModuleFullPath(resolveParams.currentModuleId));
        }

        return result;
    }
    function mainModuleName() {
        return config.declarations.name;
    }
    function currentModuleFullPath(currentModuleId) {
        return replacePath(currentModuleId, config.declarations.replace.module, {});
    }
});

gulp.task('watchify', watchifyBuild);

gulp.task('build', browserifyBuild);

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