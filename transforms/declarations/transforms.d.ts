/// <reference types="node" />
/**
 * ToDo: DEfinitions will be added.
 */
declare module "@signalprocessing/transforms" {
    /**
     * 
     * @param inputReal 
     * @param inputReal 
     */
    export function fft(inputReal:number[],inputReal?:number[]):number[][]
    /**
     * 
     * @param realCoeff 
     * @param imagCoeff 
     */
    export function fft(realCoeff:number[],imagCoeff:number[]):number[][]

}