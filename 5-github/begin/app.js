let runningTotal = 0;

let buffer = "0";

let previousOperator = null;

const screen = document.querySelector('.screen');

function buttonClick(value) {
  //console.log(value)

  if (isNaN(value)) {
    //this is a number
    handleSymbol(value)
  } else {
    handleNumber(value)
  }
  screen.innerText = buffer;
}


function handleSymbol(symbol) {
  //  if(symbol=== 'C'){
  //    buffer ='0';
  //    runningTotal = 0;
  //  } 
  //console.log(symbol)
  switch (symbol) {
    case 'C':
      buffer = '0';
      runningTotal = 0;
      break;
    case '=':
      if (previousOperator === null) {
        // need two numbers to do math
        return;
      }
      flushOperation(parseInt(buffer)); //do the math
      previousOperator = null;
      buffer = runningTotal;
      runningTotal = 0;
      break;
    case '←':
      if (buffer.length === 1) {
        buffer = '0';
      } else {
        buffer = buffer.substring(0, buffer.length - 1)
      }
      break;
    case '+':
    case '-':
    case '×':
    case '÷':
      handleMath(symbol);
      break;
  }
}

function handleMath(symbol) {
  if (buffer === '0') {
    //do nothing
    return;
  }

  const intBuffer = parseInt(buffer);//+buffer
  if (runningTotal === 0) {
    runningTotal = intBuffer;
  } else {
    flushOperation(intBuffer)
  }
  previousOperator = symbol;

  buffer = '0';
}
function flushOperation(intBuffer) {
  if (previousOperator === '+') {
    runningTotal += intBuffer;
  } else if (previousOperator === '-') {
    runningTotal -= intBuffer;
  } else if (previousOperator === '×') {

    runningTotal *= intBuffer;
  } else {
    runningTotal /= intBuffer;
  }
  console.log(runningTotal)
}

function handleNumber(numberString) {
  if (buffer === '0') {
    buffer = numberString
  } else {
    buffer += numberString
  }
  // screen.innerText = buffer;

}
// a function that we run it in the beginning of the program
function init() {
  document.querySelector('.calc-buttons').addEventListener('click', (e) => {
    buttonClick(e.target.innerText);
    //console.log(e.target.innerText)
  })
}

init();
