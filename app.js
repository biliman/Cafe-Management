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

// TRANSACTIONS
var transaction = require('./routes/transaction')
app.use('/', transaction)

app.listen(process.env.PORT || 3000);