import rollupLicense from 'rollup-plugin-license';
import path from 'path';

export const license = rollupLicense({
    sourceMap: true,
    banner: {
        file: path.join(__dirname, 'LICENSE_BANNER')
    }
});