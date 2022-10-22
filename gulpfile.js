import gulp from 'gulp';

// Global variable
global.app = {
  gulp: gulp,
};

// Tasks
import { copy } from './gulp/tasks/copy.js';
import { html } from './gulp/tasks/html.js';
import { browsersync } from './gulp/tasks/browsersync.js';
import { reset } from './gulp/tasks/reset.js';

const dev = gulp.series(reset, gulp.parallel(copy, html), browsersync );

gulp.task('default', dev);



