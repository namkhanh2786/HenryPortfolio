var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/HenryPortfolio-public/', function(req, res, next) {
  res.render('publicportfolio-Henry/index');
});

module.exports = router;
