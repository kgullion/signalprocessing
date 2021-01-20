import { hamming, hann, flattop } from "../windows.js"


//Length of signal
let L = 5;
let w = hamming(L);
let wP = hamming(L, "periodic");
let wn = hann(L);
let wPn = hann(L, "periodic");
let wf = flattop(L);
let wPf = flattop(L, "periodic");
console.log(w);
console.log(wP);
console.log(wn);
console.log(wPn);
console.log(wf);
console.log(wPf);