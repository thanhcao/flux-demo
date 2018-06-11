const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const extractSass = new ExtractTextPlugin({
    filename: "style.[chunkhash].css",
    disable: false,
    allChunks: true
});

module.exports = {
    entry: './src/root.js',
    output: {
        path: path.resolve(__dirname, "build"),
        filename: '[name].[chunkhash].js',
        publicPath: '/',
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: 'assets',
                to: 'assets'
            }
        ]),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        extractSass,
        new UglifyJSPlugin(),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.optimize.AggressiveMergingPlugin(),
        new HtmlWebpackPlugin({
            title: 'Flux Demo',
            template: 'index.template.html',
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: [
                        '@babel/react',
                        '@babel/env'
                    ],
                    plugins:[
                        'transform-decorators-legacy',
                        'transform-object-rest-spread',
                        'transform-class-properties'
                    ]
                }
            },
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    fallback: "style-loader",
                    use: ["css-loader","resolve-url-loader","sass-loader",{
                        loader: 'sass-resources-loader',
                        options: {
                            resources: [
                                './src/commonStyles/*.scss'
                            ]
                        }
                    }]
                })
            },
            {
                test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp)(\?.*)?$/,
                loader: 'url-loader'
            }
        ]
    },
    resolve: {
        modules: [
            path.resolve('./src'),
            path.resolve(__dirname, 'node_modules')
        ]
    }
}