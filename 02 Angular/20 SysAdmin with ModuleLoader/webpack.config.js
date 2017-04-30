var path = require('path');

module.exports = {
    entry: './app/main.js',
    output: {
        filename: 'bundle.webpack.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader']},
            { test: /\.html/, loader: "raw-loader" }
        ]
    }
};
