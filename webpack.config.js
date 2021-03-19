const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {scss} = require('svelte-preprocess');

let mode = process.env.NODE_ENV || "development";
mode = mode.trim();
const prod = mode === 'production';


console.log("NODE_ENV: ", mode, prod);
module.exports = {
    mode,
    entry: {
        polyfill: [
            'core-js/stable',
            'regenerator-runtime',
            '@webcomponents/custom-elements'
        ],
        main: ['./src/script/main.js']
    },
    resolve: {
        alias: {
            svelte: path.resolve('node_modules', 'svelte'),
            '@components': path.resolve(__dirname, 'src/script/components/'),
            '@script': path.resolve(__dirname, 'src/script/'),
            '@assets': path.resolve(__dirname, 'src/assets/'),
            '@style': path.resolve(__dirname, 'src/style/')
        },
        extensions: ['.mjs', '.js', '.svelte'],
        mainFields: ['svelte', 'browser', 'module', 'main']
    },
    output: {
        path: __dirname + '/dist',
        filename: './script/[name].js',
        chunkFilename: '[name].[id].js'
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                use: 'babel-loader',
                exclude: /(node_modules|node_modules(\/|\\)svelte)/,
            },
            {
                test: /\.(svelte)$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            plugins: (prod ? ['transform-remove-console'] : [])
                        }
                    },
                    {
                        loader: 'svelte-loader',
                        options: {
                            emitCss: true,
                            hotReload: true,
                            preprocess:[
                                scss()
                            ]
                        }
                    }
                ],
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: './assets'
                        }
                    }
                ]
            }
        ]
    },
    // mode,
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({template: 'src/index.html'}),
        new MiniCssExtractPlugin({
            filename: './style/[name].css'
        })
    ],
    devtool: prod ? false : 'eval-source-map',
    devServer: {
        host: 'localhost',
        port: '7777',
        open: true
    }
};
