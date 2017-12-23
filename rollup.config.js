import babel from 'rollup-plugin-babel';
import tslint from 'rollup-plugin-tslint';
import typescript from 'rollup-plugin-typescript2';
import config from './gulp.config.json';

export default {
    input: config.paths.entry,
    output: {
        file: 'dist/rollup.js',
        format: 'umd',
        name: 'smalltypes',
        sourcemap: true
    },
    plugins: [
        // tslint({
        //     throwError: false
        // }),
		typescript({
            tsconfigOverride: {
                declaration: false
            },
            typescript: require('typescript')
        }),
        babel()
    ],
    watch: {
        clearScreen: false
    }
};