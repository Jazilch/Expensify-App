const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '..', 'build');

app.use(express.static(publicPath));

app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
})

app.listen(port, () => {
  console.log(`Server is listening on PORT ${port}`);
});
