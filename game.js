var buttonColor = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

$(".btn").on("click", function() {

    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);

    playSound(userChosenColor);
    animatePress(userChosenColor);
})

function nextSequence() {
// randomNumber will be used to randomly select the index number of buttonColor
    var randomNumber = Math.floor(Math.random() * 4);

// variable shows the index of the button color randomly chosen
    var randomChosenColor = buttonColor[randomNumber];

// Adds the new randomChosenColor generated above to the end of the gamePattern
    gamePattern.push(randomChosenColor);

// jQuery to animate the selected randomChosenColor
    $("#" + randomChosenColor).fadeOut(100).fadeIn(100);
    
    playSound(randomChosenColor);
}

function playSound(name) {

// JS to play the matching sound to the chosen color
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
    }

// Add Animations to User Clicks
function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");

    setTimeout(function() {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}