let a = document.querySelectorAll(".item");
       for(let i = 0; i < a.length; i++){
            a[i].addEventListener("click", (e)=>{
                e.target.querySelector(".subnav").classList.toggle("open")
            })
        }

let b = document.querySelector(".menibtn");
b.addEventListener("click", ()=>{
    document.querySelector(".navig").classList.toggle("openn");
    });

    function rain(){
        let amount = 200;
        let body = document.querySelector(".body");
        let i = 0;
        while(i < amount){
            let drop = document.createElement("u");
            let size = Math.random() * 5;
            let posX = Math.floor(Math.random()* window.innerWidth);
            let delay = Math.random() + -20
            let duration = Math.random() + 2
            drop.style.width = 0.2 + size+'px';
            drop.style.left = posX + 'px';
            drop.style.animationDelay = delay + 's'
            drop.style.animationDuration = 1+ duration + 's'

             body.appendChild(drop)
             i++
        }
    }
    rain();