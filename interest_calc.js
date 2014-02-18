var total_amount = prompt("How much did you borrowed totally?");
var interest_rate = prompt("What's the interest rate?");
var number_of_year = prompt("How long will you borrow?");

loans = parseInt(total_amount) + parseInt(total_amount * interest_rate * number_of_year);

console.log(loans);