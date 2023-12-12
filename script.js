let sketchBoard = document.getElementById("sketch-board");
let sideLength = sketchBoard.clientHeight;
let myDots= [];
let amount = 9;
const fixedValues = [9, 16, 25,36,49,64,81,100,121,144,10000];
const slider = document.getElementById("numberSlider");
const sliderValue = document.getElementById("sliderValue");
/**
 * 
 * @param {Number} amount 
 */
function prepareOutSketchBoard(amount) {
    myDots = [];
     while (sketchBoard.firstChild) {
       sketchBoard.removeChild(sketchBoard.firstChild);
     }
    let style = `
        box-sizing: border-box;
        height: ${sideLength / Math.sqrt(amount)}px;
        width: ${sideLength / Math.sqrt(amount)}px;
        background-color: white; 
        border: 1px solid rgba(0, 0, 0, 0.1); 
        `;
    for(let i =0 ; i<amount;i++){
        let dot = document.createElement("div");
        
        dot.style.cssText = style;
        
        dot.addEventListener("mouseover" ,makeThemBlue)

        myDots.push(dot)
sketchBoard.appendChild(dot);
    }
}

function makeThemBlue(event){
 event.target.style.backgroundColor = "blue";
}
function makeThemRed(event){
 event.target.style.backgroundColor = "red";

}
function resetTheBoard(event){
    event.target.style.backgroundColor ='white';

}
function makeThemRandomColors(event){
     const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
       Math.random() * 256
     )}, ${Math.floor(Math.random() * 256)})`;
     event.target.style.backgroundColor = randomColor;

}
prepareOutSketchBoard(amount);

function changeTheColor(color){
    if(color === 'red'){
        for(let i =0; i < amount;i++){
            myDots[i].addEventListener("mouseover", makeThemRed);
        }
    }
    if(color === 'random'){
        for (let i = 0; i < amount; i++) {
          myDots[i].addEventListener("mouseover", makeThemRandomColors);
        }
    }
    if (color === 'white')
    {
        for (let i = 0; i < amount; i++) {
          myDots[i].addEventListener("mouseover", resetTheBoard);
        }
    }
    if(color === 'reset'){
        for (let i = 0; i < amount; i++) {
          myDots[i].style.backgroundColor = 'white';
        }
    }
}


// Update the display as the slider moves
slider.addEventListener("input", function () {
  sliderValue.textContent = fixedValues[parseInt(this.value) - 1];
  amount = fixedValues[parseInt(this.value) - 1];
  prepareOutSketchBoard(amount)

});

// Set initial value
sliderValue.textContent = fixedValues[0];
