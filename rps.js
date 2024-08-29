function getComputerChoice(){
    switch(Math.floor(Math.random()*3)){
        case 0:return "Rock"
        case 1:return "Paper"
        case 2:return "Scissor"
    }
}
function getHumanChoice(){
    return prompt("Choose rock, paper or scissor")
}
let humanScore=0,computerScore=0;
function playRound(humanChoice=getHumanChoice(),computerChoice=getComputerChoice()){
    humanChoice=humanChoice.charAt(0).toUpperCase()+humanChoice.slice(1).toLowerCase()
    function win(){
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++
    }
    function lose(){
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++
    }
    let tie=`Tie! ${computerChoice} and ${humanChoice} tie`
    if(humanChoice==computerChoice){
        console.log(tie);
        return;
    }
    switch(humanChoice){
        case "Rock":
            computerChoice=="Paper"?win():lose();
            break;
        case "Paper":
            computerChoice=="Scissor"?win():lose();
            break;
        case "Scissor":
            computerChoice=="Rock"?win():lose();
            break;
        default:
            console.log("Invalid word");
    }
}