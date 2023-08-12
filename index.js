"use strict";
//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
let Names = ['Ali', 'Ahmed', 'Saad', 'Raza', 'aabid'];
//Loop through each name in the array.
for (let name of Names) {
    //print a personalize message for each person’s name.
    console.log(`Good morning : ${name} , I hope you are having a fantastic day!`);
}
