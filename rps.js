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
    function win(){
        humanScore++
        return `You win! ${humanChoice} beats ${computerChoice}`;
    }
    function lose(){
        computerScore++
        return `You lose! ${computerChoice} beats ${humanChoice}`;
    }
    let tie=`Tie! ${computerChoice} and ${humanChoice} tie`
    if(humanChoice==computerChoice){
        return (tie);
    }
    switch(humanChoice){
        case "Rock":
            return computerChoice=="Paper"?lose():win();
        case "Paper":
            return computerChoice=="Scissor"?lose():win();
        case "Scissor":
            return computerChoice=="Rock"?lose():win();
        default:
            console.log("Invalid word");
    }
}
const rockBtn=document.createElement("button")
const paperBtn=document.createElement("button")
const scissorBtn=document.createElement("button")
rockBtn.textContent="Rock"
paperBtn.textContent="Paper"
scissorBtn.textContent="Scissor"
document.body.appendChild(rockBtn)
document.body.appendChild(paperBtn)
document.body.appendChild(scissorBtn)
const btns=document.querySelectorAll('button')
const result=document.createElement('p')
const score=document.createElement("div")
document.body.appendChild(score)
const scorep=document.createElement('p')
score.appendChild(scorep)
score.appendChild(result)
scorep.textContent=`Your score:${humanScore} Computer score:${computerScore}`
result.setAttribute("style","white-space:pre")
btns.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        result.textContent=playRound(btn.textContent)
        scorep.textContent=`Your score:${humanScore} Computer score:${computerScore}`
        if(humanScore==5){
            result.textContent="You won!"
            humanScore=computerScore=0;
        }
        if(computerScore==5){
            result.textContent="You lost :("
            humanScore=computerScore=0;
        }
    })
})