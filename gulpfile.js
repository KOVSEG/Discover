import gulp from 'gulp';

// Tasks
import { copy } from './gulp/tasks/copy.js';
import { html } from './gulp/tasks/html.js';

const dev = gulp.parallel(copy, html);

gulp.task('default', dev);



