function strOneEdit(strA, strB) {
    if(Math.abs(strA.length - strB.length) > 1){
        return false;
    };
    if(strA.length > strB.length){
        return strA.includes(strB);
    };
    if(strB.length > strA.length){
        return strB.includes(strA);
    };
    let DiffCount = 0
    for (let i = 0; i < strA.length; i++) {
        if (strA[i] !== strB[i]){
            DiffCount++;
        };
    };
    return DiffCount === 1;
};


console.log(strOneEdit("abacaxi", "abacaxi"));
