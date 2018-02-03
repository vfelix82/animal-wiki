$(document).ready(function() {
  var animal = prompt("which animal would you like to know more about it?");

  if (animal === "turtle") {
    $("#turtle").show();
  } else if (animal === "snake") {
    $("#snake").show();
  } else if (animal === "insects") {
    $("#insects").show();
  } else {
    alert("Please choose Turtle, Snake, or Insects from the list.");
  }
});
