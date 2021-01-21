# Signal Processing

The Signal Processing **windows** module contains several windowing functions.

## Installation

Each module can be installed under `@signalprocessing` scope.

For example, to install **windows** module, use :

```bash
npm install @signalprocessing/windows --save
```

## Usage

Signal processing library use ES6 module format. You should add `"type: module" ` declaration in to your `package.json` file. 

Check [docs](https://www.mathworks.com/help/signal/windows.html) for the explanation of windowing functions.

### Hamming Window

```node
import {hamming} from "@signalprocessing/windows"

//Length of signal
let L = 1500;
let w = hamming(L);
//Default type of windowing function is symmetric. You may change it to periodic.
let wP = hamming(L,"periodic");
console.log(w);
console.log(wP);
```
### Hann Window

```node
import {hann} from "@signalprocessing/windows"

//Length of signal
let L = 1500;
let w = hann(L);
//Default type of windowing function is symmetric. You may change it to periodic.
let wP = hann(L,"periodic");
console.log(w);
console.log(wP);
```
### Flattop Window

```node
import {flattop} from "@signalprocessing/windows"

//Length of signal
let L = 1500;
let w = flattop(L);
let wP = flattop(L,"periodic");
console.log(w);
```
### Rect Window

```node
import {rect} from "@signalprocessing/windows"

//Length of signal
let L = 1500;
let w = rect(L);
console.log(w);
```
### Barthann Window

```node
import {barthann} from "@signalprocessing/windows"

//Length of signal
let L = 1500;
let w = barthann(L);
console.log(w);
```
### Bartlett Window
```node
import {bartlett} from "@signalprocessing/windows"

//Length of signal
let L = 1500;
let w = bartlett(L);
console.log(w);
```
### Blackman Window

```node
import {blackman} from "@signalprocessing/windows"

//Length of signal
let L = 1500;
let w = blackman(L);
//Default type of windowing function is symmetric. You may change it to periodic.
let wP = blackman(L,"periodic");
console.log(w);
console.log(wP);
```
### Blackmanharris Window
```node
import {blackmanharris} from "@signalprocessing/windows"

//Length of signal
let L = 1500;
let w = blackmanharris(L);
//Default type of windowing function is symmetric. You may change it to periodic.
let wP = blackmanharris(L,"periodic");
console.log(w);
console.log(wP);
```
### Bohman Window
```node
import {bohman} from "@signalprocessing/windows"

//Length of signal
let L = 1500;
let w = bohman(L);
console.log(w);
```
This module is actively evolving. I am planning to add ```Tukey, Kaiser, Parzen, Taylor, Gauss, Triangular and Chebyshev``` windowing functions soon.
## License

[MIT](https://choosealicense.com/licenses/mit/)
