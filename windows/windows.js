
function hamming(L,type="symmetric") {
    let T=null;
    if (type==="symmetric") {
         T =L-1;
    } else if (type==="periodic") {
         T =L;
    }
    else{
        throw "type of hamming must be periodic or symmetric"
    }

    let w = Array.from({ length: L }, (x, i) => 0.54 - 0.46 * Math.cos(2 * Math.PI * (i / T)));

    return w

}

export{hamming}