const fs = require("fs");



fs.appendFile("HelloWorld.txt" , ". This line has been added." , (err) => {

    if(err){
        return console.log(err)
    }else{
        return console.log("You message was added to the file.")
    }
})