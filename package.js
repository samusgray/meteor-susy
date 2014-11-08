Package.describe({
  name: 'meta:susy',
  summary: 'Powerful grid tools for the web.',
  version: '1.0.0',
  git: 'https://github.com/aaronagray/meteor-susy'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('fourseven:scss@1.0.0');
  api.addFiles([
    "_susyone.scss"
    ], 'server', {
    isAsset: true
  });
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('meta:susy');
  api.addFiles('meta:susy-tests.js');
});
