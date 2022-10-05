
let Phrase = require("pstark-pal2");
let string = prompt("Please enter a string for palindrome testing:");
let phrase = new Phrase(string);

console.log('hello in main.js');
if (phrase.palindrome()) {
	alert(`"${phrase.content}" is a palindrome!`);
} else {
	alert(`"${phrase.content}" is not a palindrome!`);
}