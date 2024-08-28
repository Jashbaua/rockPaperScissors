function getComputerChoice(){
    switch(Math.floor(Math.random()*3)){
        case 0:return "rock"
        case 1:return "paper"
        case 2:return "scissor"
    }
}
function getHumanChoice(){
    return prompt("Choose rock, paper or scissor")
}
let humanScore=0,computerScore=0;