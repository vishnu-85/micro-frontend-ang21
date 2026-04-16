// apps/shell/federation.config.js
const { withNativeFederation } = require('@angular-architects/module-federation/config');

module.exports = withNativeFederation({
  name: 'shell',

  remotes: {
    "institute-dashboard": "http://localhost:4201/remoteEntry.json",
    "parent-dashboard": "http://localhost:4202/remoteEntry.json"
  },

  shared: {
    "@angular/core": { singleton: true, strictVersion: true },
    "@angular/common": { singleton: true, strictVersion: true },
    "@angular/router": { singleton: true, strictVersion: true }
  }
});