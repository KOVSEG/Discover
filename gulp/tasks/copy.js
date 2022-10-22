import gulp from 'gulp';

export const copy = () => {
  return gulp.src('./src/index.html')
  .pipe(gulp.dest('./dist'))
};