var express = require('express')
var router = express.Router()
const db = require('../models')

router.get('/customers', function(req, res){
  db.Customer.findAll()
  .then(customer => {
    res.render('customer', {query:customer})
  })
})

router.get('/customers/add', function(req,res){
  res.render('customer_add')
})

router.post('/customers/add', function(req, res){
  db.Customer.create({
    customer_name: req.body.customer_name,
    no_hp: req.body.no_hp,
    email: req.body.email,
    date_of_birth: req.body.date_of_birth,
    createdAt: new Date(),
    updatedAt: new Date()
  }).then(() =>{
    res.redirect('/customers')
  })
})

router.get('/customers/edit/:id', function(req, res){
  db.Customer.findById(req.params.id)
    .then (customer => {
    res.render('customer_edit', {query:customer})
  })
})

router.post('/customers/edit/:id', function(req, res){
  db.Customer.update({
    customer_name: req.body.customer_name,
    no_hp: req.body.no_hp,
    email: req.body.email,
    date_of_birth: req.body.date_of_birth,
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    where: {
      id:req.params.id
    }
  }).then(() =>{
    res.redirect('/customers')
  })
})


router.get('/customers/delete/:id', function(req, res){
  db.Customer.destroy({
    where:{id:req.params.id}
  }).then(()=>{
    res.redirect('/customers')
  })
})



module.exports = router
