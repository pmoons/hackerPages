Package.describe({
  name: "core",
  summary: "Core app package",
  version: "0.0.0"
});

Package.onUse(function(api){
  api.addFiles('core.js');
  api.export('HackerPages');
});