const fs = require("fs");

fs.writeFile("HelloWorld.txt", "Hello World!" , (err) =>{
    if(err){
        console.log(err)
    }else{
        console.log("Your File has been created!")
    }
})