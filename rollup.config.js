import babel from 'rollup-plugin-babel';
import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import license from 'rollup-plugin-license';
import uglify from 'rollup-plugin-uglify';
import path from 'path';
import { minify } from 'uglify-es';
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
            babelrc: false,
            runtimeHelpers: true,
            presets: [
                ["env", {
                    "modules": false
                }]
            ],
            plugins: [
                ["transform-runtime", {
                    "helpers": false,
                    "polyfill": false
                }],
                ["external-helpers"]
            ],
            exclude: 'node_modules/**'
        }),
        uglify(
            {
                output: {
                    comments: /^\/*!/
                }
            },
            minify
        ),
        license({
            sourceMap: true,
            banner: {
                file: path.join(__dirname, 'LICENSE_BANNER')
            }
        }),
    ],
    watch: {
        clearScreen: false
    }
};