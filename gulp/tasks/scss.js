import gulpSass from 'gulp-sass';
import replace from 'gulp-replace';
import dartSass from 'sass';
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';
import rename from 'gulp-rename';

const sass = gulpSass(dartSass);

export const scss = () => {
  return app.gulp.src('./src/scss/**/*.scss', { sourcemaps: true })
  .pipe(replace(/@img\//g, '../img/'))
  .pipe(sass({
    outputStyle: 'expanded',
  }))
  .pipe(autoprefixer({
    cascade: false,
    overrideBrowserslist: ['last 3 versions']
  }
  ))
  // .pipe(cleanCSS())
  .pipe(rename({
    extname: '.css',
  }))
  .pipe(app.gulp.dest('./dist/css'));
};

