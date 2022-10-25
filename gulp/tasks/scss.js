import gulpSass from 'gulp-sass';
import dartSass from 'sass';
import rename from 'gulp-rename';
import cleanCSS from 'gulp-clean-css';
import autoprefixer from 'gulp-autoprefixer';
import groupCssMediaQueries from 'gulp-group-css-media-queries';
import replace from 'gulp-replace';

const sass = gulpSass(dartSass);

export const scss = () => {
  return app.gulp.src('./src/scss/**/*.scss', { sourcemaps: true })
  .pipe(replace(/@img\//g, '../img'))
  .pipe(sass({
    outputStyle: 'expanded',
  }))
  .pipe(groupCssMediaQueries())
  .pipe(autoprefixer({
    cascade: true,
    grid: true,
  }
  ))
  .pipe(cleanCSS())
  .pipe(rename({
    extname: '.css',
  }))
  .pipe(app.gulp.dest('./dist/css'));
};

