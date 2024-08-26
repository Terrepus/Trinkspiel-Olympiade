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

    var player = new Array()
    var c = 0
    for (var i=1;i<n;i++){
        var maxscore = (n-1)*10
        var t = punkte[i].split(":")
        var p = t[0].split("+")
        var s = t[1].split(",")
        player[c] = {"player_name":p[0],
                    "flunky_score":parseInt(s[0]),
                    "flunky_platz":"" ,
                    "beerpong_score":parseInt(s[1]),
                    "beerpong_platz":"",
                    "flipcup_score":parseInt(s[2]),
                    "flipcup_platz":"",                    
                    "gesamt_score":parseInt(s[3]),
                    "gesamt_platz_score":"",
                    "gesamt_platz":c+1
                }
        c++
        }
    if (sort == 1){
        for (var i=0;i<player.length-1;i++){
            if(player[i].flunky_score < player[i+1].flunky_score){
                var tmp = player[i]
                player[i] = player[i+1]
                player[i+1] = tmp
                i=-1
            }
        }
        document.getElementById("title").innerHTML = "Gesamtauswertung - Flunkyball"   
    }

    if (sort == 2){
        for (var i=0;i<player.length-1;i++){
            console.log(player[i])
            if(player[i].beerpong_score < player[i+1].beerpong_score){
                var tmp = player[i]
                player[i] = player[i+1]
                player[i+1] = tmp
                i=-1
            }
        }
        document.getElementById("title").innerHTML = "Gesamtauswertung - Beerpong"   
    }

    if (sort == 3){
        for (var i=0;i<player.length-1;i++){
            if(player[i].flipcup_score < player[i+1].flipcup_score){
                var tmp = player[i]
                player[i] = player[i+1]
                player[i+1] = tmp
                i=-1
            }
        }
        document.getElementById("title").innerHTML = "Gesamtauswertung - Flipcup"   
    }

    if (sort == 0){
        for (var i=0;i<player.length-1;i++){
            if(player[i].gesamt_score < player[i+1].gesamt_score){
                var tmp = player[i]
                player[i] = player[i+1]
                player[i+1] = tmp
                i=-1
            }
        }
        document.getElementById("title").innerHTML = "Gesamtauswertung"   
    }
    

    for (var i = 0; i<n-1; i++){           
        var slot = document.createElement("tr")
        var rank = document.createElement("td")
        var pic = document.createElement("img")
        var name = document.createElement("figcaption")
        var profile = document.createElement("td")
        var flunkyball = document.createElement("td")
        var beerpong = document.createElement("td")
        var flipcup = document.createElement("td")
        var gesamt = document.createElement("td")
        pic.src="images/profilbilder/default.png"        
        
        var player1_name = player[i].player_name.toLowerCase()
        pic.src = "images/profilbilder/" + player1_name +".png"

        
        if(player1_name == "mo" || player1_name == "anna" || player1_name == "anton" || player1_name == "jochen" || player1_name == "bruno" || player1_name == "lina" || player1_name == "melli" || player1_name == "charlie" || player1_name == "matthias" || player1_name == "oskar" || player1_name == "basti"){
            pic.src="images/profilbilder/default.png"
            
        }

        pic.onclick = function(){
            openModal(this);
        };

        rank.innerHTML += player[i].gesamt_platz
        profile.appendChild(pic)
        name.innerHTML += player[i].player_name
        profile.appendChild(name) 
        flunkyball.innerHTML += player[i].flunky_score 
        beerpong.innerHTML += player[i].beerpong_score 
        flipcup.innerHTML += player[i].flipcup_score 
        gesamt.innerHTML +=  player[i].gesamt_score 

        slot.appendChild(rank)
        slot.appendChild(profile)
        slot.appendChild(flunkyball)
        slot.appendChild(beerpong)
        slot.appendChild(flipcup)
        slot.appendChild(gesamt)
        var ausw = "auswertungen" 
        document.getElementById(ausw).appendChild(slot)
    
    }
}
fetchDataGesamt(31,0)
