"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var zeroCache = "0000000000";
function padNumber(originalNumber, minimumIntegerLength) {
    if (zeroCache.length < minimumIntegerLength) {
        zeroCache = new Array(minimumIntegerLength + 1).join("0");
    }
    var absoluteNumber = Math.abs(originalNumber);
    var integerLength = Math.trunc(absoluteNumber).toString().length;
    if (integerLength >= minimumIntegerLength) {
        return originalNumber.toString();
    }
    var numberString = zeroCache.slice(0, minimumIntegerLength - integerLength) +
        absoluteNumber.toString();
    if (originalNumber < 0) {
        return "-" + numberString;
    }
    return numberString;
}
exports.padNumber = padNumber;
//# sourceMappingURL=pad-number.js.map