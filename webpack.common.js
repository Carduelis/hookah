const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const manifest = require('./config/manifest');

module.exports = {
    entry: {
        app: './src/index.js',
        polyfills: './src/polyfills.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                // include: path.resolve(__dirname, 'src'),
                loader: 'babel-loader'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: { limit: 5000 }
                    },
                    'image-webpack-loader'
                ]
            },
            { test: /\.ejs$/, loader: 'ejs-loader' },
            {
                test: /\.json$/,
                use: ['json-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: manifest.name,
            template: './src/index.html',
            filename: 'index.html',
            files: {
                css: ['main.css']
            }
        }),
        new webpack.ProvidePlugin({
            _: 'lodash'
        }),
        new webpack.LoaderOptionsPlugin({
            test: /\.ejs$/,
            options: {
                ejsLoader: {
                    variable: 'data'
                }
            }
        }),
        new WebpackPwaManifest(manifest)
        // new webpack.optimize.CommonsChunkPlugin({
        //   name: 'common' // Specify the common bundle's name.
        //  })
    ],
    output: {
        filename: '[name].bundle.js',
        // chunkFilename: '[name].chunk.bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};
