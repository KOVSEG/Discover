
export const browsersync = () => {
  app.plugins.browsersync.init({
    server: {
      baseDir: './dist',
    },
    port: 3000,
    notify: false
  });
};