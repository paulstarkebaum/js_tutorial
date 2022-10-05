// let mp = require.resolve("pstark-pal2");
// delete require.cache[mp];
// let Phrase = require("pstark-pal2");
let Phrase = require("../pal2/")
// import-fresh is an npm module that will reload the module not the cache
// let importFresh = require("/usr/lib/node_modules/import-fresh");
// let Phrase = importFresh("pstark-pal2");

// console.log('hello in main.js');

function palindromeTester(event) {
	event.preventDefault();
	// let string = prompt("Please enter a string for palindrome testing:");
	let phrase = new Phrase(event.target.phrase.value);
	let palindromeResult = document.querySelector("#palindromeResult");

	if (phrase.palindrome()) {
		palindromeResult.innerHTML = `<strong>"${phrase.content}"</strong> is a palindrome!`;
	} else {
		palindromeResult.innerHTML = `<strong>"${phrase.content}"</strong> is not a palindrome!`;
	}	
}
document.addEventListener("DOMContentLoaded", function() {
	let tester = document.querySelector("#palindromeTester");
	tester.addEventListener("submit", function (event) {
		palindromeTester(event);
	});
	// let button = document.querySelector("#palindromeTester");
	// button.addEventListener("click", function () {
	// 	palindromeTester();
	// });
});

// In the html we put the button into a form with type submit, and the id in  the form
// here in the js we put we use document.querySelector to find the palindrome tester id 
// in the form. to this object, which we call form, we use the addEventListener method, listenening for 
// the submit event associated witht the button, to call the palindromeTester() function.
// These functions are then placed inside document.addeventListener("DOMContentLoaded",function(){})
// // because they have to wait fot the page to load first.
// the form relaod the page, making the text flash and disappear, the solution is having the form
// return false, or change the event to button and click rather that submit and submit.