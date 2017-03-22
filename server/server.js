const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));
app.use('/bundles', express.static(path.join(__dirname, '../bundles')));

app.get('/api/test', (req,res,next) => {
  res.send(' What is up?');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});