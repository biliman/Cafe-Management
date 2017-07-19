let express = require('express')
let router = express.Router()
let db = require('../models')

router.get('/', function(req, res){
  db.Customer.findAll()
  .then(customer => {
    res.render('customers',{data_cus:customer})
  // res.send("uhuuuuuy");
  })
})

router.get('/add_customers', function(req,res){
  res.render('customers_add')
})

router.post('/add_customers', function(req, res){
  db.Customer.create({
    customer_name: req.body.Name,
    no_hp: req.body.Telephone,
    email: req.body.email,
    date_of_birth: new Date(),
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
