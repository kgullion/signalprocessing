import { transform } from './transform.mjs'

function fft(InputArray) {
  let input = null;
  let real = null;
  let imag = null;
  let length = null
  if (!Array.isArray(InputArray)) {
    throw "Not Array";
  }
  let chkNumberElements = InputArray.every(function (element) { return typeof element === 'number'; });
  if (!chkNumberElements) {
    throw "Array must be numeric";
  }
  input = InputArray;;
  length = InputArray.length;
  let XReal = input;
  let XImag = new Array(length).fill(0);
  let realResult = XReal.slice();
  let imagResult = XImag.slice();
  transform(realResult, imagResult);
  real = realResult;
  imag = imagResult;
  return { real, imag }
}

export { fft };




