# Signal Processing

The Signal Processing **Windows** module contains several windowing functions.

## Install

```bash
npm install @signalprocessing/windows --save
```

## Usage

Check external [docs](https://www.mathworks.com/help/signal/windows.html) for the detailed explanation of windowing functions.

`@signalprocessing/windows` module can be both imported as commonJS module or ES module.

```node
let windows = require("@signalprocessing/windows");
```

```node
//Length of signal
let L = 1500;
```

- ### Hamming Window

```node
let wm = windows.hamming(L);

//Default type of windowing function is symmetric. You may change it to periodic.

let wmP = windows.hamming(L, "periodic");
```

- ### Hann Window

```node
let wh = windows.hann(L);

//Default type of windowing function is symmetric. You may change it to periodic.

let whP = windows.hann(L, "periodic");
```

- ### Flattop Window

```node
let wf = windows.flattop(L);
```

- ### Rect Window

```node
let wr = windows.rect(L);
```

- ### Barthann Window

```node
let wb = windows.barthann(L);
```

- ### Bartlett Window

```node
let wr = windows.bartlett(L);
```

- ### Blackman Window

```node
let wbm = windows.blackman(L);

//Default type of windowing function is symmetric. You may change it to periodic.

let wbmP = windows.blackman(L, "periodic");
```

- ### Blackmanharris Window

```node
let wbh = windows.blackmanharris(L);

//Default type of windowing function is symmetric. You may change it to periodic.

let wbhP = windows.blackmanharris(L, "periodic");
```

- ### Bohman Window

```node
let wmn = windows.bohman(L);
```

This module is actively evolving. I am planning to add `Tukey, Kaiser, Parzen, Taylor, Gauss, Triangular and Chebyshev` windowing functions soon.

## License

[MIT](https://choosealicense.com/licenses/mit/)
