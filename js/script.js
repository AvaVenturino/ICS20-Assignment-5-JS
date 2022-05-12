// Copyright (c) 2022 Ava Venturino All rights reserved
//
// Created by: Ava Venturino
// Created on: Mar 2022
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Assignment-5-JS/sw.js", {
    scope: "/ICS20-Assignment-5-JS/",
  });
}

/**
 * Input
 */
function myButtonClicked() {
  var numChosen = parseInt(document.getElementById("numChosen").value);
  var pi;
  var num = 1;
  var positiveOrNegative = "minus";

  pi = 4 / num;
  while (numChosen > 1) {
    if (positiveOrNegative == "minus") {
      num = num + 2;
      pi = pi - (4 / num);
      positiveOrNegative = "plus";
    } else if (positiveOrNegative == "plus") {
      num = num + 2;
      pi = pi + (4 / num)
      positiveOrNegative = "minus";
    }
    numChosen = numChosen - 1;
  }
  positiveOrNegative = "minus";
  num = 1;
  document.getElementById("answer").innerHTML = "The answer is: " + pi;
}
