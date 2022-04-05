let elem = document.getElementById("sc");
let indec = document.getElementsByClassName("inde");
let w = 0;
indec[0].style.flexGrow = "3"
indec[1].style.flexGrow = "1"
indec[2].style.flexGrow = "1"
indec[3].style.flexGrow = "1"
for (let i of indec) {
    i.addEventListener("click", (e) => {
        if (e.target.classList.value[8] == '1') {
            indec[0].style.flexGrow = "3";
            indec[1].style.flexGrow = "1";
            indec[2].style.flexGrow = "1";
            indec[3].style.flexGrow = "1";
            w = 0;
            elem.style.left = w + "px";
        }
        else if (e.target.classList.value[8] == '2') {
            indec[0].style.flexGrow = "1";
            indec[1].style.flexGrow = "3";
            indec[2].style.flexGrow = "1";
            indec[3].style.flexGrow = "1";
            w = -1000;
            elem.style.left = w + "px";
        }
        else if (e.target.classList.value[8] == '3') {
            indec[0].style.flexGrow = "1";
            indec[1].style.flexGrow = "1";
            indec[2].style.flexGrow = "3";
            indec[3].style.flexGrow = "1";
            w = -2000;
            elem.style.left = w + "px";
        }
        else if (e.target.classList.value[8] == '4') {
            indec[0].style.flexGrow = "1";
            indec[1].style.flexGrow = "1";
            indec[2].style.flexGrow = "1";
            indec[3].style.flexGrow = "3";
            w = -3000;
            elem.style.left = w + "px";
        };
    })
}
setInterval(() => {
    elem.style.left = w + "px"
    if (w == -3000) {
        indec[0].style.flexGrow = "1"
        indec[1].style.flexGrow = "1"
        indec[2].style.flexGrow = "1"
        indec[3].style.flexGrow = "3"
        w = 0;
    }
    else if (w == -1000) {
        indec[0].style.flexGrow = "1"
        indec[1].style.flexGrow = "3"
        indec[2].style.flexGrow = "1"
        indec[3].style.flexGrow = "1"
        w -= 1000;
    }
    else if (w == -2000) {
        indec[0].style.flexGrow = "1"
        indec[1].style.flexGrow = "1"
        indec[2].style.flexGrow = "3"
        indec[3].style.flexGrow = "1"
        w -= 1000;
    }
    else {
        indec[0].style.flexGrow = "3"
        indec[1].style.flexGrow = "1"
        indec[2].style.flexGrow = "1"
        indec[3].style.flexGrow = "1"
        w -= 1000;
    }
}, 3000)




