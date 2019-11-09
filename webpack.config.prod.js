const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

const htmlWebpackPluginConfig = {
  "title": "Minesweeper",
  "meta": {
    "viewport": "initial-scale = 1.0, maximum-scale = 1.0, user-scalable=no",
    "Content-Type": { "http-equiv": "Content-Type", "content": "text/html; charset=utf-8" }
  },
  "filename": "index.html",
  "template": "./shared/html/index.html"
};

const CopyPluginConfig = [{
  from: `./src/assets/`,
  to: `./assets/`,
}];

module.exports = {
  mode: "production",
  entry: `./src/index.js`,
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, `./dist/`)
  },
  plugins: [
    new HtmlWebpackPlugin(htmlWebpackPluginConfig),
    new CopyPlugin(CopyPluginConfig)
  ],
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
      }
    ]
  }
};