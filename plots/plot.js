import Plotly from "plotly.js-dist";

function amplitudeSpectrum(real, imag, Fs, chartDiv) {
  if ((real == null) | (imag == null) | (Fs == null)) {
    throw "Firstly, call FFT method";
  }
  if (real.length != imag.length) {
    throw "Mismatched lengths";
  }
  const L = real.length;
  let f = null;
  let absVec = real.map(function (v, i) {
    return Math.sqrt((v / L) * (v / L) + (this[i] / L) * (this[i] / L));
  }, imag);
  let P1 = absVec.slice(0, L / 2 + 1);
  let P = Array.from(P1, (x, i) => {
    if (i == 0) {
      return x;
    } else {
      return 2 * x;
    }
  });
  let f1 = Array.from({ length: L }, (x, i) => (i * Fs) / L);
  f = f1.slice(0, L / 2 + 1);

  if (f != null) {
    var trace = {
      x: f,
      y: P,
      type: "scatter",
    };

    var data = [trace];
    var layout = {
      title: "Single Sided Amplitude Spectrum",
      xaxis: {
        title: "Frequency (Hz)",
      },
      yaxis: {
        title: "Amplitude",
      },
    };

    // Plotly.newPlot('myDiv', data);
    Plotly.newPlot(chartDiv, data, layout);
  } else {
    throw " Check vectors or Sampling rate";
  }
}

export {amplitudeSpectrum};
