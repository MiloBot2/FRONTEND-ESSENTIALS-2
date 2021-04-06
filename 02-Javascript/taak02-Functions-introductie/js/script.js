let naam, ok;

alertRandom();
vraagNaam();
confirmNaam();

function alertRandom()
{
    alert("Hoi!");
}

function vraagNaam()
{
    naam = prompt("Wat is uw naam?");
}

function confirmNaam()
{
    ok = confirm("Een heel fijn weekend " + naam + "!");

    if(ok)
        console.log("ok");
    else
        console.log("dan niet");
}