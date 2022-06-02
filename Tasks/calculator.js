// a simple javascript calculator that performs basic arithmetic operations on two numbers

const a = prompt('Enter value for first number: ');
const b = prompt('Enter value for second number: ');

const operation = prompt('Enter a valid operation [+, -, *, /]: ');

function addition(a, b) {
  return a + b;
}

function subtraction(a, b) {
  return a-b;
}

function multiplication(a, b) {
  return a*b;
}

function division(a, b) {
  return a/b;
}

switch(operation) {
  case "+" : 4
    const add = addition(Number(a), Number(b));
    console.log('Add operation: ' + add);
    break;
  case '-' : 
    const subtract = subtraction(a, b);
    console.log('Minus operation: ' + subtract);
    break;
  case '*' : 
    const multiply = multiplication(a, b);
    console.log('Multiplication operation: ' + multiply);
    break;
  case '/' : 
    const divide = division(a, b);
    console.log('Division operation: ' + divide);
    break;
  default: 
    console.log('You entered an invalid operation, Try again!');
    break;
}


