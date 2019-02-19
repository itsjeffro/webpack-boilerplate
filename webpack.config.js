const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/main.js', 
  output: {
    filename: 'main.js', 
    path: path.resolve(__dirname, 'build')
  },
  plugins: [
    new CopyPlugin([
      {
        from: path.resolve(__dirname, 'public'),
        to: path.resolve(__dirname, 'build')
      }
    ])
  ]
};