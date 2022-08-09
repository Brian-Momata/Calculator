function add(a , b){
    return a + b;
};
function subtract(a, b){
    return a - b;
};
function multiply(a,b){
    return a * b;
};
function divide(a,b){
    return a / b;
};

function operate(a, char, b) {
    if (char == "*"){
        return multiply(a,b);
    }
    if (char == "+"){
        return add(a,b);
    }
    if (char == "-"){
        return subtract(a,b);
    }
    if (char == "/"){
        return divide(a,b);
    }
};

const screen = document.querySelector(".calc-screen");
screen.textContent = "0";

const operands = document.querySelectorAll(".operands");
operands.forEach((button) => {
    screen.textContent = "";
    button.addEventListener("click", (e) => {
    
    screen.textContent += e.target.value;
    storeInput();
})});

const operators = document.querySelectorAll(".operators");
operators.forEach((button) => {
    screen.textContent = "";
    button.addEventListener("click", (e) => {
    
    screen.textContent += e.target.value;
    storeInput();
})});


let num1;
let num2;
let character;
let numbers;

function storeInput(){
    numbers = screen.textContent;
    for (let i = 0; i < numbers.length; i++){
        if (numbers[i] == "+" || numbers[i] == "-" || numbers[i] == "/" || numbers[i] == "*"){
            character = numbers[i];
            num1 = parseInt(numbers.slice(0, i));
            num2 = parseInt(numbers.slice( i + 1, numbers.length));
        }
    }
};

const equals = document.querySelector(".operate");
equals.addEventListener("click", function(){
    screen.textContent = operate(num1, character, num2);
})