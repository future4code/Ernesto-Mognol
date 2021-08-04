// EXERCICIO 1

const printNumbersA = (number) => {
    if (number >= 0) {
        printNumbers(number - 1);
        console.log(number);
    }
};

printNumbersA(Number(10));

const printNumbersB = (number) => {
    if (number >= 0) {
        console.log(number);
        printNumbers(number - 1);
    }
};

printNumbersB(Number(10));

// EXERCICIO 2

const calculateSumTo = (number, acc = 0) => {
    if (number === 0) {
        return acc;
    }
    return calculateSumTo(number - 1, acc + number);
};


console.log(calculateSumTo(Number(10)));

// EXERCICIO 3

const calculateSumTo = (number) => {
    var sum = 0
    for (var i = 0; i <= number; i++) {
        sum += i;
    }
    return sum;
};

console.log(calculateSumTo(Number(10)));

// EXERCICIO 4

const printArray = (array, i = array.length - 1) => {
    if (i >= 0) {
        printArray(array, i - 1);
        console.log(`Elemento ${i}: `, array[i]);
    }
};

const array = [0, 1, 2, 3, 4, 5];
printArray(array);