import { fft } from "./fourier.js"
import {hamming} from "@signalprocessing/windows";
function stft(x, windowType,windowsLength, overlap, nfft, fs) {
    let xL =x.length;
    let hop=windowsLength-overlap;
    let L = 1 + Math.trunc(xL - windowsLength)/hop)

    for (let i = 0; i < L-1; i++) {
        const xw=x.slice(0+l*hop,windowsLength+l*hop)
        
    }
}