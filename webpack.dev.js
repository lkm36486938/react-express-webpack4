const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        port: 8000,
        historyApiFallback: true, // history api 를 사용하는 SPA 개발 시 설정한다. 404가 발생하면 index.html 로 리턴함
    }
})