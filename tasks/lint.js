import { Linter } from 'tslint';

/**
 * Lint source code.
 * @param {Gulp} gulp 
 * @param {IGulpPlugins} plugins 
 * @param {object} config 
 * @returns {function}
 */
export default function lint(gulp, plugins, config) {
    return () => {
        const options = Object.assign(
            {
                program: Linter.createProgram('./tsconfig.json')
            },
            config.tslint.options
        );

        return gulp.src(config.paths.src)
            .pipe(plugins.tslint(options))
            .pipe(plugins.tslint.report(config.tslint.report));
    };
}