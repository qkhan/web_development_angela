

var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userChosenColour = "";
var userClickedPattern = [];
var level = 0;
var randomChosenColour = "";
var color_id = "red";

function nextSequence() {
  level += 1;
  $("#level-title").html("Level " + level);
  randomNumber = Math.floor(Math.random() * 4);
  // console.log("Next nextSequence");
  // console.log(randomNumber);
  // randomChosenColour = buttonColors[randomNumber];
  // playSound(randomChosenColour);
  // $(this).addClass("pressed");//.delay(10000).removeClass('pressed');
  // timeFunction(randomChosenColour);

  return randomNumber
}



$(document).on('keypress',function(e) {
    console.log("Key Presee");
    console.log(e.key);
    if (level === 0) {
      $("#level-title").html("Level 0");
      randomNumber = nextSequence();
      randomChosenColour = buttonColors[randomNumber];
    }
    alert(randomChosenColour);
    color_id = "#" + randomChosenColour;
    playSound(randomChosenColour);
    $(color_id).addClass("pressed");//.delay(10000).removeClass('pressed');
    timeFunction(randomChosenColour);
    gamePattern.push(randomChosenColour);
});




//$(color_id).fadeOut(200).fadeIn(200);

$(color_id).on('click', function () {
  $(color_id).fadeOut(200).fadeIn(200);

  console.log(randomChosenColour);
  gamePattern.push(randomChosenColour);
  console.log(gamePattern);
  playSound(randomChosenColour);
  randomNumber = nextSequence();
  randomChosenColour = buttonColors[randomNumber];
})

// $(color_id).on('click', function () {
//     var obj = document.createElement("audio");
//     obj.src = "sounds/" + randomChosenColour + ".mp3";
//     console.log("Audio File");
//     console.log(obj.src);
//     obj.play();
//     userChosenColour = randomChosenColour;
// });

$(".btn").click(function () {
  userChosenColour = this.id;
  playSound(userChosenColour);
  $(this).addClass("pressed");//.delay(10000).removeClass('pressed');
  timeFunction(userChosenColour);
  userClickedPattern.push(userChosenColour);
  console.log("userClickedPattern");
  console.log(userClickedPattern);
  randomNumber = nextSequence();
  randomChosenColour = buttonColors[randomNumber];
  alert(randomChosenColour);
  color_id = "#" + randomChosenColour;
  playSound(randomChosenColour);
  $(color_id).addClass("pressed");//.delay(10000).removeClass('pressed');
  timeFunction(randomChosenColour);
  gamePattern.push(randomChosenColour);
})

function timeFunction(value) {
    color_id = "#" + value;
    setTimeout(function(){ $(color_id).removeClass("pressed") }, 1000);
}


function playSound(name) {
  var obj = document.createElement("audio");
  obj.src = "sounds/" + name + ".mp3";
  console.log("Audio File");
  console.log(obj.src);
  obj.play();
}
