const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin')


module.exports = {
  // 1
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
          },
          {
            loader: "less-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: '[path][name]-[hash:8].[ext]'
            },
          },
        ]
      },
      // {
      //   test : /\.(png|jpg|gif)$/i,
      //   use :[
      //     {
      //       loader : 'url-loader',
      //       options:{
      //         limit : 8192
      //       }
      //     }
      //   ]
      // }
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx','.json']
  },
  // 2
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  // 3
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/assets', to: 'assets' }
      ],
    }),
  ],
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    hot: true
  },
};