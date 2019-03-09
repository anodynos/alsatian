"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var spying_1 = require("../spying");
function SpyOn(target, functionName) {
    if (target[functionName] instanceof Function) {
        return new spying_1.RestorableFunctionSpy(target, functionName);
    }
    else {
        throw new TypeError(functionName + " is not a function.");
    }
}
exports.SpyOn = SpyOn;
//# sourceMappingURL=spy-on.js.map