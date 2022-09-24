// the require funciton adds libraries. 
// assert is a library from mocha testing framework and 
// ../index.js is code for the Phrase object 
// including that palindrome method we will be testing.
let assert = require("assert");
let Phrase = require("../index.js");

// here is the mocha documentations for these decribe functions
// https://mochajs.org/#assertions
// describe takes tow args, a string which it will print
// and a function. We will nest another describe funcion beacuase we want
// to test the palidrome method inside the Phrase object
// #palindrome is just a string, 
// the hash is used to identify palindrome as an object method

// // inside the nested describe function we'll use an it function
// the it function takes a string. it will say the condition of the test
// here it says that the palindrome method should return false for a
// non-palidrome. 
// the function argument takes a phrase "apple" and asserts that nonPalidrome 
// is not a palindrome. so it comes back true, which gives green. 

describe("Phrase", function () {

	describe("#palindrome", function() {
	
		it("should return false for a non-palindrome", function () {
			let nonPalindrome = new Phrase("apple");
			assert(!nonPalindrome.palindrome());
		});

		it("should return true for a plain palindrome", function () {
			let plainPalindrome = new Phrase("racecar");
			assert(plainPalindrome.palindrome());
		});

		it("should return true for a mixed-case palindrome", function () {
			let mixedCase =  new Phrase("RaceCar");
			assert(mixedCase.palindrome());
		});	

		it("should return true for a palindrome with punctuation", function () {
			let punctuatedPalindrome = new Phrase("Madam, I'm Adam.");
			assert(punctuatedPalindrome.palindrome());
		});
	});
	describe("#letters", function() {
		it("should return only letters", function () {
			let	punctuatedPalindrome =	new Phrase("Madam, I'm Adam.");
			assert.strictEqual(punctuatedPalindrome.letters(), "MadamImAdam"); //actual expected

			// assert.strictEqual("MadamImAdam",punctuatedPalindrome.letters()); // reverse order expected actual
			// assert(punctuatedPalindrome.letters() === "MadamImAdam");
		})
	})
});

