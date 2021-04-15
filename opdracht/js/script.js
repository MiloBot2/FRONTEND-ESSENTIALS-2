strAlfabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var strInput = "";          //input string
var strCodewoord = "";       //codewoord string
var strCodewoordFull = "";   //output string

arrInputPosities = [];      //array van input posities
arrCodewoordPosities = [];   //array van codewoord posities
arrOutputPosities = [];     //array van output posities

//Zet een string om naar een array met posities
function stringNaarPosities(str) {
    outputArray = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < strAlfabet.length; j++) {
            if (str[i].toUpperCase() == strAlfabet[j]) {
                outputArray.push(j);
                console.log("Letter: " + i + " = " + str[i] + " -> positie in alfabet = " + j);
            }
        }
    }
    console.log("Berekende posities: " + outputArray.toString())
    return outputArray;
}

//Zet een array met posities om naar een string
function positiesNaarString(arr) {
    var outputString = "";
    //TODO: opdracht 1
    for (let k = 0; k < arr.length; k++) {
        let ding = arr[k];
        let oke = strAlfabet[ding];

        for (let l = 0; l < oke.length; l++)
            outputString += oke;
    }
    return outputString;
}

//Geeft een array terug waarbij het codewoord herhaald wordt totdat de lengte overeenkomt met het te versleutelen bericht
//Dus als het bericht STUDENT (7 letters) is en het codewoord KLAS dan krijg je KLASKLA (7 letters) terug van deze functie.
function vermenigvuldigCodewoord(strInput, strCodewoord) {
    var outputString = "";

    var inputLength = strInput.length;
    var codewoordLength = strCodewoord.length;

    var intDiv = Math.floor(inputLength / codewoordLength); //het aantal keer dat het codewoord in zijn geheel in het bericht past
    var intMod = inputLength % codewoordLength; //het aantal letters dat overblijft die nog moeten worden aangevuld

    //TODO: opdracht 2
    for (let m = 0; m < intDiv; m++)
        outputString += strCodewoord;

    for (let n = 0; n < intMod; n++)
        outputString += strCodewoord[n];

    console.log("Codewoord full: " + outputString);
    return outputString;
}

//functie die een een bericht versleuteld.
function versleutel() {
    strInput = document.querySelector("#input").value;
    strCodewoord = document.querySelector("#codewoord").value;

    console.log("input: " + strInput);
    console.log("codewoord: " + strCodewoord);

    strCodewoordFull = vermenigvuldigCodewoord(strInput, strCodewoord);
    arrCodewoordPosities = stringNaarPosities(strCodewoordFull);
    arrInputPosities = stringNaarPosities(strInput);

    positiesNaarString(arrInputPosities);

    outputArray = [];
    for (let i = 0; i < arrInputPosities.length; i++) {
        if (arrInputPosities[i] + arrCodewoordPosities[i] > strAlfabet.length)
            outputArray.push((arrInputPosities[i] + arrCodewoordPosities[i]) - strAlfabet.length);
        else
            outputArray.push(arrInputPosities[i] + arrCodewoordPosities[i]);
    }
    console.log("versleuteld bericht: " + positiesNaarString(outputArray));
    document.querySelector("#output").value = positiesNaarString(outputArray);
    strCodewoordFull = [];
}

function ontsleutel() {
    //TODO: opdracht 3
    strInput = document.querySelector("#input").value;
    strCodewoord = document.querySelector("#codewoord").value;

    console.log("input: " + strInput);
    console.log("codewoord: " + strCodewoord);

    strCodewoordFull = vermenigvuldigCodewoord(strInput, strCodewoord);
    arrCodewoordPosities = stringNaarPosities(strCodewoordFull);
    arrInputPosities = stringNaarPosities(strInput);

    positiesNaarString(arrInputPosities);

    outputArray = [];
    for (let i = 0; i < arrInputPosities.length; i++) {
        if (arrInputPosities[i] - arrCodewoordPosities[i] < 0)
            outputArray.push((arrInputPosities[i] - arrCodewoordPosities[i]) + strAlfabet.length);
        else
            outputArray.push(arrInputPosities[i] - arrCodewoordPosities[i]);
    }
    document.querySelector("#output").value = positiesNaarString(outputArray);
    strCodewoordFull = [];
}