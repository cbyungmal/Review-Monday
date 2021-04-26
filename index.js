//DO NOT CHANGE CODE HERE
var customers = require('./customers.json');
//DO NOT CHANGE CODE HERE



/*
Write a function that canfind the average balance 
of all of the customers in the dataset. You will 
need to know how to find the average of a set of 
numbers and know how to access the balance property 
in the object.
*/

function averageBalance(array){
  //CODE BELOW HERE
for(var i = 0; i <= customers.length - 1; i++){
  if(array === customers[i].array){
    console.log(true);
  } else {
    console.log(false);
  }
}



  //CODE ABOVE HERE
}
console.log(averageBalance('3690.70'))