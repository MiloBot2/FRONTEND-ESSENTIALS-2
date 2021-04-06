topFilms = [
  "The Godfather",
  "The Shawshank Redemption",
  "Schindler's List",
  "Raging Bull",
  "Casablanca",
  "Citizen Kane",
  "Gone with the Wind",
  "The Wizard of Oz",
  "One Flew Over the Cuckoo's Nest",
  "Lawrence of Arabia",
];

eigenTopFilms = [];

let index = 11 - topFilms.length;

//met deze for-loop word de ordered list gevuld met film namen
for (i = 0; i < topFilms.length; i++) {
  document.querySelector(".imdb-film" + (i + 1)).innerHTML = topFilms[i];
}

function kiesFilm() {
  let chosen = prompt("Welke film staat op plek " + index + "?");
  let input = chosen - 1;

  document.querySelector(".imdb-film" + chosen).classList.add("striked");

  if (eigenTopFilms.length < 3) {
    eigenTopFilms.push(topFilms[input]);
    console.log("Added '" + eigenTopFilms + "' to your list.");
  }

  for (i = 0; i < eigenTopFilms.length; i++) {
    document.querySelector(".eigen-film" + (i + 1)).innerHTML = eigenTopFilms[i];
  }
}
