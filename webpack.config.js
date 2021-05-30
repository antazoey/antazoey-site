const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/site/index.jsx",
  mode: process.env.NODE_ENV,
  performance: {
    hints: false
  },
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index-bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|gif|svg|pdf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "images",
            },
          },
        ],
      },
    ],
  },
  resolve: {
    modules: [
      "node_modules",
      path.resolve(__dirname, "app"),
    ],
    extensions: [".js", ".json", ".jsx", ".css", ".png", ".jpg"],
    alias: {
      Components: path.resolve(__dirname, "src/site/Components/"),
      Images: path.resolve(__dirname, "src/site/Images/"),
      Styles: path.resolve(__dirname, "src/site/Styles/"),
      Utilities: path.resolve(__dirname, "src/site/Utilities/"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    })
  ],
};
