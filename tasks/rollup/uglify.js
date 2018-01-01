import rollupUglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-es';

export const uglify = rollupUglify(
    {
        output: {
            comments: /^\/*!/
        }
    },
    minify
);