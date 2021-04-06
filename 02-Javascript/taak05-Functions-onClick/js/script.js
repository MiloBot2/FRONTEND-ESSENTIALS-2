var huidigeKleur = "white";
let lol = 1;

function toonAlert()
{
    if(lol < 2)
        alert("Je hebt op de knop gedrukt.\nAls je nog een keer op deze knop drukt wordt het scherm weer wit.");
    else
    {
        lol = 0;
        veranderKleur("White");
    }
    lol++;
}

function maakGroen()
{
    veranderKleur("Green");
}

function maakBlauw()
{
    veranderKleur("Blue");
}

function maakRood()
{
    veranderKleur("Red");
}

function veranderKleur(kleur)
{
    document.querySelector("body").style.backgroundColor = kleur;
}