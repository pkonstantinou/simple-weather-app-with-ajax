const path = require("path");
// const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname,
    publicPath: "/",
    filename: "bundle.js",
  },
  // plugins: [new Dotenv()],
  devtool: "sourcemap",
};
