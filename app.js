const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello from your first Node.js app!');
});

app.listen(PORT, () => {
  console.log(`App is running at http://localhost:${PORT}`);
});
