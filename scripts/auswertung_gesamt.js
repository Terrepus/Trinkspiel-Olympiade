
async function fetchDataGesamt(n,sort=0){
    var element = document.getElementById("auswertungen"); 
    while (element.firstChild) { 
        element.removeChild(element.firstChild); 
         
    }

    document.getElementById("title").innerHTML = "Gesamtauswertung"   


    var punkte_url = "./auswertungen/gesamt.txt"
    let punkte_respone = await fetch(punkte_url);
    let punkte_data = await punkte_respone.text();
    punkte_data = punkte_data.replace("flunkyball,beerpong,flipcup","")
    punkte_data = punkte_data.replaceAll("\r","")
    var punkte = punkte_data.split("\n")

    var teams = new Array()
    var c = 0
    for (var i=1;i<n;i++){
        var maxscore = (n-1)*10
        var t = punkte[i].split(":")
        var p = t[0].split("+")
        var s = t[1].split(",")
        teams[c] = {"player":p[0],
                    "flunky_score":parseInt(s[0]),
                    "flunky_platz":"" ,
                    "beerpong_score":parseInt(s[1]),
                    "beerpong_platz":"",
                    "flipcup_score":parseInt(s[2]),
                    "flipcup_platz":"",                    
                    "gesamt_score":parseInt(s[0])+parseInt(s[1])+parseInt(s[2]),
                    "gesamt_platz_score":"",
                    "gesamt_platz":c+1
                }
        c++
        }
    if (sort == 1){
        for (var i=0;i<teams.length-1;i++){
            if(teams[i].flunky_score < teams[i+1].flunky_score){
                var tmp = teams[i]
                teams[i] = teams[i+1]
                teams[i+1] = tmp
                i=0
            }
        }
        document.getElementById("title").innerHTML = "Gesamtauswertung - Flunkyball"   
    }

    if (sort == 2){
        for (var i=0;i<teams.length-1;i++){
            console.log(teams[i])
            if(teams[i].beerpong_score < teams[i+1].beerpong_score){
                var tmp = teams[i]
                teams[i] = teams[i+1]
                teams[i+1] = tmp
                i=0
            }
        }
        document.getElementById("title").innerHTML = "Gesamtauswertung - Beerpong"   
    }

    if (sort == 3){
        for (var i=0;i<teams.length-1;i++){
            if(teams[i].flipcup_score < teams[i+1].flipcup_score){
                var tmp = teams[i]
                teams[i] = teams[i+1]
                teams[i+1] = tmp
                i=0
            }
        }
        document.getElementById("title").innerHTML = "Gesamtauswertung - Flipcup"   
    }

    if (sort == 0){
        for (var i=0;i<teams.length-1;i++){
            if(teams[i].gesamt_score < teams[i+1].gesat_score){
                var tmp = teams[i]
                teams[i] = teams[i+1]
                teams[i+1] = tmp
                i=0
            }
        }
        document.getElementById("title").innerHTML = "Gesamtauswertung"   
    }
    

    for (var i = 0; i<n-1; i++){    
        var slot = document.createElement("tr")
        var rank = document.createElement("td")
        var pic1 = document.createElement("img")
        var pic2 = document.createElement("img")
        var team = document.createElement("td")
        var flunkyball = document.createElement("td")
        var beerpong = document.createElement("td")
        var flipcup = document.createElement("td")
        var gesamt = document.createElement("td")

        
        pic1.src="images/profilbilder/default.png"
        pic2.src="images/profilbilder/default.png"
        if (teams[i].player1 == "Jonas" || teams[i].player2 == "Jonas"){
            if (teams[i].player1 == "Jonas"){
                pic1.src="images/profilbilder/jonas.png"
            }
            else{
                pic2.src="images/profilbilder/jonas.png"
            }
        }
        else if (teams[i].player1 == "Hannah" || teams[i].player2 == "Hannah"){
            if (teams[i].player1 == "Hannah"){
                pic1.src="images/profilbilder/hannah.png"
            }
            else{
                pic2.src="images/profilbilder/hannah.png"
            }
        }

        rank.innerHTML += teams[i].gesamt_platz
        team.appendChild(pic1)
        team.innerHTML += teams[i].player 
        flunkyball.innerHTML += teams[i].flunky_score 
        beerpong.innerHTML += teams[i].beerpong_score 
        flipcup.innerHTML += teams[i].flipcup_score 
        gesamt.innerHTML +=  teams[i].gesamt_score 

        slot.appendChild(rank)
        slot.appendChild(team)
        slot.appendChild(flunkyball)
        slot.appendChild(beerpong)
        slot.appendChild(flipcup)
        slot.appendChild(gesamt)
        var ausw = "auswertungen" 
        document.getElementById(ausw).appendChild(slot)
        
        }
    
    }

fetchDataGesamt(24)
