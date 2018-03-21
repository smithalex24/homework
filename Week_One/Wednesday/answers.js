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
		console.log('why does the red dot always get away')
		break;

		}
	}
}
}



count();

even();

kitten();

cat();