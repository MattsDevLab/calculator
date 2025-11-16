const calculatorDisplay = document.querySelector("#calculator__display-digits");
const calculatorKeys = document.querySelectorAll(".key-pad__key");
const calculatorClear = document.querySelector("#key-pad__key--clear");

let displayValue = "0";
let firstNumber = null;
let operator = null;
let waitingForSecondNumber = false;

function updateDisplay(){
    calculatorDisplay.textContent = displayValue;
}

updateDisplay();

function inputDigit(digit){
    if (waitingForSecondNumber){
        displayValue = digit;
        waitingForSecondNumber = false;
    } else {
        displayValue = displayValue === "0" ? digit : displayValue + digit;
    }
}

function handleOperator(nextOperator){
    const inputValue = Number(displayValue);

    if(firstNumber === null){
        firstNumber = inputValue;
    } else if(operator){
        const result = operate(firstNumber, operator, inputValue);
        displayValue = String(result);
        firstNumber = result;
    }

    operator = nextOperator;
    waitingForSecondNumber = true;
}





calculatorKeys.forEach((button)=>{
    button.addEventListener('click', event =>{
        let value = event.target.textContent.trim();

         if(value === "AC"){
            displayValue = "";
            calculatorDisplay.textContent = "0";
            firstNumber = undefined;
            waitingForSecondNumber = undefined;
            operator = undefined;
            return;
        }

         if(value === "="){
            splitCalc(calcInput);
            const result = operate(firstNumber, operator, waitingForSecondNumber);
            calculatorDisplay.textContent = result;
            calcInput = String(result);
            return;
        }

        if(value === "X") value = "x";

        displayValue += value;

        if(calculatorDisplay.textContent === "0"){
            calculatorDisplay.textContent = value;
        } else{
            calculatorDisplay.textContent += value; 
        }
    });
});

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function operate(firstNumber, operator, secondNumber){
    switch(operator){
        case "+": return add(firstNumber, secondNumber);
        case "-": return subtract(firstNumber, secondNumber);
        case "x": return multiply(firstNumber, secondNumber);
        case "÷": return divide(firstNumber, secondNumber);
        default: return "Invalid operator";
    }
}