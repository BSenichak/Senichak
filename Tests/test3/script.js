let a = ""
window.setInterval(function(){document.getElementsByClassName("resultat")[0].innerHTML = a;}, 100);

function b1() {
    document.getElementById("b1").onclick = function(){a=a + "1"}
}

