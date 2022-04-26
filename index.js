const express = require('express');
const expressSession = require('express-session');
const bodyParser = require('body-parser'); 
const app = express();
const mongoose = require('mongoose');
require('dotenv').config()

const cors = require('cors');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(expressSession({ resave: false ,secret: '123456' , saveUninitialized: true}));
app.use(express.static(__dirname + '/www'));


// app.use(express.json());
// app.use(expressSession({
//   secret: 'Jujunaa, because this a secret',
//   resave: false,
//   saveUninitialized: true,
//   cookie: { }
// }))

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error',(error)=> console.error(error))
db.once('open',()=>console.log('Connected to Database'))
//! use router 
app.use('/', require('./src/routes'));




app.listen(3000, () => {
  console.log('Application is running on port 3000');
});