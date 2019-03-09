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
var less_than_match_error_1 = require("../../../core/errors/less-than-match-error");
var ToBeLessThanTests = /** @class */ (function () {
    function ToBeLessThanTests() {
    }
    ToBeLessThanTests.prototype.lessThanShouldNotThrowError = function (value, upperLimit) {
        var expect = alsatian_core_1.Expect(value);
        alsatian_core_1.Expect(function () { return expect.toBeLessThan(upperLimit); }).not.toThrow();
    };
    ToBeLessThanTests.prototype.equalShouldThrowError = function (value, upperLimit) {
        var expect = alsatian_core_1.Expect(value);
        alsatian_core_1.Expect(function () { return expect.toBeLessThan(upperLimit); }).toThrow();
    };
    ToBeLessThanTests.prototype.greaterThanShouldThrowError = function (value, upperLimit) {
        var expect = alsatian_core_1.Expect(value);
        alsatian_core_1.Expect(function () { return expect.toBeLessThan(upperLimit); }).toThrow();
    };
    ToBeLessThanTests.prototype.lessThanShouldThrowWhenExpectedNotLessThan = function (value, upperLimit) {
        var expect = alsatian_core_1.Expect(value);
        alsatian_core_1.Expect(function () { return expect.not.toBeLessThan(upperLimit); }).toThrow();
    };
    ToBeLessThanTests.prototype.equalShouldNotThrowWhenExpectedNotLessThan = function (value, upperLimit) {
        var expect = alsatian_core_1.Expect(value);
        alsatian_core_1.Expect(function () { return expect.not.toBeLessThan(upperLimit); }).not.toThrow();
    };
    ToBeLessThanTests.prototype.greaterThanShouldNotThrowWhenExpectedNotLessThan = function (value, upperLimit) {
        var expect = alsatian_core_1.Expect(value);
        alsatian_core_1.Expect(function () { return expect.not.toBeLessThan(upperLimit); }).not.toThrow();
    };
    ToBeLessThanTests.prototype.shouldThrowLessThanMatchErrorWithCorrectMessage = function (value, upperLimit) {
        var expect = alsatian_core_1.Expect(value);
        alsatian_core_1.Expect(function () { return expect.toBeLessThan(upperLimit); }).toThrowError(less_than_match_error_1.LessThanMatchError, "Expected " + value + " to be less than " + upperLimit + ".");
    };
    ToBeLessThanTests.prototype.shouldThrowLessThanMatchErrorWithCorrectNotMessage = function (value, upperLimit) {
        var expect = alsatian_core_1.Expect(value);
        alsatian_core_1.Expect(function () { return expect.not.toBeLessThan(upperLimit); }).toThrowError(less_than_match_error_1.LessThanMatchError, "Expected " + value + " not to be less than " + upperLimit + ".");
    };
    ToBeLessThanTests.prototype.lessThanShouldSetErrorActualValueToGivenValue = function (actualValue) {
        var lessThanError;
        try {
            alsatian_core_1.Expect(actualValue).toBeLessThan(-42);
        }
        catch (error) {
            lessThanError = error;
        }
        alsatian_core_1.Expect(lessThanError).toBeDefined();
        alsatian_core_1.Expect(lessThanError).not.toBeNull();
        alsatian_core_1.Expect(lessThanError.actual).toBe(actualValue);
    };
    ToBeLessThanTests.prototype.notLessThanShouldSetErrorActualValueToGivenValue = function (actualValue) {
        var lessThanError;
        try {
            alsatian_core_1.Expect(actualValue).not.toBeLessThan(512);
        }
        catch (error) {
            lessThanError = error;
        }
        alsatian_core_1.Expect(lessThanError).toBeDefined();
        alsatian_core_1.Expect(lessThanError).not.toBeNull();
        alsatian_core_1.Expect(lessThanError.actual).toBe(actualValue);
    };
    ToBeLessThanTests.prototype.shouldSetExpectedValueToLessThanUpperLimit = function (upperLimit) {
        var lessThanError;
        try {
            alsatian_core_1.Expect(512).toBeLessThan(upperLimit);
        }
        catch (error) {
            lessThanError = error;
        }
        alsatian_core_1.Expect(lessThanError).toBeDefined();
        alsatian_core_1.Expect(lessThanError).not.toBeNull();
        alsatian_core_1.Expect(lessThanError.expected).toBe("a number less than " + upperLimit);
    };
    ToBeLessThanTests.prototype.shouldSetExpectedValueToNotLessThanUpperLimit = function (upperLimit) {
        var lessThanError;
        try {
            alsatian_core_1.Expect(-42).not.toBeLessThan(upperLimit);
        }
        catch (error) {
            lessThanError = error;
        }
        alsatian_core_1.Expect(lessThanError).toBeDefined();
        alsatian_core_1.Expect(lessThanError).not.toBeNull();
        alsatian_core_1.Expect(lessThanError.expected).toBe("a number not less than " + upperLimit);
    };
    ToBeLessThanTests.prototype.checkingLessThanNullOrUndefinedShouldThrow = function (upperLimit) {
        alsatian_core_1.Expect(function () { return alsatian_core_1.Expect(42).toBeLessThan(upperLimit); }).toThrowError(TypeError, "toBeLessThan upper limit must not be null or undefined.");
    };
    ToBeLessThanTests.prototype.checkingNonNumberLessThanSomethingShouldThrow = function (value) {
        alsatian_core_1.Expect(function () { return alsatian_core_1.Expect(value).toBeLessThan(42); }).toThrowError(TypeError, "toBeLessThan can only check numbers.");
    };
    __decorate([
        alsatian_core_1.TestCase(1, 50),
        alsatian_core_1.TestCase(42, 200),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number]),
        __metadata("design:returntype", void 0)
    ], ToBeLessThanTests.prototype, "lessThanShouldNotThrowError", null);
    __decorate([
        alsatian_core_1.TestCase(1, 1),
        alsatian_core_1.TestCase(42, 42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number]),
        __metadata("design:returntype", void 0)
    ], ToBeLessThanTests.prototype, "equalShouldThrowError", null);
    __decorate([
        alsatian_core_1.TestCase(22, 1),
        alsatian_core_1.TestCase(55, 5),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number]),
        __metadata("design:returntype", void 0)
    ], ToBeLessThanTests.prototype, "greaterThanShouldThrowError", null);
    __decorate([
        alsatian_core_1.TestCase(1, 50),
        alsatian_core_1.TestCase(42, 200),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number]),
        __metadata("design:returntype", void 0)
    ], ToBeLessThanTests.prototype, "lessThanShouldThrowWhenExpectedNotLessThan", null);
    __decorate([
        alsatian_core_1.TestCase(1, 1),
        alsatian_core_1.TestCase(42, 42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number]),
        __metadata("design:returntype", void 0)
    ], ToBeLessThanTests.prototype, "equalShouldNotThrowWhenExpectedNotLessThan", null);
    __decorate([
        alsatian_core_1.TestCase(20, 1),
        alsatian_core_1.TestCase(125, 42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number]),
        __metadata("design:returntype", void 0)
    ], ToBeLessThanTests.prototype, "greaterThanShouldNotThrowWhenExpectedNotLessThan", null);
    __decorate([
        alsatian_core_1.TestCase(7, 1),
        alsatian_core_1.TestCase(72, 42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number]),
        __metadata("design:returntype", void 0)
    ], ToBeLessThanTests.prototype, "shouldThrowLessThanMatchErrorWithCorrectMessage", null);
    __decorate([
        alsatian_core_1.TestCase(1, 7),
        alsatian_core_1.TestCase(42, 72),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number]),
        __metadata("design:returntype", void 0)
    ], ToBeLessThanTests.prototype, "shouldThrowLessThanMatchErrorWithCorrectNotMessage", null);
    __decorate([
        alsatian_core_1.TestCase(0),
        alsatian_core_1.TestCase(-1),
        alsatian_core_1.TestCase(42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], ToBeLessThanTests.prototype, "lessThanShouldSetErrorActualValueToGivenValue", null);
    __decorate([
        alsatian_core_1.TestCase(0),
        alsatian_core_1.TestCase(-1),
        alsatian_core_1.TestCase(42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], ToBeLessThanTests.prototype, "notLessThanShouldSetErrorActualValueToGivenValue", null);
    __decorate([
        alsatian_core_1.TestCase(0),
        alsatian_core_1.TestCase(-1),
        alsatian_core_1.TestCase(42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], ToBeLessThanTests.prototype, "shouldSetExpectedValueToLessThanUpperLimit", null);
    __decorate([
        alsatian_core_1.TestCase(0),
        alsatian_core_1.TestCase(-1),
        alsatian_core_1.TestCase(42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], ToBeLessThanTests.prototype, "shouldSetExpectedValueToNotLessThanUpperLimit", null);
    __decorate([
        alsatian_core_1.TestCase(undefined),
        alsatian_core_1.TestCase(null),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], ToBeLessThanTests.prototype, "checkingLessThanNullOrUndefinedShouldThrow", null);
    __decorate([
        alsatian_core_1.TestCase(undefined),
        alsatian_core_1.TestCase(null),
        alsatian_core_1.TestCase(""),
        alsatian_core_1.TestCase("something"),
        alsatian_core_1.TestCase({}),
        alsatian_core_1.TestCase({ an: "object" }),
        alsatian_core_1.TestCase([]),
        alsatian_core_1.TestCase(["an", "array"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], ToBeLessThanTests.prototype, "checkingNonNumberLessThanSomethingShouldThrow", null);
    return ToBeLessThanTests;
}());
exports.ToBeLessThanTests = ToBeLessThanTests;
//# sourceMappingURL=to-be-less-than.spec.js.map