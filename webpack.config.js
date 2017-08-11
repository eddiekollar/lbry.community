var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './main.js',
  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: '/src/assets'
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        include: path.join(__dirname, 'app'),
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
};
