import { transform, inverseTransform } from './transform.js'

function fft(inputReal, inputImag = null) {
  let XImag = null;
  let XReal = null;
  let imagLength = null;
  let realLength = null;

  if (!Array.isArray(inputReal)) {
    throw "Not Array";
  }

  let chkNumberRealElements = inputReal.every(function (element) { return typeof element === 'number'; });
  if (!chkNumberRealElements) {
    throw "Real array must be numeric";
  }

  realLength = inputReal.length;
  XReal = inputReal;

  if (inputImag !== null) {
    if (!Array.isArray(inputImag)) {
      throw "Not Array";
    }
    let chkNumberImagElements = inputImag.every(function (element) { return typeof element === 'number'; });

    if (!chkNumberImagElements) {
      throw "Imaginary array must be numeric";
    }
    imagLength = inputImag.length;
    XImag = inputImag;
    if (realLength !== imagLength) {
      throw "Length of real and imaginary parts must be same"
    }
  } else {
    XImag = new Array(realLength).fill(0);
    imagLength = realLength;

  }

  let real = XReal.slice();
  let imag = XImag.slice();
  transform(real, imag);

  return { real, imag }
}


function ifft(inputReal, inputImag) {

  let { real, imag } = fft(inputImag, inputReal);
  return { real, imag }
}

export { fft, ifft };




