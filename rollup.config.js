import babel from 'rollup-plugin-babel';
import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
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
        nodeResolve(),
        commonjs({
            include: 'node_modules/**'
        }),
		typescript({
            typescript: require('typescript')
        }),
        babel({
            runtimeHelpers: true,
            exclude: 'node_modules/**'
        })
    ],
    watch: {
        clearScreen: false
    }
};