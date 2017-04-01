'use strict';

const webpack = require('webpack');
const {resolve} = require('path');
const {CheckerPlugin} = require('awesome-typescript-loader');


module.exports = {

    devtool: 'source-map',

    context: resolve(__dirname, 'src'),

    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './index.tsx'
    ],

    output: {
        filename: 'bundle.js',
        path: resolve(__dirname, 'public'),
        publicPath: '/'
    },
    
    resolve: {
        extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.jsx']
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader', 'source-map-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.tsx?$/,
                use: 'awesome-typescript-loader'
            }
        ],
    },

    plugins: [
        new CheckerPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ],

    // externals: {
    //     'react': 'React',
    //     'react-dom': 'ReactDOM'
    // },

    devServer: {
        hot: true,
        contentBase: resolve(__dirname, 'public'),
        publicPath: '/'
    }
    
};
