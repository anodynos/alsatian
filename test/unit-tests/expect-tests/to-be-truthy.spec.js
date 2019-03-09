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
var truthy_match_error_1 = require("../../../core/errors/truthy-match-error");
var ToBeTruthyTests = /** @class */ (function () {
    function ToBeTruthyTests() {
    }
    ToBeTruthyTests.prototype.shouldBeTruthyAndIsNotThrows = function (actualValue) {
        var expect = alsatian_core_1.Expect(actualValue);
        alsatian_core_1.Expect(function () { return expect.toBeTruthy(); }).toThrowError(truthy_match_error_1.TruthyMatchError, "Expected " + JSON.stringify(actualValue) + " to be truthy.");
    };
    ToBeTruthyTests.prototype.shouldBeTruthyAndIsDoesNotThrow = function (actualValue) {
        var expect = alsatian_core_1.Expect(actualValue);
        alsatian_core_1.Expect(function () { return expect.toBeTruthy(); }).not.toThrow();
    };
    ToBeTruthyTests.prototype.shouldNotBeTruthyMessageAndIsNotDoesNotThrow = function (actualValue) {
        var expect = alsatian_core_1.Expect(actualValue);
        alsatian_core_1.Expect(function () { return expect.not.toBeTruthy(); }).not.toThrow();
    };
    ToBeTruthyTests.prototype.shouldNotBeTruthyMessageAndIsThrows = function (actualValue) {
        var expect = alsatian_core_1.Expect(actualValue);
        alsatian_core_1.Expect(function () { return expect.not.toBeTruthy(); }).toThrowError(truthy_match_error_1.TruthyMatchError, "Expected " + JSON.stringify(actualValue) + " not to be truthy.");
    };
    ToBeTruthyTests.prototype.shouldBeTruthyActualValueSet = function (actualValue) {
        var truthyError;
        try {
            alsatian_core_1.Expect(actualValue).toBeTruthy();
        }
        catch (error) {
            truthyError = error;
        }
        alsatian_core_1.Expect(truthyError).toBeDefined();
        alsatian_core_1.Expect(truthyError).not.toBeNull();
        alsatian_core_1.Expect(truthyError.actual).toBe(actualValue);
    };
    ToBeTruthyTests.prototype.shouldNotBeTruthyActualValueSet = function (actualValue) {
        var truthyError;
        try {
            alsatian_core_1.Expect(actualValue).not.toBeTruthy();
        }
        catch (error) {
            truthyError = error;
        }
        alsatian_core_1.Expect(truthyError).toBeDefined();
        alsatian_core_1.Expect(truthyError).not.toBeNull();
        alsatian_core_1.Expect(truthyError.actual).toBe(actualValue);
    };
    ToBeTruthyTests.prototype.shouldBeTruthyExpectedValueSetToTruthy = function (actualValue) {
        var truthyError;
        try {
            alsatian_core_1.Expect(actualValue).toBeTruthy();
        }
        catch (error) {
            truthyError = error;
        }
        alsatian_core_1.Expect(truthyError).toBeDefined();
        alsatian_core_1.Expect(truthyError).not.toBeNull();
        alsatian_core_1.Expect(truthyError.expected).toBe("truthy");
    };
    ToBeTruthyTests.prototype.shouldNotBeTruthyExpectedValueSetToFalsy = function (actualValue) {
        var truthyError;
        try {
            alsatian_core_1.Expect(actualValue).not.toBeTruthy();
        }
        catch (error) {
            truthyError = error;
        }
        alsatian_core_1.Expect(truthyError).toBeDefined();
        alsatian_core_1.Expect(truthyError).not.toBeNull();
        alsatian_core_1.Expect(truthyError.expected).toBe("falsy");
    };
    __decorate([
        alsatian_core_1.TestCase(0),
        alsatian_core_1.TestCase(false),
        alsatian_core_1.TestCase(""),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ToBeTruthyTests.prototype, "shouldBeTruthyAndIsNotThrows", null);
    __decorate([
        alsatian_core_1.TestCase(-1),
        alsatian_core_1.TestCase(1),
        alsatian_core_1.TestCase(42),
        alsatian_core_1.TestCase(true),
        alsatian_core_1.TestCase("something"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ToBeTruthyTests.prototype, "shouldBeTruthyAndIsDoesNotThrow", null);
    __decorate([
        alsatian_core_1.TestCase(0),
        alsatian_core_1.TestCase(false),
        alsatian_core_1.TestCase(""),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ToBeTruthyTests.prototype, "shouldNotBeTruthyMessageAndIsNotDoesNotThrow", null);
    __decorate([
        alsatian_core_1.TestCase(-1),
        alsatian_core_1.TestCase(1),
        alsatian_core_1.TestCase(42),
        alsatian_core_1.TestCase(true),
        alsatian_core_1.TestCase("something"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ToBeTruthyTests.prototype, "shouldNotBeTruthyMessageAndIsThrows", null);
    __decorate([
        alsatian_core_1.TestCase(0),
        alsatian_core_1.TestCase(false),
        alsatian_core_1.TestCase(""),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ToBeTruthyTests.prototype, "shouldBeTruthyActualValueSet", null);
    __decorate([
        alsatian_core_1.TestCase(-1),
        alsatian_core_1.TestCase(1),
        alsatian_core_1.TestCase(42),
        alsatian_core_1.TestCase(true),
        alsatian_core_1.TestCase("something"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ToBeTruthyTests.prototype, "shouldNotBeTruthyActualValueSet", null);
    __decorate([
        alsatian_core_1.TestCase(0),
        alsatian_core_1.TestCase(false),
        alsatian_core_1.TestCase(""),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ToBeTruthyTests.prototype, "shouldBeTruthyExpectedValueSetToTruthy", null);
    __decorate([
        alsatian_core_1.TestCase(-1),
        alsatian_core_1.TestCase(1),
        alsatian_core_1.TestCase(42),
        alsatian_core_1.TestCase(true),
        alsatian_core_1.TestCase("something"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ToBeTruthyTests.prototype, "shouldNotBeTruthyExpectedValueSetToFalsy", null);
    return ToBeTruthyTests;
}());
exports.ToBeTruthyTests = ToBeTruthyTests;
//# sourceMappingURL=to-be-truthy.spec.js.map