// GLOBALS - NO WINDOW !!!
// ----------------------------------------
// __dirname - path to currenet directory
// __filename - file name
// require - function to use modules ( Common JS )
// module - info about current module ( file )
// process - info about env where the program is being executed
let i=0;
console.log(__dirname);
setInterval(()=>console.log(i++),1000);
