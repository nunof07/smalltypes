import {
    babel,
    commonjs,
    license,
    nodeResolve,
    typescript,
    uglify
} from './tasks/rollup/index';
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
        nodeResolve,
        commonjs,
        typescript,
        babel,
        uglify,
        license,
    ],
    watch: {
        clearScreen: false
    }
};