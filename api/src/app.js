const express = require('express');

const morgan = require('morgan');

const {logError, boomErrorHandler, errorHandler} = require('./middlewares/errors.handles');

const {routes} = require('./routes/index');

let app = express();

app.use(morgan('dev'));

app.use(express.json())

routes(app);

app.use(logError);
app.use(boomErrorHandler);
app.use(errorHandler);

module.exports = app;