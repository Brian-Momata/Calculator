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

function limitCharacters(){
    if (screen.textContent.length > 14){
        screen.textContent = screen.textContent.subString(0, 14);
    }
}

const operands = document.querySelectorAll(".operands");
operands.forEach((button) => {
    screen.textContent = "";
    button.addEventListener("click", (e) => {
        limitCharacters();
        screen.textContent += e.target.value;
        storeInput();
})});

const operators = document.querySelectorAll(".operators");
operators.forEach((button) => {
    button.addEventListener("click", (e) => {
        limitCharacters();
        let myRegEx = /[^0-9.]/g;
        if (screen.textContent == ""){
            return;
        }
        if (myRegEx.test(screen.textContent)) { 
            /* checks whether the screen already has an operator
            and evaluates the inputs before appending the operator
        */
            screen.textContent = operate(num1, character, num2);
        }
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
            num1 = parseFloat(numbers.slice(0, i));
            num2 = parseFloat(numbers.slice( i + 1, numbers.length));
        }
    }
};

const equals = document.querySelector(".operate");
equals.addEventListener("click", function(){
    screen.textContent = operate(num1, character, num2);
})

function clearData() {
    screen.textContent = "";
    num1 = "";
    num2 = "";
    character = "";
}

const clear = document.querySelector(".clear");
clear.addEventListener("click", ()=> clearData());

const dot = document.querySelector(".dot");
dot.addEventListener("click", (e) =>{
    screen.textContent += e.target.value;
})