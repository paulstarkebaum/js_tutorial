(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// This is our npm module, it's in pal2/index.js, it exports the Phrase object
// the module is called pstark-pal2 which is in the package.json in the pal2 folder.
// when we call this locallay we have go to the project root directory repos/pal2
// and let Phrase =  require("./index.js")
// that is we assign the exported Phrase from index to a new Phrase object
// to find and replace> copy selection to replace, select to find, control K D to skip and select next
// control D to select next, paste. ctrl U if you select too many. 

module.exports = Phrase;
console.log('hello in index.js v0.1.1');
// Adds .reverse method to all strings.
String.prototype.reverse = function () {
	return Array.from(this).reverse().join("");
}

// Defines a Phrase object which contains .palindrome method,
function Phrase(content) {	
	this.content = content;

	this.letters = function letters() {
		// let theLetters = [];
		// const letterRegex = /[a-z]/i;
		// Array.from(this.content).forEach(function(character) {
		// 	if (character.match(letterRegex)) {
		// 		theLetters.push(character);
		// 	}
		// });
		// return theLetters.join("");
		// return Array.from(this.content).filter(c => c.match(/[a-z]/i)).join("");
		const lettersRegEx = /[a-z]/gi;
		return(this.content.match(lettersRegEx) || []).join("");
		// return(this.content.match(/[a-z]/gi)).join("");

	}

	this.processedContent = function processedContent() {
		return this.letters().toLowerCase();
	}

	this.palindrome = function palindrome() {
		console.log(`${this.processedContent()} = ${this.processedContent().reverse()}`)
		console.log(`index log`);
		return this.processedContent() === this.processedContent().reverse();

	}
}

},{}],2:[function(require,module,exports){

let Phrase = require("pstark-pal2");
let string = prompt("Please enter a string for palindrome testing:");
let phrase = new Phrase(string);

console.log('hello in main.js');
if (phrase.palindrome()) {
	alert(`"${phrase.content}" is a palindrome!`);
} else {
	alert(`"${phrase.content}" is not a palindrome!`);
}
},{"pstark-pal2":1}]},{},[2]);
