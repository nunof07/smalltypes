import gulp from 'gulp';
import {
    declarations,
    dev,
    documentation,
    lint,
    test
} from './tasks/index';
import config from './gulp.config.json';

gulp.task('dev', () => dev(config, ['lint', 'test']));
gulp.task('lint', () => lint(config));
gulp.task('test', () => test(config));
gulp.task('declarations', () => declarations(config));
gulp.task('documentation', () => documentation(config));