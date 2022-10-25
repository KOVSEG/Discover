import fileInclude from 'gulp-file-include';
import browserSync from 'browser-sync';
import replace from 'gulp-replace';

export const html = () => {
  return app.gulp.src('./src/index.html')
  .pipe(fileInclude())
  .pipe(replace(/@img\//g, './img/'))
  .pipe(app.gulp.dest('./dist'))
  .pipe(browserSync.stream())
};