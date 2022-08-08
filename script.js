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
    if (char == "x"){
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