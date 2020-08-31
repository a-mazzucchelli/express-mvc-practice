const axios = require('axios');
require('dotenv').config({ path: '.env' });
const api_key = process.env.API_KEY;

const Weather = require('../module/Weather');

exports.renderHomePage = (req, res) => {
  res.render('index');
};

exports.getWeather = (req, res) => {
  const city = req.body.city;
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;

  const weather = new Weather(req.body.city);
  weather.validateUserInput();

  if (weather.errors.length) {
    res.render('index', {
      error: weather.errors.toString(),
    });
  } else {
    axios
      .get(url)
      .then((response) => {
        const { temp: temperature } = response.data.main;
        const { name: location } = response.data;
        res.render('index', {
          weather: `It is currently ${temperature} in ${location}`,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
};

exports.renderAboutPage = (req, res) => {
  res.render('about');
};
