import { fft } from "./fourier";
/**
 *
 * @param {*} inputReal An array of real values to be passed to the function
 * @returns A array [realValues,imaginaryValues] that contains the coefficents of Hilbert transform.
 */

function hilbert(inputReal) {
  // let fft handle the typechecking
  var x = fft(inputReal); // double first half

  var half = Math.ceil(inputReal.length / 2);

  for (var i = 1; i < half; ++i) {
    x[0][i] *= 2;
    x[1][i] *= 2;
  } // zero out the rest, leaving h[N/2] when N is even


  if (inputReal.length % 2 === 0) ++half;

  for (var i = half; i < inputReal.length; ++i) {
    x[0][i] = 0;
    x[1][i] = 0;
  }

  return ifft(x[0], x[1]);
}

export { hilbert };