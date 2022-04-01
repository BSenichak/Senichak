/*
const fs = require("fs");
 
// асинхронное чтение
fs.readFile("hello.txt", "utf8", 
            function(error,data){
                console.log("Асинхронное чтение файла");
                if(error) throw error; // если возникла ошибка
                console.log(data);  // выводим считанные данные
});
 
// синхронное чтение
console.log("Синхронное чтение файла")
let fileContent = fs.readFileSync("hello.txt", "utf8");
console.log(fileContent);
*/
const fs = require("fs");
/*
fs.writeFile("hello.txt", "Hello мир! gg", function(error){
 
    if(error) throw error; // если возникла ошибка
    console.log("Асинхронная запись файла завершена. Содержимое файла:");
    let data = fs.readFileSync("hello.txt", "utf8");
    console.log(data);  // выводим считанные данные
});

/*
const fs = require("fs");
 
fs.appendFileSync("hello.txt", "Привет ми ми ми!");
 
fs.appendFile("hello.txt", "Привет МИД!", function(error){
    if(error) throw error; // если возникла ошибка
                 
    console.log("Запись файла завершена. Содержимое файла:");
    let data = fs.readFileSync("hello.txt", "utf8");
    console.log(data);  // выводим считанные данные
});
*/

fs.unlink("hello.txt", (err) => {
    if (err) console.log(err); // если возникла ошибка    
    else console.log("hello.txt was deleted");
  });
