import { fft} from "@signalprocessing/transforms";
import { amplitudeSpectrum } from "../plot.js";

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
// S=[ 0, 0.6814759095853354, 1.1351187926374924 ]
let [real, imag] = fft(S);

//Plot amplitude spectrum 
amplitudeSpectrum(real, imag, Fs, "myDiv");
//myDiv is id of html div element