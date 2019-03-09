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
var ToBeTests = /** @class */ (function () {
    function ToBeTests() {
    }
    ToBeTests.prototype.identicalSimpleTypesDontThrow = function (value) {
        var expect = alsatian_core_1.Expect(value);
        alsatian_core_1.Expect(function () { return expect.toBe(value); }).not.toThrow();
    };
    ToBeTests.prototype.matchingSimpleTypesDontThrow = function (expected, actual) {
        var expect = alsatian_core_1.Expect(actual);
        alsatian_core_1.Expect(function () { return expect.toBe(expected); }).not.toThrow();
    };
    ToBeTests.prototype.differentValuesThrowsExactMatchError = function () {
        var expect = alsatian_core_1.Expect(1);
        alsatian_core_1.Expect(function () { return expect.toBe(2); }).toThrowError(exact_match_error_1.ExactMatchError, "Expected 1 to be 2.");
    };
    ToBeTests.prototype.differentSimpleValuesToThrow = function (expected, actual) {
        var expect = alsatian_core_1.Expect(actual);
        alsatian_core_1.Expect(function () { return expect.toBe(expected); }).toThrow();
    };
    ToBeTests.prototype.differentSimpleValuesThrowsExactMatchErrorWithCorrectMessage = function (expected, actual) {
        var expect = alsatian_core_1.Expect(actual);
        alsatian_core_1.Expect(function () { return expect.toBe(expected); }).toThrowError(exact_match_error_1.ExactMatchError, "Expected " + JSON.stringify(actual) + " to be " + JSON.stringify(expected) + ".");
    };
    ToBeTests.prototype.differentSimpleTypesToThrow = function (expected, actual) {
        var expect = alsatian_core_1.Expect(actual);
        alsatian_core_1.Expect(function () { return expect.toBe(expected); }).toThrow();
    };
    ToBeTests.prototype.identicalComplexTypesDontThrow = function (value) {
        var expect = alsatian_core_1.Expect(value);
        alsatian_core_1.Expect(function () { return expect.toBe(value); }).not.toThrow();
    };
    ToBeTests.prototype.matchingComplexTypesThrow = function (expected, actual) {
        var expect = alsatian_core_1.Expect(actual);
        alsatian_core_1.Expect(function () { return expect.toBe(expected); }).toThrow();
    };
    ToBeTests.prototype.differentComplexValuesThrowsExactMatchErrorWithCorrectMessage = function (expected, actual) {
        var expect = alsatian_core_1.Expect(actual);
        alsatian_core_1.Expect(function () { return expect.toBe(expected); }).toThrowError(exact_match_error_1.ExactMatchError, "Expected " + JSON.stringify(actual).replace(/,/g, ", ") + " " +
            ("to be " + JSON.stringify(expected).replace(/,/g, ", ") + "."));
    };
    ToBeTests.prototype.differentComplexTypesToThrow = function (expected, actual) {
        var expect = alsatian_core_1.Expect(actual);
        alsatian_core_1.Expect(function () { return expect.toBe(expected); }).toThrow();
    };
    __decorate([
        alsatian_core_1.TestCase(undefined),
        alsatian_core_1.TestCase(null),
        alsatian_core_1.TestCase(0),
        alsatian_core_1.TestCase(42),
        alsatian_core_1.TestCase(4.2),
        alsatian_core_1.TestCase(-4.2),
        alsatian_core_1.TestCase(""),
        alsatian_core_1.TestCase("something"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ToBeTests.prototype, "identicalSimpleTypesDontThrow", null);
    __decorate([
        alsatian_core_1.TestCase(undefined, undefined),
        alsatian_core_1.TestCase(null, null),
        alsatian_core_1.TestCase(0, 0),
        alsatian_core_1.TestCase(42, 42),
        alsatian_core_1.TestCase(4.2, 4.2),
        alsatian_core_1.TestCase(-4.2, -4.2),
        alsatian_core_1.TestCase("", ""),
        alsatian_core_1.TestCase("something", "something"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], ToBeTests.prototype, "matchingSimpleTypesDontThrow", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToBeTests.prototype, "differentValuesThrowsExactMatchError", null);
    __decorate([
        alsatian_core_1.TestCase("something", "something else"),
        alsatian_core_1.TestCase("", "something"),
        alsatian_core_1.TestCase(0, 42),
        alsatian_core_1.TestCase(42, 0),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], ToBeTests.prototype, "differentSimpleValuesToThrow", null);
    __decorate([
        alsatian_core_1.TestCase("something", "something else"),
        alsatian_core_1.TestCase("", "something"),
        alsatian_core_1.TestCase(0, 42),
        alsatian_core_1.TestCase(42, 0),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], ToBeTests.prototype, "differentSimpleValuesThrowsExactMatchErrorWithCorrectMessage", null);
    __decorate([
        alsatian_core_1.TestCase(undefined, null),
        alsatian_core_1.TestCase(null, undefined),
        alsatian_core_1.TestCase(42, "something"),
        alsatian_core_1.TestCase("something", 42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], ToBeTests.prototype, "differentSimpleTypesToThrow", null);
    __decorate([
        alsatian_core_1.TestCase({}),
        alsatian_core_1.TestCase({ with: "something" }),
        alsatian_core_1.TestCase({
            with: { something: "more" },
            complex: "!",
            foSho: true,
            answer: 42
        }),
        alsatian_core_1.TestCase([]),
        alsatian_core_1.TestCase([1, 2, 3]),
        alsatian_core_1.TestCase([{ with: "something" }, { and: "something", else: "!" }]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ToBeTests.prototype, "identicalComplexTypesDontThrow", null);
    __decorate([
        alsatian_core_1.TestCase({}, {}),
        alsatian_core_1.TestCase({ with: "something" }, { with: "something" }),
        alsatian_core_1.TestCase({ with: { something: "more" }, complex: "!", foSho: true, answer: 42 }, { with: { something: "more" }, complex: "!", foSho: true, answer: 42 }),
        alsatian_core_1.TestCase([], []),
        alsatian_core_1.TestCase([1, 2, 3], [1, 2, 3]),
        alsatian_core_1.TestCase([{ with: "something" }, { and: "something", else: "!" }], [{ with: "something" }, { and: "something", else: "!" }]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], ToBeTests.prototype, "matchingComplexTypesThrow", null);
    __decorate([
        alsatian_core_1.TestCase({}, { with: "something" }),
        alsatian_core_1.TestCase({ with: "something" }, {}),
        alsatian_core_1.TestCase([], [1, 2, 3]),
        alsatian_core_1.TestCase([1, 2, 3], []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], ToBeTests.prototype, "differentComplexValuesThrowsExactMatchErrorWithCorrectMessage", null);
    __decorate([
        alsatian_core_1.TestCase({}, []),
        alsatian_core_1.TestCase([], {}),
        alsatian_core_1.TestCase({ with: "something" }, [1, 2, 3]),
        alsatian_core_1.TestCase([1, 2, 3], { with: "something" }),
        alsatian_core_1.TestCase([], { with: "something" }),
        alsatian_core_1.TestCase([1, 2, 3], {}),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], ToBeTests.prototype, "differentComplexTypesToThrow", null);
    return ToBeTests;
}());
exports.ToBeTests = ToBeTests;
//# sourceMappingURL=to-be.spec.js.map