let Itext = document.querySelectorAll(".itemtext p");
let op = document.createElement("h4");
op.append("More_");
for (i of Itext) {
    i.classList.add("exit");
}

for (i of Itext) {
    i.classList.add("exit");
    let a = i.parentNode.parentNode.classList[1][2];
    if (parseInt(i.offsetHeight) >= 83) {
        document.querySelector(`.it${a} h4`).innerHTML = "MORE_"
    }
    document.querySelector(`.it${a} h4`).addEventListener("click", () => {
        document.querySelector(`.it${a} h4`).innerHTML = "";
        document.querySelector(`.it${a} p`).classList.remove("exit");
    })
}



