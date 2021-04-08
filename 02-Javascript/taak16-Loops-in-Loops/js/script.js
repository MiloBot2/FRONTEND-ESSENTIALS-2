var arrProductPrijs = [5, 10, 20, 50, 100];
var arrProductKorting = [0.95, 0.85, 0.98, 1.21];
var totalPrices = [];
var priceNames = [];
let finalTotalPrice = 0;
var finalTotalPriceRevive;

function rondaf(getal, aantalplekkenachterkomma) {
    const x = Math.pow(10, aantalplekkenachterkomma);
    return Math.round(getal * x) / x;
}

for (let o = 0; o < arrProductPrijs.length; o++) {
    let total = arrProductPrijs[o];

    for (let i = 0; i < arrProductKorting.length; i++) {
        /* Prijs keer de factor korting. */
        total *= arrProductKorting[i];
    }

    /* Prijs opslaan. */
    priceNames.push("Product " + o + " : ");
    totalPrices.push(rondaf(total, 2));
}

for(let pls = 0; pls < priceNames.length; pls++)
{
    console.log(priceNames[pls] + totalPrices[pls]);
    finalTotalPrice += totalPrices[pls];
}

console.log("Totale bedrag: " + finalTotalPrice);