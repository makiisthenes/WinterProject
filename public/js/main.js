
// We are using jQuery to do this.
// Function to remove name when user has entered a name and has clicked submit.
// var container = $(".login_container");
// container.fadeOut();


// This code is from http://jsfiddle.net/zrjw2a8m/
// Used if neccessary to blur the screen when function is clicked.


// Currently there is no Javascript, obfuscation will be used.
/* https://www.youtube.com/watch?v=In0nB0ABaUk */

var form = $("#form_id");
var input = $("#name_input");
var submit_btn = $("#name_submit");
var notif_alert = $("#notif_alert");

form.addEventListener("submit", (e) => {
  let messages = [];
  console.log("Test")
  // Assigning a list the variable name messages.
  // let allows this variable to exsist only when this function is running and not continuosly.
  console.alert(input.value);

  if (input.value.length < 1){
    messages.push("You must enter a name before continuing ");
  }

  if (messages.length > 0){
    e.preventDefault();
    notif_alert.innerText = messages.join(', ');

  }

});
