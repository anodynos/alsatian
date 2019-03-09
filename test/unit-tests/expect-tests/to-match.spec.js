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
var regex_match_error_1 = require("../../../core/errors/regex-match-error");
var ToMatchTests = /** @class */ (function () {
    function ToMatchTests() {
    }
    ToMatchTests.prototype.shouldMatchAndDoesNotThrow = function (actualValue, expectedRegex) {
        var expect = alsatian_core_1.Expect(actualValue);
        alsatian_core_1.Expect(function () { return expect.toMatch(expectedRegex); }).toThrowError(regex_match_error_1.RegexMatchError, "Expected " + JSON.stringify(actualValue) + " to conform to " + expectedRegex + ".");
    };
    ToMatchTests.prototype.shouldMatchAndDoesDoesNotThrow = function (actualValue, expectedRegex) {
        var expect = alsatian_core_1.Expect(actualValue);
        alsatian_core_1.Expect(function () { return expect.toMatch(expectedRegex); }).not.toThrow();
    };
    ToMatchTests.prototype.shouldNotMatchAndDoesNotDoesNotThrow = function (actualValue, expectedRegex) {
        var expect = alsatian_core_1.Expect(actualValue);
        alsatian_core_1.Expect(function () { return expect.not.toMatch(expectedRegex); }).not.toThrow();
    };
    ToMatchTests.prototype.shouldNotMatchAndDoesThrow = function (actualValue, expectedRegex) {
        var expect = alsatian_core_1.Expect(actualValue);
        alsatian_core_1.Expect(function () { return expect.not.toMatch(expectedRegex); }).toThrowError(regex_match_error_1.RegexMatchError, "Expected " + JSON.stringify(actualValue) + " not to conform to " + expectedRegex + ".");
    };
    ToMatchTests.prototype.checkingWhetherNonStringMatchesRegexShouldThrow = function (actualValue) {
        alsatian_core_1.Expect(function () { return alsatian_core_1.Expect(actualValue).toMatch(/test/); }).toThrowError(TypeError, "toMatch must only be used to match on strings.");
    };
    ToMatchTests.prototype.checkingWhetherNonStringDoesNotMatchRegexShouldThrow = function (actualValue) {
        alsatian_core_1.Expect(function () { return alsatian_core_1.Expect(actualValue).not.toMatch(/test/); }).toThrowError(TypeError, "toMatch must only be used to match on strings.");
    };
    ToMatchTests.prototype.checkingStringMatchesNullOrUndefinedRegularExpressionShouldThrow = function (regex) {
        alsatian_core_1.Expect(function () { return alsatian_core_1.Expect("something").toMatch(regex); }).toThrowError(TypeError, "toMatch regular expression must not be null or undefined.");
    };
    ToMatchTests.prototype.checkingStringDoesNotMatchNullOrUndefinedRegularExpressionShouldThrow = function (regex) {
        alsatian_core_1.Expect(function () { return alsatian_core_1.Expect("something").not.toMatch(regex); }).toThrowError(TypeError, "toMatch regular expression must not be null or undefined.");
    };
    __decorate([
        alsatian_core_1.TestCase("thing", /something/),
        alsatian_core_1.TestCase("another thing", /this and that/),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, RegExp]),
        __metadata("design:returntype", void 0)
    ], ToMatchTests.prototype, "shouldMatchAndDoesNotThrow", null);
    __decorate([
        alsatian_core_1.TestCase("something", /thing/),
        alsatian_core_1.TestCase("another thing", /another thing/),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, RegExp]),
        __metadata("design:returntype", void 0)
    ], ToMatchTests.prototype, "shouldMatchAndDoesDoesNotThrow", null);
    __decorate([
        alsatian_core_1.TestCase("thing", /something/),
        alsatian_core_1.TestCase("another thing", /this and that/),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, RegExp]),
        __metadata("design:returntype", void 0)
    ], ToMatchTests.prototype, "shouldNotMatchAndDoesNotDoesNotThrow", null);
    __decorate([
        alsatian_core_1.TestCase("something", /thing/),
        alsatian_core_1.TestCase("another thing", /another thing/),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, RegExp]),
        __metadata("design:returntype", void 0)
    ], ToMatchTests.prototype, "shouldNotMatchAndDoesThrow", null);
    __decorate([
        alsatian_core_1.TestCase(undefined),
        alsatian_core_1.TestCase(null),
        alsatian_core_1.TestCase(0),
        alsatian_core_1.TestCase(1),
        alsatian_core_1.TestCase(42),
        alsatian_core_1.TestCase({}),
        alsatian_core_1.TestCase({ an: "object" }),
        alsatian_core_1.TestCase([]),
        alsatian_core_1.TestCase(["an", "array"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], ToMatchTests.prototype, "checkingWhetherNonStringMatchesRegexShouldThrow", null);
    __decorate([
        alsatian_core_1.TestCase(undefined),
        alsatian_core_1.TestCase(null),
        alsatian_core_1.TestCase(0),
        alsatian_core_1.TestCase(1),
        alsatian_core_1.TestCase(42),
        alsatian_core_1.TestCase({}),
        alsatian_core_1.TestCase({ an: "object" }),
        alsatian_core_1.TestCase([]),
        alsatian_core_1.TestCase(["an", "array"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], ToMatchTests.prototype, "checkingWhetherNonStringDoesNotMatchRegexShouldThrow", null);
    __decorate([
        alsatian_core_1.TestCase(undefined),
        alsatian_core_1.TestCase(null),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [RegExp]),
        __metadata("design:returntype", void 0)
    ], ToMatchTests.prototype, "checkingStringMatchesNullOrUndefinedRegularExpressionShouldThrow", null);
    __decorate([
        alsatian_core_1.TestCase(undefined),
        alsatian_core_1.TestCase(null),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [RegExp]),
        __metadata("design:returntype", void 0)
    ], ToMatchTests.prototype, "checkingStringDoesNotMatchNullOrUndefinedRegularExpressionShouldThrow", null);
    return ToMatchTests;
}());
exports.ToMatchTests = ToMatchTests;
//# sourceMappingURL=to-match.spec.js.map