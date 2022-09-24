
String.prototype.reverse = function () {
	return Array.from(this).reverse().join("");
}
String.prototype.blank = function() {
	return !!this.match(/^\s+$/);
};
Array.prototype.last = function() {
	return this.slice(-1);
}
// Defines a Phrase object,
function Phrase(content) {	
	this.content = content;

	this.processor = function (string) {
		return string.toLowerCase()
	}

	this.processedContent = function processedContent() {
		// return this.content.toLowerCase();
		return this.processor(this.content);
	}

	this.palindrome = function palindrome() {
		return this.processedContent() === this.processedContent().reverse();
	}
}

function TranslatedPhrase(content, translation) {
	this.content = content;
	this.translation = translation;

	// Returns translation processed for palindrome testing
	this.processedContent = function processedContent() {
		// return this.translation.toLowerCase();
		return this.processor(this.translation);
	}
}
TranslatedPhrase.prototype = new Phrase();