// snack 3

const hamburger = { 
	name: "Cheese Burger", 
	weight: 250,
	maker: {
		name: "Anonymous Chef",
		restaurant: {
			name: "Hyur's Burgers",
			address: "Main Street, 123",
			isOpen: true,
		},
		age: 29
	}
};

const secondBurger = structuredClone(hamburger);
const thirdBurger = structuredClone(hamburger);

// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?

// In totale sono stati creati 9 oggetti in memoria:
// - 3 oggetti per hamburger
// - 3 oggetti per secondBurger 
// - 3 oggetti per thirdBurger
// Ogni clone è completamente indipendente grazie all'uso di structuredClone().