console.log('copycat');


const circlesDiv = document.querySelector(`#circles`);
const redCounter = document.querySelector(`#red-count`);
const blueCounter = document.querySelector(`#blue-count`);
const greenCounter = document.querySelector(`#green-count`);
const yellowCounter = document.querySelector(`#yellow-count`);

let redCount = 1;
let blueCount = 1;
let greenCount = 1;
let yellowCount = 1;

function addCircle(color){
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
}//end function








