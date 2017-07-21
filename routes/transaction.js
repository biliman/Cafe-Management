var express = require('express');
var router = express.Router();

const db = require('../models');

router.get('/transactions', (req, res, next) => {
  db.Customer.findAll({
    include: db.Item
  })
  .then(customerItem => {
    res.render('transaction', {query: customerItem})
  })
})

router.get('/transactions/add', (req, res, next) => {
  db.Customer.findAll()
  .then((customer) => {
    db.Item.findAll()
    .then((item) => {
      res.render('transaction_add', {data_cus:customer, data_item:item})
    })
  })
})

router.post('/transactions/add', (req, res, next) => {
  db.Customer_Item.create({
    CustomerId: req.body.dropdown_cus,
    ItemId:req.body.dropdown_item,
    // quantity:req.body.qty,
    createdAt: new Date(),
    updatedAt: new Date()
  })
  .then(added => {
    res.redirect('/transactions')
  })
  .catch(err => {
    res.send('Error = ' + err.message)
  })
})



























router.get('/delete/:id', (req, res) => {
  db.Transaction.destroy({
    where: {id:req.params.id}
  })
  .then(() => {
    res.redirect('/transactions')
  })
  .catch(err => {
    res.send("Error : " + err.message);
  })
})



module.exports = router