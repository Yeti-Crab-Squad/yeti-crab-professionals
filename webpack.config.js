const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/'
  },

  devServer: {
    contentBase: path.resolve(__dirname, "build"),
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    proxy: {
      '/' : {
        target: 'http://localhost:3000',
        secure: false
      }
    },
    port: 8080
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /(node_modules)/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          }
        }]
      },
      {
        test: /\.css$/, //changed to specify css instead of previous "catch all" test regex item including scss
        exclude: /(node_modules)/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      }
    ]
  }
};
