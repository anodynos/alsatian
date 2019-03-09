"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var alsatian_core_1 = require("../../../core/alsatian-core");
var spy_call_1 = require("../../../core/spying/spy-call");
var SpyCallTests = /** @class */ (function () {
    function SpyCallTests() {
    }
    SpyCallTests.prototype.spyCallArgsAreSameAsInput = function (args) {
        var spyCall = new spy_call_1.SpyCall(args);
        alsatian_core_1.Expect(spyCall.args).toBe(args);
    };
    SpyCallTests.prototype.allArgumentsMatchIfIdenticalInput = function (expectedArgs) {
        var spyCall = new spy_call_1.SpyCall(expectedArgs);
        alsatian_core_1.Expect(spyCall.allArgumentsMatch.apply(spyCall, expectedArgs)).toBe(true);
    };
    SpyCallTests.prototype.allArgumentsDoNotMatchIfIdenticalInputInWrongOrder = function (expectedArgs, actualArguments) {
        var spyCall = new spy_call_1.SpyCall(actualArguments);
        alsatian_core_1.Expect(spyCall.allArgumentsMatch.apply(spyCall, expectedArgs)).toBe(false);
    };
    SpyCallTests.prototype.allArgumentsDoNotMatchIfMissingArguments = function (expectedArgs, actualArguments) {
        var spyCall = new spy_call_1.SpyCall(actualArguments);
        alsatian_core_1.Expect(spyCall.allArgumentsMatch.apply(spyCall, expectedArgs)).toBe(false);
    };
    SpyCallTests.prototype.allArgumentsDoNotMatchIfArgumentsAreDifferentInstances = function (expectedArgs, actualArguments) {
        var spyCall = new spy_call_1.SpyCall(actualArguments);
        alsatian_core_1.Expect(spyCall.allArgumentsMatch.apply(spyCall, expectedArgs)).toBe(false);
    };
    __decorate([
        alsatian_core_1.TestCase([]),
        alsatian_core_1.TestCase([1]),
        alsatian_core_1.TestCase([1, 2]),
        alsatian_core_1.TestCase(["one", 2]),
        alsatian_core_1.TestCase([{ some: "thing" }, []]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array]),
        __metadata("design:returntype", void 0)
    ], SpyCallTests.prototype, "spyCallArgsAreSameAsInput", null);
    __decorate([
        alsatian_core_1.TestCase([1]),
        alsatian_core_1.TestCase(["something"]),
        alsatian_core_1.TestCase([1, 2, 3]),
        alsatian_core_1.TestCase(["some", "thing"]),
        alsatian_core_1.TestCase([["an", "array"]]),
        alsatian_core_1.TestCase([{ an: "object " }]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array]),
        __metadata("design:returntype", void 0)
    ], SpyCallTests.prototype, "allArgumentsMatchIfIdenticalInput", null);
    __decorate([
        alsatian_core_1.TestCase([1, 2, 3], [3, 2, 1]),
        alsatian_core_1.TestCase(["some", "thing"], ["thing", "some"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array,
            Array]),
        __metadata("design:returntype", void 0)
    ], SpyCallTests.prototype, "allArgumentsDoNotMatchIfIdenticalInputInWrongOrder", null);
    __decorate([
        alsatian_core_1.TestCase([1, 2, 3], [1, 2]),
        alsatian_core_1.TestCase(["some", "thing"], ["thing"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array,
            Array]),
        __metadata("design:returntype", void 0)
    ], SpyCallTests.prototype, "allArgumentsDoNotMatchIfMissingArguments", null);
    __decorate([
        alsatian_core_1.TestCase([["an", "array"]], [["an", "array"]]),
        alsatian_core_1.TestCase([{ an: "object " }], [{ an: "object " }]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array,
            Array]),
        __metadata("design:returntype", void 0)
    ], SpyCallTests.prototype, "allArgumentsDoNotMatchIfArgumentsAreDifferentInstances", null);
    return SpyCallTests;
}());
exports.SpyCallTests = SpyCallTests;
//# sourceMappingURL=spy-call.spec.js.map