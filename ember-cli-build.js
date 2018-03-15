'use strict';

const GlimmerApp = require('@glimmer/application-pipeline').GlimmerApp;

module.exports = function (defaults) {
  let app = new GlimmerApp(defaults, {
    // Add options here
    fingerprint: {
      prepend: 'https://cdn.rawgit.com/CDSPW/my-app/master/dist/'
    },
  });

  return app.toTree();
};
