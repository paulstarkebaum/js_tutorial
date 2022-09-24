module.exports = Phrase;

String.prototype.reverse = function () {
	return Array.from(this).reverse().join("");
}

// Defines a Phrase object,
function Phrase(content) {	
	this.content = content;

	// returns lowercase letters, filters nonletters
	this.processedContent = function processedContent() {
		return this.letters().toLowerCase();
	}

	// Returns the letters in the content.
	// For example:
	// new Phrase("Hello, World!").letters() === "Helloworld"
	this.letters = function letters() {
		return (this.content.match(/[a-z]/gi) || []).join("");
	}

	this.palindrome = function palindrome() {
		return this.processedContent() === this.processedContent().reverse();	
	}


}