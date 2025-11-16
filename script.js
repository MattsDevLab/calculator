const calculatorDisplay = document.querySelector("#calculator__display-digits");
const calculatorKeys = document.querySelectorAll(".key-pad__key");
const calculatorClear = document.querySelector("#key-pad__key--clear");

let calcInput = "";
let calcInputFirstNum;
let calcInputSecondNum;
let calcInputOperator;

let calculation;

calculatorKeys.forEach((button)=>{
    button.addEventListener('click', event =>{
        let value = event.target.textContent.trim();

         if(value === "AC"){
            calcInput = "";
            calculatorDisplay.textContent = "0";
            calcInputFirstNum = undefined;
            calcInputSecondNum = undefined;
            calcInputOperator = undefined;
            return;
        }

        calcInput += value;

        if(calculatorDisplay.textContent === "0"){
            calculatorDisplay.textContent = value;
        } else{
            calculatorDisplay.textContent += value; 
        }

        calculation = splitCalc(calcInput);

        if(value === "="){
            console.log("equals was clicked");
            calculatorDisplay.textContent = operate(calcInputFirstNum, calcInputOperator, calcInputSecondNum);
        }

    });
});

function splitCalc(input){
    let calcArray = input.split(""); 
    calcInputFirstNum = Number(calcArray[0]);
    calcInputOperator = calcArray[1];
    calcInputSecondNum = Number(calcArray[2]);
}

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