const path = require("path");
const webpack = require('webpack');

module.exports = (env) => {
  return {
    entry: './src/aframe-wrappers.js',
    devtool: 'inline-source-map',
    resolve: {
      extensions: [ '.ts', '.js' ],
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      publicPath: '/',
      filename: "bundle.js",
    },
    mode: "development",
    devServer: {
        static: path.join(__dirname, "dist"),
        port: 8000,
        hot: true
    },
    plugins: [
       new webpack.HotModuleReplacementPlugin()
    ],
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: 'ts-loader',
          exclude: /node_modules/,
       }
      ]
    }
  };
}
