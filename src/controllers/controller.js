const axios = require('axios');
require('dotenv').config({ path: '.env' });
const api_key = process.env.API_KEY;

exports.renderHomePage = (req, res) => {
  res.render('index');
};

exports.getWeather = (req, res) => {
  const city = req.body.city;
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
  axios
    .get(url)
    .then((response) => {
      res.render('index', {
        weather: `It is currently ${response.data.main.temp} in ${city}`,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

exports.renderAboutPage = (req, res) => {
  res.render('about');
};
