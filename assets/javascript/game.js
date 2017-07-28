//1 - Check to make sure the right JS file is connecting to the html.
console.log("2nd version of js for Basic Trivia game connected.")

var intervalId;
var clockRunning = false;

var stopwatch = {
	time: 0,

	start: function() {
	    intervalId = setInterval(stopwatch.count, 1000);
	    clockRunning = true;
	},

	stop: function() {
		clearInterval(intervalId);
		clockRunning = false;
	},

	count: function() {
		stopwatch.time++;
		var converted = stopwatch.timeConverter(stopwatch.time);
		$("#display").html(converted);
	 },

	timeConverter: function(t) {
		var minutes = Math.floor(t / 60);
		var seconds = t - (minutes * 60);
		if (seconds < 10) {
		    seconds = "0" + seconds;
		}
		if (minutes === 0) {
		    minutes = "00";
		}
		if (minutes === 2) {
			stopwatch.stop();
			var right = ($('input[value="right"]:checked').length);
			var wrong = 8 - right;
			$("h2").empty();
			$(".text-center").empty();
			$("#gameField").replaceWith("<h4>Time is up!</h4><br><h5>Your correct answers: " + right + "<br><h5>Your incorrect answers: " + wrong);
		}
		return minutes + ":" + seconds;
	}
};

$("#start").on("click", function() {
	$("#firstNebula").append("<img src='assets/images/bubble.png' class='img-thumbnail'><form><input type='radio' name='opt' value='right'><label for='option'>Bubble</label><br><input type='radio' name='opt' value='wrong'><label for='option'>Orion</label><br><input type='radio' name='opt' value='wrong'><label for='option'>Horsehead</label><br><input type='radio' name='opt' value='wrong'><label for='option'>Trifid</label></form>");
	$("#secondNebula").append("<img src='assets/images/butterfly.png' class='img-thumbnail'><form><input type='radio' name='opt' value='wrong'><label for='option'>Ring</label><br><input type='radio' name='opt' value='right'><label for='option'>Butterfly</label><br><input type='radio' name='opt' value='wrong'><label for='option'>Lagoon</label><br><input type='radio' name='opt' value='wrong'><label for='option'>Eskimo</label></form>");
	$("#thirdNebula").append("<img src='assets/images/cats_eye.png' class='img-thumbnail'><form><input type='radio' name='opt' value='wrong'><label for='option'>Omega</label><br><input type='radio' name='opt' value='wrong'><label for='option'>Owl</label><br><input type='radio' name='opt' value='right'><label for='option'>Cat's Eye</label><br><input type='radio' name='opt' value='wrong'><label for='option'>Veil</label></form>");
	$("#fourthNebula").append("<img src='assets/images/crab.png' class='img-thumbnail'><form><input type='radio' name='opt' value='wrong'><label for='option'>Tarantula</label><br><input type='radio' name='opt' value='wrong'><label for='option'>Flame</label><br><input type='radio' name='opt' value='wrong'><label for='option'>Egg</label><br><input type='radio' name='opt' value='right'><label for='option'>Crab</label></form>");
	$("#fifthNebula").append("<img src='assets/images/eagle.png' class='img-thumbnail'><form><input type='radio' name='opt' value='right'><label for='option'>Eagle</label><br><input type='radio' name='opt' value='wrong'><label for='option'>Heart</label><br><input type='radio' name='opt' value='wrong'><label for='option'>Ghost</label><br><input type='radio' name='opt' value='wrong'><label for='option'>Pelican</label></form>");
	$("#sixthNebula").append("<img src='assets/images/monkey_head.png' class='img-thumbnail'><form><input type='radio' name='opt' value='wrong'><label for='option'>Wolf</label><br><input type='radio' name='opt' value='right'><label for='option'>Monkey Head</label><br><input type='radio' name='opt' value='wrong'><label for='option'>Red Square</label><br><input type='radio' name='opt' value='wrong'><label for='option'>Cone</label></form>");
	$("#seventhNebula").append("<img src='assets/images/retina.png' class='img-thumbnail'><form><input type='radio' name='opt' value='wrong'><label for='option'>Iris</label><br><input type='radio' name='opt' value='wrong'><label for='option'>Boomerang</label><br><input type='radio' name='opt' value='right'><label for='option'>Retina</label><br><input type='radio' name='opt' value='wrong'><label for='option'>Egg</label></form>");
	$("#eigthNebula").append("<img src='assets/images/swan.png' class='img-thumbnail'><form><input type='radio' name='opt' value='wrong'><label for='option'>Bubble</label><br><input type='radio' name='opt' value='wrong'><label for='option'>Eskimo</label><br><input type='radio' name='opt' value='wrong'><label for='option'>Heart</label><br><input type='radio' name='opt' value='right'><label for='option'>Swan</label></form>");
	$("#submitButton").append("<button id='submit' class='btn btn-default btn-lg'>Submit Your Answers</button>");
	$("#timer").replaceWith("<div id='display'>00:00</div>");
	stopwatch.start();

	$("#submit").on("click", function() {
		stopwatch.stop();
		grade();
	});

	function grade() {
		var right = ($('input[value="right"]:checked').length);
		var wrong = 8 - right;
		$("#display").empty();
		$("h2").empty();
		$("#gameField").replaceWith("<h4>Your Score</h4><br><h5>Your correct answers: " + right + "<br><h5>Your incorrect answers: " + wrong);
	}
});

// * * * PSUEDOCODE & REQUIREMENTS * * *
// √ 1.0 Click Start to start the game.
// √ 1.1 A timer starts to count down - a minimum of 120 seconds.
// √ 1.2 Once timer reaches it's limit, then the correct and incorrect are counted.
// √ 1.2.1 JQuery to display the correct and incorrect counts html.

// √ 2.0 JQuery populates the html with 8 questions.
// √ 2.1 Each question has four input boxes but only one is correct.
// √ 2.2 Do not allow the selection of more then one answer.
// √ 2.3 User clicks "done" or "submit" for the correct and incorrect are counted - invoke grade function.
// √ 2.3.1 Use JQuery to display the correct and incorrect counts html.

// * * * ACTION ITEMS & TO D0 * * * 
// √ 0.1 Create Repo and basic file structure.
// √ 0.2 Create initial files - index, reset, and game.js
// √ 0.3 Psuedocode off of watching the demo.
// √ 1.0 Pick theme for the game. - "Out of this World - Know your Nedulas"
// √ 2.0 Create 8 questions based on that theme.
// √ 3.0 Build how the HTML should render and identify which elements will be built with JQuery.
// √ 4.0 Start to code the logic for JS, use console.log to validate as you build.