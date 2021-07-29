//EXERCICIO 1

const findFirstRecurringCharacter = (input) => { // O(n)
    const charHashMap = {};
    for (const char of input) {
        if (charHashMap[char] === true) {
            return char;
        }
        charHashMap[char] = true;
    }
    return null;
};


//EXERCICIO 2

export const func = ( // O(n)
    source,
    comparison
) => {
    if (
        comparison.length > source.length + 1 ||
        comparison.length < source.length - 1
    ) {
        return false;
    }
    let commonCharQuantity = 0;

    for (const char of comparison) {
        if (source !== comparison) {
            commonCharQuantity++;
        }
    }
    return (
        commonCharQuantity <= source.length + 1 &&
        commonCharQuantity >= source.length - 1
    );
};


//EXERCICIO 3

export const replaceMatrixValue = ( // O(1)
    matrix,
    rowIndex,
    columnIndex,
    value
) => {
    if (
        matrix[rowIndex] === undefined ||
        matrix[rowIndex][columnIndex] === undefined
    ) {
        throw new Error("Fora do intervalo da matriz");
    }

    matrix[rowIndex][columnIndex] = value;
};


//EXERCICIO 4

function verifyIfExistRepeatedNumbers(listOfNumbers) { // O(n²)
    for (let i = 0; i < listOfNumbers.length; i++) {
        if (listOfNumbers.indexOf(listOfNumbers[i]) !== i) {
            return true;
        }
    }
    return false;
}


//EXERCICIO 5

// MAIS COMPLEXO PARA MENOS COMPLEXO
// 4 -> 1/2 -> 3


//EXERCICIO 6

function product(a, b) { // O(n)
    let sum = 0;
    for (let i = 0; i < b; i++) {
        sum += a;
    }
    return sum
}


//EXERCICIO 7

function mod(a, b) { // O(1)
    if (b <= a) {
        return -1;
    }
    let div = a / b;
    return a - div * b;
}


//EXERCICIO 8

function copyArray(array) { // O(n²)
    let copy = [];
    for (const value of array) {
        copy = appendToNew(copy, value);
    }
    return copy;
}

function appendToNew(array, value) { // O(n)
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i]);
    }
    newArray.push(value);
    return newArray;
}