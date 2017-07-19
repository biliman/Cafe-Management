var express = require('express');
var router = express.Router();

const db = require('../models');

router.get('/transactions', (req, res, next) => {
  db.Transaction.findAll()
  .then(transactions => {
    res.render('transaction', {query: transactions})
  })
})

module.exports = router