var webpack = require('webpack');
var path = require('path');
var libraryName = 'react-experiment';
var outputFile = libraryName + '.js';

var config = {
  entry: {
    'lib/react-experiment': 'react-experiment.js'
  },
  devtool: 'source-map',
  output: {
    path: './',
    filename: '[name].js',
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.js$/,
        loader: "eslint-loader",
        exclude: /(node_modules|spec|lib)/
      },
      {
        test: /\.jsx$/,
        loader: 'babel'
      }
    ]
  },
  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.js']
  },
  resolveLoader: {
    root: [
      '/node_modules'
    ]
  }
};

module.exports = config;
