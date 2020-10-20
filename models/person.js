const fs = require('fs');
const path = require('path');
const p = path.join(path.dirname(process.mainModule.filename),'data','myData.json');

module.exports=class Person{
    constructor(person){
        this.firstName= person.firstName;
        this.lastName=person.lastName
    }

    saveData(){
        fs.readFile(p, (error,fileContent)=>{
            let myData=[];
            if(!error){
                myData= JSON.parse(fileContent);
                console.log("data read from file" + myData);
            }

            myData.push(this);
            fs.writeFile(p, JSON.stringify(myData), (error)=>{
                console.log("error: ", error);
            });               
        });
    }
}