const TelegraApi = require('node-telegram-bot-api')
const fs = require("fs")
const token = "5313468254:AAEcAfL_w22djfqWIvZUU3S__3PSTpoNZgs";
const bot = new TelegraApi(token, { polling: true });
const user = {};
bot.setMyCommands([
    { command: "/start", description: "Реєстрація" },
    { command: "/info", description: "Мої данні" },
])

bot.on("message", async msg => {
        const chatId = msg.chat.id;
        const text = msg.text;
        if (text === "/register") {
            return await bot.sendMessage(chatId, `User was registered with ID: ${chatId}`)
        }

    })
/*
const chats = {};
const gameOptions = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: "1", callback_data: "1"}, {text: "2", callback_data: "2"},{text: "3", callback_data: "3"}],
            [{text: "4", callback_data: "4"}, {text: "5", callback_data: "5"},{text: "6", callback_data: "6"}],
            [{text: "7", callback_data: "7"}, {text: "8", callback_data: "8"},{text: "9", callback_data: "9"}],
            [{text: "0", callback_data: "0"}]

        ]
    })
}
const againOptions = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: "Ще разок?", callback_data: "/again"}]
        ]
    })
}

const start = () => {
    bot.setMyCommands([
        {command: "/start", description: "Вітання"},
        {command: "/info", description: "Нічого, я нічого не написав"},
        {command: "/game", description: "го в угадайку"}
    ])
    
    
    bot.on("message",async (msg)=>{
        let text = msg.text;
        let chatId = msg.chat.id;
        if(text === "/start"){
            return bot.sendMessage(chatId, `Слава Україні ${msg.from.username}, як справи?`);
        } 
        if(text === "/info"){
            return bot.sendMessage(chatId, `${msg.from.username}, тут абсолютно нічого немає, хз для чого я його створив`);
        }
        if(text === "/again"){
            return bot.sendMessage(chatId, `${msg.from.username}, тут абсолютно нічого немає, хз для чого я його створив`);
        }
        if(text === "/game"){
            await bot.sendMessage(chatId, "hello world");
            let randnum = Math.floor(Math.random()*10);
            chats[chatId] = randnum;
            return bot.sendMessage(chatId, "вгадай число від 1 до 10", gameOptions);
        }
        return bot.sendMessage(chatId, "ШО ШО???")
    })
}
    bot.on("callback_query", async (msg) =>{
        let data = msg.data;
        let chatId = msg.message.chat.id
        bot.sendMessage(chatId, `Ти обрав ${data}`)
        if (data === chats[chatId]){
            return await bot.sendMessage(chatId, `угадав собака ${data}`, againOptions);
        }
        else{
            return await bot.sendMessage(chatId, `ха лох не угадав я загадав ${chats[chatId]}`, againOptions)
        }
    })
start();*/