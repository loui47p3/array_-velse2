/* et array */
const playListe = ["Two of us", "Dig a Pony", "Across the Univserse", "I Me Mine"];

/* forEach loop*/
playListe.forEach(visEnAfGangen);

/* lav funktionen til forEach*/
function visEnAfGangen(playListe) {
  console.log(playListe);

  /* få den ud i man og ik kun i consol*/
  document.querySelector("ul").innerHTML += `<li>${playListe} </li>`;
}
