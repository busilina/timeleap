const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'timeleap.min.js',
    library: "timeleap",
    libraryTarget: "umd"
  },
  devServer: {
    contentBase: path.join(__dirname, "build"),
    compress: true,
    port: 3000
  }
};
