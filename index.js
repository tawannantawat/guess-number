var y = Math.floor(Math.random()*100)+1; 
       
var guess = 1; 

let guessed;

document.getElementById("submitguess").onclick = function(){ 
       
    var x = document.getElementById("guessField").value; 

    if(guess<=5){
        if(x > 100 || x < 1){
            document.querySelector('.result').textContent = "Please Enter Number Between 0 and 100"; 
        }else{
            document.querySelector('.turn').textContent = 5 - guess + " left";
            if(x == y){     
                document.querySelector('.result').textContent = "CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN " + guess + " GUESS ";                   
                guess = 12;
            }else if(x > y){     
                    guess++;
                    document.querySelector('.result').textContent = "Too High"; 
                }else{ 
                    guess++; 
                    document.querySelector('.result').textContent = "Too Low"; 
                } 
                if(guess == 2){
                    guessed = x;
                }else{
                    guessed += ", "+x;
                }
                document.querySelector('.history').textContent = guessed; 
        }                
    }

    if(guess == 6){
            document.querySelector('.result').textContent = "Wrong! "  ; 
            setTimeout(function(){ document.querySelector('.result').textContent = "Close your eyes! "; }, 1000);
            setTimeout(function(){ document.querySelector('.result').textContent = "And Count 1 to 3! "; }, 2000);
            setTimeout(function(){ window.open("https://static.wixstatic.com/media/c05ca7_1d54f053730247f0beb780b2bd8c049e~mv2.jpg/v1/fill/w_486,h_292,al_c,lg_1,q_80/c05ca7_1d54f053730247f0beb780b2bd8c049e~mv2.webp"); }, 4000);
            
    }
}