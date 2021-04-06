let topMuziek = [
  "OneRepublic - Rescue me",
  "Maroon5 - I'm Blue",
  "Bingo players - Out of time",
];
let topProgramLanguages = ["Node.js", "Java", "C#"];
let topFrisdranken = ["Fanta", "Cassis", "Fernandes"];

/* for loop, want ik ben te lui. */
for (let top = 0; top < 9; top++) {
  if (top < 3) console.log(topMuziek[top]);
  else if (top < 6) console.log(topProgramLanguages[top - 3]);
  else console.log(topFrisdranken[top - 6]);
}
