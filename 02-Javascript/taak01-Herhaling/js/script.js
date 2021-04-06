let strNaam, strNaam2;
let boolNaamKlopt, boolNaamKlopt2;
let stranger = "\nTot de volgende keer!";

    /* Naam vragen en opslaan. */
strNaam = prompt("Hoe heet je?");

    /* Naam bevestiging en opslaan. */
boolNaamKlopt = confirm("Heet je " + strNaam + "?");

    /* Naam vragen. */
if(boolNaamKlopt)
    alert("Gegroet " + strNaam + "!");
else
{
    alert("Blijkbaar heet je niet " + strNaam + "." + stranger);

        /* Naam nog een keer vragen. */
    strNaam2 = prompt("Maar voordat je gaat.\nWat is je naam nou?");

        /* Naam nog een keer bevestigen. */
    boolNaamKlopt2 = confirm("Heet je " + strNaam2 + "?");

        /* Naam vragen. */
    if(boolNaamKlopt2)
        alert("Gegroet " + strNaam2 + "!");
    else
        alert("Blijkbaar heet je niet " + strNaam2 + ".");
}