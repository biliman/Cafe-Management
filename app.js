const express = require('express');
let app = express();

// view engine
app.set('view engine', 'ejs');

// Public folder for CSS, JS
app.use(express.static('public'));

// Body Parser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// ITEMS
var item = require('./routes/item')
app.use('/', item)

// CUSTOMERS
var customer = require('./routes/customer')
app.use('/', customer)

// INVOICES
var invoice = require('./routes/invoice')
app.use('/', invoice)

// TRANSACTIONS
var transaction = require('./routes/transaction')
app.use('/', transaction)

// REPORTS
var report = require('./routes/report')
app.use('/', report)


app.listen(process.env.PORT || 3000);