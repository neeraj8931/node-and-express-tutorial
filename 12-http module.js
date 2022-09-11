// HTTP module 

const http = require('http');

const server= http.createServer((req,res)=>{
    console.log(req);
    if(req.url === '/'){
        res.write('Welcome to our homepage');
    }
    if(req.url === '/about'){
        res.write('Welcome to our about');
    }
   res.end(`
   <h1>OPPS !</h1>
   <p>We did not find a page that you are looking for.</p>
   `);
})

server.listen(5000);