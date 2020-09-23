const express = require('express')
const app = express();
const port = 3001;

app.use(express.static(`${__dirname}/build`));

app.get('/api/hello', (req, res) => {
  res.json({message: 'Hello world'});
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});