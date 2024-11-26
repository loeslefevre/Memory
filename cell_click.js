let first_color= 0
let second_color= 0
let click_counter=0
let button1= 0
let button2=0

 
function cell_click(button, total_cells){
    click_counter= click_counter +1;
    if (click_counter===1){
        button1= button;
        button1.disabled= true;

        front1 = button.querySelector(".front");
        first_color = front1.style.backgroundColor;
    }

    if (click_counter===2){
        button2 = button;
        button2.disabled= true;
        front2 = button.querySelector(".front");
        second_color = front2.style.backgroundColor;

        if (first_color===second_color){
            increase_score(total_cells)
            first_color= 0;
            second_color= 0;
            click_counter= 0;    
        
            button1.disabled= true;
            button2.disabled= true;

        } else {
            let memoryboard = document.getElementById("memoryboard");
            let buttons= memoryboard.querySelectorAll("button");
            buttons.forEach(button => {                             //chatGPT
            button.disabled = true;                                 //alle knoppen zijn disabled, behalve button1 en button2
            });
            button1.disabled= false;
            button2.disabled= false;
        }
    }

     if (click_counter===3){
        switch_player()
        first_color= 0;
        second_color= 0;
        click_counter= 0;
        not_same_color(button1, button2);
        button1= 0;
        button2= 0;
    }
}

function not_same_color(button1, button2){
    let back1 = button1.querySelector(".back");                      //draait button1 en button2 terug om
    let back2 = button2.querySelector(".back");
    back1.style.display = "block";  
    back2.style.display = "block"; 

    let front1= button1.querySelector(".front");
    let front2= button2.querySelector(".front");
    front1.style.display = "none";  
    front2.style.display = "none";  
    
    let memoryboard = document.getElementById("memoryboard");
    let buttons = memoryboard.querySelectorAll("button");
    buttons.forEach(button => {                                      //disabled= false --> voor alle buttons waarvan de back zichtbaar is 
        let front = button.querySelector(".front");
   
        if (front.style.display === "none") {
            button.disabled = false;
        }
    });
}















