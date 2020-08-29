const path = require('path');
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));
app.set('views', 'views');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Express Weather Finder',
  });
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.listen(3000, () => {
  console.log('App running on port 3000');
});
