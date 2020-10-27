const fs = require('fs');
const path = require('path');
const p = path.join(path.dirname(process.mainModule.filename),'data','myData.json');

module.exports=class Person{
    constructor(person){
        this.firstName= person.firstName;
        this.lastName=person.lastName;
        this.Age=person.Age;
        this.dob=person.dob;
        this.ssi=person.ssi;
        this.ts=person.ts;
        this.ss=person.ss;
        this.img=person.img;
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

    static fetchData(callBack){
        fs.readFile(p, (error,fileContent)=>{
            if(error){
                callBack([]);
            }
            callBack(JSON.parse(fileContent));
        })
    }
}