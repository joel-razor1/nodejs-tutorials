const fs=require('fs');

//readdir is used to read the content of the directories
fs.readdir('.',(err,content)=>{
    if(err) return err;
    console.log(content);
});

//readFile is used to read the contents of the file . 
//NOTE: make sure to tell in which format it should read.. here it is UTF-8... it means read it in the text format
fs.readFile('file-reading.js','UTF-8',(err,content)=>{
    console.log(content);
});