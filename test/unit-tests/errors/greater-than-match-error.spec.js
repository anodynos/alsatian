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
var GreaterThanMatchErrorTests = /** @class */ (function () {
    function GreaterThanMatchErrorTests() {
    }
    GreaterThanMatchErrorTests.prototype.shouldBeGreaterThanMessage = function (actualValue, lowerLimit) {
        var error = new greater_than_match_error_1.GreaterThanMatchError(actualValue, lowerLimit, true);
        alsatian_core_1.Expect(error.message).toBe("Expected " + actualValue + " to be greater than " + lowerLimit + ".");
    };
    GreaterThanMatchErrorTests.prototype.shouldNotBeGreaterThanMessage = function (actualValue, lowerLimit) {
        var error = new greater_than_match_error_1.GreaterThanMatchError(actualValue, lowerLimit, false);
        alsatian_core_1.Expect(error.message).toBe("Expected " + actualValue + " not to be greater than " + lowerLimit + ".");
    };
    GreaterThanMatchErrorTests.prototype.shouldSetActualValueToGivenValue = function (actualValue) {
        alsatian_core_1.Expect(new greater_than_match_error_1.GreaterThanMatchError(actualValue, -42, true).actual).toBe(actualValue);
    };
    GreaterThanMatchErrorTests.prototype.shouldSetExpectedValueToGreaterThanLowerLimit = function (lowerLimit) {
        alsatian_core_1.Expect(new greater_than_match_error_1.GreaterThanMatchError(512, lowerLimit, true).expected).toBe("a number greater than " + lowerLimit);
    };
    GreaterThanMatchErrorTests.prototype.shouldSetExpectedValueToNotGreaterhanLowerLimit = function (lowerLimit) {
        var greaterThanMatchError = new greater_than_match_error_1.GreaterThanMatchError(512, lowerLimit, false);
        alsatian_core_1.Expect(greaterThanMatchError.expected).toBe("a number not greater than " + lowerLimit);
    };
    __decorate([
        alsatian_core_1.TestCase(0, 1),
        alsatian_core_1.TestCase(1, 42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number]),
        __metadata("design:returntype", void 0)
    ], GreaterThanMatchErrorTests.prototype, "shouldBeGreaterThanMessage", null);
    __decorate([
        alsatian_core_1.TestCase(1, 0),
        alsatian_core_1.TestCase(2, 2),
        alsatian_core_1.TestCase(42, 1),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number]),
        __metadata("design:returntype", void 0)
    ], GreaterThanMatchErrorTests.prototype, "shouldNotBeGreaterThanMessage", null);
    __decorate([
        alsatian_core_1.TestCase(0),
        alsatian_core_1.TestCase(-1),
        alsatian_core_1.TestCase(42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], GreaterThanMatchErrorTests.prototype, "shouldSetActualValueToGivenValue", null);
    __decorate([
        alsatian_core_1.TestCase(0),
        alsatian_core_1.TestCase(-1),
        alsatian_core_1.TestCase(42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], GreaterThanMatchErrorTests.prototype, "shouldSetExpectedValueToGreaterThanLowerLimit", null);
    __decorate([
        alsatian_core_1.TestCase(0),
        alsatian_core_1.TestCase(-1),
        alsatian_core_1.TestCase(42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], GreaterThanMatchErrorTests.prototype, "shouldSetExpectedValueToNotGreaterhanLowerLimit", null);
    return GreaterThanMatchErrorTests;
}());
exports.GreaterThanMatchErrorTests = GreaterThanMatchErrorTests;
//# sourceMappingURL=greater-than-match-error.spec.js.map