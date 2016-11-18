//TODO: Configure scss bundling http://webpack.github.io/docs/stylesheets.html
//https://github.com/toddmotto/angular-styleguide#modular-architecture

//TODO: Look at webpack-dev-server
//TODO: Look at strip-loader

var webpack = require('webpack');
var CircularDependencyPlugin = require('circular-dependency-plugin');

module.exports = {
  entry: './src/virtualkeyboard.js',
  output: {
    path: './release',
    filename: 'main.js'
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
    ]
  },
  resolve: {
    extensions: ['', '.js']
  },
  plugins: [
    new CircularDependencyPlugin({
      // exclude detection of files based on a RegExp 
      exclude: /a\.js/,
      // add errors to webpack instead of warnings 
      failOnError: true
    })
  ]
}