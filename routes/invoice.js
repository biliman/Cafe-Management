var express = require('express');
var router = express.Router();

const db = require('../models');

router.get('/invoices', (req, res, next) => {
  db.Invoice.findAll()
  .then(invoices => {
    db.Customer.findAll({
      where: {id: invoices[0].CustomerId}
    })
    .then(customer => {
      res.render('invoice', {query: invoices, query2: customer})
    })
  })
})

router.get('/invoices/add', (req, res, next) => {
  res.render('invoice_add', {})
})

router.post('/invoices/add', (req, res, next) => {
  
})

module.exports = router