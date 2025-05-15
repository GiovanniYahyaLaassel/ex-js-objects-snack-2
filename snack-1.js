// Snack1

const hamburger = { name: "Cheese Burger", weight: 250 };
const secondBurger = hamburger;

secondBurger.name = 'Double Cheese Burger';
secondBurger.weight = 500;

console.log(hamburger.name); // ?
console.log(secondBurger.name ); // ?


// Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
// Verrà stampato 2 volte  Double Cheese Burger 


// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
// E'stato creato un solo oggetto in memoria, la variabile secondBurger è un riferimento.











