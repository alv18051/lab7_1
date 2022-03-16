const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin }= require("clean-webpack-plugin");

module.exports = {
    mode: "development",
    entry: './src/index.js',
    output:{
        filename: "main-bundle.js",
        path: path.resolve(__dirname,"bundle")
    },

    plugins: [
        new CleanWebpackPlugin(), 
        new MiniCssExtractPlugin({
          filename: "main-bundle.css"
        }),
        
          new HtmlWebpackPlugin({
            template: "src/index.html",
          }),
    ],

    module: {
        rules: [
          {
            test: /\.css$/, 
            use: [MiniCssExtractPlugin.loader, "css-loader"],
          },
        ]
    },
};
