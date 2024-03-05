var buttonColor = ["red", "blue", "green", "yellow"];

var gamePattern = [];


function nextSequence() {
// randomNumber will be used to randomly select the index number of buttonColor
    var randomNumber = Math.floor(Math.random() * 4);

// variable shows the index of the button color randomly chosen
    var randomChosenColor = buttonColor[randomNumber];

// Adds the new randomChosenColor generated above to the end of the gamePattern
    gamePattern.push(randomChosenColor);

// jQuery to animate the selected randomChosenColor
    $("#" + randomChosenColor).fadeOut(100).fadeIn(100);
}

nextSequence();