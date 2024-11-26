window.onload = function(){      
    main()
}

let globaal_vb= 0                                                     //waarde bij reset, voorbeeldlevel=1 en random=0
let score_p1= 0       
let score_p2= 0 
let current_player= 999  
let current_rows= 0;
let current_cols= 0;

function main(){
    document.getElementById("start_page").style.display = "flex"; 
    document.getElementById("game_page").style.display = "none";
    document.getElementById("end_page").style.display = "none";
    document.getElementById("score_p1").innerText= score_p1;
    document.getElementById("score_p2").innerText= score_p2;
}

function reset_game_page(current_rows, current_cols){

    document.getElementById("memoryboard").replaceChildren();               //chatGPT--> verwijdert elementen memoryboard
    document.getElementById("end_page").style.display = "none";

    score_p1 = 0;
    score_p2 = 0;
    click_counter= 0;
    document.getElementById("score_p1").innerText = score_p1;
    document.getElementById("score_p2").innerText = score_p2;

    show_game_page(current_rows, current_cols, globaal_vb)   
}

function quit(){
    score_p1 = 0;
    score_p2 = 0;
    click_counter= 0;
    document.getElementById("score_p1").innerText = score_p1;
    document.getElementById("score_p2").innerText = score_p2;

    document.getElementById("memoryboard").replaceChildren(); 
    main()
}

function switch_player(){
    current_player=current_player===1? 2: 1;                                 //chatGPT
    document.getElementById("current_player").textContent= current_player 
}


function increase_score(total_cells){  
    if (current_player===1){
        score_p1= score_p1 + 1;
        document.getElementById("score_p1").innerText= score_p1;
    } else if(current_player===2){
        score_p2= score_p2 +1;
        document.getElementById("score_p2").innerText= score_p2;
    }
    let total_score= score_p1 + score_p2
    if ((total_cells/2)=== total_score){                                     //alle vakjes zijn omgedraaid
    
        let memoryboard = document.getElementById("memoryboard");
        let buttons= memoryboard.querySelectorAll("button");
       
        buttons.forEach(button => {                                         
        let front = button.querySelector(".front");
        front.style.display = "block";
        button.disabled= true;
      
        });
        winner_announcement(total_score)
    }
}

function winner_announcement(total_score){
        setTimeout(() => {
            document.getElementById("end_page").style.display = "flex";
            document.getElementById("game_page").style.display = "none";
            if(score_p1>score_p2){
                document.getElementById("winner_announcement").innerText= "1 is gewonnen";
                document.getElementById("score_result").innerText= score_p1;

            } else if (score_p1<score_p2){
                document.getElementById("winner_announcement").innerText= "2 is gewonnen" ;
                document.getElementById("score_result").innerText= score_p2;
            
            } else {
            document.getElementById("winner_announcement").innerText= "1 en 2 hebben gelijkspel gespeeld";
            document.getElementById("score_result").innerText= score_p2;
        }
            document.getElementById("total_score").innerText= total_score;
        }, 1000);
}
