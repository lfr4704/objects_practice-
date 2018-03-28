var myAnimal = {
	name1: "harry",
	type1: "Dog",
	age: 2,
	location: "San Francisco",
	feet: 4,
	tail: 1,
	eyes: 2,
	ears: 2
};

myAnimal.name1 = "Husky";

console.log(myAnimal.name1);

var vehicle1 = {
	model: "town car",
	manufactuer: "linconln",
	miles: 30000,
	renter: "A100",
	values: 2000
};

var vehicle2 = {
	model: "old city",
	manufactuer: "ford",
	miles: 30000000,
	renter: "A101",
	values: 2000000
};

var vehicle3 = {
	model: "tractor",
	manufactuer: "John Deer",
	miles: 10000000,
	renter: "A102",
	values: 11000000
};


var vehicle4 = {
	model: "race",
	manufactuer: "Ferrari",
	miles: 1000,
	renter: "A102",
	values: 1100
};

var myFleet = [];

for (var i = 0; i < 4; i++){
	string = eval("vehicle"+(i+1)); //eval is a function to use a string as a variable
	myFleet[i] = string;
}

var fullstring = "Model: {";

for (var x = 0; x < myFleet.length; x++){
	fullstring = fullstring + myFleet[x].model + ", " + "}";
	}

	console.log(fullstring);