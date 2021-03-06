const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

module.exports = (app) => {
  app.use(morgan('dev'));
  app.use(cookieParser());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
};
