import fileInclude from 'gulp-file-include';

export const html = () => {
  return app.gulp.src('./src/index.html')
  .pipe(fileInclude())
  .pipe(app.plugins.replace(/@img\//g, './img/'))
  .pipe(app.gulp.dest('./dist'))
  .pipe(app.plugins.browsersync.stream())
};