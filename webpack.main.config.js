module.exports = {
  /**
   * This is the main entry point for your application, it's the first file
   * that runs in the main process.
   */
  entry: './src/main.js',
  devtool: 'inline-source-map',
  module: {
    rules: require('./webpack.rules'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  }
};
