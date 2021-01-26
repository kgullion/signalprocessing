/// <reference types="node" />
/**
 *ToDO: Explaniation will be added.
 */

declare module "@signalprocessing/plots" {
    /**
     * 
     * @param realCoefficients 
     * @param imagCoefficients 
     * @param samplingRate 
     * @param chartDiv 
     */
    export function amplitudeSpectrum(realCoefficients:number[], imagCoefficients:number[], samplingRate:number, chartDiv:string): number[][];
}
