"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hamming = hamming;
exports.hann = hann;
exports.flattop = flattop;
exports.rect = rect;
exports.barthann = barthann;
exports.bartlett = bartlett;
exports.blackman = blackman;
exports.blackmanharris = blackmanharris;
exports.bohman = bohman;

function hamming(L) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "symmetric";

  if (!Number.isInteger(L) && L < 1) {
    throw "Length must be integer and non negative";
  }

  var T = null;

  if (type === "symmetric") {
    T = L - 1;
  } else if (type === "periodic") {
    T = L;
  } else {
    throw "Type of hamming window must be periodic or symmetric";
  }

  var w = Array.from({
    length: L
  }, function (x, i) {
    return 0.54 - 0.46 * Math.cos(2 * Math.PI * (i / T));
  });
  return w;
}

function hann(L) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "symmetric";

  if (!Number.isInteger(L) && L < 1) {
    throw "Length must be integer and non negative";
  }

  var T = null;

  if (type === "symmetric") {
    T = L - 1;
  } else if (type === "periodic") {
    T = L;
  } else {
    throw "Type of hamming window must be periodic or symmetric";
  }

  var w = Array.from({
    length: L
  }, function (x, i) {
    return 0.5 * (1 - Math.cos(2 * Math.PI * (i / T)));
  });
  return w;
}

function flattop(L) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "symmetric";

  if (!Number.isInteger(L) && L < 1) {
    throw "Length must be integer and non negative";
  }

  var a0 = 0.21557895;
  var a1 = 0.41663158;
  var a2 = 0.277263158;
  var a3 = 0.083578947;
  var a4 = 0.006947368;
  var T = null;

  if (type === "symmetric") {
    T = L - 1;
  } else if (type === "periodic") {
    T = L;
  } else {
    throw "Type of hamming window must be periodic or symmetric";
  }

  var w = Array.from({
    length: L
  }, function (x, i) {
    return a0 - a1 * Math.cos(2 * Math.PI * (i / T)) + a2 * Math.cos(2 * Math.PI * (2 * i / T)) - a3 * Math.cos(2 * Math.PI * (3 * i / T)) + a4 * Math.cos(2 * Math.PI * (4 * i / T));
  });
  return w;
}

function rect(L) {
  if (!Number.isInteger(L) && L < 1) {
    throw "Length must be integer and non negative";
  }

  var w = Array.from({
    length: L
  }, function () {
    return 1;
  });
  return w;
}

function barthann(L) {
  if (!Number.isInteger(L) && L < 1) {
    throw "Length must be integer and non negative";
  }

  var T = L - 1;
  var w = Array.from({
    length: L
  }, function (x, i) {
    return 0.62 - 0.48 * Math.abs(i / T - 0.5) + 0.38 * Math.cos(2 * Math.PI * (i / T - 0.5));
  });
  return w;
}

function bartlett(L) {
  if (!Number.isInteger(L) && L < 1) {
    throw "Length must be integer and non negative";
  }

  var T = L - 1;
  var w = Array.from({
    length: L
  }, function (x, i) {
    return 2 / T * (T / 2 - Math.abs(i - T / 2));
  });
  return w;
}

function blackman(L) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "symmetric";

  if (!Number.isInteger(L) && L < 1) {
    throw "Length must be integer and non negative";
  }

  var T = null;

  if (type === "symmetric") {
    T = L - 1;
  } else if (type === "periodic") {
    T = L;
  } else {
    throw "Type of hamming window must be periodic or symmetric";
  }

  var w = Array.from({
    length: L
  }, function (x, i) {
    return 0.42 - 0.5 * Math.cos(2 * Math.PI * (i / T)) + 0.08 * Math.cos(4 * Math.PI * (i / T));
  });
  return w;
}

function blackmanharris(L) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "symmetric";

  if (!Number.isInteger(L) && L < 1) {
    throw "Length must be integer and non negative";
  }

  var a0 = 0.35875;
  var a1 = 0.48829;
  var a2 = 0.14128;
  var a3 = 0.01168;
  var T = null;

  if (type === "symmetric") {
    T = L - 1;
  } else if (type === "periodic") {
    T = L;
  } else {
    throw "Type of hamming window must be periodic or symmetric";
  }

  var w = Array.from({
    length: L
  }, function (x, i) {
    return a0 - a1 * Math.cos(2 * Math.PI * (i / T)) + a2 * Math.cos(2 * Math.PI * (2 * i / T)) - a3 * Math.cos(2 * Math.PI * (3 * i / T));
  });
  return w;
}

function bohman(L) {
  if (!Number.isInteger(L) && L < 1) {
    throw "Length must be integer and non negative";
  }

  var T = (L - 1) / 2;
  var w = Array.from({
    length: L
  }, function (x, i) {
    return (1 - Math.abs(i / T - 1)) * Math.cos(Math.PI * Math.abs(i / T - 1)) + 1 / Math.PI * Math.sin(Math.PI * Math.abs(i / T - 1));
  });
  return w;
}