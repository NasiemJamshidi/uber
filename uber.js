console.log('Toen Uber nog simpel was');

// INPUT
// - Prijs per kilometer [variabele]
// - Gereden afstand [variabele]

// OUTPUT
// - Totale ritprijs (prijs per km * gereden afstand) [variabele]

// STAPPENPLAN
// 1. Gereden afstand invoeren / variabele daarvoor aanmaken;
// 2. Prijs per km invoeren / variabele daarvoor aanmaken;
// 3. Nieuwe variabele maken voor Totale ritprijs en daar de vermenigvuldiging van de twee inputs in opslaan
// 4. Log de uitkomst in de terminal

const distance = 30;
const pricePerKm = 3;
const time = 0.40;

const total = distance * pricePerKm * time;

console.log("€" + total + " euro wordt het");
