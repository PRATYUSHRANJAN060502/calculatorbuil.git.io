var num1
var num2
function mathematics(){
num1=prompt("what is your no.")
num2=prompt("what is your no.")


document.getElementById("num1-el").textContent=num1
document.getElementById("num2-el").textContent=num2
 sumEl=document.getElementById("sum-el")
}
function add()
{
var sum1=num1-(-num2)
num1=sum1
sumEl.textContent="result: "+sum1
document.getElementById("num1n-el").textContent=num1
document.getElementById("num2n-el").textContent=num2

}


function subtract(){
var sum1=num1-num2
num1=sum1
sumEl.textContent="result: "+sum1
document.getElementById("num1n-el").textContent=num1
document.getElementById("num2n-el").textContent=num2

}


function multiply(){
let sum1=num1*num2
num1=sum1
sumEl.textContent="result: "+sum1
document.getElementById("num1n-el").textContent=num1
document.getElementById("num2n-el").textContent=num2

}

function divide(){
let sum1=num1/num2
num1=sum1
sumEl.textContent="result: "+sum1
document.getElementById("num1n-el").textContent=num1
document.getElementById("num2n-el").textContent=num2

}



