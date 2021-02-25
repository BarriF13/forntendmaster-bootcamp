//*****************VAR LET CONST
// const monthlyRent = 400;

// const MONTHS_IN_A_YEAR = 12;

// const yearRent = monthlyRent * MONTHS_IN_A_YEAR;
// console.log(yearRent);

// const firstName= 'Barri';
// const lastName= 'Faryad'
// const sentence = `Hello ${firstName} ${lastName}, we are revising js again lol`;
// console.log(sentence)

//******************DATA TYPE -STRING_ NUMBER_ BOOLEAN_NULL_ UNDEFINED_ SYMBOL_ OBJECT
const isSkyBlue = false;
let greeting; 
console.log(isSkyBlue);

//***************CONTROL FLOW -CONDITIONALS
if(isSkyBlue){
  greeting = 'it must be the nice weather'
} else {
  greeting ='What is the color then!!';
}
console.log(greeting)

let friends = 0;
if(friends ===0){
  console.log('cool I have all the food')
} else if(friends >= 4) {
  console.log('tata')

} else {
  console.log('dance')
}

//***************LOOP */
while(friends < 10){
  friends = friends +1;
}
console.log(friends);

const char = 'f';
const timesToRepeat = 5;
let myString=``;

for(i=0; i<=timesToRepeat; i++){
 
  myString = myString+char;
 
}
console.log(myString)