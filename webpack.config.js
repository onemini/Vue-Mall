const webapack = require("webpack");
const path = require("path");

const htmlWebpackPlugin=require("html-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: [path.join(__dirname, './src/js/main.js')],
    output: {
        path: path.join(__dirname, "./dist/js"),
        filename: 'bundle.js'
    },
    plugins:[
        new webapack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            template:path.join(__dirname,'./src/index.html'),
            filename: 'index.html'
        }),
      
        new VueLoaderPlugin()
    ],
    module:{
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            {test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=7630&name=[hash:8]-[name].[ext]'},
            {test:/\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader'},
            {test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
            {test: /\.vue$/, use: 'vue-loader'}
        ]
    }

}

