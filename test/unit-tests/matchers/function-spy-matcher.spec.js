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
var errors_1 = require("../../../core/errors");
var matchers_1 = require("../../../core/matchers");
var spying_1 = require("../../../core/spying");
var FunctionSpyMatcherTests = /** @class */ (function () {
    function FunctionSpyMatcherTests() {
    }
    FunctionSpyMatcherTests.prototype.nullOrUndefinedSpyThrowsError = function (spy) {
        alsatian_core_1.Expect(function () { return new matchers_1.FunctionSpyMatcher(spy); }).toThrowError(TypeError, "spy must not be null or undefined.");
    };
    FunctionSpyMatcherTests.prototype.negativeOrZeroExactlyValueThrowsError = function (expectedCallCount) {
        var some = {
            function: function () { }
        };
        alsatian_core_1.SpyOn(some, "function");
        var spyMatcher = new matchers_1.FunctionSpyMatcher(some.function);
        alsatian_core_1.Expect(function () { return spyMatcher.exactly(expectedCallCount).times; }).toThrowError(TypeError, "expectedCallCount must be greater than 0.");
    };
    FunctionSpyMatcherTests.prototype.exactlyMatchesDoesNotThrow = function (callCount) {
        var some = {
            function: function () { }
        };
        alsatian_core_1.SpyOn(some, "function");
        for (var i = 0; i < callCount; i++) {
            some.function();
        }
        var spyMatcher = new matchers_1.FunctionSpyMatcher(some.function);
        alsatian_core_1.Expect(function () { return spyMatcher.exactly(callCount).times; }).not.toThrow();
    };
    FunctionSpyMatcherTests.prototype.exactlyDoesntMatchThrowsError = function (expectedCallCount, actualCallCount) {
        var some = {
            function: function () { }
        };
        alsatian_core_1.SpyOn(some, "function");
        for (var i = 0; i < actualCallCount; i++) {
            some.function();
        }
        var spyMatcher = new matchers_1.FunctionSpyMatcher(some.function);
        if (expectedCallCount === 1) {
            alsatian_core_1.Expect(function () { return spyMatcher.exactly(expectedCallCount).times; }).toThrowError(errors_1.FunctionCallCountMatchError, "Expected function to be called 1 time.");
        }
        else {
            alsatian_core_1.Expect(function () { return spyMatcher.exactly(expectedCallCount).times; }).toThrowError(errors_1.FunctionCallCountMatchError, "Expected function to be called " + expectedCallCount + " times.");
        }
    };
    FunctionSpyMatcherTests.prototype.negativeOrZeroAnythingButValueThrowsError = function (expectedCallCount) {
        var some = {
            function: function () { }
        };
        alsatian_core_1.SpyOn(some, "function");
        var spyMatcher = new matchers_1.FunctionSpyMatcher(some.function);
        alsatian_core_1.Expect(function () { return spyMatcher.anythingBut(expectedCallCount).times; }).toThrowError(TypeError, "unexpectedCallCount must be greater than 0.");
    };
    FunctionSpyMatcherTests.prototype.anythingButMatchesDoesNotThrow = function (unexpectedCallCount, actualCallCount) {
        var some = {
            function: function () { }
        };
        alsatian_core_1.SpyOn(some, "function");
        for (var i = 0; i < actualCallCount; i++) {
            some.function();
        }
        var spyMatcher = new matchers_1.FunctionSpyMatcher(some.function);
        alsatian_core_1.Expect(function () { return spyMatcher.anythingBut(unexpectedCallCount).times; }).not.toThrow();
    };
    FunctionSpyMatcherTests.prototype.anythingButDoesntMatchThrowsError = function (unexpectedCallCount) {
        var some = {
            function: function () { }
        };
        alsatian_core_1.SpyOn(some, "function");
        for (var i = 0; i < unexpectedCallCount; i++) {
            some.function();
        }
        var spyMatcher = new matchers_1.FunctionSpyMatcher(some.function);
        if (unexpectedCallCount === 1) {
            alsatian_core_1.Expect(function () { return spyMatcher.anythingBut(unexpectedCallCount).times; }).toThrowError(errors_1.FunctionCallCountMatchError, "Expected function not to be called 1 time.");
        }
        else {
            alsatian_core_1.Expect(function () { return spyMatcher.anythingBut(unexpectedCallCount).times; }).toThrowError(errors_1.FunctionCallCountMatchError, "Expected function not to be called " + unexpectedCallCount + " times.");
        }
    };
    FunctionSpyMatcherTests.prototype.negativeOrZeroLessThanValueThrowsError = function (expectedCallCount) {
        var some = {
            function: function () { }
        };
        alsatian_core_1.SpyOn(some, "function");
        var spyMatcher = new matchers_1.FunctionSpyMatcher(some.function);
        alsatian_core_1.Expect(function () { return spyMatcher.lessThan(expectedCallCount).times; }).toThrowError(TypeError, "maximumCallCount must be greater than 0.");
    };
    FunctionSpyMatcherTests.prototype.lessThanMatchesDoesNotThrow = function (maximumCallCount, actualCallCount) {
        var some = {
            function: function () { }
        };
        alsatian_core_1.SpyOn(some, "function");
        for (var i = 0; i < actualCallCount; i++) {
            some.function();
        }
        var spyMatcher = new matchers_1.FunctionSpyMatcher(some.function);
        alsatian_core_1.Expect(function () { return spyMatcher.lessThan(maximumCallCount).times; }).not.toThrow();
    };
    FunctionSpyMatcherTests.prototype.lessThanDoesntMatchThrowsError = function (maximumCallCount, actualCallCount) {
        var some = {
            function: function () { }
        };
        alsatian_core_1.SpyOn(some, "function");
        for (var i = 0; i < actualCallCount; i++) {
            some.function();
        }
        var spyMatcher = new matchers_1.FunctionSpyMatcher(some.function);
        if (maximumCallCount === 1) {
            alsatian_core_1.Expect(function () { return spyMatcher.lessThan(maximumCallCount).times; }).toThrowError(errors_1.FunctionCallCountMatchError, "Expected function to be called less than 1 time.");
        }
        else {
            alsatian_core_1.Expect(function () { return spyMatcher.lessThan(maximumCallCount).times; }).toThrowError(errors_1.FunctionCallCountMatchError, "Expected function to be called less than " + maximumCallCount + " times.");
        }
    };
    FunctionSpyMatcherTests.prototype.negativeOrZeroGreaterThanValueThrowsError = function (expectedCallCount) {
        var some = {
            function: function () { }
        };
        alsatian_core_1.SpyOn(some, "function");
        var spyMatcher = new matchers_1.FunctionSpyMatcher(some.function);
        alsatian_core_1.Expect(function () { return spyMatcher.greaterThan(expectedCallCount).times; }).toThrowError(TypeError, "minimumCallCount must be greater than 0.");
    };
    FunctionSpyMatcherTests.prototype.greaterThanMatchesDoesNotThrow = function (maximumCallCount, actualCallCount) {
        var some = {
            function: function () { }
        };
        alsatian_core_1.SpyOn(some, "function");
        for (var i = 0; i < actualCallCount; i++) {
            some.function();
        }
        var spyMatcher = new matchers_1.FunctionSpyMatcher(some.function);
        alsatian_core_1.Expect(function () { return spyMatcher.greaterThan(maximumCallCount).times; }).not.toThrow();
    };
    FunctionSpyMatcherTests.prototype.greaterThanDoesntMatchThrowsError = function (maximumCallCount, actualCallCount) {
        var some = {
            function: function () { }
        };
        alsatian_core_1.SpyOn(some, "function");
        for (var i = 0; i < actualCallCount; i++) {
            some.function();
        }
        var spyMatcher = new matchers_1.FunctionSpyMatcher(some.function);
        if (maximumCallCount === 1) {
            alsatian_core_1.Expect(function () { return spyMatcher.greaterThan(maximumCallCount).times; }).toThrowError(errors_1.FunctionCallCountMatchError, "Expected function to be called greater than 1 time.");
        }
        else {
            alsatian_core_1.Expect(function () { return spyMatcher.greaterThan(maximumCallCount).times; }).toThrowError(errors_1.FunctionCallCountMatchError, "Expected function to be called greater than " + maximumCallCount + " times.");
        }
    };
    __decorate([
        alsatian_core_1.TestCase(null),
        alsatian_core_1.TestCase(undefined),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [spying_1.FunctionSpy]),
        __metadata("design:returntype", void 0)
    ], FunctionSpyMatcherTests.prototype, "nullOrUndefinedSpyThrowsError", null);
    __decorate([
        alsatian_core_1.TestCase(0),
        alsatian_core_1.TestCase(-1),
        alsatian_core_1.TestCase(-2),
        alsatian_core_1.TestCase(-42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], FunctionSpyMatcherTests.prototype, "negativeOrZeroExactlyValueThrowsError", null);
    __decorate([
        alsatian_core_1.TestCase(1),
        alsatian_core_1.TestCase(2),
        alsatian_core_1.TestCase(42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], FunctionSpyMatcherTests.prototype, "exactlyMatchesDoesNotThrow", null);
    __decorate([
        alsatian_core_1.TestCase(1, 42),
        alsatian_core_1.TestCase(2, 1),
        alsatian_core_1.TestCase(42, 2),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number]),
        __metadata("design:returntype", void 0)
    ], FunctionSpyMatcherTests.prototype, "exactlyDoesntMatchThrowsError", null);
    __decorate([
        alsatian_core_1.TestCase(0),
        alsatian_core_1.TestCase(-1),
        alsatian_core_1.TestCase(-2),
        alsatian_core_1.TestCase(-42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], FunctionSpyMatcherTests.prototype, "negativeOrZeroAnythingButValueThrowsError", null);
    __decorate([
        alsatian_core_1.TestCase(1, 42),
        alsatian_core_1.TestCase(2, 1),
        alsatian_core_1.TestCase(42, 2),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number]),
        __metadata("design:returntype", void 0)
    ], FunctionSpyMatcherTests.prototype, "anythingButMatchesDoesNotThrow", null);
    __decorate([
        alsatian_core_1.TestCase(1),
        alsatian_core_1.TestCase(2),
        alsatian_core_1.TestCase(42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], FunctionSpyMatcherTests.prototype, "anythingButDoesntMatchThrowsError", null);
    __decorate([
        alsatian_core_1.TestCase(0),
        alsatian_core_1.TestCase(-1),
        alsatian_core_1.TestCase(-2),
        alsatian_core_1.TestCase(-42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], FunctionSpyMatcherTests.prototype, "negativeOrZeroLessThanValueThrowsError", null);
    __decorate([
        alsatian_core_1.TestCase(1, 0),
        alsatian_core_1.TestCase(2, 1),
        alsatian_core_1.TestCase(42, 36),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number]),
        __metadata("design:returntype", void 0)
    ], FunctionSpyMatcherTests.prototype, "lessThanMatchesDoesNotThrow", null);
    __decorate([
        alsatian_core_1.TestCase(1, 1),
        alsatian_core_1.TestCase(2, 3),
        alsatian_core_1.TestCase(42, 56),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number]),
        __metadata("design:returntype", void 0)
    ], FunctionSpyMatcherTests.prototype, "lessThanDoesntMatchThrowsError", null);
    __decorate([
        alsatian_core_1.TestCase(0),
        alsatian_core_1.TestCase(-1),
        alsatian_core_1.TestCase(-2),
        alsatian_core_1.TestCase(-42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], FunctionSpyMatcherTests.prototype, "negativeOrZeroGreaterThanValueThrowsError", null);
    __decorate([
        alsatian_core_1.TestCase(1, 2),
        alsatian_core_1.TestCase(2, 3),
        alsatian_core_1.TestCase(42, 56),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number]),
        __metadata("design:returntype", void 0)
    ], FunctionSpyMatcherTests.prototype, "greaterThanMatchesDoesNotThrow", null);
    __decorate([
        alsatian_core_1.TestCase(1, 0),
        alsatian_core_1.TestCase(2, 1),
        alsatian_core_1.TestCase(42, 36),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number]),
        __metadata("design:returntype", void 0)
    ], FunctionSpyMatcherTests.prototype, "greaterThanDoesntMatchThrowsError", null);
    return FunctionSpyMatcherTests;
}());
exports.FunctionSpyMatcherTests = FunctionSpyMatcherTests;
//# sourceMappingURL=function-spy-matcher.spec.js.map