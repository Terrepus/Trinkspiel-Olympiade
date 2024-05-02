function sortTableByColumn (table,column, asc=true){
    const dirModifier = asc ? 1 : -1
    //const tBody = table.tBodies[0]
    const tBody = document.getElementById("auswertungen_2023")
    console.log(tBody)
    const rows = Array.from(tBody.querySelectorAll("tr"))
    
    const sortedRows = rows.sort((a,b) => {
        console.log(a);
        console.log(b);
    });
}

sortTableByColumn(document.querySelector("table"),1)