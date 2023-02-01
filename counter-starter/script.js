// function add() {
//     let numberElement = document.getElementById("number");
//     let num = numberElement.innerText;
//     // console.log("this is a number element:", numberElement);
//     // console.log("this is a number:", num);

//     num = parseInt(num)+1;
//     numberElement.innerText = num;

// }

// function add(step) {
//     let numberElement = document.getElementById("number");
//     let num = numberElement.innerText;
//     num = parseInt(num)+step;
//     numberElement.innerText = num;
// }

// function sub(step) {
//     let numberElement = document.getElementById("number");
//     let num = numberElement.innerText;
//     num = parseInt(num)-step;
//     numberElement.innerText = num;
// }

// function multiply(step) {
//     let numberElement = document.getElementById("number");
//     let num = numberElement.innerText;
//     num = parseInt(num)*step;
//     numberElement.innerText = num;
// }

// function div(step) {
//     let numberElement = document.getElementById("number");
//     let num = numberElement.innerText;
//     num = parseInt(num)/step;
//     numberElement.innerText = num;
// }

// calculate
// if addition, do addition
// and so on for each algebra

function calculate(op, step) {
    let numberElement = document.getElementById("number");
    let num = numberElement.innerText;
    if (op === 'addition') {
        num = parseInt(num) + step;
    } else if (op === 'subtraction') {
        num = parseInt(num) - step;
    } else if (op === 'multiplication') {
        num = parseInt(num) * step;
    } else if (op === 'division') {
        num = parseInt(num) / step;
    }
    numberElement.innerText = num;
}