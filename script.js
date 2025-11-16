const calculatorDisplay = document.querySelector("#calculator__display-digits");
const calculatorKeys = document.querySelectorAll(".key-pad__key");
const calculatorClear = document.querySelector("#key-pad__key--clear");

let displayValue = "0";
let firstNumber = null;
let operator = null;
let waitingForSecondNumber = false;
let justEvaluated = false;

// Helper Functions

function updateDisplay(){
    calculatorDisplay.textContent = displayValue;
}

updateDisplay();

function formatResult(num){
    return Math.round(num * 1000) / 1000;
}

function inputDigit(digit){
    if(justEvaluated){
        displayValue = digit;
        justEvaluated = false;
        return;
    }

    if (waitingForSecondNumber){
        displayValue = digit;
        waitingForSecondNumber = false;
    } else {
        displayValue = displayValue === "0" ? digit : displayValue + digit;
    }
}

function handleOperator(nextOperator){
    const inputValue = Number(displayValue);

    if(operator && waitingForSecondNumber){
        operator = nextOperator;
        return;
    }

    if(firstNumber === null){
        firstNumber = inputValue;
    } else if(operator){
        const result = operate(firstNumber, operator, inputValue);
        displayValue = String(result);
        firstNumber = result;
    }

    operator = nextOperator;
    waitingForSecondNumber = true;
    justEvaluated = false;
}

function handleEquals(){
    if(operator === null || firstNumber === null || waitingForSecondNumber){
        return;
    }

    const secondNumber = Number(displayValue);
    const result = operate(firstNumber, operator, secondNumber);

    displayValue = String(result);

    firstNumber = null;
    operator = null;
    waitingForSecondNumber = true;
    justEvaluated = true;
}

function compute(a, op, b){
    const rawResult = operate(a, op, b);

    if(typeof rawResult === "string"){
        return rawResult;
    }

    return formatResult(rawResult);
}

function clearAll(){
    displayValue = "0";
    firstNumber = null;
    operator = null;
    waitingForSecondNumber = false;
    updateDisplay();
}

// Click event listener

calculatorKeys.forEach((button)=>{
    button.addEventListener('click', event =>{
        let value = event.target.textContent.trim();

         if(value === "AC"){
            clearAll();
            return;
        }

         if(value === "="){
            handleEquals();
            updateDisplay();
            return;
        }

        if(value === "X") value = "x";

        if(["+", "-", "x", "÷"].includes(value)) {
            handleOperator(value);
            updateDisplay();
            return;
        }

        inputDigit(value);
        updateDisplay();

    });
});

// Calculation handler

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
    if(b === 0){
        return "Nice try, you cant ÷ by 0!";
    }

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