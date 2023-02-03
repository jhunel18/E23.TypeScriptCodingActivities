"use strict";
function endZeros(a) {
    let stringNum = a.toString().split("").reverse();
    let count = 0;
    for (let i = 0; i < stringNum.length; i++) {
        if (parseInt(stringNum[i]) === 0) {
            count++;
        }
        else {
            break;
        }
    }
    return count;
}
console.log(endZeros(100));
console.log(endZeros(0));
console.log(endZeros(1000));
console.log(endZeros(1010));
//# sourceMappingURL=zeroes.js.map