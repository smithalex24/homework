function ascend(){
	for(let i = 0; i <= 99; i++) {
		console.log(i);
}
}
function other() {
	for(let i = 99; i >= 0; i--){
	console.log(i);
}
}
function even() {
	for(let i = 0; i <= 98; i++){
		if(i % 2 === 0){
			console.log(i);
		}
	}
}
function descend(){
	for(let i = 98; i >= 0; i--){
		if(i % 2 === 0){
			console.log(i);
		}
	}
}
function ascendTwo(){
	for(let i = 49; i <= 72; i++){
		console.log(i);
	}
}
function descendTwo(){
	for(let i = 81; i >= 26; i--){
		console.log(i);
	}
}
function multiple(){
	for(let i = 3; i <= 90; i++){
		if(i % 3 === 0){
			console.log(i);
		}
	}
}

ascend();

other();

even();

descend();

ascendTwo();

descendTwo();

multiple();