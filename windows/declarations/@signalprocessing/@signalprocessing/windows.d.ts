/// <reference types="node" />

/**
 *ToDO: Explaniation will be added.
 */

declare module "@signalprocessing/windows" {
  export function hamming(L: number, type?: string): number[];
  export function hann(L: number, type?: string): number[];
  export function flattop(L: number, type?: string): number[];
  export function rect(L: number): number[];
  export function barthann(L: number): number[];
  export function bartlett(L: number): number[];
  export function blackman(L: number, type?: string): number[];
  export function blackmanharris(L: number, type?: string): number[];
  export function bohman(L: number): number[];
}
