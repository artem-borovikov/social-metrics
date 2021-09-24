const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const prod = process.env.NODE_ENV === 'production';

module.exports = {
    mode: prod ? 'production' : 'development',
    entry: './src/client/index.tsx',
    output: {
        path: path.resolve(__dirname, "publc"),
        filename: "[name].[hash].js"
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/i,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react",
                            "@babel/preset-typescript",
                        ],
                    },
                },
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    devtool: "inline-source-map",
    devServer: {
        static: path.join(__dirname, "public"),
        historyApiFallback: true,
        port: 4000,
        open: true,
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: '/src/client/index.html',
        }),
        new MiniCssExtractPlugin(),
    ],
};
