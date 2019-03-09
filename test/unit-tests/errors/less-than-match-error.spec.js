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
var LessThanMatchErrorTests = /** @class */ (function () {
    function LessThanMatchErrorTests() {
    }
    LessThanMatchErrorTests.prototype.shouldBeLessThanMessage = function (actualValue, upperLimit) {
        var error = new less_than_match_error_1.LessThanMatchError(actualValue, upperLimit, true);
        alsatian_core_1.Expect(error.message).toBe("Expected " + actualValue + " to be less than " + upperLimit + ".");
    };
    LessThanMatchErrorTests.prototype.shouldNotBeLessThanMessage = function (actualValue, upperLimit) {
        var error = new less_than_match_error_1.LessThanMatchError(actualValue, upperLimit, false);
        alsatian_core_1.Expect(error.message).toBe("Expected " + actualValue + " not to be less than " + upperLimit + ".");
    };
    LessThanMatchErrorTests.prototype.shouldSetActualValueToGivenValue = function (actualValue) {
        alsatian_core_1.Expect(new less_than_match_error_1.LessThanMatchError(actualValue, -42, true).actual).toBe(actualValue);
    };
    LessThanMatchErrorTests.prototype.shouldSetExpectedValueToLessThanUpperLimit = function (upperLimit) {
        alsatian_core_1.Expect(new less_than_match_error_1.LessThanMatchError(512, upperLimit, true).expected).toBe("a number less than " + upperLimit);
    };
    LessThanMatchErrorTests.prototype.shouldSetExpectedValueToNotLessThanUpperLimit = function (upperLimit) {
        alsatian_core_1.Expect(new less_than_match_error_1.LessThanMatchError(512, upperLimit, false).expected).toBe("a number not less than " + upperLimit);
    };
    __decorate([
        alsatian_core_1.TestCase(1, 0),
        alsatian_core_1.TestCase(42, 1),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number]),
        __metadata("design:returntype", void 0)
    ], LessThanMatchErrorTests.prototype, "shouldBeLessThanMessage", null);
    __decorate([
        alsatian_core_1.TestCase(0, 1),
        alsatian_core_1.TestCase(2, 2),
        alsatian_core_1.TestCase(1, 42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number]),
        __metadata("design:returntype", void 0)
    ], LessThanMatchErrorTests.prototype, "shouldNotBeLessThanMessage", null);
    __decorate([
        alsatian_core_1.TestCase(0),
        alsatian_core_1.TestCase(-1),
        alsatian_core_1.TestCase(42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], LessThanMatchErrorTests.prototype, "shouldSetActualValueToGivenValue", null);
    __decorate([
        alsatian_core_1.TestCase(0),
        alsatian_core_1.TestCase(-1),
        alsatian_core_1.TestCase(42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], LessThanMatchErrorTests.prototype, "shouldSetExpectedValueToLessThanUpperLimit", null);
    __decorate([
        alsatian_core_1.TestCase(0),
        alsatian_core_1.TestCase(-1),
        alsatian_core_1.TestCase(42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], LessThanMatchErrorTests.prototype, "shouldSetExpectedValueToNotLessThanUpperLimit", null);
    return LessThanMatchErrorTests;
}());
exports.LessThanMatchErrorTests = LessThanMatchErrorTests;
//# sourceMappingURL=less-than-match-error.spec.js.map