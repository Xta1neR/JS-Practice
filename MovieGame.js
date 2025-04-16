// Rules of Game : 
// Let say the myFav is Avatar, Now the player has to guess the name of the movie.
// If the player wants to quit he can type "quit".
// If the player guesses the movie correctly, he wins the game.

let myFav = "avatar";
let guess = prompt("Guess the movie: ");

while (guess != myFav && guess != 'quit'){
    guess = prompt("Wrong! Guess the movie: ");
}
if (guess == myFav){
    console.log("You win");
}
else if (guess == 'quit'){
    console.log("You quit");
}