console.log('copycat');


const circlesDiv = document.querySelector(`#circles`);
const redCounter = document.querySelector(`#red-count`);
const blueCounter = document.querySelector(`#blue-count`);
const greenCounter = document.querySelector(`#green-count`);
const yellowCounter = document.querySelector(`#yellow-count`);
const multipleCircles = document.querySelector(`#numberInput`);
const custCounter = document.querySelector(`#custom-count`);

let redCount = 1;
let blueCount = 1;
let greenCount = 1;
let yellowCount = 1;
let customCount = 0;

function addCircle(color=document.getElementById(`customInput`).value){
    if( color === `red` ) {
        circlesDiv.innerHTML += `<div class="circle red-fill"></div>`;
        redCount++;
        redCounter.innerHTML = redCount;
    }// end red
    else if( color === `blue` ) {
        circlesDiv.innerHTML += `<div class="circle blue-fill"></div>`;
        blueCount++;
        blueCounter.innerHTML = blueCount;
    }// end blue
    else if( color === `green` ) {
        circlesDiv.innerHTML += `<div class="circle green-fill"></div>`;
        greenCount++;
        greenCounter.innerHTML = greenCount;
    }//end green
    else if( color === `yellow` ) {
        circlesDiv.innerHTML += `<div class="circle yellow-fill"></div>`;
        yellowCount++;
        yellowCounter.innerHTML = yellowCount;
    }//end yellow
    else {
        circlesDiv.innerHTML += `<div class="circle custom-fill" style='--custom:${color}'></div>`;
        customCount++;
        custCounter.innerHTML = customCount;
    }
}//end function

function clearAll(){
    circlesDiv.innerHTML = ``;
    redCount = 0;
    redCounter.innerHTML = redCount;
    blueCount = 0;
    blueCounter.innerHTML = blueCount;
    greenCount = 0;
    greenCounter.innerHTML = greenCount;
    yellowCount = 0;
    yellowCounter.innerHTML = yellowCount;
    customCount = 0;
    custCounter.innerHTML = customCount;
}

function addMultipleCircles(color, num = document.getElementById(`numberInput`).value) {
    if(num === ``){
        num = 1;
    }// end default setting
    for(let i = 0; i < num; i++){
        addCircle(color);
    }// end circle loop
}// end of function








