
async function fetchDataOlympiade(olympiade,n,sort=0){
    var element = document.getElementById("auswertungen"); 
    while (element.firstChild) { 
        element.removeChild(element.firstChild); 
         
    }
    if (olympiade != 0){
        document.getElementById("title").innerHTML = "Trinkspiel-Olympiade "+olympiade
    }
    else{
        var title = document.getElementById("title").innerHTML        
        title = title.replace("Trinkspiel-Olympiade ","")
        title = title.replaceAll(" ","")
        title = title.split("-")
        olympiade = parseInt(title[0])
    }
    if(n==0){
        if (olympiade==5){
            n=9
        }
        else if(olympiade==4 || olympiade==3){
            n=6
        }
        else if(olympiade==2){
            n=7
        }
        else if(olympiade==1){
            n=5
        }
    }
    
    var punkte_url = "./auswertungen/olympiade_" + olympiade + "/punkte.txt"
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
        teams[c] = {"player1":p[0],
                    "player2":p[1],
                    "flunky_score":parseInt(s[0]),
                    "flunky_platz":n - parseInt(s[0])/10 ,
                    "beerpong_score":parseInt(s[1]),
                    "beerpong_platz":n - parseInt(s[1])/10,
                    "flipcup_score":parseInt(s[2]),
                    "flipcup_platz":n - parseInt(s[2])/10,                    
                    "gesamt_score":parseInt(s[3]),
                    "gesamt_platz_score":n - parseInt(s[0])/10 + n-parseInt(s[1])/10 + n-parseInt(s[2])/10,
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
                    i=-1
                }
            }
            document.getElementById("title").innerHTML = "Trinkspiel-Olympiade "+olympiade +" - Flunkyball"   
        }
    
        if (sort == 2){
            for (var i=0;i<teams.length-1;i++){
                console.log(teams[i])
                if(teams[i].beerpong_score < teams[i+1].beerpong_score){
                    var tmp = teams[i]
                    teams[i] = teams[i+1]
                    teams[i+1] = tmp
                    i=-1
                }
            }
            document.getElementById("title").innerHTML = "Trinkspiel-Olympiade "+olympiade +" - Beerpong"   
        }
    
        if (sort == 3){
            for (var i=0;i<teams.length-1;i++){
                if(teams[i].flipcup_score < teams[i+1].flipcup_score){
                    var tmp = teams[i]
                    teams[i] = teams[i+1]
                    teams[i+1] = tmp
                    i=-1
                }
            }
            document.getElementById("title").innerHTML = "Trinkspiel-Olympiade " +olympiade +" - Flipcup"   
        }
    
        if (sort == 0){
            for (var i=0;i<teams.length-1;i++){
                if(teams[i].gesamt_score < teams[i+1].gesamt_score){
                    var tmp = teams[i]
                    teams[i] = teams[i+1]
                    teams[i+1] = tmp
                    i=-1
                }
            }
            document.getElementById("title").innerHTML = "Trinkspiel-Olympiade "+olympiade   
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
        team.innerHTML += teams[i].player1 + " & "
        team.appendChild(pic2)
        team.innerHTML += teams[i].player2
        flunkyball.innerHTML += teams[i].flunky_platz +" ("+ teams[i].flunky_score + ")"
        beerpong.innerHTML += teams[i].beerpong_platz +" ("+ teams[i].beerpong_score + ")"
        flipcup.innerHTML += teams[i].flipcup_platz +" ("+ teams[i].flipcup_score + ")"
        gesamt.innerHTML += teams[i].gesamt_platz_score +" ("+ teams[i].gesamt_score + ")"

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
fetchDataOlympiade(5,9)
