var rand_num = Math.ceil(10 * Math.random());

var guess = prompt("Guess a number between 0 and 10:")
while (guess != rand_num){
  if ( guess < rand_num ){
    console.log("Too low!");
  } else {
    console.log("Too high!")
  }
  var guess = prompt("Guess a number between 0 and 10:");
}

console.log("You are correct!");


