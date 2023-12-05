/** @type {import('next').NextConfig} */

const webpack = require('webpack')

const nextConfig = {
    webpack: (config, options) => {

        config.plugins.push(
            new webpack.NormalModuleReplacementPlugin(/^node:/, (resource) => {
                resource.request = resource.request.replace(/^node:/, '');
            })
        );

        return config;
    },
}

module.exports = {nextConfig}
