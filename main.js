'use strict';

function sumOfSquares(a, b){
    alert((a**2)+(b**2));
    console.log((a**2)+(b**2));
}

function usdToKzt(x) {
    alert(x * 475);
    console.log(x * 475);
}

function evenOrOdd(n) {
    if(n % 2 == 0){
        alert("even");
        console.log("even");
    }
    else {
        alert("odd");
        console.log("odd");
    }
}
function doTheTask(f) {
    let taskNumber = prompt("To work with functions enter the number of the task");
    if(taskNumber == 1){
        let a = prompt("Enter the value for the first number: ");
        let b = prompt("Enter the value for the second number: ");
        sumOfSquares(a, b);
    }
    else if(taskNumber == 2){
        let x = prompt("Enter the amount of dollar to convert: ");
        usdToKzt(x);
    }
    else if(taskNumber == 3){
        let n = prompt("Enter the number to find the parity: ");
        evenOrOdd(n); 
    }
}
alert("There are three available tasks, namely: \n1. Function that returns the sum of squares of two given numbers; \n2. Function to convert dollars to tenge; \n3. Function to check whether a given number is even or odd.");
doTheTask();