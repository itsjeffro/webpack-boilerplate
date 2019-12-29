const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  
  entry: './src/main.tsx',
  
  devServer: {
    contentBase: path.resolve(__dirname, 'build')
  },
  
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        loader: "ts-loader"
      }
    ]
  },
  
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CopyPlugin([
      {
        from: path.resolve(__dirname, 'public'),
        to: path.resolve(__dirname, 'build')
      }
    ])
  ],
  
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx']
  },
  
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'build')
  }
};