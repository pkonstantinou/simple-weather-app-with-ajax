const path = require("path");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: "./src/app.js",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  plugins: [new Dotenv()],
  devtool: "sourcemap",
};
