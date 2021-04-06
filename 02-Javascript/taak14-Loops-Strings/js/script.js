let what = prompt("Voer hier een zin in:")

function outputLetters(str) {
    let output = 0;
    for (let i = 0; i < str.length; i++)
        output++;
    return output;
}

console.log(outputLetters(what));