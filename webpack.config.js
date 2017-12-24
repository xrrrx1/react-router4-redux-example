const path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/build/'
    },
    module: {
        rules: [
            {
                test: /\.js/,
                use:[
                    {
                        loader: 'babel-loader',
                        options: { presets: ["react", "es2015", "env", "stage-0", "react-hmre"] }
                    }
                ]
            },
            {
                test: /\.sass$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader' ]
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },
    devServer: {
        proxy: {
            "/api": {
                target: "http://localhost:3001"
            },
        },
        historyApiFallback: true,
        port: 5050
    },
};
