var client = require("./dbsjs")

client.connect();
client.query('ALTER TABLE students ADD  date_entry DATE NOT NULL',(err,result)=>{

    if(!err){
        console.log('Date column added successfully..');
    }

    client.end();
});

const express = require("express");
const app = express();
app.get("/",(req,res)=>{
    res.send("Date column inserted");
});

app.listen(3000,()=> console.log("Server started"));
