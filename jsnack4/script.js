const numeroquattrocifre = parseInt(prompt("Scrivi un numero di massimo 4 cifre"));
console.log(numeroquattrocifre)
if (numeroquattrocifre > 999 && numeroquattrocifre <= 9999){
    const array = Array.from(String(numeroquattrocifre), Number);
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
        console.log(sum)
    }

    document.getElementById("answer").innerHTML = sum;
    console.log(sum);
} else{
    alert("Non hai inserito un valore valido, massimo 4 cifre");
}