export const images = () => {
  return app.gulp.src('./src/img/**/*.*')
    .pipe(app.gulp.dest('./dist/img'))
};