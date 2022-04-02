const http = require("http");
 
//http.createServer().listen(3000);
 
http.createServer(function(request, response){
     
    response.end("Hello worlds!");
}).listen(3000);