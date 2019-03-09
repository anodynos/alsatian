"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var spy_call_1 = require("../../core/spying/spy-call");
var SpyCallBuilder = /** @class */ (function () {
    function SpyCallBuilder() {
    }
    SpyCallBuilder.prototype.SpyCallBuilder = function () {
        this.args = [];
    };
    SpyCallBuilder.prototype.withArguments = function (args) {
        this.args = args;
        return this;
    };
    SpyCallBuilder.prototype.build = function () {
        return new spy_call_1.SpyCall(this.args);
    };
    return SpyCallBuilder;
}());
exports.SpyCallBuilder = SpyCallBuilder;
//# sourceMappingURL=spy-call-builder.js.map