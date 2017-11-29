$(document).ready(function() {

	crystals = ['assets/images/1.png','assets/images/blue.png','assets/images/yellow.png','assets/images/green.png'];

	var counter = 0;
	var wins = 0;
	var losses = 0;
	$('#win').text(wins);
	$('#loss').text(losses);
	
	newCrystals();
	newGame();