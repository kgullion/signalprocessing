# Signal Processing

Signal Processing Transforms module is designed for extracting useful information from signals.
## Install

```bash
npm install @signalprocessing/transforms --save
```
## Usage
`@signalprocessing/windows` module can be both imported as commonJS module or ES module.
## Fast Fourier Transform ( fft )
This function implements fast Fourier transform  of the given real or complex signal. 

For the real signal, input parameter can be real array as ```let [realCoef, imagCoef] = fft(realSignal)``` .

For the complex signal, input parameters should be splitted into the real and imaginary arrays as ```let [realCoef, imagCoef]=fft(realPart,ImaginaryPart)```.

```node
let transforms=require("@signalprocessing/transforms")

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
let [realCoef, imagCoef] = transforms.fft(S);
```

## Inverse Fast Fourier Transform ( ifft )
This function implements inverse fast Fourier transform  of the given signal. 

Input parameters should be splitted into the real and imaginary arrays as ```let [realPart, imagPart] =ifft(realCoefficients,ImaginaryCoeffients)```.

If you have signal ```A``` then you should get ```ifff(fft(A)) == A``` with some numerical difference.

```node
let transforms=require("@signalprocessing/transforms")

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
let [realCoef, imagCoef] = transforms.fft(S);

//Compute the inverse Fourier transform of the signal.
let [realSignal,imagSignal] = transforms.ifft(realCoef, imagCoef)

//In this example realSignal should be equal to input signal S, 
//imagSignal should be zero because the input signal S has only real part.
```

# ToDo List #
This module is under active maintenance. I am planning to add some new features under ```@signalprocessing``` scope as listed below in the next few weeks.
* Short Time Fourier Transform (in progress),
* Hilbert Transform,
* Z-transform,
* Wavelet Transform
* Cepstrum,
* Envelope,
* Empirical mode decomposition,

I am also planning to add some other modules in this year.

* Windowing functions module (in progress),
* Filters module, 
* Correlation module, 
* Some pre-ready signals module that includes chirp, sine sweep, pulse signals etc., 
* Modal analysis that will help to extract modal parameters from measured signals such as natural frequency, damping, mode shapes etc., 
* User interface module that will add interactivity on browser. 


## License
[MIT](https://choosealicense.com/licenses/mit/)