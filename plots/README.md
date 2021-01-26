# Signal Processing

The Signal Processing **Plots** module is designed for plotting computed signals.

## Install

```bash
npm install @signalprocessing/plots --save
```

## Usage

```@signalprocessing/windows``` module can be both imported as commonJS or ES module.


### 1. Create index.js

```node
let fft = require("@signalprocessing/transforms").fft ;
let amplitudeSpectrum = require("@signalprocessing/plots").amplitudeSpectrum ;

//Sampling Rate
let Fs = 1500;

//Sampling Period
let T = 1 / Fs;

//Length of signal
let L = 1000;

//Time array
let t = Array.from({ length: L }, (x, i) => i * T);

//A signal containing a 30 Hz sinusoid of amplitude 0.5 and a 100 Hz sinusoid of amplitude 1.
let S = Array.from( t, (x, i) => 0.5 * Math.sin(2 * Math.PI * 30 * x) + Math.sin(2 * Math.PI * 100 * x));

//Compute the Fourier transform of the signal.
let [real, imag] = fft(S);

//Plot amplitude spectrum
amplitudeSpectrum(real, imag, Fs, "myDiv");
//myDiv is id of html div element to create plot chart on it.
```

2. Create index.html and add index.js as script into your html file. Then create div element with id ```myDiv```

```html
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>

  <body>
    <div id="myDiv">
      <!-- Plotly chart will be drawn inside this DIV -->
    </div>
    <script src="./index.js" charset="utf-8"></script>
  </body>
</html>
```

3. In **Node**, there is no browser window. So you should create a web server to serve your html file.

- To simplify this step I am using **Parcel** and **cross-env** modules.

   If you have already setup your http server, then you may skip these step. 
   
   However, I am strongly recommending you to use cross-env and Parcel to make your code works on different platforms.
- Install and save these modules as development.

```bash
npm install --save-dev cross-env  parcel-bundler
```

3. Run the script below in the terminal to see results in the browser. In the first run, it will take a few minutes to build your files.

```bash
cross-env NODE_ENV=development parcel index.html --no-hmr --open
```

- Alternatively, you may also add scripts declaration into your package.json file

```node
  "scripts": {
    "watch": "cross-env NODE_ENV=development parcel index.html --no-hmr --open  "
  },
```

- And then run the command below in working directory.

```node
npm run watch
```
![Amplitude Spectrum](https://github.com/yusufsaygili/signalprocessing/blob/master/plots/test/amplitudeSpectrum.png?raw=true)

## License

[MIT](https://choosealicense.com/licenses/mit/)
