let runningTotal = 0;

let buffer = "0";

let previousOperator ;

const screen = document.querySelector('.screen');
function buttonClick(value){
//console.log(value)

if(isNaN(value)){
  //this is a number
  handleSymbol(value)
} else {
  handleNumber(value)
}
}


function handleSymbol(){
 
}
function handleNumber(numberString){
  if(buffer === '0'){
    buffer = numberString
  } else {
    buffer = buffer + numberString
  }
  screen.innerText = buffer;

}
// a function that we run it in the beginning of the program
function init(){
  document.querySelector('.calc-buttons').addEventListener('click', (e)=>
  {buttonClick(e.target.innerText);
  //console.log(e.target.innerText)
})
}

init();
