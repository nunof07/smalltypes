import rollupCommonjs from 'rollup-plugin-commonjs';

export const commonjs = rollupCommonjs({
    include: 'node_modules/**'
});