const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/Root.js',
    devtool: 'inline-source-map',
    plugins: [
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
                loaders: ["style-loader", "css-loader?sourceMap", "resolve-url-loader", "sass-loader?sourceMap",
                    {
                        loader: 'sass-resources-loader',
                        options: {
                            resources: [
                                './src/commonStyles/*.scss'
                            ]
                        }
                    }
                ]
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
};
