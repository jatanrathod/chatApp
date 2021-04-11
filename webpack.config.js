//webpack.config.js
var path = require("path");
var webpack = require("webpack");
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "src"),
    filename: "bundle.js",
  },
  devServer: {
    inline: false,
    contentBase: "./dist",
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader",
      },
    ],
  },
};
