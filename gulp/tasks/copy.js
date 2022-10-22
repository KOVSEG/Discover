export const copy = () => {
  return app.gulp.src('./src/index.html')
  .pipe(app.gulp.dest('./dist'))
};