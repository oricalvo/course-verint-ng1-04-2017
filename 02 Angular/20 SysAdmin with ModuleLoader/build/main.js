var Builder = require('systemjs-builder');

var builder = new Builder('.', 'systemjs.config.js');

builder.bundle('app/main.js', 'dist/bundle.js', {minify: true})
    .then(function() {
        console.log('Build complete');
    })
    .catch(function(err) {
        console.log('Build error');
        console.log(err);
    });
