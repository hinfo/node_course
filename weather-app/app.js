const request = require("request");

const url = 'https://api.darksky.net/forecast/191b575eda7bb7ad18c454457cd663ae/37.8267,-122.4233'

request({ url: url, json: true }, (error, response) => {
    // const data = JSON.parse(response.body)
    // console.log(data.currently.temperature);
    console.log(response.body.daily.data[0].summary + ' It is currently '
        + response.body.currently.temperature + ' degrees out. There is a ' + response.body.currently.precipProbability +
    '% chance of rain.');
});