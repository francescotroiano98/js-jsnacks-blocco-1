let sommaNumeri = 0
for(let i = 0; i < 10; i++){
 
    let number = parseInt( prompt ("Scrivi un numero"));
    sommaNumeri = sommaNumeri + number;
    document.getElementById("answer").innerHTML = sommaNumeri;
}
