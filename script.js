// 1a. Create a LET variable named warmHugs and set this string as the value for the variable "Hi, I'm Olaf and I like warm hugs."
let warmHugs ="Hi, I'm Olaf and I like warm hugs.";

// 1b. Using a string method, display the string value of warmHugs in uppercase text in the console/terminal. (Need to use a console log on this one)
console.log(warmHugs.toUpperCase()); // HI, I'M OLAF AND I LIKE WARM HUGS.

// 1c. Using a string method that takes an argument, change the word "like" to "love" in the warmHugs variable string. Also, use this new string that is returned/created from the string method to update the value for the warmHugs variable.
// Change the variable NOT create the change thru console.log
warmHugs = warmHugs.replace("like", "love")
console.log(warmHugs); //Hi, I'm Olaf and I love warm hugs.


// 2a. Create a variable named beenImpaled and set this string as the value for the variable "Oh, look at that. I've been impaled."
let beenImpaled = "Oh, look at that. I've been impaled. ";

// 2b. Using a string method that takes an argument, only display the "I've been impaled." section of the beenImpaled string in the console/terminal. (Need to use a console log on this one as well).
// EXAMPLE: console.log(breakTime.slice(-5, -1)); // time
beenImpaled = beenImpaled.slice(-19);
console.log(beenImpaled); // I've been impaled.
/*OR
beenImpaled = beenImpaled.slice(18,36);
*/


// 3a. Create a variable named dotDotDot and set this string as the value for the variable "..."
let dotDotDot = "...";

// 3b. Create another variable called skullBones. Using the dotDotDot variable and a template literal, set the value for the skullBones variable to "I don't have a skull...or bones."
/*
Example of Expression Interpolation (AKA String Concatenation with Template Literals)
    Uses ${} instead of a plus sign +
    let fullName = `Austin${` `}Benedict`;
    let fullName = `Austin` + ` ` + `Benedict`;
    console.log(fullName); // Austin Benedict;

    const middle = "Stone";
    fullName = `Austin ${middle} Benedict`;
    console.log(fullName); // Austin Stone Benedict
*/
let skullBones = `I don't have a skull${dotDotDot} or bones`;
console.log(skullBones); // I don't have a skull... or bones

// 4. Display the number for PI in the console/terminal (HINT: Need to use a Math Object Property. Also need to use a console log as well)
console.log(Math.PI); // 3.141592653589793

// 5. Create a variable called randomNumber. Use Math.random() to set a value for the randomNumber variable so that it will be a random whole number value from 1 to 3.
/*
MISSED THIS ONE...NOTECARD
*/
let randomNum= Math.random(); // 0 to 0.9999
randomNum *= 3; // 0 to 2.9999
randomNum = Math.floor (randomNum); // gets rid of decimal
randomNum++; // adds on to rid possibility of 0
console.log(randomNum); // Any random # 1-3

// BONUS

// B-6. Using only one line of code, create the following string " Let It Go!" and change it to "LET IT GO! LET IT GO!" (NOTE: Notice the space before " Let" as well as the space between "GO! LET". Also, NOT allowed to use the replace method to complete this. Finally, a variable is NOT required to complete this.)
let song = " Let It Go!";
console.log(" Let It Go!".toUpperCase().repeat(3).trim());

// B-7a. Create a variable named reindeers and set this string for the value "Reindeers are better than people."
let reindeers = "Reindeers are better than people."

// B-7b. Using a string method on the reindeers variable, change the string value to the following "Reindeers_are_better_than_people." and have it display in the console/terminal (Need to use a console log).
console.log(reindeers.replace("Reindeers are better than people.", "Reindeers_are_better_than_people."));
/* 
OR
console.log(reindeers.replace(/ /g, `_'`));
OR
console.log(reindeers.replaceAll(" " , `_'`));
*/

// B-8. Display the decimal number for the square root of 2 in the console/terminal (HINT: There is more than one way to do this. Also need a console log on this one).
let squareRoot = Math.sqrt(2);
console.log(squareRoot);
//OR 
console.log(Math.SQRT2);

//B-9. Create a variable called newRandomNumber that will have some random whole number value from 7 to 23 
let newRandomNumber= Math.random();
newRandomNumber = *17;
newRandomNumber = Math.floor (newRandomNumber);
newRandomNumber += 7;
console.log(newRandomNumber);

// Extra Bonus: Do above on one line of code
let newRandomNumber = Math.ceil((Math.random()*17)+6);
/*
OR
let newRandomNumber = Math.floor((Math.random()*17)+7);
console.log(newRandomNumber);
*/