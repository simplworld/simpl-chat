'use strict'

const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: './index.js',
  output: {
    path: path.join(__dirname, '/lib'),
    filename: 'index.js',
    library: 'simpl-chat-widget',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.jsx', '.js']
  },
  target: 'web',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
            // options: { hmr: true }
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              modules: true,
              sourceMap: true,
              modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]',
              }
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                require('postcss-flexbugs-fixes'), // eslint-disable-line
                autoprefixer({
                  flexbox: 'no-2009'
                })
              ]
            }
          },
          {
            loader: 'sass-loader',
            // options: {
            //   includePaths: [path.resolve(__dirname, 'src/scss')]
            // }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            esModule: false,
          },
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'styles.css',
      chunkFileName: '[id].css'
    }),
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  }
};
