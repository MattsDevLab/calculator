const calculatorDisplay = document.querySelector("#calculator__display-digits");
const calculatorKeys = document.querySelectorAll(".key-pad__key");
const calculatorClear = document.querySelector("#key-pad__key--clear");
let calcInput = "";
let calculation;
let firstNumber;
let secondNumber;
let firstOperator;

calculatorKeys.forEach((button)=>{
    button.addEventListener('click',event =>{
        const value = event.target.textContent;

         if(value === "AC"){
            calcInput = "";
            calculatorDisplay.textContent = "0";
            return;
        }

        calcInput += value;
        console.log(calcInput);

        if(calculatorDisplay.textContent === "0"){
            calculatorDisplay.textContent = value;
        } else{
            calculatorDisplay.textContent += value; 
        }

        calculation = splitCalc(calcInput);

    });
});

function splitCalc(input){
    let calcArray = input.split(""); 
    firstNumber = calcArray[0];
    firstOperator = calcArray[1];
    secondNumber = calcArray[2];
}

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

console.log(calculatorKeys);