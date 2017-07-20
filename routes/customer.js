let express = require('express')
let router = express.Router()
let db = require('../models')

router.get('/customers', function(req, res){
  db.Customer.findAll()
  .then(customer => {
    res.render('customer',{query:customer})
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

router.get('/edit/:id', function(req, res){
  db.Customer.findById(req.params.id)
    .then ((customer) =>{
    res.render('customers_edit', {data_cus:customer})
  })
})

router.post('/edit/:id', function(req, res){
  db.Customer.update({
    customer_name: `${req.body.customer_name}`,
    no_hp: `${req.body.no_hp}`,
    email: `${req.body.email}`,
    date_of_birth: `${req.body.date_of_birth}`,
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    where: {
      id:`${req.params.id}`
    }
  }).then(() =>{
    res.redirect('/customers')
  })
})


router.get('/delete/:id', function(req, res){
  db.Customer.destroy({
    where:{id:req.params.id}
  }).then(()=>{
    res.redirect('/customers')
  })
})



module.exports = router
