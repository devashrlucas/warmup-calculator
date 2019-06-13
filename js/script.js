var inputWeight = getInputs();
var inputWarmupSetWeights = getWarmupSetWeights();
var inputRoundedWarmupSetWeight = roundUpWarmupSetWeights();
var inputOneSideWeight = getOneSideWeight();


function getInputs() {
  let barText = '45';
  let startInput = document.querySelector('#start').value;
  let startText = '';
  let endInput = document.querySelector('#end').value;
  let endText = '';
  let inputArray = [];
  let i;
  inputArray.push(barText);
  for (i = 0; i < startInput.length; i += 1) {
    startText += Number(startInput.charAt(i));
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
  let weightJump = ((getInputs()[2] - getInputs()[1]) / 4);
  let tempJump = (Number(getInputs()[0]));
  let i;

  warmupSetWeights.push(getInputs()[0]);

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

  for (i = 0; i < getWarmupSetWeights().length; i += 1) {
    tempRounded = Math.ceil(getWarmupSetWeights()[i] / 5) * 5;
    roundedWarmupSetWeights.push(tempRounded);
  }
  return roundedWarmupSetWeights;
}

function getOneSideWeight() {
  let oneSideWeight = [];
  let tempOneSide = 0;
  let i;

  for (i = 0; i < roundUpWarmupSetWeights().length; i += 1) {
    if (roundUpWarmupSetWeights()[i] === 45) {
      tempOneSide = 0;
      oneSideWeight.push(tempOneSide);
    } else {
      tempOneSide = roundUpWarmupSetWeights()[i] / 2;
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

function weightLoop(x) {
  let weightLoopArray = [];
  let filteredArray = [];
  let formattedArray = [];
  let remainder45 = plateRemainder(x, 45.0);
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
  formattedArray = filteredArray.join(', ');
  return formattedArray;
}

function updateHTML() {
  document.getElementById('first-set-weight').innerHTML = 'Empty bar';
  document.getElementById('second-set-weight').innerHTML = roundUpWarmupSetWeights()[0];
  document.getElementById('third-set-weight').innerHTML = roundUpWarmupSetWeights()[1];
  document.getElementById('fourth-set-weight').innerHTML = roundUpWarmupSetWeights()[2];
  document.getElementById('fifth-set-weight').innerHTML = roundUpWarmupSetWeights()[3];
  document.getElementById('working-set-weight').innerHTML = roundUpWarmupSetWeights()[4];


  document.getElementById('second-set-plates').innerHTML = weightLoop(getOneSideWeight()[0]);
  document.getElementById('third-set-plates').innerHTML = weightLoop(getOneSideWeight()[1]);
  document.getElementById('fourth-set-plates').innerHTML = weightLoop(getOneSideWeight()[2]);
  document.getElementById('fifth-set-plates').innerHTML = weightLoop(getOneSideWeight()[3]);
  document.getElementById('working-set-plates').innerHTML = weightLoop(getOneSideWeight()[4]);

}
