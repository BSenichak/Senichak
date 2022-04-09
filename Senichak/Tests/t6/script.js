let status = {}
let ninf = JSON.stringify(status);
var expire = new Date();
expire.setHours(expire.getHours() + 4);
document.cookie = "status=" + ninf + ";expires=" + expire.toUTCString() + ";";
status = JSON.parse(document.cookie.slice(7));
let articles = document.querySelectorAll(`.starbar`);

for (let bb of articles) {
    let star = document.querySelectorAll(`.pub${bb.className[11]}>.fa`);
    for (let i = 0; i < status[`p${bb.className[11]}`]; i++) {
        star[i].style.color = "yellow";
    }
    for (let i = status[`p${bb.className[11]}`]; i < 5; i++) {
        star[i].style.color = "black";
    }
}
for (let sb of articles) {
    sb.addEventListener("mouseenter", (e) => {
        let npub = e.target.className[11];
        let star = document.querySelectorAll(`.pub${npub}>.fa`);
        for (let s of star) {
            s.addEventListener("mouseenter", (e) => {
                let ind = parseInt(e.target.className[1]);
                for (let i = 0; i < ind; i++) {
                    star[i].style.color = "red";
                }
                for (let i = ind; i < 5; i++) {
                    star[i].style.color = "black";
                }
            })
            s.addEventListener("mouseleave", (e) => {
                if (status[`p${npub}`] == 0 || status[`p${npub}`] == undefined) {
                    for (let i of star) {
                        i.style.color = "black";
                    }
                }
            })
            s.addEventListener("click", (e) => {
                status[`p${npub}`] = parseInt(e.target.className[1]);
            })
        }
        sb.addEventListener("mouseleave", (e) => {
            let npub = e.target.className[11];
            let star = document.querySelectorAll(`.pub${npub}>.fa`);
            for (let i = 0; i < status[`p${npub}`]; i++) {
                star[i].style.color = "yellow";
            }
            for (let i = status[`p${npub}`]; i < 5; i++) {
                star[i].style.color = "black";
            }
        })

    })
}

setInterval(() => {
    let ninf = JSON.stringify(status);
    var expire = new Date();
    expire.setHours(expire.getHours() + 4);
    document.cookie = "status=" + ninf + ";expires=" + expire.toUTCString() + ";";
}, 1000);