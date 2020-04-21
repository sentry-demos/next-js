const withSourceMaps = require('@zeit/next-source-maps')();
const { execSync } = require("child_process");
require('dotenv').config()
// const SentryCliPlugin = require('@sentry/webpack-plugin');

module.exports = withSourceMaps({
  env: {
    release: execSync('git rev-parse HEAD').toString()
  },
  webpack(config, options) {
    // https://github.com/getsentry/sentry-javascript/issues/2378
    if (!options.isServer) {
      config.resolve.alias['@sentry/node'] = '@sentry/browser'
    }

    // SentryCliPlugin - Use only in Production! This will keep generating and uploading source maps
    // on every render.

    // config.plugins.push(
    //   new SentryCliPlugin({
    //     include: '.next',
    //     ignore: ['node_modules'],
    //     urlPrefix: '~/_next',
    //     release: execSync('git rev-parse HEAD').toString()
    //   })
    // )
    return config
  }
});