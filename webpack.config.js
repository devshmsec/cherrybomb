const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    target: 'electron-main',
    devtool: 'inline-source-map',

    stats: {
        preset: 'minimal',
        colors: true,
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles.css',
        }),
    ],

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: [/\.(s[ac]|c)ss$/i],
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|jpe?g|gif|svg|ttf)$/i,
                use: ['file-loader'],
            },
        ],
    },

    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@src': path.resolve(__dirname, 'src'),
            '@components': path.resolve(__dirname, 'src', 'components'),
            '@views': path.resolve(__dirname, 'src', 'components', 'views'),
            '@interfaces': path.resolve(__dirname, 'src', 'interfaces'),
            '@redux': path.resolve(__dirname, 'src', 'redux'),
            '@utils': path.resolve(__dirname, 'src', 'utils'),
            '@assets': path.resolve(__dirname, 'assets'),
        },
    },
    output: {
        filename: 'renderer.js',
        path: path.resolve(__dirname, 'public'),
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        index: 'index.html',
        hot: false,
        watchContentBase: true,
        liveReload: true,
        port: 9000,
    },
};
