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
var exact_match_error_1 = require("../../../core/errors/exact-match-error");
var ToBeNullTests = /** @class */ (function () {
    function ToBeNullTests() {
    }
    ToBeNullTests.prototype.nullShouldNotThrowError = function () {
        var expect = alsatian_core_1.Expect(null);
        alsatian_core_1.Expect(function () { return expect.toBeNull(); }).not.toThrow();
    };
    ToBeNullTests.prototype.nullShouldThrowErrorForNonNullValues = function (value) {
        var expect = alsatian_core_1.Expect(value);
        alsatian_core_1.Expect(function () { return expect.toBeNull(); }).toThrow();
    };
    ToBeNullTests.prototype.nullShouldThrowCorrectErrorWithCorrectMessageForNonNullValues = function (value) {
        var expect = alsatian_core_1.Expect(value);
        var stringifiedArgument = JSON.stringify(value);
        if (stringifiedArgument) {
            stringifiedArgument = stringifiedArgument.replace(",", ", ");
        }
        var expectedErrorMessage = "Expected " + stringifiedArgument + " to be null.";
        alsatian_core_1.Expect(function () { return expect.toBeNull(); }).toThrowError(exact_match_error_1.ExactMatchError, expectedErrorMessage);
    };
    ToBeNullTests.prototype.notNullShouldThrowError = function () {
        var expect = alsatian_core_1.Expect(null);
        var expectedErrorMessage = "Expected null not to be null.";
        alsatian_core_1.Expect(function () { return expect.not.toBeNull(); }).toThrowError(exact_match_error_1.ExactMatchError, expectedErrorMessage);
    };
    ToBeNullTests.prototype.notNullShouldNotThrowErrorForNonNullValues = function (value) {
        var expect = alsatian_core_1.Expect(value);
        alsatian_core_1.Expect(function () { return expect.not.toBeNull(); }).not.toThrow();
    };
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToBeNullTests.prototype, "nullShouldNotThrowError", null);
    __decorate([
        alsatian_core_1.TestCase(undefined),
        alsatian_core_1.TestCase(0),
        alsatian_core_1.TestCase(42),
        alsatian_core_1.TestCase(-42),
        alsatian_core_1.TestCase(""),
        alsatian_core_1.TestCase("something"),
        alsatian_core_1.TestCase({}),
        alsatian_core_1.TestCase({ with: "something" }),
        alsatian_core_1.TestCase([]),
        alsatian_core_1.TestCase([1]),
        alsatian_core_1.TestCase([1, 2]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ToBeNullTests.prototype, "nullShouldThrowErrorForNonNullValues", null);
    __decorate([
        alsatian_core_1.TestCase(undefined),
        alsatian_core_1.TestCase(0),
        alsatian_core_1.TestCase(42),
        alsatian_core_1.TestCase(-42),
        alsatian_core_1.TestCase(""),
        alsatian_core_1.TestCase("something"),
        alsatian_core_1.TestCase({}),
        alsatian_core_1.TestCase({ with: "something" }),
        alsatian_core_1.TestCase([]),
        alsatian_core_1.TestCase([1]),
        alsatian_core_1.TestCase([1, 2]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ToBeNullTests.prototype, "nullShouldThrowCorrectErrorWithCorrectMessageForNonNullValues", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToBeNullTests.prototype, "notNullShouldThrowError", null);
    __decorate([
        alsatian_core_1.TestCase(undefined),
        alsatian_core_1.TestCase(0),
        alsatian_core_1.TestCase(42),
        alsatian_core_1.TestCase(-42),
        alsatian_core_1.TestCase(""),
        alsatian_core_1.TestCase("something"),
        alsatian_core_1.TestCase({}),
        alsatian_core_1.TestCase({ with: "something" }),
        alsatian_core_1.TestCase([]),
        alsatian_core_1.TestCase([1]),
        alsatian_core_1.TestCase([1, 2]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ToBeNullTests.prototype, "notNullShouldNotThrowErrorForNonNullValues", null);
    return ToBeNullTests;
}());
exports.ToBeNullTests = ToBeNullTests;
//# sourceMappingURL=to-be-null.spec.js.map