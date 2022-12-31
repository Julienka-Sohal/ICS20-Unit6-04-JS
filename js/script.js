// Copyright (c) 2022 Julienka Sohal All rights reserved
//
// Created by: Julienka Sohal
// Created on: Nov 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Unit6-04-JS/sw.js", {
    scope: "/ICS20-Unit6-04-JS/",
  })
}

//process
window.onload = function () {
  // this calculates volume of a pyramid

  const params = new URLSearchParams(document.location.search)

  // input
  const radius = params.get("r")

  // process
  const vol = (4 / 3) * Math.PI * radius ** 3
  const dimensions = "<ul>\n<li>radius = " + radius + "</li>\n</ul>"

  // output
  document.getElementById("dimensions").innerHTML = dimensions
  document.getElementById("volume").innerHTML =
    "Volume is: " + vol.toFixed(2) + " cm³"
}
