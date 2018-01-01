import babel from 'rollup-plugin-babel';

export default babel({
    babelrc: false,
    runtimeHelpers: true,
    presets: [
        ['env', {
            'modules': false
        }]
    ],
    plugins: [
        ['transform-runtime', {
            'helpers': false,
            'polyfill': false
        }],
        ['external-helpers']
    ],
    exclude: 'node_modules/**'
});