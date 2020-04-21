const glob = require("glob");
const path = require("path");
const webpack = require("webpack");

const basenameWithoutExt = (filePath) => path.basename(filePath).split(".")[0];

const entries = glob.sync(path.resolve(".", "src/Page/*.*")).reduce(
  (acc, entryPath) => ({
    ...acc,
    [basenameWithoutExt(entryPath)]: entryPath,
  }),
  { main: path.resolve(".", "src/main.js") }
);

const outputPath = path.resolve(__dirname, "../app/static/build");

module.exports = {
  context: __dirname,
  entry: entries,
  output: {
    filename: "[name].js",
    path: outputPath,
  },
  resolve: {
    extensions: [".js", ".css"],
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  devServer: {
    contentBase: outputPath,
    compress: true,
    port: 9000,
  },
};
