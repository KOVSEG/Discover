import fileInclude from 'gulp-file-include';
import browserSync from 'browser-sync';

export const html = () => {
  return app.gulp.src('./src/index.html')
  .pipe(fileInclude())
  .pipe(app.gulp.dest('./dist'))
  .pipe(browserSync.stream())
};