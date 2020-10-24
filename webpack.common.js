const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            /* Style and CSS Loader */
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader', options: { importLoaders: 1 }
                    },
                    'postcss-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif|jpeg)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    plugins: [
        /* HTML Webpack Plugin */
        new HtmlWebpackPlugin({
            template: "./index.html",
            filename: "index.html"
        }),
        new HtmlWebpackPlugin({
            template: "./src/pages/about.html",
            filename: "pages/about.html"
        }),
        new HtmlWebpackPlugin({
            template: "./src/pages/home.html",
            filename: "pages/home.html"
        }),
        new HtmlWebpackPlugin({
            template: "./src/pages/skill.html",
            filename: "pages/skill.html"
        }),
        new HtmlWebpackPlugin({
            template: "./src/pages/education.html",
            filename: "pages/education.html"
        }),
        /* Clean Dist Folder every run */
        new CleanWebpackPlugin()
    ],
    devServer: {
        watchContentBase: true,
        contentBase: path.resolve(__dirname, 'dist'),
        open: true,
        host: '0.0.0.0',
        disableHostCheck: true
    }
}