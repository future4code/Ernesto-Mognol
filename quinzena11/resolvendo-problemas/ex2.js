function strCompression(input){
    const compressedString = [];
    let lastChar = input[0];
    let charCount = 0;
    for(const char of input){
        if(char != lastChar){
            compressedString.push(lastChar + charCount);
            lastChar = char;
            charCount = 0;
        };
        charCount++;
    };
    compressedString.push(lastChar + charCount);
    let result = "";
    for (const i of compressedString) {
      result += i;
    };
    return result.length > input.length ? input : result;
}


console.log(strCompression("aabbb"));
console.log(strCompression("aabcccccaaa"))
console.log(strCompression("accurate"))
console.log(strCompression("escola"))
console.log(strCompression("accuraaaaaaaaaate"))
