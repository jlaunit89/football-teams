var enterpassword; //declaring my intention to use the variable called 'enterpassword'
var password="win"; //assigning a value to the variable password

while (enterpassword!=password) {
    enterpassword=prompt('Enter Password:','');
}

var Test = "What is the best Football Team?";
getPrompt(Test);

function giveAlert(ans){
    if(ans == "Patriots"){
        alertmessage = "You are a winner too!"
    } else {
        alertMessage = "BOOOOO!"
    }
}