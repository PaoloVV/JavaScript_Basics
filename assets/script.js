let contatore = 0;


function aggiungere(){
    contatore ++;
    document.getElementById("display").innerHTML = contatore;
}

function sottrarre(){
    if(contatore > 0){
        contatore --;
        document.getElementById("display").innerHTML = contatore;
    } else {
        let messaggio = document.createElement("p");
        messaggio.innerHTML = "Mi dispiace sei già a 0. Questo contatore sa conteggiare solo in positivo!!";
        document.getElementById("text").appendChild(messaggio);
    }
}