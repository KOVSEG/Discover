import gulp from 'gulp';
import { plugins } from './gulp/config/plugins.js';


// Global variable
global.app = {
  gulp: gulp,
  plugins: plugins,
};

// Tasks
import { copy } from './gulp/tasks/copy.js';
import { html } from './gulp/tasks/html.js';
import { browsersync } from './gulp/tasks/browsersync.js';
import { reset } from './gulp/tasks/reset.js';
import { scss } from './gulp/tasks/scss.js';
import { images } from './gulp/tasks/images.js';

// Gulp watch
function wathcer() {
  gulp.watch('./src/index.html', copy);
  gulp.watch('./src/index.html', html);
  gulp.watch('./src/scss/**/*.scss', scss);
  gulp.watch('./src/img/**/*.*', images);
};


const dev = gulp.series(reset, gulp.parallel(copy, html, scss, images), gulp.parallel(wathcer, browsersync));

gulp.task('default', dev);



