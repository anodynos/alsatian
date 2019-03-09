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
var SpyOnTests = /** @class */ (function () {
    function SpyOnTests() {
    }
    SpyOnTests.prototype.functionIsReplacedWithSpy = function () {
        var object = {
            function: function () { }
        };
        var originalFunction = object.function;
        alsatian_core_1.SpyOn(object, "function");
        alsatian_core_1.Expect(object.function).not.toBe(originalFunction);
    };
    SpyOnTests.prototype.functionStillWorks = function () {
        var object = {
            function: function () {
                object.functionCalled = true;
            },
            functionCalled: false
        };
        var originalFunction = object.function;
        alsatian_core_1.SpyOn(object, "function");
        object.function();
        alsatian_core_1.Expect(object.functionCalled).toBe(true);
    };
    SpyOnTests.prototype.callsPropertyIsSetOnFunction = function () {
        var object = {
            function: function () { }
        };
        var originalFunction = object.function;
        alsatian_core_1.SpyOn(object, "function");
        alsatian_core_1.Expect(object.function.calls).toBeDefined();
        alsatian_core_1.Expect(object.function.calls).not.toBeNull();
    };
    SpyOnTests.prototype.spyShouldBeReturned = function () {
        var object = {
            function: function () { }
        };
        var originalFunction = object.function;
        var spy = alsatian_core_1.SpyOn(object, "function");
        alsatian_core_1.Expect(spy).toBeDefined();
        alsatian_core_1.Expect(spy).not.toBeNull();
    };
    SpyOnTests.prototype.spyingOnNonFunctionShouldThrowError = function (propertyName, propertyValue) {
        var object = {};
        object[propertyName] = propertyValue;
        alsatian_core_1.Expect(function () { return alsatian_core_1.SpyOn(object, propertyName); }).toThrowError(TypeError, propertyName + " is not a function.");
    };
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SpyOnTests.prototype, "functionIsReplacedWithSpy", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SpyOnTests.prototype, "functionStillWorks", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SpyOnTests.prototype, "callsPropertyIsSetOnFunction", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SpyOnTests.prototype, "spyShouldBeReturned", null);
    __decorate([
        alsatian_core_1.TestCase("undefined", undefined),
        alsatian_core_1.TestCase("null", null),
        alsatian_core_1.TestCase("number", 42),
        alsatian_core_1.TestCase("string", "something"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object]),
        __metadata("design:returntype", void 0)
    ], SpyOnTests.prototype, "spyingOnNonFunctionShouldThrowError", null);
    return SpyOnTests;
}());
exports.SpyOnTests = SpyOnTests;
//# sourceMappingURL=spy-on.spec.js.map