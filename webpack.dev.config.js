const webpack = require('webpack');
const path = require ('path');

module.exports = {
  devtool: 'source-map',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dev'),
    filename: 'main.bundle.js'
  },
  devServer: {
    inline: true,
    port: 8080,
    contentBase: './dev'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /(\.css|\.scss)$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader?modules=true&localIdentName=[name]__[local]___[hash:base64:5]'
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      'Promise': 'es6-promise',
      '_': 'lodash'
    })
  ]
};
