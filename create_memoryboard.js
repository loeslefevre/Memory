
function show_game_page(rows, cols, vb){

    document.getElementById("start_page").style.display = "none";
    document.getElementById("game_page").style.display = "flex";
    
    let total_cells= rows *cols 

    current_rows= rows
    current_cols= cols

    current_player= Math.random()< 0.5? 1: 2;                                  //chatGPT--> random speler begint
    document.getElementById("current_player").innerText= current_player;
    
    if (vb===1){                                                               //create_memoryboard voorbeeldlevels of random levels
        globaal_vb= 1
        let table= create_memoryboard(rows, cols, total_cells, globaal_vb);
    }else{
        globaal_vb=0
        let table= create_memoryboard(rows, cols, total_cells, globaal_vb);
    }

}


function create_memoryboard(rows, cols, total_cells, vb){                
    let memoryboard= document.getElementById("memoryboard");
    let cell_colors= 0
    if (vb===1){
        cell_colors= create_list_colors_voorbeeldlevels(rows,cols);
    } else { 
        cell_colors= create_list_colors_random(rows,cols);
    }

    let index= 0                                                 
    for (let i= 0; i< rows; i++){
        let row= document.createElement("tr");

        for (let j= 0; j < cols; j ++){
            let cell = document.createElement("td");

            let button = document.createElement("button");

            //maakt voorkant cel
            let front= document.createElement("div");
            front.classList.add("front");
            front.style.backgroundColor= cell_colors[index];
            front.style.display= "none"

            //maakt achterkant cel
            let back= document.createElement("div");
            back.classList.add("back");
        
            button.appendChild(front);                               
            button.appendChild(back);

            // voegt klikgebeurtenis toe aan de button
            button.addEventListener("click", function () {
                front.style.display = "block";   
                back.style.display = "none";     
                cell_click(button, total_cells)
              
            });

            cell.appendChild(button);
            row.appendChild(cell);
            index= index +1;
        }
        memoryboard.appendChild(row);
    }
    return memoryboard
}

function create_list_colors_voorbeeldlevels(rows, cols){
    let select_colors= [] 
    if (rows===2){
        select_colors= ["#ffcc99", "#ffcccc", "#4dd2ff","#ffcccc","#4dd2ff","#ffcc99"]
        //voorbeeldlevel1 bord

    } else if (rows===3){
        select_colors= ["#ffcc99", "#ffcccc", "#4dd2ff", "#4dd2ff", "#ffcccc", "#990000", "#ffcc99","#006600","#006600","#ff751a","#ff751a","#990000"]
        //voorbeeldlevel2 bord

    } else{
        select_colors= ["#ffcc99", "#ffcccc", "#4dd2ff", "#4dd2ff","#00cc44","#ffcccc", "#990000","#ffcc99","#006600","#000080", "#006600", "#ff751a","#ff751a","#990000","#000080", "#ffffff", "#000000", "#00cc44", "#ffffff", "#000000"]
        //voorbeeldlevel3 bord
    }

    return select_colors; 
}

function create_list_colors_random(rows, cols){
    let total_cells= rows * cols;
    let amount_different_colors= total_cells/2;
    let select_colors= [] 
    let all_colors= ["#FF5733", "#33FF57", "#3357FF", "#FF33A6", 
        "#FFD700", "#8A2BE2", "#ffff80", "#b3fff0",
        "#0c2719", "#ffffff"]

    for (let i= 0; i < amount_different_colors; i++){
        let color= all_colors[i];
        select_colors.push(color, color);               
    }

    //lijst willekeurig maken
    for (let i= select_colors.length -1; i> 0; i --){                                // chatGPT
        const j= Math.floor(Math.random()*(i+1));                                    // chatGPT
        [select_colors[i], select_colors[j]] = [select_colors[j], select_colors[i]]; // chatGPT
    }

    return select_colors; 
}



