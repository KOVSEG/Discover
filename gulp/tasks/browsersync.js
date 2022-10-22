import browserSync from 'browser-sync';

export const browsersync = () => {
  browserSync.init({
    server: {
      baseDir: './dist',
    },
    port: 3000,
    notify: false
  });
};