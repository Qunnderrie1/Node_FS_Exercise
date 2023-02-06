const fs = require("fs");

fs.readFile("HelloWorld.txt" , "utf-8", (err, data) => {

    if(err){
       return console.log(err)
    }else{
        return console.log(data)
    }
})