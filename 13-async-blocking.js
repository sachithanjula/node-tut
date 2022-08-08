const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('Welcome to home page');

    } else if(req.url === '/about') {

        //Blocking Code
        for (let i = 0; i < 1000; i++) {
            for (let j = 0; j < 1000; j++) {
                console.log(`${i} ${j}`);
            }
        }
    

        res.end('Welcome to about');

    } else {
        res.end('Error page');
    }
});

server.listen(5000, () => {
    console.log("Server listen to port 5000");
});