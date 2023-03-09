const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

console.log(path.join(__dirname, 'src'))

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',

    entry: {
        app: './src/js/index.js',
    },

    output: {
        clean: true,
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },

    devServer: {
        static: path.join(__dirname, 'src'),
        compress: true,
        port: 9000,
        hot: true,
    },

    optimization: {
        runtimeChunk: 'single',
    },

    module: {
        rules: [
            {
                test: /\.(s[ac]ss|css)$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                exclude: [/node_modules/],
                loader: 'babel-loader',
            },
        ],
    },

    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@images': path.resolve(__dirname, 'src/images'),
            '@styles': path.resolve(__dirname, 'src/styles'),
        },
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'LunarTrade',
            template: 'src/index.html',
        }),
    ],
}
