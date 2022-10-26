import browserSync from 'browser-sync';
import replace from 'gulp-replace';
import rename from 'gulp-rename';

export const plugins = { 
  browsersync: browserSync,
  replace: replace,
  rename: rename,
};