const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index',
    module: {
        rules: [
            { test: /\.(ts|js)x?$/, exclude: /node_modules/, use: { loader: 'babel-loader' } },
            { test: /\.css?$/, use: [{ loader: 'style-loader' }, { loader: 'css-loader' }] },
            { test: /\.scss$/, use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'sass-loader' }] },
            { test: /\.(jpg|png)$/, use: { loader: 'file-loader', options: { name: '[path][name].[hash].[ext]' } } },
            {
                test: /\.svg$/,
                use: [{ loader: 'babel-loader' }, { loader: 'react-svg-loader', options: { jsx: true } }],
            },
        ],
    },
    output: { path: path.join(__dirname, '/dist'), filename: 'bundle.js' },
    plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
    resolve: { extensions: ['.ts', '.tsx', '.js'] },
};
