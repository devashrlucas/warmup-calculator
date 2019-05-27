var inputWeight = getInputs();
var inputWarmupSetWeights = getWarmupSetWeights();
var inputRoundedWarmupSetWeight = roundUpWarmupSetWeights();
var inputOneSideWeight = getOneSideWeight();

function getInputs() {
  let barInput = document.querySelector('#bar').innerHTML;
  let barText = '';
  let startInput = document.querySelector('#start').innerText;
  let startText = '';
  let endInput = document.querySelector('#end').innerText;
  let endText = '';
  let inputArray = [];
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

function getOneSideWeight() {
  let oneSideWeight = [];
  let tempOneSide = 0;
  let i;

  for (i = 0; i < inputRoundedWarmupSetWeight.length; i += 1) {
    if (inputRoundedWarmupSetWeight[i] === document.querySelector('#bar').innerHTML) {
      tempOneSide = 0;
      oneSideWeight.push(tempOneSide);
    } else {
      tempOneSide = inputRoundedWarmupSetWeight[i] / 2;
      oneSideWeight.push(tempOneSide);
    }
  }
  return oneSideWeight;
}

function plateRemainder(weight, plate) {
  let newRemainder = weight / plate;
  let seperatedRemainder = [Math.floor(newRemainder), (weight % plate)];
  return seperatedRemainder;
}

function weightLoop(i) {
  let weightLoopArray = [];
  let filteredArray = [];
  let remainder45 = plateRemainder(i, 45.0);
  let remainder25 = plateRemainder(remainder45[1], 25.0);
  let remainder10 = plateRemainder(remainder25[1], 10.0);
  let remainder5 = plateRemainder(remainder10[1], 5.0);
  let remainder2p5 = plateRemainder(remainder5[1], 2.5);

  for (i = 0; i < remainder45[0]; i += 1) {
    if (remainder45[0] === 0) {
      weightLoopArray.push('');
    } else {
      weightLoopArray.push(45);
    }
  }
  for (i = 0; i < remainder25[0]; i += 1) {
    if (remainder25[0] === 0) {
      weightLoopArray.push('');
    } else {
      weightLoopArray.push(25);
    }
  }
  for (i = 0; i < remainder10[0]; i += 1) {
    if (remainder10[0] === 0) {
      weightLoopArray.push('');
    } else {
      weightLoopArray.push(10);
    }
  }
  for (i = 0; i < remainder5[0]; i += 1) {
    if (remainder5[0] === 0) {
      weightLoopArray.push('');
    } else {
      weightLoopArray.push(5);
    }
  }
  for (i = 0; i < remainder2p5[0]; i += 1) {
    if (remainder2p5[0] === 0) {
      weightLoopArray.push('');
    } else {
      weightLoopArray.push(2.5);
    }
  }
  filteredArray = weightLoopArray.filter(function (f) {
    return f != '';
  });
  return filteredArray;
}

function fullLoop() {
  inputOneSideWeight.forEach(function (item) {
    console.log(item);
  });
}