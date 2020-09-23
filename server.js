const express = require('express');
const app = express();
const path = require('path');

const root = path.resolve(__dirname, 'dist');
const port = 3000;

app.use(express.static(root)); // 정적파일을 제공한다.
app.use(express.json()); // json 페이로드 구문을 분석한다 (body-parser 기반)

app.get('*', (req, res) => {
  res.sendFile(path.resolve(root, 'index.html'))
})

app.listen(port, () => {
  console.log(`App listening at port: ${port}.`);
});