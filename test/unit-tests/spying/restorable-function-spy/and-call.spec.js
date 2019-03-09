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
var restorable_function_spy_1 = require("../../../../core/spying/restorable-function-spy");
var AndCallTests = /** @class */ (function () {
    function AndCallTests() {
    }
    AndCallTests.prototype.originalFunctionNotCalledIfSpyFaked = function () {
        var object = {
            originalFunction: function () { }
        };
        alsatian_core_1.SpyOn(object, "originalFunction");
        var originalFunction = object.originalFunction;
        var spy = new restorable_function_spy_1.RestorableFunctionSpy(object, "originalFunction");
        spy.andCall(function () { });
        spy.call([]);
        alsatian_core_1.Expect(originalFunction).not.toHaveBeenCalled();
    };
    AndCallTests.prototype.spyShoulReturnCorrectValue = function (returnValue) {
        var someObject = {
            func: function () { }
        };
        alsatian_core_1.SpyOn(someObject, "func").andCall(function () {
            return returnValue;
        });
        alsatian_core_1.Expect(someObject.func()).toBe(returnValue);
    };
    AndCallTests.prototype.originalFunctionNotCalledIfSpyNotFaked = function () {
        var object = {
            originalFunction: function () { }
        };
        alsatian_core_1.SpyOn(object, "originalFunction");
        var originalFunction = object.originalFunction;
        var spy = new restorable_function_spy_1.RestorableFunctionSpy(object, "originalFunction");
        spy.call([]);
        alsatian_core_1.Expect(originalFunction).toHaveBeenCalled();
    };
    AndCallTests.prototype.fakeFunctionNotCalledIfSpyNotFaked = function (fakeFunction) {
        var object = {
            originalFunction: function () { }
        };
        var fake = {
            function: fakeFunction
        };
        alsatian_core_1.SpyOn(fake, "function");
        var originalFunction = object.originalFunction;
        var spy = new restorable_function_spy_1.RestorableFunctionSpy(object, "originalFunction");
        spy.call([]);
        alsatian_core_1.Expect(fake.function).not.toHaveBeenCalled();
    };
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AndCallTests.prototype, "originalFunctionNotCalledIfSpyFaked", null);
    __decorate([
        alsatian_core_1.TestCase(null),
        alsatian_core_1.TestCase(undefined),
        alsatian_core_1.TestCase(42),
        alsatian_core_1.TestCase("something"),
        alsatian_core_1.TestCase({ an: "object" }),
        alsatian_core_1.TestCase(["an", "array"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AndCallTests.prototype, "spyShoulReturnCorrectValue", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AndCallTests.prototype, "originalFunctionNotCalledIfSpyNotFaked", null);
    __decorate([
        alsatian_core_1.TestCase(function () { }),
        alsatian_core_1.TestCase(function () { return 1 + 1; }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function]),
        __metadata("design:returntype", void 0)
    ], AndCallTests.prototype, "fakeFunctionNotCalledIfSpyNotFaked", null);
    return AndCallTests;
}());
exports.AndCallTests = AndCallTests;
//# sourceMappingURL=and-call.spec.js.map