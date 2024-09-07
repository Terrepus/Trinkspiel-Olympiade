async function fetchAndProcessTxTFile(url,discipline) {
    if (discipline == 1){
        url = "./bracket/flunkyball_bracket.txt"
        document.getElementById("bracket_title").innerHTML="Flunkyball Olympiade 7"
    }
    else if(discipline == 2){
        url = "./bracket/beerpong_bracket.txt"
        document.getElementById("bracket_title").innerHTML="Beerpong Olympiade 7"
    }
    else if(discipline == 3){
        url = "./bracket/flipcup_bracket.txt"
        document.getElementById("bracket_title").innerHTML="Flipcup Olympiade 7"
    }
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {           
            createBracket(data)
            
        })
        .catch(error => console.error('Error fetching the TXT file:', error));        
    }

function print(text){
    console.log(text)
}

function loadBracket(discipline){
    fetchAndProcessTxTFile("",discipline)
}

loadBracket(2)

function createBracket(data){
    var data_array = data.split("\n")
    for(let i = 0;i<data_array.length;i++){
        if (data_array [i].length>2){
            var team = data_array[i].split(";")
            var element = document.getElementById(team[0]);
            
            if (team.length>=2){                
                element.innerHTML=""
                if (team.length>2){
                    print(team.length)
                    element.innerHTML=team[1].toString() + " & " + team[2].toString()
                }
            }
if(element.classList.contains("game-top"){
element.className="game game-top"
}
if(element.classList.contains("game-bottom){
element.className="game game-bottom"
}


            if (team.length>3){
                if(team[3] == 1){
                    if (element.classList.contains("game-top")){
                        element.className="game game-top winner"
                    }
                    if (element.classList.contains("game-bottom")){
                        element.className="game game-bottom winner"
                    }
                }
            }
            
        }        
    }
}
