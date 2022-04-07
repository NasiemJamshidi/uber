// INPUT
// - gekozen service [variable]
// - gereden afstand [variabele]

// OUTPUT
// - De totale ritprijs afhankelijk van de gekozen service

// STAPPENPLAN
// 1. De gekozen service-variabele declareren [Uber X, Uber Black, Uber Van]
// 2. De afstand variabele declareren
// 3. Zoek de juiste kilometerprijs bij het gekozen servicetype
// 4. Vermenigvuldig deze ritprijs met de gereden km's
// 5. Log het totaal in de terminal

// deze waarde halen in het echt natuurlijk uit een invoerveld op een pagina
const chosenService = "Uber X";
const distance = 65;

let totalPrice = 0;

if (chosenService === "Uber X") {
  // Prijs = €3,-
  // vermenigvuldig de prijs * afstand;
  totalPrice = 3 * distance;
} else if(chosenService === "Uber Black") {
  // Prijs = €8,-
  // vermenigvuldig de prijs * afstand;
  totalPrice = 8 * distance;
} else if(chosenService === "Uber Van") {
  // Prijs = €6,-
  totalPrice = 6 * distance;
} else {
  // Zeg dat er iets mis gegaan is
  totalprice = "Er ging iets mis. Probeer het opnieuw."
}

console.log(totalPrice);




