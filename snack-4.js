const chef = {
	name: "Chef Hyur",
	age: 29,
	makeBurger: (num = 1) => {
		console.log(`Ecco ${num} hamburger per te!`);
	},
}

const restaurant = {
	name: "Hyur's Burgers",
	address: {
		street: 'Main Street',
		number: 123,
	},
	openingDate: new Date(2025, 3, 11),
	isOpen: false,
};


// Qual è il metodo migliore per clonare l’oggetto chef, e perché?

// Il metodo migliore è lo spread operator ({ ...chef }) perché, copia tutte le proprietà (name, age) e mantiene anche la funzione makeBurger.
// 

// Qual è il metodo migliore per clonare l’oggetto restaurant, e perché?

// Il metodo migliore è structuredClone(restaurant) perché, l’oggetto contiene una proprietà Date.
// Se usassi JSON.parse la perderei perchè la trasformerei in stringa. 
// structuredClone() crea una copia profonda e gestisce in modo corretto oggetti complessi come Date.


