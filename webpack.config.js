var webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    __dirname + '/src/frontend/app.js'
  ],
  output: {
    path: __dirname + '/public/',
    filename: 'app.js',
    publicPath: 'http://localhost:8080/static/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loaders: ['react-hot', "babel?presets[]=es2015,presets[]=react,presets[]=stage-0"],
        exclude: /node_modules/,

      }
    ]
  }
};