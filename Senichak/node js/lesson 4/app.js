let nodePath = process.argv[0];
let appPath = process.argv[1];
let login = process.argv[2];
let password = process.argv[3];

const users = {
    user1: {
        login: "admin",
        password: "admin"
    },
    user2: {
        login: "bsenk",
        password: "qwerty"
    }
}

if (login == users.user1.login){
    console.log("dorova loh");
}
else {
    console.log("good morning " + login);
}
/*
console.log("nodePath: " + nodePath);
console.log("appPath: " + appPath);
console.log();


console.log("name: " + name);
console.log("age: " + age);
*/