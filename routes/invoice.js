var express = require('express');
var router = express.Router();

const db = require('../models');

router.get('/invoices', (req, res, next) => {
  db.Invoice.findAll()
  .then(invoice => {
    res.render('invoice', {query: invoice})
  })
  .catch(err => {
    res.send('Error = ' + err.message)
  })
})

module.exports = router