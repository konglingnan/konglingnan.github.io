var express = require('express');
var config = require('./config/index');

var port = process.env.PORT || config.build.PORT;

var app = express();

var router = express.Router();

router.get('/', function (req, res, next) {
	req.url = 'index.html';
	next();
});

app.use(router);

app.use(express.static('./dist'));

var readyPromise = new Promise(resolve => {
  _resolve = resolve
})

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
