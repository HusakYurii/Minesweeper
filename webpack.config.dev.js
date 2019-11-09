const path = require("path");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: `./src/index.js`,
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, `./dist/`)
  },
  devServer: {
    contentBase: path.join(__dirname, `./dist/`),
    compress: false,
    port: 8080
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [ "@babel/preset-env" ]
          }
        }
      },
      {
        test: /\.js$/,
        use: [ "source-map-loader" ],
        enforce: "pre"
      }
    ]
  }
};