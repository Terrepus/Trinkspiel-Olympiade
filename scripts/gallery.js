
async function loadgallery(olympiade){
    var element_1 = document.getElementById("olymp_1"); 
    var element_2 = document.getElementById("olymp_2"); 
    var element_3 = document.getElementById("olymp_3"); 
    while (element_1.firstChild ) { 
        element_1.removeChild(element_1.firstChild);
        }
    while (element_2.firstChild) { 
        element_2.removeChild(element_2.firstChild); 
    }
    while ( element_3.firstChild) { 
        element_3.removeChild(element_3.firstChild); 
    }
    var count = 0;

    document.getElementById("title").innerHTML = "Trinkspiel-Olympiade " + olympiade
    switch(olympiade){
        case 6:
            n=199
            break
        case 5:
            n=24
            break
        case 4:
            n=29
            break
        case 3:
            n=28
            break
        case 2:
            n=0
            break
        case 1:
            n=29
            break
        default:
            n=0
    }
    for (var i=1; i<=n;i++ ){
        var img = document.createElement("img")
        var box = document.createElement("div")
        //img.src = "images/olympiade_1/olymp_1 " + "(" + i + ").jpg" 
        img.src = "images/olympiade_" + olympiade + "/olymp_"+ olympiade + " (" + i + ").jpg" 
        box.className = "picbox"
        img.onclick = function(){
            openModal(this);
        };
        box.appendChild(img)
        //document.getElementById("olymp_1").appendChild(box)
        if (count == 0){
            document.getElementById("olymp_1").appendChild(box)
        }
        else if (count==1){
            document.getElementById("olymp_2").appendChild(box)
        }
        else if (count==2){
            document.getElementById("olymp_3").appendChild(box)
            count=-1;
        }
        count++;
    }
}

 
loadgallery(6)
