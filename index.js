// Create a number guessing game to generate a number between the range of 1 and 2. The game should prompt users for their username (saved in cookie).
// Set range as function parameter and prompt the player to predict the generated number between the given range, at a correct guess, the game should award the player a point (also saved in cookie), and move them to stage 2 by increasing the range limit value by 1, e.g range is from 1 and 3 for stage 2 and so on. Connect replit account to github and save your program in github.



let userName = prompt('Enter your user name'); //save username to cookie

//n is the range limit
let n = 2;

let points = 0;

let i = 0;

let stage = 2;

//generate random number
function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

while (i <= n) {

  var randomNumber = randomInteger(1, n);
  console.log(randomNumber); //comment this out if you don't want to know the number guessed by COM.

  let playerNum = prompt(`Guess a number between 1 and ${n} : `);

  if (randomNumber === Number(playerNum)) {
    points++; //save points to cookie
    console.log(`Awesome!! You guessed right. You got ${points} points`)
    console.log(`Moving you to stage ${stage}`);
    n++;
    stage++;
  } else {
    console.log('You guessed wrong, try again');
    i = n + 1;
  }
}