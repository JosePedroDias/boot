const webpack = require('webpack');
const path = require('path');
const argv = require('yargs').argv;

const minify = argv.minify;

const inProd = (process.env.NODE_ENV === 'production');

const plugins = [
  new webpack.DefinePlugin({
    WEB: true,
  })
];

if (inProd || minify) {
  const ugPlug = new webpack.optimize.UglifyJsPlugin({
    beautify  : false,
    dead_code : true,
    minimize  : true
  });

  plugins.unshift(ugPlug);
}

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js' // [hash]
  },
  debug: !inProd,
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'stage-0', 'react'],
          plugins: ['transform-class-properties'],
          compact: true
        }
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.scss$/,
        loaders: [
          'style',
          'css',
          'sass']
      },
      {
        test: /\.(ttf|eot|svg|png|gif)?$/,
        loader: 'file-loader?name=./[path][name].[ext]'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json', '.jsx'],
    root: [
      path.resolve(__dirname, 'src'),
      path.resolve(__dirname, 'node_modules')
    ]
  },
  plugins: plugins
};
