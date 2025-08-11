let mode = "dark";
const body = document.getElementById("body");
let button = document.querySelector("#mode");
const img = document.querySelector("#img-logo");

button.addEventListener("click", darkmode);

function darkmode(){
    if(mode=="dark"){
        document.body.style.backgroundColor = "var(--bg-color-dark)";
        document.body.style.color = "var(--text-color-dark)";
        img.src = "img/metalman-logo-dark.png";
        mode = "light";
    }
    else{
        document.body.style.backgroundColor = "var(--bg-color)";
        document.body.style.color = "var(--text-color1)";
        img.src = "img/metalman-logo.png";
        mode = "dark";
    }
}
