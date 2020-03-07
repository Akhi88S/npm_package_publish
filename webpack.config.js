var path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/dropdown1.jsx',
    output: {
        path: path.resolve('lib'),
        filename: 'dropdown1.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            }
        ]
    }
}
