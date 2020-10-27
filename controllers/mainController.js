const Person = require('../models/person');

exports.fetchPersonData = (req,res)=>{
    Person.fetchData(person =>{
        console.log(person);
        res.render('index.ejs',{personData: person});
    });
    
}