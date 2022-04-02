const http = require("http");
const fs = require("fs");

http.createServer((request, responce)=>{
    if(request.url === "/" || request.url === "/index.html"){
        fs.createReadStream("../../../../index.html").pipe(responce);
        fs.createReadStream("../../../../style.css").pipe(responce);
    }
    else{
        fs.createReadStream("f404.html").pipe(responce)
    }
}).listen(3000)