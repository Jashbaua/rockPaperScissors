function getComputerChoice(){
    return Math.floor(Math.random()*3)
}
function getHumanChoice(){
    switch(prompt("Write rock, paper or scissor")){
        case "rock":return 0;
        case "paper":return 1;
        case "scissor":return 2;
    }
}
console.log(getHumanChoice())