//import assert from "assert";

function endZeros(a: number): number {
    // your code here
    
        let stringNum = a.toString().split("").reverse();
        let count = 0;
        for(let i = 0; i<stringNum.length;i++){
            if(parseInt(stringNum[i]) ===0){
                count++;
            }
            else{
                break;
            }
        }   
    return count;
}

console.log(endZeros(100))
console.log(endZeros(0))
console.log(endZeros(1000))
console.log(endZeros(1010))
// These "asserts" are used for self-checking
// assert.strictEqual(endZeros(1), 0);
// assert.strictEqual(endZeros(0), 1);
// assert.strictEqual(endZeros(10), 1);
// assert.strictEqual(endZeros(100), 2);
// assert.strictEqual(endZeros(1000), 3);