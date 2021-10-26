const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');


const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const PATHS = {
    src: path.resolve(__dirname, 'src'),
    dist: path.resolve(__dirname, 'assets'),
};

PATHS.imgFolder = PATHS.src + '/assets/images';
PATHS.fontFolder = PATHS.src + '/assets/fonts';
PATHS.pages = PATHS.src + '/pages';


module.exports = {
    entry: {
        main: `${PATHS.pages}/main`,
        'front-page': `${PATHS.pages}/front-page`,
    },
    output: {
        filename: 'js/[name].min.js',
        path: PATHS.dist,
        assetModuleFilename: `images/[hash][ext][query]`
    },
    devtool: isDev ? 'eval-source-map' : false,
    devServer: {
        contentBase: PATHS.dist,
        port: 3333,
        watchContentBase: true,
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].min.css'
        })
    ],
    module: {
        rules: [{
            test: /\.less$/,
            use: [{
                loader: MiniCssExtractPlugin.loader,
                options: {
                    publicPath: ''
                },
            },
                'css-loader',
                'less-loader',
                {
                    loader: "postcss-loader",
                    options: {
                        postcssOptions: {
                            config: path.resolve(__dirname, "postcss.config.js"),
                        },
                    },
                },
            ]
        },
            {
                test: /\.(s[ac]|c)ss$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: ''
                    },
                },
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                config: path.resolve(__dirname, "postcss.config.js"),
                            },
                        },
                    },
                    "sass-loader",
                ],
            },
            {
                test: /\.(js|ts|jsx)$/,
                exclude: /node_modules/,
                use: [{
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env'],
                        cacheDirectory: true,
                    }
                }]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: `images/[name][ext]`
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: `fonts/[name][ext]`,
                    // publicPath: '../',n
                }
            },
        ]
    },
    optimization: {
        minimize: isProd,
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin()
        ]
    },
    resolve: {
        extensions: ['.js', '.ts', '.jsx', '.css', '.less', '.scss', '.sass']
    }
}