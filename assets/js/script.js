"use strict";

let _body = document.getElementById("body"),
  _btnUse = document.querySelector(".btn-use"),
  _btnShowGeneratedColors = document.querySelector(".btn-show"),
  dataSet = document.querySelector("tbody");

let randomColors = []; // To store all generated colors

const generateColors = function () {
  let color = ``;
  let maxVal = 0xffffff; // HEX number maximum value
  let randomNumber = Math.random() * maxVal;
  randomNumber = Math.floor(randomNumber);
  let randomColor = randomNumber.toString(16); // Convert randomNumber to HEX
  randomColor = randomColor.padStart(6, 0); // If we get less than 6 HEX numbers we pad the start with 0's
  color = `#${randomColor}`;
  randomColors.push(color);
  _body.style.background = color;
  localStorage.setItem("background", color);
};

let backgroundChanger = setInterval(generateColors, 1000); // Change background color every 1 second //

_btnUse.addEventListener("click", function () {
  clearInterval(backgroundChanger);
  _body.style.backgroundColor = localStorage.getItem("background");
});

_btnShowGeneratedColors.addEventListener("click", function () {
  showGeneratedColors(randomColors);
});

// function to display generated backgrounds in a table
const showGeneratedColors = function (colors) {
  let data = ``;
  colors.forEach((element, index) => {
    data += `<tr>
        <td scope="row">${index}</td>
        <td>${element}</td>
      </tr>
`;
  });
  dataSet.innerHTML = data;
};
