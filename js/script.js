
/*
const math = require('mathjs');

let warmupSetWeights = [45, 45, 58, 71, 84, 100];
let warmUp = [45, 45, 58, 71, 84, 100];
let roundedList = [45.0, 45.0, 60.0, 75.0, 85.0, 100.0];
let halfStack = [0.0, 0.0, 7.5, 15.0, 20.0, 27.5];

//$('form').serialize()

const dom = new JSDOM('http://127.0.0.1:50057/');

function getInputs() {
    var startInput = document.getElementsByName('start-weight')[0].value;
    var startText = '';
    var i;
    for (i = 0; i < startInput.length ; i++) {
        startText += startInput.elements[i].value;
    }
}


/* Push form data into an array

var formData = [];
let startWeight = document.getElementById('start').value;
formData.push(startWeight);


console.log(formData);
*/

function getInputs() {
  const barInput = document.querySelector('#bar').innerHTML;
  let barText = '';
  const startInput = document.querySelector('#start').innerText;
  let startText = '';
  const endInput = document.querySelector('#end').innerText;
  let endText = '';
  const inputArray = [];
  let i;
    for (i = 0; i < barInput.length; i++) {
        barText += barInput.charAt(i);
    }
    inputArray.push(barText);
  for (i = 0; i < startInput.length; i++) {
    startText += startInput.charAt(i);
  }
  inputArray.push(startText);
  for (i = 0; i < endInput.length; i++) {
    endText += endInput.charAt(i);
  }
  inputArray.push(endText);
  return inputArray;
}

let inputWeight = getInputs();

function getWarmupSetWeights() {
  let warmupSetWeights = [];
  let setEquation = ((inputWeight[1] - inputWeight[0]) / 4);
}
