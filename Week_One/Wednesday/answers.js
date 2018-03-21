//EASY GOING

//1. Write a loop that will log the numbers 1 through 20.

function count(){
  for(let i = 0; i <= 20; i++){
  	console.log(i);
  }
}


//GET EVEN

//1. Write a for loop that will log only the even numbers 0 through 200.

function even(){
	for(let i = 0; i <= 200; i++){
		if(i % 2 === 0){
			console.log(i);
		}
	}
}

//EXCITED KITTEN

//1. Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
//2. For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.

//Hint: You will need to use Math.random()

function kitten(){
	for(let i = 0; i <= 20; i++){
		console.log("Love me, pet me! HSSSSSS!");

	}
}
function cat(){
	for(let i = 0; i <= 20; i++){
		if(i % 2 === 0){
			var num = Math.floor(Math.random() * 3);
	switch(num) {
	case 0:
		console.log('human..why are you taking pictures of me?');
		break;
	case 1:
		console.log('the catnip made me do it');
		break;
	case 2: 
		console.log('why does the red dot always get away');
		break;

		}
	}
}
}

//FIZZ BUZZ

// Write a javascript application that logs all numbers from 1 - 100.

// If a number is divisible by 3 log "Fizz" instead of the number.

// If a number is divisible by 5 log "Buzz" instead of the number.

// If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.

function number(){
	for(let i = 1; i <= 100; i++){
	if(i % 3 === 0 && i % 5 === 0){
		console.log("FizzBuzz")
	}else if(i % 3 === 0){
			console.log("Fizz");
	}else if(i % 5 === 0){
		console.log("Buzz");
}
}
}

//GETTING TO KNOW YOU 


// Matt H. decides that Thom. can't be named "Thom" anymore. Remove "Thom" from the thom array and replace it with "Gameboy".

// Karolin just had her birthday; change Karolin's array to reflect her being a year older.

// Change Matt H's hometown from Philadelphia to "Gotham City".

// Remove "Pittsburgh" from Kristyn's array and add "Brooklyn".

const thom = ["Thom", 1000, "Christchurch"]
const karolin = ["Karolin", 16, "New York"]
const kristyn = ["Kristyn", 5, "Pittsburgh"]
const matt = ["Matt H", 186, "Philadelphia"]

thom[0] = "Gameboy";
kristyn[1] = 6;
matt[2] = "Gotham City";
kristyn[2] = "Brooklyn";

//YELL AT NINJA TURTLES

const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

var toUpperCase = function(arr){
for(let i = 0; i < ninjaTurtles.length; i++){
	console.log(arr[i].toUpperCase());

}
}

count();

even();

kitten();

cat();

number();

console.log(thom);

console.log(kristyn);

console.log(matt);

toUpperCase(ninjaTurtles);
