const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const staticFile = express.static(path.join(__dirname + '/client/build'));
app.use(staticFile);

app.get('/api/customers', (req, res) => {
  const customers = [
    { id: 1, firstName: 'Ardye', lastName: 'Amando' },
    { id: 2, firstName: 'Desta', lastName: 'Riani' },
    { id: 3, firstName: 'Pandya', lastName: 'Panditatwa' },
    { id: 4, firstName: 'Azharico', lastName: 'Darusman' },
    { id: 5, firstName: 'Wahyu', lastName: 'Surya' }
  ];
  res.json(customers);
});
app.use('/*', staticFile);
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
