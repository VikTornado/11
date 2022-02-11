'use strict';


const btnClick = document.getElementById('btn');
const e_btnClick = document.getElementById('e_btn');
const input = document.getElementById('text');
const range = document.getElementById('range');
const range_span = document.getElementById('range-span');
const square = document.getElementById('square');
const circle = document.getElementById('circle');



function changeColor() {
    let color = input.value;
    square.style.backgroundColor = color;
}
function changeSettings() {
    let param = range.value;
    range_span.textContent = param;
    circle.style.width = `${param}%`;
    circle.style.height = `${param}%`;
}


btnClick.addEventListener('click', changeColor);
range.addEventListener('input', changeSettings);




e_btnClick.style.display = "none";

