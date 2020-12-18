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
    
} else if (response === "patriots") {
    alertMessage = "You are a winner too!";
    
} else {
    alertMessage = "BOOOOOOO!!"
    
}

let name = prompt("What is your name?");
"Hello," + name + "!"
alert("Hello, " + name + "!");

alert(alertMessage);

function winning() {
    var numberOfWinners = prompt("How many winners you want to see?");
    for (var i = 0; i < numberOfWinners; i++) {
        document.write("<img src=\"https://i.imgur.com/A9lTE4M.png\">");
    }
}  

winning();


var element = document.getElementById('response-output')

element.innerText = alertMessage;
element.style.color = color;


