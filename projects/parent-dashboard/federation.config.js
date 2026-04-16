// apps/parent-dashboard/federation.config.js
const { withNativeFederation } = require('@angular-architects/module-federation/config');

module.exports = withNativeFederation({
  name: 'parent-dashboard',

  exposes: {
    './routes': './src/app/app.routes.ts',
  },

  shared: {
    "@angular/core": { singleton: true, strictVersion: true },
    "@angular/common": { singleton: true, strictVersion: true },
    "@angular/router": { singleton: true, strictVersion: true }
  }
});