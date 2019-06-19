// Node does not treat the same variable as the window object does
//Node does not add variables to the global whereas windows does.
var name="JOel"
global.console.log("Hello from home"); 
// This is sending the window object
//If we want to use a variable on another file, we have to export from the file and import it to the required file
var name1="Johnson"
var new_name1=name.toUpperCase(name);
global.console.log(`newName variable is ${new_name1}`); //Note that we have used tilde and not single quotes

console.log(__dirname); 
//This shows the directory name
console.log(__filename);
//This shows the filename

var path=require('path');
console.log(path.basename(__filename));
