let firstNumber;
let secondNumber;
let firstOperator;
const calculatorDisplay = document.querySelector("#calculator__display-digits");
const calculatorKeys = document.querySelectorAll(".key-pad__key");

calculatorKeys.forEach((button)=>{
    button.addEventListener('click',event =>{
       const value = event.target.textContent;

        if(calculatorDisplay.textContent === "0"){
            calculatorDisplay.textContent = value;
       } else{
            calculatorDisplay.textContent += value; 
       }
    });
});


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