/* JSDOM is useful for testing and scraping via browser emulation -- MAY NOT NEED TO USE THIS
const jsdom = require('jsdom');

const { JSDOM } = jsdom;

const math = require('mathjs');


let warmupSetWeights = [0, 0, 0, 0, 0, 0]; //based off form data
let warmUp = [0, 0, 0, 0, 0, 0]; //based off form data
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

*/

/* Push form data into an array

var formData = [];
let startWeight = document.getElementById('start').value;
formData.push(startWeight);


console.log(formData);
*/

function getInputs() {
var startInput = document.querySelector('#start').innerText;
  var startText = '';
  var i;
  for (i = 0; i < startInput.length; i++) {
    startText += startInput.charAt(i);
  }
  console.log(startText);
}

getInputs(); 
