const fs= require('fs');

// fs.rmdirSync("./newDir");
try{
    fs.unlinkSync('./views/delete.js');

}catch(err){
    console.log(err+'here is the error');
}
