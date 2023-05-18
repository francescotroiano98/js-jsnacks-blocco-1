let NumeriDispari = [];
let InsertNumber = 0;

for (i=0; i<6; i++){

    let number = parseInt( prompt("Scrivi un numero"));
    if(number % 2 === 0){
        
    } else {

    InsertNumber = NumeriDispari.push(number);

    }

}

document.getElementById("dispari").innerHTML = NumeriDispari;
console.log(NumeriDispari);