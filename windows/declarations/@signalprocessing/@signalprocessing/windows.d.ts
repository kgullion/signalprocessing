/// <reference types="node" />

/**
 *ToDO: Explaniation will be added.
 */

declare module "@signalprocessing/windows" {
  /**
   *
   * @param L
   * @param type
   */
  export function hamming(L: number, type?: string): number[];
  /**
   *
   * @param L
   * @param type
   */
  export function hann(L: number, type?: string): number[];
  /**
   *
   * @param L
   * @param type
   */
  export function flattop(L: number, type?: string): number[];
  /**
   *
   * @param L
   */
  export function rect(L: number): number[];
  /**
   *
   * @param L
   */
  export function barthann(L: number): number[];
  /**
   *
   * @param L
   */
  export function bartlett(L: number): number[];
  /**
   *
   * @param L
   * @param type
   */
  export function blackman(L: number, type?: string): number[];
  /**
   *
   * @param L
   * @param type
   */
  export function blackmanharris(L: number, type?: string): number[];
  /**
   *
   * @param L
   */
  export function bohman(L: number): number[];
}
