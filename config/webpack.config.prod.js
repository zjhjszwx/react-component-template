const path = require("path");
const baseConfig = require("./webpack.base.js");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const prodConfig = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "index.js",
    libraryTarget: "umd", // 采用通用模块定义, 注意webpack到4.0为止依然不提供输出es module的方法，所以输出的结果必须使用npm安装到node_modules里再用，不然会报错
    library: "react-component-template", // 库名称
    libraryExport: "default", // 兼容 ES6(ES2015) 的模块系统、CommonJS 和 AMD 模块规范
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(le|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "less-loader",
            options: {
              sourceMap: false,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "index.css",
    }),
  ],
};

module.exports = merge(baseConfig, prodConfig);
