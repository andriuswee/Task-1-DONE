/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

//Pounds
function convertToPounds(event) {
  const kiloInputValue = event.target.value;
  const outputElement = document.getElementById("output1");
  if (kiloInputValue) {
    const kilograms = Number(kiloInputValue);
    const pounds = (kiloInputValue * 2.2046).toFixed(2);
    outputElement.innerText = pounds;
  } else {
    outputElement.innerText = "";
  }
}

document.getElementById("kilograms").addEventListener("input", convertToPounds);

// const element = document.getElementById("myBtn");
// element.addEventListener("click", function() {
//   document.getElementById("demo").innerHTML = "Hello World"

//Grams
function convertToGrams(event) {
  const kiloInputValue = event.target.value;
  const outputElement = document.getElementById("output2");
  if (kiloInputValue) {
    const kilograms = Number(kiloInputValue);
    const grams = (kiloInputValue / 0.001).toFixed(2);
    outputElement.innerText = grams;
  } else {
    outputElement.innerText = "";
  }
}

document.getElementById("kilograms").addEventListener("input", convertToGrams);

//Ounces
function convertToOunces(event) {
  const kiloInputValue = event.target.value;
  const outputElement = document.getElementById("output3");
  if (kiloInputValue) {
    const kilograms = Number(kiloInputValue);
    const ounces = (kiloInputValue * 35.274).toFixed(2);
    outputElement.innerText = ounces;
  } else {
    outputElement.innerText = "";
  }
}

document.getElementById("kilograms").addEventListener("input", convertToOunces);
