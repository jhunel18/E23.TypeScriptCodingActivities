"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
function endZeros(a) {
    let stringNum = a.toString().split("");
    let count = 0;
    for (let i = 0; i < stringNum.length; i++) {
        if (parseInt(stringNum[i]) === 0) {
            count++;
        }
    }
    return count;
}
console.log(endZeros(1));
console.log(endZeros(1000));
assert_1.default.strictEqual(endZeros(1), 0);
assert_1.default.strictEqual(endZeros(0), 1);
assert_1.default.strictEqual(endZeros(10), 1);
assert_1.default.strictEqual(endZeros(100), 2);
assert_1.default.strictEqual(endZeros(1000), 3);
//# sourceMappingURL=zeroes.js.map