var buttonColor = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;    // Variable to track whether game has started
var level = 0;


$(document).on("keydown", function() {
    // Check if the game has started
    if (!started) {
        // Update h1 Title Text
        $("#level-title").text("Level " + level);

        // If the game hasn't started yet, call nextSequence()
        nextSequence();

        // Set started to true to indicate that the game has started
        started = true;


    }
})

/* Listening for user's click. If clicked:
    1. record which color was clicked
    2. push the color to the userClickedPattern array
    3. play sound connected to clicked color
    4. animate the color click
    5. check if the clicked color matches the pattern */
$(".btn").on("click", function() {

    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);

    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);

    
  
})

// Check the User's answer against the game sequences
function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function() {
                nextSequence();
            }, 1000);
        }
    }
    else {
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");

        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200);

        startOver();
    }
}


function nextSequence() {
    // Update h1 title text with Level change
    $("#level-title").text("Level " + level);
    
    // Increase level
        level++;

// randomNumber will be used to randomly select the index number of buttonColor
    var randomNumber = Math.floor(Math.random() * 4);

// variable shows the index of the button color randomly chosen
    var randomChosenColor = buttonColor[randomNumber];

// Adds the new randomChosenColor generated above to the end of the gamePattern
    gamePattern.push(randomChosenColor);

// jQuery to animate the selected randomChosenColor
    $("#" + randomChosenColor).fadeOut(100).fadeIn(100);
    
    playSound(randomChosenColor);
    userClickedPattern = [];    // Reset the user clicked pattern for the new level

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


function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}

