import { fft } from "./fft.mjs"

export { fft };
let Fs = 1000;
let T = 1 / Fs;
let L = 15000;
let t = Array.from({ length: L }, (x, i) => i * T);
let S = Array.from(t, (x, i) => 0.7 * Math.sin(2 * Math.PI * 50 * x) + Math.sin(2 * Math.PI * 120 * x));
let { real, imag } = fft(S);
console.log(real)
