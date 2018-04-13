var path = require('path');


module.exports = function (env) {
    const cate = env.cate;
    var entry = {
        t1: path.resolve(__dirname, './user/src/index.js'),
        t2: path.resolve(__dirname, './src/index.js'),
    };

    return {
        entry: entry[cate],
        output: {
            path: path.resolve(__dirname, './dist'),
            filename: './[name].js'
        },
        module: {
            loaders: [
                {
                    test: /\.vue$/,
                    loader: 'vue-loader'
                },
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    query: {
                        presets: 'es2015'
                    },
                    exclude: /node_modules/
                }
            ]
        },
        plugins: []
    }
}