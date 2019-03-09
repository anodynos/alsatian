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
var greater_than_match_error_1 = require("../../../core/errors/greater-than-match-error");
var ToBeGreaterThanTests = /** @class */ (function () {
    function ToBeGreaterThanTests() {
    }
    ToBeGreaterThanTests.prototype.greaterThanShouldNotThrowError = function (value, lowerLimit) {
        var expect = alsatian_core_1.Expect(value);
        alsatian_core_1.Expect(function () { return expect.toBeGreaterThan(lowerLimit); }).not.toThrow();
    };
    ToBeGreaterThanTests.prototype.equalShouldThrowError = function (value, lowerLimit) {
        var expect = alsatian_core_1.Expect(value);
        alsatian_core_1.Expect(function () { return expect.toBeGreaterThan(lowerLimit); }).toThrow();
    };
    ToBeGreaterThanTests.prototype.lessThanShouldThrowError = function (value, lowerLimit) {
        var expect = alsatian_core_1.Expect(value);
        alsatian_core_1.Expect(function () { return expect.toBeGreaterThan(lowerLimit); }).toThrow();
    };
    ToBeGreaterThanTests.prototype.notGreaterThanShouldThrowError = function (value, lowerLimit) {
        var expect = alsatian_core_1.Expect(value);
        alsatian_core_1.Expect(function () { return expect.not.toBeGreaterThan(lowerLimit); }).toThrow();
    };
    ToBeGreaterThanTests.prototype.notEqualShouldNotThrowError = function (value, lowerLimit) {
        var expect = alsatian_core_1.Expect(value);
        alsatian_core_1.Expect(function () { return expect.not.toBeGreaterThan(lowerLimit); }).not.toThrow();
    };
    ToBeGreaterThanTests.prototype.notLessThanShouldNotThrowError = function (value, lowerLimit) {
        var expect = alsatian_core_1.Expect(value);
        alsatian_core_1.Expect(function () { return expect.not.toBeGreaterThan(lowerLimit); }).not.toThrow();
    };
    ToBeGreaterThanTests.prototype.shouldBeGreaterThanMessage = function (value, lowerLimit) {
        var expect = alsatian_core_1.Expect(value);
        alsatian_core_1.Expect(function () { return expect.toBeGreaterThan(lowerLimit); }).toThrowError(greater_than_match_error_1.GreaterThanMatchError, "Expected " + value + " to be greater than " + lowerLimit + ".");
    };
    ToBeGreaterThanTests.prototype.shouldNotBeGreaterThanMessage = function (value, lowerLimit) {
        var expect = alsatian_core_1.Expect(value);
        alsatian_core_1.Expect(function () { return expect.not.toBeGreaterThan(lowerLimit); }).toThrowError(greater_than_match_error_1.GreaterThanMatchError, "Expected " + value + " not to be greater than " + lowerLimit + ".");
    };
    ToBeGreaterThanTests.prototype.greaterThanShouldSetErrorActualValueToGivenValue = function (actualValue) {
        var greaterThanError;
        try {
            alsatian_core_1.Expect(actualValue).toBeGreaterThan(512);
        }
        catch (error) {
            greaterThanError = error;
        }
        alsatian_core_1.Expect(greaterThanError).toBeDefined();
        alsatian_core_1.Expect(greaterThanError).not.toBeNull();
        alsatian_core_1.Expect(greaterThanError.actual).toBe(actualValue);
    };
    ToBeGreaterThanTests.prototype.notGreaterThanShouldSetErrorActualValueToGivenValue = function (actualValue) {
        var greaterThanError;
        try {
            alsatian_core_1.Expect(actualValue).not.toBeGreaterThan(-42);
        }
        catch (error) {
            greaterThanError = error;
        }
        alsatian_core_1.Expect(greaterThanError).toBeDefined();
        alsatian_core_1.Expect(greaterThanError).not.toBeNull();
        alsatian_core_1.Expect(greaterThanError.actual).toBe(actualValue);
    };
    ToBeGreaterThanTests.prototype.shouldSetExpectedValueToGreaterThanLowerLimit = function (lowerLimit) {
        var greaterThanError;
        try {
            alsatian_core_1.Expect(-42).toBeGreaterThan(lowerLimit);
        }
        catch (error) {
            greaterThanError = error;
        }
        alsatian_core_1.Expect(greaterThanError).toBeDefined();
        alsatian_core_1.Expect(greaterThanError).not.toBeNull();
        alsatian_core_1.Expect(greaterThanError.expected).toBe("a number greater than " + lowerLimit);
    };
    ToBeGreaterThanTests.prototype.shouldSetExpectedValueToNotGreaterThanLowerLimit = function (lowerLimit) {
        var greaterThanError;
        try {
            alsatian_core_1.Expect(512).not.toBeGreaterThan(lowerLimit);
        }
        catch (error) {
            greaterThanError = error;
        }
        alsatian_core_1.Expect(greaterThanError).toBeDefined();
        alsatian_core_1.Expect(greaterThanError).not.toBeNull();
        alsatian_core_1.Expect(greaterThanError.expected).toBe("a number not greater than " + lowerLimit);
    };
    ToBeGreaterThanTests.prototype.checkingGreaterThanNullOrUndefinedShouldThrow = function (lowerLimit) {
        alsatian_core_1.Expect(function () { return alsatian_core_1.Expect(42).toBeGreaterThan(lowerLimit); }).toThrowError(TypeError, "toBeGreaterThan lower limit must not be null or undefined.");
    };
    ToBeGreaterThanTests.prototype.checkingNonNumberGreaterThanSomethingShouldThrow = function (value) {
        alsatian_core_1.Expect(function () { return alsatian_core_1.Expect(value).toBeGreaterThan(42); }).toThrowError(TypeError, "toBeGreaterThan can only check numbers.");
    };
    __decorate([
        alsatian_core_1.TestCase(1, 0),
        alsatian_core_1.TestCase(42, 1),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number]),
        __metadata("design:returntype", void 0)
    ], ToBeGreaterThanTests.prototype, "greaterThanShouldNotThrowError", null);
    __decorate([
        alsatian_core_1.TestCase(1, 1),
        alsatian_core_1.TestCase(42, 42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number]),
        __metadata("design:returntype", void 0)
    ], ToBeGreaterThanTests.prototype, "equalShouldThrowError", null);
    __decorate([
        alsatian_core_1.TestCase(0, 1),
        alsatian_core_1.TestCase(1, 42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number]),
        __metadata("design:returntype", void 0)
    ], ToBeGreaterThanTests.prototype, "lessThanShouldThrowError", null);
    __decorate([
        alsatian_core_1.TestCase(1, 0),
        alsatian_core_1.TestCase(42, 1),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number]),
        __metadata("design:returntype", void 0)
    ], ToBeGreaterThanTests.prototype, "notGreaterThanShouldThrowError", null);
    __decorate([
        alsatian_core_1.TestCase(1, 1),
        alsatian_core_1.TestCase(42, 42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number]),
        __metadata("design:returntype", void 0)
    ], ToBeGreaterThanTests.prototype, "notEqualShouldNotThrowError", null);
    __decorate([
        alsatian_core_1.TestCase(0, 1),
        alsatian_core_1.TestCase(1, 42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number]),
        __metadata("design:returntype", void 0)
    ], ToBeGreaterThanTests.prototype, "notLessThanShouldNotThrowError", null);
    __decorate([
        alsatian_core_1.TestCase(0, 1),
        alsatian_core_1.TestCase(1, 42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number]),
        __metadata("design:returntype", void 0)
    ], ToBeGreaterThanTests.prototype, "shouldBeGreaterThanMessage", null);
    __decorate([
        alsatian_core_1.TestCase(1, 0),
        alsatian_core_1.TestCase(42, 1),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number]),
        __metadata("design:returntype", void 0)
    ], ToBeGreaterThanTests.prototype, "shouldNotBeGreaterThanMessage", null);
    __decorate([
        alsatian_core_1.TestCase(0),
        alsatian_core_1.TestCase(-1),
        alsatian_core_1.TestCase(42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], ToBeGreaterThanTests.prototype, "greaterThanShouldSetErrorActualValueToGivenValue", null);
    __decorate([
        alsatian_core_1.TestCase(0),
        alsatian_core_1.TestCase(-1),
        alsatian_core_1.TestCase(42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], ToBeGreaterThanTests.prototype, "notGreaterThanShouldSetErrorActualValueToGivenValue", null);
    __decorate([
        alsatian_core_1.TestCase(0),
        alsatian_core_1.TestCase(-1),
        alsatian_core_1.TestCase(42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], ToBeGreaterThanTests.prototype, "shouldSetExpectedValueToGreaterThanLowerLimit", null);
    __decorate([
        alsatian_core_1.TestCase(0),
        alsatian_core_1.TestCase(-1),
        alsatian_core_1.TestCase(42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], ToBeGreaterThanTests.prototype, "shouldSetExpectedValueToNotGreaterThanLowerLimit", null);
    __decorate([
        alsatian_core_1.TestCase(undefined),
        alsatian_core_1.TestCase(null),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], ToBeGreaterThanTests.prototype, "checkingGreaterThanNullOrUndefinedShouldThrow", null);
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
    ], ToBeGreaterThanTests.prototype, "checkingNonNumberGreaterThanSomethingShouldThrow", null);
    return ToBeGreaterThanTests;
}());
exports.ToBeGreaterThanTests = ToBeGreaterThanTests;
//# sourceMappingURL=to-be-greater-than.spec.js.map