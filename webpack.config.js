const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        library: '1byte-react-design',
        libraryTarget: 'umd',
        globalObject: 'this',
        umdNamedDefine: true,
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        plugins: [new TsconfigPathsPlugin({ configFile: "./tsconfig.json" })]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    externals: {
        react: 'react',
        'react-dom': 'react-dom',
    },
};