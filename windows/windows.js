
function hamming(L, type = "symmetric") {
    if (!Number.isInteger(L) && L < 1) {
        throw "Length must be integer and non negative";
    }
    let T = null;
    if (type === "symmetric") {
        T = L - 1;
    } else if (type === "periodic") {
        T = L;
    }
    else {
        throw "Type of hamming window must be periodic or symmetric";
    }
    let w = Array.from({ length: L }, (x, i) => 0.54 - 0.46 * Math.cos(2 * Math.PI * (i / T)));
    return w
}


function hann(L, type = "symmetric") {
    if (!Number.isInteger(L) && L < 1) {
        throw "Length must be integer and non negative";
    }
    let T = null;
    if (type === "symmetric") {
        T = L - 1;
    } else if (type === "periodic") {
        T = L;
    }
    else {
        throw "Type of hamming window must be periodic or symmetric"
    }
    let w = Array.from({ length: L }, (x, i) => 0.5 * (1 - Math.cos(2 * Math.PI * (i / T))));
    return w
}

function flattop(L, type = "symmetric") {
    if (!Number.isInteger(L) && L < 1) {
        throw "Length must be integer and non negative";
    }
    const a0 = 0.21557895;
    const a1 = 0.41663158;
    const a2 = 0.277263158;
    const a3 = 0.083578947;
    const a4 = 0.006947368;

    let T = null;
    if (type === "symmetric") {
        T = L - 1;
    } else if (type === "periodic") {
        T = L;
    }
    else {
        throw "Type of hamming window must be periodic or symmetric"
    }
    let w = Array.from({ length: L }, (x, i) => a0 - a1 * Math.cos(2 * Math.PI * (i / T)) + a2 * Math.cos(2 * Math.PI * (2 * i / T)) -
        a3 * Math.cos(2 * Math.PI * (3 * i / T)) + a4 * Math.cos(2 * Math.PI * (4 * i / T)));
    return w
}

function rect(L) {
    if (!Number.isInteger(L) && L < 1) {
        throw "Length must be integer and non negative";
    }
    let w = Array.from({ length: L }, () => 1);
    return w
}


function tukey(L, r = 0.5) {
    if (!Number.isInteger(L) && L < 1) {
        throw "Length must be integer and non negative";
    }
    let T = null;
    if (0<=x<=) {
        T = L - 1;
    } else if (type === "periodic") {
        T = L;
    }
    else {
        throw "Type of hamming window must be periodic or symmetric"
    }
    let w = Array.from({ length: L }, (x, i) => 0.5 * (1 - Math.cos(2 * Math.PI * (i / T))));
    return w
}
export { hamming, hann, flattop, rect }