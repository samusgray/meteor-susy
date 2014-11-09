Package.describe({
  name: 'meta:susy',
  summary: 'Powerful grids for the web.',
  version: '1.0.5',
  git: 'https://github.com/aaronagray/meteor-susy'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('fourseven:scss@1.0.0');
  api.addFiles([

    // Susy One API
    "susy/language/_susyone.scss",
    "susy/language/susyone/_background.scss",
    "susy/language/susyone/_background.scss",
    "susy/language/susyone/_functions.scss",
    "susy/language/susyone/_grid.scss",
    "susy/language/susyone/_isolation.scss",
    "susy/language/susyone/_margin.scss",
    "susy/language/susyone/_media.scss",
    "susy/language/susyone/_padding.scss",
    "susy/language/susyone/_settings.scss",

    // Susy API
    "_susy.scss",
    "susy/language/_susy.scss",
    "susy/language/susy/_background.scss",
    "susy/language/susy/_bleed.scss",
    "susy/language/susy/_box-sizing.scss",
    "susy/language/susy/_breakpoint-plugin.scss",
    "susy/language/susy/_container.scss",
    "susy/language/susy/_context.scss",
    "susy/language/susy/_gallery.scss",
    "susy/language/susy/_grids.scss",
    "susy/language/susy/_gutters.scss",
    "susy/language/susy/_isolate.scss",
    "susy/language/susy/_margins.scss",
    "susy/language/susy/_padding.scss",
    "susy/language/susy/_rows.scss",
    "susy/language/susy/_settings.scss",
    "susy/language/susy/_span.scss",
    "susy/language/susy/_validation.scss",

    // Susy Math
    "susy/_math.scss",
    "susy/math/_su.scss",
    "susy/math/su/_grid.scss",
    "susy/math/su/_maps.scss",
    "susy/math/su/_settings.scss",
    "susy/math/su/_validation.scss",

    // Susy Output
    // - Float
    "susy/output/_float.scss",
    "susy/output/float/_container.scss",
    "susy/output/float/_end.scss",
    "susy/output/float/_isolate.scss",
    "susy/output/float/_span.scss",
    // - Shared
    "susy/output/_shared.scss",
    "susy/output/shared/_background.scss",
    "susy/output/shared/_container.scss",
    "susy/output/shared/_direction.scss",
    "susy/output/shared/_inspect.scss",
    "susy/output/shared/_margins.scss",
    "susy/output/shared/_output.scss",
    // - Support
    "susy/output/_support.scss",
    "susy/output/support/_background.scss",
    "susy/output/support/_box-sizing.scss",
    "susy/output/support/_clearfix.scss",
    "susy/output/support/_prefix.scss",
    "susy/output/support/_rem.scss",
    "susy/output/support/_support.scss"
    ], 'server', {
    isAsset: true
  });
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('meta:susy');
  api.addFiles('meta:susy-tests.js');
});
