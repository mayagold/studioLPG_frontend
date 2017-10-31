const express = require('express');
const app = express();
const PORT = process.env.PORT || 2045;

app.use(express.static('public'));

app.listen(PORT, ()=> {
  console.log('listening on port', PORT);
})
