// import data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");
	// With this code, we:
		// Declare a variable, tbody
		// Use d3.select to tell JavaScript to look for the <tbody> tags in the HTML

// JS FUNCTIONS

// Simple JavaScript console.log statement
function printHello();
// Add set of {} and indent code
function printHello() {
	console.log("Hello there!");
}

// Take two numbers and add them
function addition(a, b) {
	return a + b;
}
// Run function using a=4, b=5
console.log(addition(4, 5));

// Run it condensed
addition(4, 5);
	// (a,b) items = parameters 

// Functions can call other functions
function doubleAddition(c, d) {
	var total = addition(c, d) * 2;
	return total;
}
// Run function using (4, 5)
doubleAddition(4, 5);
doubleAddition(65, 34);

// ARROW FUNCTIONS ("fat arrow:"=>)

// Simple JavaScript log statement
function printHello() {
	return "Hello there!";
}
// ARROW:
printHello = () => "Hello there!";

// Original addition

function(a, b) {
	return a + b;
}

// Converted to an arrow function
addition = (a, b) => a + b;

// Original doubleAddition function
function doubleAddition(c, d) {
	var total = addition(c, d) * 2;
	return total;
}
// Converted to an arrow function
addition = (a, b) => a + b;

// Refactor doubleAddition into single line
doubleAddition = (c, d) => addition(c, d) * 2;

doubleAddition(35, 25);

// USE A JAVASCRIPT FOR LOOP
let friends = ["Sarah", "Greg", "Cindy", "Jeff"];

// Iterate thru each name in friends list
function listLoop(userList) {
	for (var i = 0; i < userList.length; i++) {
		console.log(userList[i]);
	}
}
listLoop(userList);

////////////////

// PRACTICE USING FOR LOOPS IN JAVASCRIPT

// Function 1:
let vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"]

for (var i = 0; i < vegetables.length; i++) {
	console.log("I love" + vegetables[i]);
}

// Function 2:
for (var i = 0; i < 5; i++){
	console.log(" I am" + i);
}


