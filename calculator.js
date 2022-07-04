let num1=8
let num2=2
document.getElementById("num1-el").textContent=num1
document.getElementById("num2-el").textContent=num2
 sumEl=document.getElementById("sum-el")

function add()
{
let sum1=num1+num2
sumEl.textContent="sum: "+sum1
}


function subtract(){
let sum1=num1-num2
sumEl.textContent="sum: "+sum1

}


function multiply(){
let sum1=num1*num2
sumEl.textContent="sum: "+sum1

}

function divide(){
let sum1=num1/num2
sumEl.textContent="sum: "+sum1

}



