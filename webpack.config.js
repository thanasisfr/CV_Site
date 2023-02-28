const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: "./src/index.js",
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader", "postcss-loader"]
            }
        ]
    },
    resolve: { extensions: ["*", ".js", ".jsx"] },
    output: {
        path: path.resolve(__dirname, "dist/"),
        publicPath: "dist/",
        filename: "bundle.js"
    },
    devServer: {
        static: path.join(__dirname, "public/"),
        port: 3000,
        devMiddleware: {
            publicPath: 'http://localhost:3000/'
        },
        hot: "only"
    },
    plugins:
        [new webpack.HotModuleReplacementPlugin()]
};