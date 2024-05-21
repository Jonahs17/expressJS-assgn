const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({ msg: 'I am homepage' });
});

app.get('/about', (req, res) => {
  res.json({ msg: 'I am about page' });
});

app.get('/contact', (req, res) => {
  res.json({ email: 'support@pwskills.com' });
});

const port = 5007;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
