const withSass = require('@zeit/next-sass');

// const isProd = process.env.NODE_ENV === 'production'
// const isBeta = process.env.NODE_ENV === 'beta'
// const isDev = process.env.NODE_ENV === 'dev' || process.env.NODE_ENV === ''
// const assetPrefix = ((isProd || isBeta) ? '/test' : '')

module.exports = withSass({
    serverRuntimeConfig: { // Will only be available on the server side
    },
    publicRuntimeConfig: { // Will be available on both server and client
    },
    webpack: (config) => {
        // Fixes npm packages that depend on `fs` module
        config.node = {
            fs: 'empty'
        }
        return config
    }
});
