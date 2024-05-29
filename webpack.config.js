const path = require("path");
const TerserPlugin=require("terser-webpack-plugin");
const MiniCssExtractPlugin=require("mini-css-extract-plugin");

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
        use:[MiniCssExtractPlugin.loader,'css-loader']
      },
      {
        test: /\.(scss)$/,
        use:[MiniCssExtractPlugin.loader,'css-loader','sass-loader']
      },
      {
        test: /\.(js)$/,
        exclude:/node_modules/,
        use:{
          loader:'babel-loader',
          options:{
            presets:['@babel/env'],
            plugins:['@babel/plugin-proposal-class-properties']
          }
        }

      },
    ],
  },
  plugins:[
    new TerserPlugin(),
    new MiniCssExtractPlugin({
      filename:'style.css'
    })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 9001,
  },
};
