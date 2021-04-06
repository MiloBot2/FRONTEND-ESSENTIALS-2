var score = 0;
let getal1, getal2, boolComparing;

function makeRandomNumber() {
    return Math.floor(Math.random() * 99 + 1);
}

function showRandomNumber1(getal) {
    let randomGetal = makeRandomNumber();
    document.querySelector(getal).innerHTML = randomGetal;
    return randomGetal;
}

function setColor(color) {
    document.querySelector("body").style.backgroundColor = color;
}

function refreshNumbers() {
    document.querySelector(".getal1").innerHTML = makeRandomNumber();
    document.querySelector(".getal2").innerHTML = makeRandomNumber();

    if (
        document.querySelector(".getal1").innerHTML ==
        document.querySelector(".getal2").innerHTML
    )
        document.querySelector(".getal2").innerHTML += 4;
}

function geefAntwoord(input) {
    result = false;

    let n1 = document.querySelector(".getal1").innerHTML,
        n2 = document.querySelector(".getal2").innerHTML;

    if (result) score++;
    else score = 0;

    let antwoord = n1 > n2 ? "hoger" : n2 > n1 ? "lager" : "hoger";

    if (input == antwoord) {
        setColor("Green");
        result = true;
    }
    else {
        setColor("Red");
        result = false;
    }

    /* Debug. */
    console.log(
        "Getal1 : " +
        document.querySelector(".getal1").innerHTML +
        " is " +
        antwoord +
        " dan Getal2: " +
        document.querySelector(".getal2").innerHTML
    );

    document.querySelector(".score").innerHTML = score;

    refreshNumbers();

    return result;
}

refreshNumbers();
