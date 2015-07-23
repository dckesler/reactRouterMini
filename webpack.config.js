var webpack = require("webpack");

module.exports = {
  entry: [
    "./react/App.jsx"
  ],
  output: {
    path: "./public",
    filename: "bundle.js",
    publicPath: "/"
  },
  module: {
    loaders: [
      { test: /\.jsx$/, loader: "babel", exclude: [/node_modules/]}
    ]
  }
}
