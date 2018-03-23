//FUNCTIONS WITH SCOPE

//1. Write a function printCool that accepts one parameter, name as an argument. The function should print the name and a message saying that that person is cool.

const printCool = (name) => {
  return name + "is cool";
}

console.log(printCool("Captain Reynolds"));

//2. Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.

const calculateCube = (num1) => {
  return Math.pow(num1, 3);
}

console.log(calculateCube(5));

//3. Write a function isAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case.

const isAVowel = (letter) => {
  const vowel = ['a', 'e', 'o', 'i', 'u']; 
  for(let x = 0; x < vowel.length; x++){
    if(vowel[x] === letter.toLowerCase() ){
      return true;
    }
  }
  
}

console.log(isAVowel("a"));  //** Would like to talk this one through

//4. Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.

const getTwoLengths = (string1, string2) => {
  return(string1.length, string2.length);
  }


console.log(getTwoLengths("Hank", "Hippopopalous"));

//5. Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.


const getMultipleLengths = (array) => {
  const nums = [];
  for(let x = 0; x <= array.length; x++){
    nums.push(array[x].length);
  }
 
};
return array;

//6. Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned.


const maxOfThree = (num1, num2, num3) => {
  return Math.max (num1, num2, num3);
}

console.log(maxOfThree(6, 9, 1));

//7. Need help wth this one

//8. Write a Javascript function called transmogrify. This function should accept three arguments, which you can assume will be numbers. Your function should return the "transmogrified" result.

//The transmogrified result of three numbers is the product of the first two numbers, raised to the power of the third number.

//For example, the transmogrified result of 5, 3, and 2 is (5 times 3) to the power of 2 is 225.

const transmogrify = (num1, num2, num3) => {
  return (num1 * num2) ** num3;
}

transmogrify;

//9. Need help with this one too