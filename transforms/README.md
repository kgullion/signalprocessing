# Signal Processing

The Signal Processing library is designed for extracting useful information from signals.
## Installation

Each module can be installed under ```@signalprocessing``` scope.

For example, to install ```transforms``` module, use :

```bash
npm install @signalprocessing/transforms --save
```
## Usage

Signal processing library use ES6 module format. You should add ```"type: module" ``` declaration in to your ```package.json``` file.
### Fast Fourier Transform ( fft )
This function implements fast Fourier transform  of the given real or complex signal. 

For the real signal, input parameter can be real array as ```fft(realSignal)``` .

For the complex signal, input parameters should be splitted into the real and imaginary arrays as ```fft(realPart,ImaginaryPart)``` .

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
let [realCoef, imagCoef] = fft(S);
//Fourier transform coefficients
console.log(realCoef)
console.log(imagCoef)
```

### Inverse Fast Fourier Transform ( ifft )
This function implements inverse fast Fourier transform  of the given signal. 

Input parameters should be splitted into the real and imaginary arrays as ```ifft(realCoefficients,ImaginaryCoeffients)```.

If you have signal ```A``` then you should get ```ifff(fft(A)) == A``` with some numerical difference. Implementation of this function can be found in the example below.

```node
import { ifft } from "@signalprocessing/transforms";
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
let [realCoef, imagCoef] = fft(S);
//Compute the inverse Fourier transform of the signal.
let [realSignal,imagSignal] = ifft(realCoef, imagCoef)

//Inverse Fourier transform coefficients
console.log(realSignal)
console.log(imagSignal)

//In this example realSignal should be equal to input signal S, 
//imagSignal should be zero because the input signal S has only real part.

```


## License
[MIT](https://choosealicense.com/licenses/mit/)
