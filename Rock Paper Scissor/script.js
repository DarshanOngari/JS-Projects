
const choice = ["Rock","Papper","Scissor"]

// const rock = document.getElementById("rock");
// const paper = document.getElementById("paper");
// const scissor = document.getElementById("scissor");
const player = document.getElementById("player");
const comp = document.getElementById("comp");
const disresult = document.getElementById("result");
const ps = document.getElementById("p");
const cs = document.getElementById("c");

let p = 0;
let c = 0;

// console.log(dec);

// const select = dec[Math.floor(Math.random() *3)];
// console.log(select)

function playgame(playerchoice){
    const computerchoice = choice[Math.floor(Math.random() *3)];
    let result = "";
    if(playerchoice === computerchoice){
        result = "IT'S A TIE"
        }
    else{
            switch(playerchoice){
                case "Rock" : 
                    result = (computerchoice === "Scissor") ? "YOU WIN!" : "YOU LOSE!";
                    break;
                case "Papper" : 
                    result = (computerchoice === "Rock") ? "YOU WIN!": "YOU LOSE!"
                    break;
                case "Scissor" : 
                    result = (computerchoice === "Papper") ? "YOU WIN!": "YOU LOSE!"
                    break;
            }

        }
    player.textContent = "Player: " + playerchoice;
    comp.textContent = "Computer: " + computerchoice;
    disresult.textContent = result;
    disresult.classList.remove("green","red");
    switch(result){
        case "YOU WIN!":
            p++;
            ps.textContent =p;
            disresult.classList.add("green");
            break;
        case "YOU LOSE!":
            c++;
            cs.textContent =c;
            disresult.classList.add("red");
            break;
    }
}