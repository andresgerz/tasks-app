/* const path = require('path');
const htmlWebpackPlugin =  require('html-webpack-plugin');
const miniCssExtractPlugin =  require('mini-css-extract-plugin');


module.exports = {
    
    entry: './index.js',
    output: {
        path: path.resolve(__dirname + 'dist'),
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    miniCssExtractPlugin.loader, 
                    'css-loader'
                ]
            }
        ]
    },

    plugins:  [
        new miniCssExtractPlugin({
            filename: 'main.css'
        })
    ]
}; */