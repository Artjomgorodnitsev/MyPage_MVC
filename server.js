const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const errorPage = require('./routes/404');
const adminRoute=require('./routes/admin');
const mainPageRoute = require('./routes/main')
const app = express();


app.set('view engine', ejs);
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

app.use(mainPageRoute);
app.use(adminRoute);
app.use(errorPage);


app.listen(3000, ()=>{
    console.log("server is running on port 3000.")
});