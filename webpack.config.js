const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');

/**
 * Webpack plugins
 */
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  cache: true,

  devtool: 'inline-source-map',

  entry: {
    app: [
      'webpack/hot/only-dev-server',
      './app/app.js'
    ],
    vendor: [
      'angular'
    ]
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js'
  },

  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'jshint-loader',
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude : /node_modules/
      },
      {
        test: /\.scss$/,
        loader: 'raw!postcss-loader!sass',
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        loader: 'raw-loader',
        exclude: /node_modules/
      }
    ]
  },

  jshint: {
    camelcase: true,
    emitErrors: true,
    failOnHint: false,
    esversion: 6
  },

  postcss: [
    autoprefixer({
      browsers: ['last 3 versions']
    })
  ],

  sassLoader: {
    outputStyle: 'compressed',
    precision: 10,
    sourceComments: false
  },

  plugins: [
    // Split code into two chunks, custom code and vendor code
    new CommonsChunkPlugin("vendor", "vendor.bundle.js"),

    new HtmlWebpackPlugin({
      template: './app/index.html',
      inject: 'body'
    }),

    new CopyWebpackPlugin([{
      from: './app/assets'
    }])
  ],

  devServer: {
    contentBase: './dist',
    outputPath: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  }
};
