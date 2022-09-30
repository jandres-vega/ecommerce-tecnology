const express = require('express');

const cors = require('cors');

const morgan = require('morgan');

const {logError, boomErrorHandler, errorHandler} = require('./middlewares/errors.handles');

const {routes} = require('./routes/index');

let app = express();

const whitelist = ['http://localhost:3006'];

app.use(cors({
    origin: whitelist
}));

app.use(morgan('dev'));

app.use(express.json())

routes(app);

app.use(logError);
app.use(boomErrorHandler);
app.use(errorHandler);

module.exports = app;