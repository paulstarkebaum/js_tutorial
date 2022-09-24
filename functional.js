// we want to go from "North Dakota" to "north-dakota" 
// which is url friendly

let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// Returns a URL-friendly versoin of a string.
// 	Example: "North Dakota" => "north-dakota"
let urlify = (string) => {
	return string.toLowerCase().split(/\s+/).join('-');
}

// urls: imperative version
let imperativeUrls = (elements) => {
	let urls = [];
	elements.forEach((element) => {
		urls.push(urlify(element));
	});
	return urls;
} 
console.log(imperativeUrls(states));

// urls: Functional version
let functionalUrls = (elements) => {
	return elements.map(element => urlify(element));
}
console.log(functionalUrls(states));

let urlCreator = (elements) => {
	elements = functionalUrls(elements);
	return elements.map(element => "https://example.com/" + element);
}
// console.log(urlCreator(states));

// singles :Imperative version
function imperativeSingles(elements) {
	let singles = [];
	elements.forEach(function(element) {
		if (element.split(/\s+/).length === 1) {
			singles.push(element);
		}
	});
	return singles;
}
console.log(imperativeSingles(states));

// singles: Functional version
function functionalSingles(elements) {
	return elements.filter(element => element.split(/\s+/).length === 1);
}
console.log(functionalSingles(states));

// Use filter to return list that elements include Dakota
let includesDakota = (elements) => {
	return elements.filter(element => element.includes("Dakota"));
}
console.log(includesDakota(states));

// Use filter to return elements that have split array length === 2
let splitDakota = (elements) => {
	return elements.filter(element => element.split(/\s+/).length === 2);
}
console.log(splitDakota(states));

let numbers = [1,2,3,4,5,6,7,8,9,10];

// Sum imperative solution
function imperativeSum(elements) {
	let total = 0;
	elements.forEach(function(n) {
		total+= n;
	});
	return total;
}
console.log(imperativeSum(numbers));

// sum: Functional solution
function functionalSum(elements) {
	return elements.reduce((total,n) => { return total += n; });
}
console.log(functionalSum(numbers));

// length: Imperative solution
function imperativeLengths(elements) {
	let lengths = {};
	elements.forEach(function(element) {
		lengths[element] = element.length;
	});
	return lengths;
}
console.log(imperativeLengths(states));

// length: Functional solution
function functionalLengths(elements) {
	return elements.reduce((lengths,element) => {lengths[element] = element.length;return lengths;}, {});}
console.log(functionalLengths(states));

// reduce arry product
function arrayProduct(elements) {
	return elements.reduce((product,n) => {return product *= n});
}

console.log(arrayProduct(numbers));


