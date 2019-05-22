
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
  for (i = 0; i < barInput.length; i += 1) {
    barText += barInput.charAt(i);
  }
  inputArray.push(barText);
  for (i = 0; i < startInput.length; i += 1) {
    startText += startInput.charAt(i);
  }
  inputArray.push(startText);
  for (i = 0; i < endInput.length; i += 1) {
    endText += endInput.charAt(i);
  }
  inputArray.push(endText);
  return inputArray;
}

const inputWeight = getInputs();

function getWarmupSetWeights() {
  let warmupSetWeights = [];
  let weightJump = ((inputWeight[2] - inputWeight[1]) / 4);
  let tempJump = (Number(inputWeight[0]));
  let i;

  warmupSetWeights.push(inputWeight[0]);

  for (i = 0; i < 4; i += 1) {
    tempJump += weightJump;
    warmupSetWeights.push(tempJump);
  }
  return warmupSetWeights;
}

const inputWarmupSetWeights = getWarmupSetWeights();

function roundUpWarmupSetWeights() {
  let roundedWarmupSetWeights = [];
  let tempRounded = 0;
  let i;

  for (i = 0; i < inputWarmupSetWeights.length; i += 1) {
    tempRounded = Math.ceil(inputWarmupSetWeights[i] / 5) * 5;
    roundedWarmupSetWeights.push(tempRounded);
  }
  return roundedWarmupSetWeights;
}

const inputRoundedWarmupSetWeight = roundUpWarmupSetWeights();

function getOneSideWeight() {
  let oneSideWeight = [];
  let tempOneSide = 0;
  let i;

  for (i = 0; i < inputRoundedWarmupSetWeight.length; i += 1) {
    if (inputRoundedWarmupSetWeight[i] == document.querySelector('#bar').innerHTML) {
      tempOneSide = 0;
      oneSideWeight.push(tempOneSide);
    } else {
      tempOneSide = inputRoundedWarmupSetWeight[i] / 2;
      oneSideWeight.push(tempOneSide);
    }
  }
  return oneSideWeight;
}
