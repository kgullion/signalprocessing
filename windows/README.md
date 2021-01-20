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

### Hamming Window

```node
import {hamming} from "@signalprocessing/windows"

//Length of signal
let L = 1500;
let w = hamming (L);
//Default type of windowing function is symmetric. You may change it to periodic.
let wP = hamming (L,"periodic");
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
//Default type of windowing function is symmetric. You may change it to periodic.
let wP = flattop(L,"periodic");
console.log(w);
console.log(wP);

```
### Rect Window

```node
import {rect} from "@signalprocessing/windows"

//Length of signal
let L = 1500;
let w = rect(L);
//Default type of windowing function is symmetric. You may change it to periodic.
let wP = rect(L);
console.log(w);
console.log(wP);

```

## License

[MIT](https://choosealicense.com/licenses/mit/)
