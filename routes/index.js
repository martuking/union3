var express = require('express');
var router = express.Router();
var indexController = require('../helpers/index');

router.get('/', indexController.index);

module.exports = router;
