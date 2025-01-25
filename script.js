var playerscore = 0;
var compscore = 0;
var playerscore_span = document.getElementById("player-score")
var compscore_span = document.getElementById("computer-score")
var result_span = document.querySelector(".result")
var s = document.getElementById("s")
var r = document.getElementById("r")
var p = document.getElementById("p")


function game(userchoice) {
    var choices = ['r', 'p', 's']
    var computerchoice = choices[Math.floor((Math.random() * 3))];
    switch (userchoice + computerchoice) {
        case "rs":
        case "pr":
        case "sp":
            console.log("USER WINS .")
            win(userchoice,computerchoice)
            break;
        case "sr":
        case "rp":
        case "ps":
            console.log("USER LOSES .")
            looose(userchoice,computerchoice)
            break;
        case "rr":
        case "pp":
        case "ss":
            console.log("ITS A TIE .")
            tie(userchoice,computerchoice)
            break;

    }


}
function win(user,comp){
    playerscore++;
    playerscore_span.innerHTML=playerscore;
    switch (user + comp) {
        case "rs":result_span.innerHTML="ROCK > SCISSORS. YOU WIN!"; break;
        case "pr":result_span.innerHTML="PAPER > ROCK. YOU WIN!";break;
        case "sp":result_span.innerHTML="SCISSORS > PAPER. YOU WIN!";break;
    }

}

function looose(user,comp){
    compscore++;
    compscore_span.innerHTML=compscore;
    switch (user + comp) {
        case "sr":result_span.innerHTML="ROCK > SCISSORS. YOU LOSE!"; break;
        case "rp":result_span.innerHTML="PAPER > ROCK. YOU LOSE!";break;
        case "ps":result_span.innerHTML="SCISSORS > PAPER. YOU LOSE!";break;
    }

}
function tie(user,comp){
    result_span.innerHTML="IT'S A TIE!";


}


