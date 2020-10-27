const Person = require('../models/person');

exports.getAdminPage = (req,res)=>{
    res.render('admin.ejs');
}

exports.saveuserData = (req,res) =>{
    console.log(req.body);
    let user = {
        firstName: req.body.firstName,
        lastName:req.body.lastName,
        Age:req.body.Age,
        dob:req.body.dob,
        ssi:req.body.ssi,
        ts:req.body.ts,
        ss:req.body.ss,
        img:req.body.img
    }

    const person = new Person(user);
    person.saveData();
    res.redirect('/admin');
}