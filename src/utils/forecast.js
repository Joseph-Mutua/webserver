const request = require('request');
const log = console.log;

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.openweathermap.org/data/2.5/onecall?&units=metric&lat=${latitude}&lon=${longitude}&%20&appid=d18f6e53f610b112cec2414b0a7f9b39`;

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback("Unable to connect to weather service", undefined);
        }
        else if (body.cod) {
            callback("Unable to find the location!", undefined);
        }

        else {
            const currWeather = body.current;
            callback(undefined, `It is currently ${currWeather.temp} degrees celsius outside but feels like${currWeather.feels_like}. 
            The humidity is about ${currWeather.humidity} percent. Current visibility about ${currWeather.visiblity} Metres with ${currWeather.weather}.
            Sunrise: ${currWeather.sunrise} UTC
            Sunset: ${currWeather.sunset} UTC`);
        }
    });

};

module.exports = forecast;
