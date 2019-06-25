const fs=require('fs');
fs.writeFile('data.txt','Hello this file just has been created','utf8',(err)=>{
    if(err) return err;
    console.log("The file has been saved again.")
});

fs.appendFile('data.txt','Hello this file just has been created again','utf8',(err)=>{
    if(err) return err;
    console.log("The file has been saved again.")
});