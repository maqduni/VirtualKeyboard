//https://www.viget.com/articles/publishing-packages-to-npm-and-bower
//https://65535th.com/jquery-plugins-and-webpack/

//TODO: Look at webpack-dev-server
//TODO: Look at strip-loader

var webpack = require('webpack');
var CircularDependencyPlugin = require('circular-dependency-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    'virtkeys': './src/virtualkeyboard.js',
    'virtkeys.min': './src/virtualkeyboard.js'
  },
  output: {
    path: './dist',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
          presets: ['es2015']
        }
      },
      {
        test: /.js$/,
        loader: 'remove-comments-loader'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js']
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      mangel: false,
      sourceMap: false
    }),
    new CopyWebpackPlugin([
      { from: './src/css', to: './css' },
      { from: './src/layouts', to: './layouts' },
    ])
  ]
}