module.exports = {
  devtool: 'inline-source-map',
  module: {
    rules: require('./webpack.rules'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  }
};
