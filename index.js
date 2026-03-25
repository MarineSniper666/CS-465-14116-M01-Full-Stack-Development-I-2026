const express = require('express');
const path = require('path');
const hbs = require('hbs');

require('./app_api/models/db');
require('./app_api/models/travlr');

const app = express();
const indexRouter = require('./app_server/routes/index');
const apiRouter = require('./app_api/routes/index');

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'app_server', 'views'));
hbs.registerPartials(path.join(__dirname, 'app_server', 'views', 'partials'));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', apiRouter);
app.use('/', indexRouter);

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});