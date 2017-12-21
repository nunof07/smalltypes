import typescript from 'rollup-plugin-typescript2';
import babel from 'rollup-plugin-babel';
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
		typescript({
            tsconfigOverride: {
                declaration: false
            },
            typescript: require('typescript')
        }),
        babel({
            runtimeHelpers: true
        })
	]
};