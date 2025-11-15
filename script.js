let firstNumber;
let secondNumber;
let firstOperator;

function operate(firstNum, firstOp, secondNum){
    return add(firstNum, secondNum);
}

function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    return a / b;
}

console.log(operate(5, "+" ,7));