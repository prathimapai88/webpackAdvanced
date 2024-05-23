const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "dist/",
  },
  mode: "none",
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        type: "asset", //Other Values 'asset/resouce' .'asset'
        parser: {
          dataUrlCondition: {
            maxSize: 3 * 1024, //3 KiloBytes
          },
        },
      },
      {
        test: /\.(txt)$/,
        type: "asset/source",
      },
      {
        test: /\.(css)$/,
        use:['style-loader','css-loader']
      },
      {
        test: /\.(scss)$/,
        use:['style-loader','css-loader','sass-loader']
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 9001,
  },
};
