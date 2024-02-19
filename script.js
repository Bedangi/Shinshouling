var you;
var yourscore=0;
var opp;
var oppscore=0;

var choices=["rock","paper","scissor","lizard","spock"];

window.onload = function(){
    for (let i=0;i<5;i++){
        //<img id="rock" src="rock.png">
        let choice=document.createElement("img");
        choice.id = choices[i];
        choice.src="icons/" + choices[i] + ".png";
        choice.addEventListener("click",selectChoice);
        document.getElementById("choices").append(choice);
    }
}

function selectChoice(){
    you= this.id;
    document.getElementById("your_choice").src ="icons/" + you + ".png";

    //random for opp
    opp=choices[Math.floor(Math.random()*5)];
    document.getElementById("opp_choice").src = "icons/" + opp + ".png";

    //check for winner
    if (yourscore<5 && oppscore<5 ){
        if (you=="rock"){
            if (opp =="scissor"){
                yourscore+=1;
            }else if (opp=="paper"){
                oppscore+=1;
            }else if (opp=="spock"){
                oppscore+=1;
            }else if (opp=="lizard"){
                yourscore+=1;
            }
        }
        else if (you=="scissor"){
            if (opp =="paper"){
                yourscore+=1;
            }else if (opp=="rock"){
                oppscore+=1;
            }else if (opp=="spock"){
                oppscore+=1;
            }else if (opp=="lizard"){
                yourscore+=1;
            }
        }
        else if (you=="paper"){
            if (opp =="rock"){
                yourscore+=1;
            }else if (opp=="scissor"){
                oppscore+=1;
            }else if (opp=="spock"){
                yourscore+=1;
            }else if (opp=="lizard"){
                oppscore+=1;
            }
        }
        else if (you=="spock"){
            if (opp =="rock"){
                yourscore+=1;
            }else if (opp=="scissor"){
                yourscore+=1;
            }else if (opp=="paper"){
                oppscore+=1;
            }else if (opp=="lizard"){
                oppscore+=1;
            }
        }
        else if (you=="lizard"){
            if (opp =="rock"){
                oppscore+=1;
            }else if (opp=="scissor"){
                oppscore+=1;
            }else if (opp=="paper"){
                yourscore+=1;
            }else if (opp=="spock"){
                yourscore+=1;
            }
        }
        
        document.getElementById("your_score").innerText = yourscore;
        document.getElementById("opp_score").innerText = oppscore;
    }else{
        game_end();
    }
   
}

function game_end(){
    document.querySelector(".main").classList.add("bg_change");
    document.getElementById("your_score").classList.add("txt_change");
    document.getElementById("opp_score").classList.add("txt_change");

    if(yourscore<oppscore){
        document.querySelector(".loser").classList.add("board_pop");
    }else if(yourscore>oppscore){
        document.querySelector(".winner").classList.add("board_pop");
    }else{
        document.querySelector(".loser").classList.add("board_pop");
    }
}