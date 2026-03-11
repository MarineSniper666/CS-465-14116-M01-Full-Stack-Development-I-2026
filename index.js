const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();
const indexRouter = require('./app_server/routes/index');

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'app_server', 'views'));

app.use('/', indexRouter);
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
