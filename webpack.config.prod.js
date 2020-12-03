'use strict'

const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const autoprefixer = require('autoprefixer');
const pkg = require('./package.json');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'index.js',
    libraryTarget: 'umd',
    library: pkg.name,
  },
  resolve: {
    extensions: ['.jsx', '.js'],
  },
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React'
    },
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
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
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
    })
  ],
  optimization: {
    minimizer: [
      new TerserPlugin(),
      new OptimizeCSSAssetsPlugin({})
    ]
  }
};
