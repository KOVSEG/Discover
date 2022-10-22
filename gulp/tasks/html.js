import gulp from 'gulp';
import fileInclude from 'gulp-file-include';

export const html = () => {
  return gulp.src('./src/**/*.html')
  .pipe(fileInclude())
  .pipe(gulp.dest('./dist'))
};