let a = document.querySelectorAll(".item");
       for(let i = 0; i < a.length; i++){
            a[i].addEventListener("click", (e)=>{
                e.target.querySelector(".subnav").classList.toggle("open")
            })
        }

let b = document.querySelector(".menibtn");
b.addEventListener("click", ()=>{
    document.querySelector(".navig").classList.toggle("openn");
    })