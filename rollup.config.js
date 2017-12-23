import babel from 'rollup-plugin-babel';
import typescript from 'rollup-plugin-typescript2';
import config from './gulp.config.json';

export default {
    input: config.paths.entry,
    output: {
        file: config.paths.bundle_full,
        format: config.rollup.format,
        name: config.module,
        sourcemap: false
    },
    plugins: [
		typescript({
            typescript: require('typescript')
        }),
        babel()
    ],
    watch: {
        clearScreen: false
    }
};