const PartyNamelist = ["francescototti", "paulodybala", "lionelmessi"];

const nome = prompt("What's your name?");
let nomecorretto = false;
for (let i = 0; i <= PartyNamelist.length - 1; i++){

    if (PartyNamelist[i] === nome) {
        console.log(i)
        nomecorretto = true;
    }
    
}   
if (nomecorretto){
   
    console.log(nomecorretto);
    document.getElementById("enter").innerHTML = "Puoi entrare, sei nella PartyNameList"

} else {
   
    document.getElementById("notenter").innerHTML = "Non puoi entrare, non sei nella PartyNameList"
}    

