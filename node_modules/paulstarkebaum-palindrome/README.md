This is a NPM module created in Learn Enough Javascript to be Dangerous by Michael Hartl

The module is used as follows:

$ npm install --global paulstarkebaum-palindrome
$ vim test.js
let Phrase = require("paulstarkebaum-palindrome");
let napoleansLament = new Phrase("Able was I, ere I saw Elba.");
console.log(napoleonsLament.palindrome());
$ node test.js
true