"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hilbert = hilbert;

var _fourier = require("./fourier");

/**
 *
 * @param {*} inputReal An array of real values to be passed to the function
 * @returns A array [realValues,imaginaryValues] that contains the coefficents of Hilbert transform.
 */
function hilbert(inputReal) {
  // let fft handle the typechecking
  var x = (0, _fourier.fft)(inputReal); // using bitwise operators coerces N to integer, plus it's a bit faster

  var half = inputReal.length >> 1; // half == floor(N/2)
  // double everything from h[1] to h[ceil(N/2)]
  // backwards for loop is for performance reasons only, equivalent to
  // for (i = 1; i < ceil(N/2); ++i)

  var i = half + ((inputReal.length & 1) << 1) - 1; // i == ceil(N/2) + 1

  for (; --i;) {
    x[0][i] *= 2;
    x[1][i] *= 2;
  } // zero out the rest


  for (i = half + 1; i < inputReal.length; ++i) {
    x[0][i] = 0;
    x[1][i] = 0;
  }

  return ifft(x[0], x[1]);
}