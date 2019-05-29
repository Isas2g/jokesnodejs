const express = require('express');

const geocode = require('../utils/geocode.js');
const forecast = require('../utils/forecast.js');

const router = new express.Router();

function getForecast(address, callback) {
    geocode(address, (error, { latitude, longitude, placeName: location } = {}) => {
        if (error) return callback(error);

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) return callback(error);

            callback(undefined, forecastData, location);
        });
    });
}

// Роут главной страницы
router.get('', (req, res) => {
    res.render('index', {
        title: 'Красивейшие места России'
    });
});

router.get('/lenskie', (req, res) => {

    const address = 'Lenskie Stolby';

    getForecast(address, (error, forecast, location) => {
        let weather;

        if (error) {
            weather = 'Невозможно подключиться к API. Проверьте подключение.';
        } else {
            weather = forecast;
        }

        res.render('lenskie', {
            title: 'Ленские Столбы',
            weather,
            location
        });
    });
});

router.get('/geyzer', (req, res) => {
    const address = 'Kamchatka';

    getForecast(address, (error, forecast, location) => {
        let weather;

        if (error) {
            weather = 'Невозможно подключиться к API. Проверьте подключение';
        } else {
            weather = forecast;
        }

        res.render('geyzer', {
            title: 'Долина Гейзеров',
            weather,
            location
        });
    });
});

router.get('/baikal', (req, res) => {
    const address = 'Lake Baikal';

    getForecast(address, (error, forecast, location) => {
        let weather;

        if (error) {
            weather = 'Невозможно подключиться к API. Проверьте подключение';
        } else {
            weather = forecast;
        }

        res.render('baik', {
            title: 'Озеро Байкал',
            weather,
            location
        });
    });
});

router.get('/plato', (req, res) => {
    const address = 'Norilsk';

    getForecast(address, (error, forecast, location) => {
        let weather;

        if (error) {
            weather = 'Невозможно подключиться к API. Проверьте подключение';
        } else {
            weather = forecast;
        }

        res.render('put', {
            title: 'Плато Путорана',
            weather,
            location
        });
    });
});

router.get('/elbrus', (req, res) => {
    const address = 'Elbrus';

    getForecast(address, (error, forecast, location) => {
        let weather;

        if (error) {
            weather = 'Невозможно подключиться к API. Проверьте подключение';
        } else {
            weather = forecast;
        }

        res.render('elb', {
            title: 'Эльбрус',
            weather,
            location
        });
    });
});

router.get('/altai', (req, res) => {
    const address = 'Altai';

    getForecast(address, (error, forecast, location) => {
        let weather;

        if (error) {
            weather = 'Невозможно подключиться к API. Проверьте подключение';
        } else {
            weather = forecast;
        }

        res.render('alt', {
            title: 'Алтайские горы',
            weather,
            location
        });
    });
});

module.exports = router;