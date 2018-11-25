/*
* 1. webpack.config.js
* 2018.11.25
* */

const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");//css分离打包
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");//js压缩
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin"); //css压缩
const HtmlWebpackPlugin = require("html-webpack-plugin");//生成html文件
const htmlArr =  require("./config/htmlConfig");
const getEntry =  require("./config/getEntry");
let entry =  getEntry('./src');

module.exports = (env, argv) =>({
    mode:'production',
    //配置入口
    entry: entry,
    //配置出口
    output: {
        path: path.join(__dirname, 'dist'),
        filename:'[name].[hash:8].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader:"babel-loader",
                    options:{
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                },
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(scss|css)$/, //css打包 路径在plugins里
                use: [
                    argv.mode == "development" ? { loader: "style-loader"} :MiniCssExtractPlugin.loader,
                    { loader: "css-loader", options: { url: false, sourceMap: true } },
                    { loader: "sass-loader", options: { sourceMap: true } }
                ]
            },
            {
                test: /\.(png|jpg)$/,
                use:[
                    {
                        loader: "url-loader",
                        options: {
                            name: "./images/[name].[ext]",
                            limit: 8192
                        }
                    }
                ]
            },
        ],
    },
    plugins:[
        ...htmlArr,
        new MiniCssExtractPlugin({ //分离css插件
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ],
    devServer: {
        port: 3100,
        open: true,
    },
    optimization: {
        minimizer: [//压缩js
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: false
            }),
            new OptimizeCSSAssetsPlugin({})
        ],
        splitChunks: { //压缩css
            cacheGroups: {
                styles: {
                    name: "styles",
                    test: /\.css$/,
                    chunks: "all",
                    enforce: true
                }
            }
        }
    }
})