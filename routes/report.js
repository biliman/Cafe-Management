var express = require('express');
var router = express.Router();

const db = require('../models');

router.get('/reports', (req, res, next) => {
  res.render('report', {})
})

module.exports = router
