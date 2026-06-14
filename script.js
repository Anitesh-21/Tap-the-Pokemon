let easy = document.getElementById("easy")
let medium = document.getElementById("medium")
let hard = document.getElementById("hard")
let poke = document.getElementById("poke")
let rst = document.getElementById("restart")

function easy_level() {
    poke.style.animationDuration = '20s';
    poke.className = 'mvm';
}

function hard_level() {
    poke.style.animationDuration = '15s';
    poke.className = 'mvm';
}

function medium_level() {
    poke.style.animationDuration = '12s';
    poke.className = 'mvm';
}

let count = 0;

function score() {
    count = count + 1;
    document.getElementById("score").textContent = count;
}

function restart() {
    window.location.reload();
}

easy.addEventListener("click", () => {
    easy_level();
})
medium.addEventListener("click", () => {
    medium_level();
})
hard.addEventListener("click", () => {
    easy_level();
})
poke.addEventListener("click", () => {
    score();
})
rst.addEventListener("click", () => {
    restart();
})