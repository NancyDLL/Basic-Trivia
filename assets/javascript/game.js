//1 - Check connection to html page
console.log("js for Basic Trivia game connected.")

$("#start").on("click", function() {
	console.log("start button clicked")
	$("#timer").replaceWith("<h3>Count Down</h3>")

	setTimeout(timeUp, 1000*120);
		console.log("120 seconds left");

	function timeUp() {
		console.log("time is up");
		grade();
	}

	function grade() {
		console.log("Grade function runs and displays results")
		var right = 0;
		var wrong = 0;
		$("#gameField").replaceWith("<h3>Your Score is</h3>")
	}
});

// * * * PSUEDOCODE & REQUIREMENTS * * *
// √ 1.0 Click Start to start the game.
// 1.1 A timer starts to count down - a minimum of 120 seconds.
// 1.2 Once timer reaches it's limit, then the correct, incorrect, and unanswered are counted - invoke grade function.
// 1.2.1 JQuery to display the incorrect, incorrect, and unanswered counts html.

// 2.0 JQuery populates the html with 8 questions.
// 2.1 Each question has four input boxes but only one is correct.
// √ 2.2 Do not allow the selection of more then one answer.
// 2.3 User clicks "done" or "submit" for the correct, incorrect, and unanswered are counted - invoke grade function.
// 2.3.1 Use JQuery to display the incorrect, incorrect, and unanswered counts html.

// * * * ACTION ITEMS & TO D0 * * * 
// √ 0.1 Create Repo and basic file structure.
// √ 0.2 Create initial files - index, reset, and game.js
// √ 0.3 Psuedocode off of watching the demo.
// √ 1.0 Pick theme for the game. - "Out of this World - Know your Nedulas"
// √ 2.0 Create 8 questions based on that theme.
// √ 3.0 Build how the HTML should render and identify which elements will be built with JQuery.
// 4.0 Start to code the logic for JS, use console.log to validate as you build.