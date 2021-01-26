"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.amplitudeSpectrum = amplitudeSpectrum;

var _plotly = _interopRequireDefault(require("plotly.js-dist"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function amplitudeSpectrum(realCoefficients, imagCoefficients, samplingRate, chartDiv) {
  if (realCoefficients == null | imagCoefficients == null | samplingRate == null) {
    throw "Firstly, call FFT method";
  }

  if (realCoefficients.length !== imagCoefficients.length) {
    throw "Mismatched lengths";
  }

  var L = realCoefficients.length;
  var f = null;
  var absoluteCoefficients = realCoefficients.map(function (v, i) {
    return Math.sqrt(v / L * (v / L) + this[i] / L * (this[i] / L));
  }, imagCoefficients);
  var P1 = absoluteCoefficients.slice(0, L / 2 + 1);
  var P = Array.from(P1, function (x, i) {
    if (i == 0) {
      return x;
    } else {
      return 2 * x;
    }
  });
  var f1 = Array.from({
    length: L
  }, function (x, i) {
    return i * samplingRate / L;
  });
  f = f1.slice(0, L / 2 + 1);

  if (f != null) {
    var trace = {
      x: f,
      y: P,
      type: "scatter"
    };
    var data = [trace];
    var layout = {
      title: "Single Sided Amplitude Spectrum",
      xaxis: {
        title: "Frequency (Hz)"
      },
      yaxis: {
        title: "Amplitude"
      }
    }; // Plotly.newPlot('myDiv', data);

    _plotly["default"].newPlot(chartDiv, data, layout);
  } else {
    throw " Check vectors or Sampling rate";
  }
}