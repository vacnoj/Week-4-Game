$(document).ready(function() {

$("#attack-button").hide();
var prompt = "Choose a Character!";

$("#prompt-text").html(prompt);

interval = setInterval(timer, 700);

var firstChar = "none";

function timer() {

$("#prompt-text").toggleClass("opacity");

}

$("#obi").on('click', function() {

	if (firstChar ==="none") {
		firstChar = "obi";
	}
	$("#attacker").append($("#obi"));
	prompt = "Choose an Opponent!";
	$("#prompt-text").html(prompt);

	if (firstChar !== "obi") {
		$("#defender").append($("#obi"));
		$("#attack-button").show();
	}

});

$("#anakin").on('click', function() {

	if (firstChar ==="none") {
		firstChar = "anakin";
	}

	$("#attacker").append($("#anakin"));
	prompt = "Choose an Opponent!";
	$("#prompt-text").html(prompt);
	
});

$("#maul").on('click', function() {

	if (firstChar ==="none") {
		firstChar = "maul";
	}
	$("#attacker").append($("#maul"));
	prompt = "Choose an Opponent!";
	$("#prompt-text").html(prompt);
	
});

$("#sidious").on('click', function() {

	if (firstChar ==="none") {
		firstChar = "sidious";		
	}
	$("#attacker").append($("#sidious"));
	prompt = "Choose an Opponent!";
	$("#prompt-text").html(prompt);
	
});

});