const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/486a82ba57a3decb227e5507262946e5/${latitude},${longitude}?units=si`;
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback(`Unable to connect to forecast services!`);
        } else if (body.error) {
            callback(body.error);
        } else {
            const translateURL = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20190528T092939Z.75c9f136e41a89af.0864ee3dcf8aaf41479bfafe1a1810ad1be808f2&text=${body.daily.data[0].summary}&lang=en-ru`;

            request({ url: translateURL, json: true }, (error, result) => {
                if (error) return callback(`Невозможно найти перевод.`);

                callback(undefined, `${result.body.text[0]}.. Сейчас на месте ${body.currently.temperature} градусов по Цельсию с  ${body.currently.precipProbability * 100}% шансом выпадения осадков. Видимость в ${body.daily.data[0].visibility} метров.`);
            });
        }
    });
};

module.exports = forecast;