const { environment } = require('@rails/webpacker')

const webpack = require('webpack');

// resolve-url-loader used with images in npm packages
environment.loaders.get('sass').use.splice(-1, 0, {
    loader: 'resolve-url-loader'
});

environment.plugins.prepend('Provide', new webpack.ProvidePlugin({
    $: 'jquery/src/jquery',
    jQuery: 'jquery/src/jquery'
}));

module.exports = environment
