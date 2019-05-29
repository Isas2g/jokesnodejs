const path = require('path');
const express = require('express');
const hbs = require('hbs');
// const passport = require('passport');

const routerPages = require('./routers/pages.js');

app = express();
const port = process.env.PORT || 3000;

// Создаём пути для конфига express
const publicDirectory = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Установка шаблонизатора и указание путей для него
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Установка статичной директории чтобы обслуживать
app.use(express.static(publicDirectory));
app.use(routerPages);



app.get('/help', (req, res) => {
    res.render('help', { title: 'Помощь с выбором' });
});

app.get('/info', (req, res) => {
    res.render('info', { title: 'О нас' });
});

app.get('/register', (req, res) => {
    res.render('register');
});

app.get('*', (req, res) => {
    res.render('error404');
})

app.listen(port, () => console.log('Server running on http://127.0.0.1:3000'));