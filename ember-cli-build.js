'use strict';

const GlimmerApp = require('@glimmer/application-pipeline').GlimmerApp;
//var valid = require('card-validator');


module.exports = function (defaults) {
  let app = new GlimmerApp(defaults, {
    // Add options here
    fingerprint: {
      prepend: 'https://cdn.rawgit.com/CDSPW/my-app/master/docs/'
    },
  });
  //app.import('vendor/moment/moment.js');

  return app.toTree();
};
