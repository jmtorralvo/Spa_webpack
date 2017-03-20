var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/app/index.ts',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist',
  },
  devtool: 'source-map',
  module: {
    loaders: [ 
      { test: /\.ts?$/, loader: 'ts-loader' },
      { test: /\.pug?$/, loader: 'pug-loader' },
      { test: /\.html?$/, loader: 'mustache-loader' },
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "sass-loader" // compiles Sass to CSS
        }]
      }
      /*{
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass!resolve-url')
      },*/
    ]
  },
  /*target: 'node',*/
  node: {
    fs: "empty"
  },
  devServer: {
    port: 9000,
    inline: true,
    open: true,
    hot: true,
    watch: true,
    contentBase: "./dist"
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", '.scss']
  }
  ,
  plugins: [
    new ExtractTextPlugin({ filename: 'bundle.css', allChunks: true })
  ]
};