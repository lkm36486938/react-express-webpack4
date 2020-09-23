const express = require('express');
const app = express();
const path = require('path');

const root = path.resolve(__dirname, 'dist');
const port = 3000;

app.use(express.json()); // json 페이로드 구문을 분석한다 (body-parser 기반)

// webpack-dev-server express 용 설정
const webpack = require('webpack'); // 웹팩
const webpackConfig = require(path.resolve(__dirname, 'webpack.dev.js')); // 웹팩설정
const webpackCompiler = webpack(webpackConfig); // 웹팩컴파일러
const webpackDevMiddleware = require('webpack-dev-middleware')(webpackCompiler, webpackConfig.devServer)
app.use(webpackDevMiddleware);

// add hot loading middleware
const webpackHotMiddleware = require('webpack-hot-middleware')(webpackCompiler);
app.use(webpackHotMiddleware);

app.use(express.static(root)); // 정적파일을 제공한다.

app.get('*', (req, res) => {
  res.sendFile(path.resolve(root, 'index.html'))
})

app.listen(port, () => {
  console.log(`App listening at port: ${port}.`);
});