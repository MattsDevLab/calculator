const calculatorDisplay = document.querySelector("#calculator__display-digits");
const calculatorKeys = document.querySelectorAll(".key-pad__key");
const calculatorClear = document.querySelector("#key-pad__key--clear");
let firstNumber;
let secondNumber;
let firstOperator;
let calcInput = "";
let calculation = splitCalc(calcInput);

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
    });
});

function splitCalc(input){
    return input.split(""); 
}



console.log(splitCalc(calcInput));
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