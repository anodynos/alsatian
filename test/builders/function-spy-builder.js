"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var function_spy_1 = require("../../core/spying/function-spy");
var FunctionSpyBuilder = /** @class */ (function () {
    function FunctionSpyBuilder() {
    }
    FunctionSpyBuilder.prototype.build = function () {
        return new function_spy_1.FunctionSpy();
    };
    return FunctionSpyBuilder;
}());
exports.FunctionSpyBuilder = FunctionSpyBuilder;
//# sourceMappingURL=function-spy-builder.js.map