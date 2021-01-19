# Signal Processing Plots Module

The Signal Processing **Plots** module is designed for plotting signals.
## Installation

Each module can be installed under ```@signalprocessing``` scope.

For example, to install **Plots** module, use :


```bash
npm install @signalprocessing/plots --save
```
## Usage

Signal processing library use ES6 module format. You should add ```"type: module" ``` declaration in to your ```package.json``` file. Plotting module depends on ```@signalprocessing/transforms```.

Firstly, install transform module
```bash
npm install  @signalprocessing/transforms --save
```
To plot your signal, you should create an index.js file.
1. Create index.js
```node
import { fft } from "@signalprocessing/transforms";
import { amplitudeSpectrum } from "@signalprocessing/plots";
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
let [ real, imag ] = fft(S);
//Plot amplitude spectrum 
amplitudeSpectrum(real, imag, Fs, "myDiv");
//myDiv is id of html div element
```
2. Create index.html and add index.js as script into your html file.
```html
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <div id='myDiv'>
    <!-- Plotly chart will be drawn inside this DIV -->
  </div>
  <script src="./index.js" charset="utf-8"></script>
</body>

</html>
```
3. In **Node**, there is no browser window. So you should create a web server to serve html file.

- To simplify this step I am using **Parcel** and **cross-env** modules. 
- Install and save these modules as development.


```bash 
npm install cross-env --save-dev
```
```bash 
npm install parcel-bundler --save-dev
```
3. Run the script below to see results in the browser. In the first run, it will take a few minutes to build your files.
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


## License
[MIT](https://choosealicense.com/licenses/mit/)
