const path = require("path");
const baseConfig = require("./webpack.base.js");
const { merge } = require("webpack-merge");

const devConfig = {
  entry: "./demo/index.js",
  mode: "development",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "../demo"),
  },
  module: {
    rules: [
      {
        test: /\.(le|c)ss$/i,
        use: ["style-loader", "css-loader", "less-loader"],
        exclude: /node_modules/,

      },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, "../demo"),
    port: 9000,
    hot: true,
  },
};

module.exports = merge(baseConfig, devConfig);
