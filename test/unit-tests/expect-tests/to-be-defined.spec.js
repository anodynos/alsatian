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
var ToBeDefinedTests = /** @class */ (function () {
    function ToBeDefinedTests() {
    }
    ToBeDefinedTests.prototype.definedShouldNotThrowError = function (value) {
        var expect = alsatian_core_1.Expect(value);
        alsatian_core_1.Expect(function () { return expect.toBeDefined(); }).not.toThrow();
    };
    ToBeDefinedTests.prototype.definedShouldThrowErrorForUndefined = function () {
        var expect = alsatian_core_1.Expect(undefined);
        alsatian_core_1.Expect(function () { return expect.toBeDefined(); }).toThrow();
    };
    ToBeDefinedTests.prototype.definedShouldThrowCorrectErrorWithCorrectMessageForUndefined = function () {
        var expect = alsatian_core_1.Expect(undefined);
        var expectedErrorMessage = "Expected undefined not to be undefined.";
        alsatian_core_1.Expect(function () { return expect.toBeDefined(); }).toThrowError(exact_match_error_1.ExactMatchError, expectedErrorMessage);
    };
    ToBeDefinedTests.prototype.notDefinedShouldThrowError = function (value) {
        var expect = alsatian_core_1.Expect(value);
        var expectedErrorMessage = "Expected " +
            JSON.stringify(value).replace(",", ", ") +
            " to be undefined.";
        alsatian_core_1.Expect(function () { return expect.not.toBeDefined(); }).toThrowError(exact_match_error_1.ExactMatchError, expectedErrorMessage);
    };
    ToBeDefinedTests.prototype.notDefinedShouldNotThrowErrorForUndefined = function () {
        var expect = alsatian_core_1.Expect(undefined);
        alsatian_core_1.Expect(function () { return expect.not.toBeDefined(); }).not.toThrow();
    };
    __decorate([
        alsatian_core_1.TestCase(null),
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
    ], ToBeDefinedTests.prototype, "definedShouldNotThrowError", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToBeDefinedTests.prototype, "definedShouldThrowErrorForUndefined", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToBeDefinedTests.prototype, "definedShouldThrowCorrectErrorWithCorrectMessageForUndefined", null);
    __decorate([
        alsatian_core_1.TestCase(null),
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
    ], ToBeDefinedTests.prototype, "notDefinedShouldThrowError", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToBeDefinedTests.prototype, "notDefinedShouldNotThrowErrorForUndefined", null);
    return ToBeDefinedTests;
}());
exports.ToBeDefinedTests = ToBeDefinedTests;
//# sourceMappingURL=to-be-defined.spec.js.map