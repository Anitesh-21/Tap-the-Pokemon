let easy = document.getElementById("easy")
let medium = document.getElementById("medium")
let hard = document.getElementById("hard")
let poke = document.getElementById("poke")
let rst = document.getElementById("restart")

function easy_level() {

}

function hard_level() {
    
}

function medium_level() {
    
}

let count = 0;

function score() {
    count = count + 1;
    document.getElementById("score").textContent = count;
}

function restart() {
    window.location.reload();
}

easy.addEventListener("click", ()=>{
    easy_level();
})
medium.addEventListener("click", ()=>{
    medium_level();
})
hard.addEventListener("click", ()=>{
    easy_level();
})
poke.addEventListener("click", ()=>{
    score();
})
rst.addEventListener("click", ()=>{
    restart();
})