/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//variabili globali
var num1 ="";
var num2 ="";
var risultato;
//inizializziamo la variabile
var operazione = "";
var okDati;
var tasto;

function isVuota(testo) {

    // la IF, se vi è solo una istruzione nel ramo THEN e uno nel ramo ELSE, si può omettere le parentesi {}
    if (testo.length == 0)
        return true;
    else
        return false;

}

function checkDati() {
    //verifico num1 e num2
    //ritorno true se presenti solo numeri
    //altrimenti ritorno false

    if (isNaN(num1) || isNaN(num2) || isVuota(num1) || isVuota(num2)) {
        return false;
    } else {
        return true;
    }
}

function faseInput() {
    tasto = document.getElementById("in_num1").value;
    num2 = document.getElementById("in_num2").value;

    okDati = checkDati();


    //verifico okDati e poi vedo se trasformare in numeri

    if (okDati == true) {
        //in num1 e num2 c'è ancora in testo, devo trasformarlo in numero
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
    } else {
        alert("attenzione dati non corretti");
    }


}

function faseOutput() {
    document.getElementById("div_ris").innerHTML = operazione;
    //document.getElementById("div_totale").innerHTML = totale;

}

function somma() {

    faseInput();

    if (okDati) {
        risultato = num1 + num2;
        totale = totale + risultato;

        faseOutput();
    }

}


function calcola(op) {
    //faseInput();

    okDati = true;
    if (okDati) {
        //valuto se sono numeri
        if (op == "0") {
            operazione = operazione + op;
            num1 = num1 + op;
        }
        if (op == "1") {
            operazione = operazione + op;
            num1 = num1 + op;
        }
        if (op == "2") {
            operazione = operazione + op;
            num1 = num1 + op;
        }
        if (op == "3") {
            operazione = operazione + op;
            num1 = num1 + op;
        }
        if (op == "4") {
            operazione = operazione + op;
            num1 = num1 + op;
        }
        if (op == "5") {
            operazione = operazione + op;
            num1 = num1 + op;
        }
        if (op == "6") {
            operazione = operazione + op;
            num1 = num1 + op;
        }
        if (op == "7") {
            operazione = operazione + op;
            num1 = num1 + op;
        }
        if (op == "8") {
            operazione = operazione + op;
            num1 = num1 + op;
        }
        if (op == "9") {
            operazione = operazione + op;
            num1 = num1 + op;
        }
        //valuto se sono operatori o virgola
        if (op == ".") {
            operazione = operazione + op;
            num1 = num1 + op;
        }



        if (op == "+") {
            operazione = operazione + " +<br/>";


            if (isVuota(num2)) {
                num2 = num2 + parseFloat(num1);
                num1 = "";
                operazione
            } else {
                num2 = parseFloat(num1);
                num1 = "";
            }
            faseOutput();
            operazione = "";
        }

        if (op == "-"){
            operazione = operazione + " -<br/>";


            if (isVuota(num2)) {
                num2 = num2 - parseFloat(num1);
                num1 = "";
                operazione
            } else {
                num2 = parseFloat(num1);
                num1 = "";
            }
            faseOutput();
            operazione = "";
        }

        if (op == "*"){
            operazione = operazione + " *<br/>";


            if (isVuota(num2)) {
                num2 = num2 * parseFloat(num1);
                num1 = "";
                operazione
            } else {
                num2 = parseFloat(num1);
                num1 = "";
            }
            faseOutput();
            operazione = "";
        }

        if (op == "/"){
            operazione = operazione + " /<br/>";


            if (isVuota(num2)) {
                num2 = num2 / parseFloat(num1);
                num1 = "";
                operazione
            } else {
                num2 = parseFloat(num1);
                num1 = "";
            }
            faseOutput();
            operazione = "";
        }

        if (op == "=")
            risultato = num1 + num2;


        

        faseOutput();
    }
}
