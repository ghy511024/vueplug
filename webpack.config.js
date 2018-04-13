var path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function (env) {
    const cate = env.cate;
    var map = {
        plug: path.resolve(__dirname, './src/index.js'),
        app: path.resolve(__dirname, './user/src/index.js'),
    }
    var entry = {};
    entry[`${cate}/${cate}`] = map[cate];

    return {
        // entry: {"ghy": path.resolve(__dirname, './user/src/index.js')},
        entry: entry,
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, './dist/')
        },
        resolve: {
            extensions: ['.js', '.vue'],
            alias: {
                'vue$': 'vue/dist/vue.runtime.esm.js',
            }
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader'],
                },
                {
                    test: /\.less$/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: [{
                            loader: 'css-loader',
                        }, {
                            loader: 'less-loader',
                        }],
                    }),
                },
                {
                    test: /\.vue$/,
                    loader: 'vue-loader',
                    options: {
                        // postcss: [require('postcss-cssnext')()],
                        extractCSS: true, // 是否单独提取css文件
                    }
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                },
                {
                    test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                    loader: 'url-loader',
                    options: {
                        // limit: config.imgBase64Limit,
                        name: 'static/img/[name].[hash:7].[ext]'
                    }
                },
            ]
        },
        plugins: [
            // new webpack.LoaderOptionsPlugin({
            //     options: {
            //         lessLoader: {
            //             lessPlugins: [
            //                 {
            //                     install (less) {less
            //                         less.functions.functionRegistry.add('px2rem', (px, size) => {
            //                             const newSize = (size && size.value || 750) / 10;
            //                             return new (less.tree.Anonymous)(`${px.value / newSize}rem`);
            //                         });
            //                     },
            //                 },
            //             ],
            //         },
            //     },
            // }),
            new ExtractTextPlugin({
                filename: '[name].css',
            }),
        ]
    }
}