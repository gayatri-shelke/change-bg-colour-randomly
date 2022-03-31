
var quotes = [
	{
		"quote": "Be the change you wish to see.",
		"author": "Mahatma Gandhi",
	},
	{
		"quote": "Social progress can be measured by the social position of the female sex.",
		"author": "Karl Marx",
	},
	{
		"quote": "I like the religion that teaches liberty, equality and fraternity.",
		"author": "B. R. Ambedkar",
	},
	{
		"quote": "If you tremble with indignation at every injustice then you are a comrade of mine.",
		"author": "Ernesto Che Guevara",
	},
	{
		"quote": "Teaching is a very noble profession that shapes the character, caliber, and future of an individual. If the people remember me as a good teacher, that will be the biggest honour for me.",
		"author": "Abdul Kalam",
	}
];

document.getElementById("saidso").innerHTML = quotes[0].quote;
document.getElementById("author").innerHTML = quotes[0].author;

var bgColors = ["red", "pink", "yellow", "green", "white", "darkcyan", "silver", "BlanchedAlmond", "chocolate", "darkorchid"];

function changeQuote() {
  var i = Math.floor(Math.random()*5);
  var j = Math.floor(Math.random()* bgColors.length);
  var k = Math.floor(Math.random()* bgColors.length);
  
  document.getElementById("saidso").innerHTML = quotes[i].quote;
  document.getElementById("author").innerHTML = quotes[i].author;
  document.getElementById("main").style.backgroundColor = bgColors[j];
  document.getElementById("quote").style.backgroundColor = bgColors[k];
}