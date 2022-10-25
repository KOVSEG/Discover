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
import { scss } from './gulp/tasks/scss.js';
import { images } from './gulp/tasks/images.js';

const dev = gulp.series(reset, gulp.parallel(copy, html, scss, images), browsersync );

gulp.task('default', dev);



