const http = require("http");   //створюємо модуль http  // require - завантажує потрібні модулі нода
const os = require("os");
const app2 = require("./app2")
http.createServer(function(request,response){    //request - зберігає всю інфу про запрос
                                                 //response - використовується для відправки данних
                                                 // .createServer - Створює сервер
    response.end(os.userInfo().username);               // .end - відправляє данні
     
}).listen(3000, "127.0.0.1",function(){          //.listen - метод для простуховування входящих запросів
    console.log("Сервер начал прослушивание запросов на порту 3000");
});