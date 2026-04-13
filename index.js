const express = require('express');
const path = require('path');
const hbs = require('hbs');
const cors = require('cors');

process.env.JWT_SECRET = 'mysecretkey';

require('./app_api/models/db');
require('./app_api/models/travlr');
require('./app_api/models/users');

require('./app_api/models/db');
require('./app_api/models/travlr');
require('./app_api/models/users');

var passport = require('passport');
require('./app_api/config/passport');

const app = express();
app.use(cors());
app.use(express.json());
app.use(passport.initialize());
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