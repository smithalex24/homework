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

count();

even();