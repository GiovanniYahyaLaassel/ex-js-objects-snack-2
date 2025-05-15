// Snack 2

const hamburger = { 
	name: "Cheese Burger", 
	weight: 250,
	ingredients: ["Cheese", "Meat", "Bread", "Tomato"]
};

const secondBurger = {...hamburger};
secondBurger.ingredients[0] = "Salad";

console.log(hamburger.ingredients[0]); // ?
console.log(secondBurger.ingredients[0]); // ?

// Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
// Verrà stampato Salad in entrambi i console.log

// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
// Sono stati creati 2 oggetti hamburger e secondBurger e 1 array ingredients che viene condiviso.
// Sono 3 elementi in memoria, ma solo 1 array usato da entrambi.