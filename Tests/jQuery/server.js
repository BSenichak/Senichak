const http = require("http");
const fs = require("fs");
let a  = "hello world";
http.createServer(function(request, response){
      
    if(request.url == "/hello"){
        response.end(a);
    }
    else{
        fs.readFile("t1.html", (error, data) => response.end(data));
    }
}).listen(3000, ()=>console.log("Сервер запущен по адресу http://localhost:3000"));