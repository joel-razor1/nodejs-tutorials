// Functionality: We can read Environment Information, we can communicatewit our terminal, get information
// from the current process on the current file
// console.log(process.argv);
// var flag= process.argv.indexOf('--user');
// console.log(flag);

process.stdout.write('Ask me a question');
process.stdin.on('data', function(answer){
    console.log(answer.toString()); 
})