const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");   

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'}
                ]
            },
            {
                test: /\.(jpg|png)$/,
                use: [
                    {loader: 'url-loader'}
                ]
            }
        ]
    }
}