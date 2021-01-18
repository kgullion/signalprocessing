# Signal Processing

The Signal Processing library is designed for extracting useful information from signals.
## Installation

Each module can be installed under ```@signalprocessing``` scope.

For example, to install transformation module, use :

```bash
npm install @signalprocessing/transforms --save
```
## Usage

Signal processing library use ES6 module format. You should add ```"type: module" ``` declaration in to your ```package.json``` file.

```node
import { fft } from "@signalprocessing/transforms";
//Sampling Rate
let Fs = 1000;
//Sampling Period
let T = 1 / Fs;
//Length of signal
let L = 1500;
//Time array
let t = Array.from({ length: L }, (x, i) => i * T);
//A signal containing a 30 Hz sinusoid of amplitude 0.5 and a 100 Hz sinusoid of amplitude 1.
let S = Array.from(t, (x, i) => 0.5 * Math.sin(2 * Math.PI * 30 * x) + Math.sin(2 * Math.PI * 100 * x));
//Compute the Fourier transform of the signal.
let { real, imag } = fft(S);
//Fourier coefficients
console.log(real)
console.log(imag)

```


## License
[MIT](https://choosealicense.com/licenses/mit/)
