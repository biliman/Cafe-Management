var express = require('express');
var router = express.Router();

const db = require('../models');

router.get('/', (req, res, next) => {
  db.Item.findAll()
  .then(items => {
    res.render('item', {query: items})
  })
})

router.get('/items', (req, res, next) => {
  db.Item.findAll()
  .then(item => {
    res.render('item', {query: item})
  })
  .catch(err => {
    res.send('Error = ' + err.message)
  })
})

router.get('/items/add', (req, res, next) => {
  res.render('item_add')
})

router.post('/items/add', (req, res, next) => {
  db.Item.create(req.body)
  .then(added => {
    res.redirect('/items')
  })
  .catch(err => {
    res.send('Error = ' + err.message)
  })
})

router.get('/items/edit/:id', (req, res, next) => {
  db.Item.findOne({
    where: {id: req.params.id}
  })
  .then(itemById => {
    res.render('item_edit', {query: itemById})
  })
  .catch(err => {
    res.send("Error : " + err.message);
  })
})

router.post('/items/edit/:id', (req, res, next) => {
  db.Item.update({
    nama_item: req.body.nama_item,
    price_purchasing: req.body.price_purchasing,
    price_selling: req.body.price_selling,
    updatedAt: new Date()
  },{
    where: {id: req.params.id}
  })
  .then(() => {
    res.redirect('/item')
  })
  .catch(err => {
    res.send("Error : " + err.message);
  })
})

router.get('/items/delete/:id', (req, res, next) => {
  db.Item.destroy({
    where: {id: req.params.id}
  })
  .then(() => {
    res.redirect('/items')
  })
  .catch(err => {
    res.send("Error : " + err.message);
  })
})

module.exports = router
