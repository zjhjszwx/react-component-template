module.exports = {
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, //使用内置的 Asset Modules
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
};
