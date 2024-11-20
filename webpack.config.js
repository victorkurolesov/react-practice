const { default: test } = require('node:test');
const path = require('path');

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        port: 3000,
        compress: true
    },
    module: {
      rules: [
        {
            test: /\.ts?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        }
      ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx']
    }
}
