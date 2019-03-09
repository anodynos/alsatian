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
var alsatian_core_1 = require("../../../../core/alsatian-core");
var function_spy_1 = require("../../../../core/spying/function-spy");
var CallTests = /** @class */ (function () {
    function CallTests() {
    }
    CallTests.prototype.argumentsRecorded = function (args) {
        var object = {
            originalFunction: function () { }
        };
        var spy = new function_spy_1.FunctionSpy();
        spy.call.apply(spy, args);
        alsatian_core_1.Expect(spy.calls[0].args).toEqual(args);
    };
    CallTests.prototype.callAddedForEachCall = function (callCount) {
        var object = {
            originalFunction: function () { }
        };
        var spy = new function_spy_1.FunctionSpy();
        for (var i = 0; i < callCount; i++) {
            spy.call.apply(spy, []);
        }
        alsatian_core_1.Expect(spy.calls.length).toBe(callCount);
    };
    CallTests.prototype.givenReturnValueIsReturned = function (expectedReturnValue) {
        var object = {
            originalFunction: function () { }
        };
        alsatian_core_1.SpyOn(object, "originalFunction");
        var originalFunction = object.originalFunction;
        var spy = new function_spy_1.FunctionSpy();
        spy.andReturn(expectedReturnValue);
        var actualReturnValue = spy.call.apply(spy, []);
        alsatian_core_1.Expect(actualReturnValue).toBe(expectedReturnValue);
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
    ], CallTests.prototype, "argumentsRecorded", null);
    __decorate([
        alsatian_core_1.TestCase(0),
        alsatian_core_1.TestCase(1),
        alsatian_core_1.TestCase(42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], CallTests.prototype, "callAddedForEachCall", null);
    __decorate([
        alsatian_core_1.TestCase(undefined),
        alsatian_core_1.TestCase(null),
        alsatian_core_1.TestCase(0),
        alsatian_core_1.TestCase(42),
        alsatian_core_1.TestCase(4.2),
        alsatian_core_1.TestCase(-4.2),
        alsatian_core_1.TestCase(""),
        alsatian_core_1.TestCase("something"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], CallTests.prototype, "givenReturnValueIsReturned", null);
    return CallTests;
}());
exports.CallTests = CallTests;
//# sourceMappingURL=call.spec.js.map