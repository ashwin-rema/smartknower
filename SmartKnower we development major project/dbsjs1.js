
var client = require("./dbsjs")

client.connect();
client.query('select * from students',(err,result)=>{

    if(!err){
        const express = require("express");
        const app = express();
        app.get("/",(req,res)=>{
            res.send(result.rows);
        });

        app.listen(5000,()=> console.log("Server started"));

        console.log(result.rows);
    }

    client.end();
});




