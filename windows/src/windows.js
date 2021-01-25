
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

function barthann(L) {
    if (!Number.isInteger(L) && L < 1) {
        throw "Length must be integer and non negative";
    }
    let T = L - 1;
    let w = Array.from({ length: L }, (x, i) => 0.62 - 0.48 * Math.abs((i / T) - 0.5) + 0.38 * Math.cos(2 * Math.PI * ((i / T) - 0.5)));
    return w
}

function bartlett(L) {
    if (!Number.isInteger(L) && L < 1) {
        throw "Length must be integer and non negative";
    }
    let T = L - 1;
    let w = Array.from({ length: L }, (x, i) => (2 / T) * ((T / 2) - Math.abs(i - T / 2)))
    return w
}

function blackman(L, type = "symmetric") {
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
    let w = Array.from({ length: L }, (x, i) => 0.42 - 0.5 * Math.cos(2 * Math.PI * (i / T)) + 0.08 * Math.cos(4 * Math.PI * (i / T)));
    return w
}
function blackmanharris(L, type = "symmetric") {
    if (!Number.isInteger(L) && L < 1) {
        throw "Length must be integer and non negative";
    }
    const a0 = 0.35875;
    const a1 = 0.48829;
    const a2 = 0.14128;
    const a3 = 0.01168;

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
        a3 * Math.cos(2 * Math.PI * (3 * i / T)));
    return w
}


function bohman(L) {
    if (!Number.isInteger(L) && L < 1) {
        throw "Length must be integer and non negative";
    }
    let T = (L - 1) / 2;
    let w = Array.from({ length: L }, (x, i) => (1 - Math.abs(i / T - 1)) * Math.cos(Math.PI * Math.abs(i / T - 1)) + (1 / Math.PI) * Math.sin(Math.PI * Math.abs(i / T - 1)));
    return w
}

export { hamming, hann, flattop, rect, barthann, bartlett, blackman, blackmanharris, bohman } 