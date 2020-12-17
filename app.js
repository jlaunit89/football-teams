var enterpassword; //declaring my intention to use the variable called 'enterpassword'
var password="win"; //assigning a value to the variable password

while (enterpassword!=password) {
    enterpassword=prompt('Enter Password:','');
}

var promptQuestion = "What is the best football team?";
var response = prompt(promptQuestion);
console.log(response);

var alertMessage;
var color;

if (response === "Patriots") {
    alertMessage = "You are a winner too!";
    color = "#00FF00#"
} else if (response === "patriots") {
    alertMessage = "You are a winner too!";
    color = "#FF0000";
} else {
    alertMessage = "BOOOOOOO!!"
    color = "#FF0000"
}

alert(alertMessage);

var element = document.getElementById('response-output')

element.innerText = alertMessage;
element.style.color = color;