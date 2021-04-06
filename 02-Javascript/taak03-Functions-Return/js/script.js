function geefRandomGetalTerug()
{                
    return Math.floor((Math.random() * 10) + 1);
}

for(let y = 0; y < 10; y++)
    console.log(geefRandomGetalTerug());