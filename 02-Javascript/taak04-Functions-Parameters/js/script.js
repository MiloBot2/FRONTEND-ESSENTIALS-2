let inputString;

function telOp(getal1, getal2)
{
    return getal1 + getal2;
}

inputNumber = prompt("Voer hier 2 nummers in met een spatie ertussen:");

let n1 = inputNumber.split(" ");
let result = telOp(parseInt(n1[0]), parseInt(n1[1]));

console.log(n1[0] + " + " + n1[1] + " = "  + result);