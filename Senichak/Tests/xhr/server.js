const http = require("http");
const fs = require("fs");
 
http.createServer(async (request, response) => {
      
    if(request.url == "/user"){
         
          const buffers = [];   // буфер для получаемых данных
 
         // получаем данные из запроса в буфер
          for await (const chunk of request) {
            buffers.push(chunk);
          }
        // получаем строковое представление ответа
        let userName = Buffer.concat(buffers).toString();
        userName =  "Hello " + userName;
        response.end(userName);
    }
    else{
        fs.readFile("index.html", (error, data) => response.end(data));
    }
}).listen(3000, ()=>console.log("Сервер запущен по адресу http://localhost:3000"));