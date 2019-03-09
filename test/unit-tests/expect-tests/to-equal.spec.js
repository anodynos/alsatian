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
var equal_match_error_1 = require("../../../core/errors/equal-match-error");
var stringification_1 = require("../../../core/stringification");
var ToEqualTests = /** @class */ (function () {
    function ToEqualTests() {
    }
    ToEqualTests.prototype.identicalSimpleTypesDontThrow = function (value) {
        var expect = alsatian_core_1.Expect(value);
        alsatian_core_1.Expect(function () { return expect.toEqual(value); }).not.toThrow();
    };
    ToEqualTests.prototype.matchingSimpleTypesDontThrow = function (expected, actual) {
        var expect = alsatian_core_1.Expect(actual);
        alsatian_core_1.Expect(function () { return expect.toEqual(expected); }).not.toThrow();
    };
    ToEqualTests.prototype.differentValuesThrowsExactMatchError = function () {
        var expect = alsatian_core_1.Expect(1);
        alsatian_core_1.Expect(function () { return expect.toEqual(2); }).toThrowError(equal_match_error_1.EqualMatchError, "Expected 1 to be equal to 2.");
    };
    ToEqualTests.prototype.differentSimpleValuesToThrow = function (expected, actual) {
        var expect = alsatian_core_1.Expect(actual);
        alsatian_core_1.Expect(function () { return expect.toEqual(expected); }).toThrow();
    };
    ToEqualTests.prototype.differentSimpleValuesThrowsExactMatchErrorWithCorrectMessage = function (expected, actual) {
        var expect = alsatian_core_1.Expect(actual);
        alsatian_core_1.Expect(function () { return expect.toEqual(expected); }).toThrowError(equal_match_error_1.EqualMatchError, "Expected " +
            stringification_1.stringify(actual) +
            " to be equal to " +
            stringification_1.stringify(expected) +
            ".");
    };
    ToEqualTests.prototype.nullAndUndefinedNotToThrow = function (expected, actual) {
        var expect = alsatian_core_1.Expect(actual);
        alsatian_core_1.Expect(function () { return expect.toEqual(expected); }).not.toThrow();
    };
    ToEqualTests.prototype.differentSimpleTypesToThrow = function (expected, actual) {
        var expect = alsatian_core_1.Expect(actual);
        alsatian_core_1.Expect(function () { return expect.toEqual(expected); }).toThrow();
    };
    ToEqualTests.prototype.identicalComplexTypesDontThrow = function (value) {
        var expect = alsatian_core_1.Expect(value);
        alsatian_core_1.Expect(function () { return expect.toEqual(value); }).not.toThrow();
    };
    ToEqualTests.prototype.matchingComplexTypesNotThrow = function (expected, actual) {
        var expect = alsatian_core_1.Expect(actual);
        alsatian_core_1.Expect(function () { return expect.toEqual(expected); }).not.toThrow();
    };
    ToEqualTests.prototype.differentComplexValuesThrowsExactMatchErrorWithCorrectMessage = function (expected, actual) {
        var expect = alsatian_core_1.Expect(actual);
        alsatian_core_1.Expect(function () { return expect.toEqual(expected); }).toThrowError(equal_match_error_1.EqualMatchError, "Expected " + stringification_1.stringify(actual) + " " +
            ("to be equal to " + stringification_1.stringify(expected) + "."));
    };
    ToEqualTests.prototype.differentComplexValuesDoNotThrowIfNotEqualRequested = function (expected, actual) {
        var expect = alsatian_core_1.Expect(actual);
        alsatian_core_1.Expect(function () { return expect.not.toEqual(expected); }).not.toThrow();
    };
    ToEqualTests.prototype.matchingComplexTypesThrowsExactMatchErrorWithCorrectMessage = function (expected, actual) {
        var expect = alsatian_core_1.Expect(actual);
        alsatian_core_1.Expect(function () { return expect.not.toEqual(expected); }).toThrowError(equal_match_error_1.EqualMatchError, "Expected " + stringification_1.stringify(actual) + " " +
            ("not to be equal to " + stringification_1.stringify(expected) + "."));
    };
    ToEqualTests.prototype.differentComplexTypesToThrow = function (expected, actual) {
        var expect = alsatian_core_1.Expect(actual);
        alsatian_core_1.Expect(function () { return expect.toEqual(expected); }).toThrow();
    };
    ToEqualTests.prototype.differentDeepComplexTypesToThrow = function (expected, actual) {
        var expect = alsatian_core_1.Expect(actual);
        alsatian_core_1.Expect(function () { return expect.toEqual(expected); }).toThrow();
    };
    ToEqualTests.prototype.differentDeepComplexToThrow = function (expected, actual) {
        var expect = alsatian_core_1.Expect(actual);
        alsatian_core_1.Expect(function () { return expect.toEqual(expected); }).toThrow();
    };
    ToEqualTests.prototype.canMatchWithAny = function (expected, actual) {
        var expect = alsatian_core_1.Expect(actual);
        alsatian_core_1.Expect(function () { return expect.toEqual(expected); }).not.toThrow();
    };
    ToEqualTests.prototype.throwsErrorsForNonMatchesWithAny = function (expected, actual) {
        var expect = alsatian_core_1.Expect(actual);
        alsatian_core_1.Expect(function () { return expect.toEqual(expected); }).toThrow();
    };
    ToEqualTests.prototype.throwsCorrectErrorMessageForNonMatchesWithAny = function (expected, actual, errorMessage) {
        var expect = alsatian_core_1.Expect(actual);
        alsatian_core_1.Expect(function () { return expect.toEqual(expected); }).toThrowError(equal_match_error_1.EqualMatchError, errorMessage);
    };
    ToEqualTests.prototype.canMatchWithBuffer = function (expected, actual) {
        var expect = alsatian_core_1.Expect(actual);
        alsatian_core_1.Expect(function () { return expect.toEqual(expected); }).not.toThrow();
    };
    ToEqualTests.prototype.throwsErrorsForNonMatchesWithBuffer = function (expected, actual) {
        var expect = alsatian_core_1.Expect(actual);
        alsatian_core_1.Expect(function () { return expect.toEqual(expected); }).toThrow();
    };
    ToEqualTests.prototype.throwsCorrectErrorMessageForNonMatchesWithBuffer = function (expected, actual, errorMessage) {
        var expect = alsatian_core_1.Expect(actual);
        alsatian_core_1.Expect(function () { return expect.toEqual(expected); }).toThrowError(equal_match_error_1.EqualMatchError, errorMessage);
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
    ], ToEqualTests.prototype, "identicalSimpleTypesDontThrow", null);
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
    ], ToEqualTests.prototype, "matchingSimpleTypesDontThrow", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToEqualTests.prototype, "differentValuesThrowsExactMatchError", null);
    __decorate([
        alsatian_core_1.TestCase("something", "something else"),
        alsatian_core_1.TestCase("", "something"),
        alsatian_core_1.TestCase(0, 42),
        alsatian_core_1.TestCase(42, 0),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], ToEqualTests.prototype, "differentSimpleValuesToThrow", null);
    __decorate([
        alsatian_core_1.TestCase("something", "something else"),
        alsatian_core_1.TestCase("", "something"),
        alsatian_core_1.TestCase(0, 42),
        alsatian_core_1.TestCase(42, 0),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], ToEqualTests.prototype, "differentSimpleValuesThrowsExactMatchErrorWithCorrectMessage", null);
    __decorate([
        alsatian_core_1.TestCase(undefined, null),
        alsatian_core_1.TestCase(null, undefined),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], ToEqualTests.prototype, "nullAndUndefinedNotToThrow", null);
    __decorate([
        alsatian_core_1.TestCase(42, "something"),
        alsatian_core_1.TestCase("something", 42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], ToEqualTests.prototype, "differentSimpleTypesToThrow", null);
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
    ], ToEqualTests.prototype, "identicalComplexTypesDontThrow", null);
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
    ], ToEqualTests.prototype, "matchingComplexTypesNotThrow", null);
    __decorate([
        alsatian_core_1.TestCase({}, { with: "something" }),
        alsatian_core_1.TestCase({ with: "something" }, {}),
        alsatian_core_1.TestCase([], [1, 2, 3]),
        alsatian_core_1.TestCase([1, 2, 3], []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], ToEqualTests.prototype, "differentComplexValuesThrowsExactMatchErrorWithCorrectMessage", null);
    __decorate([
        alsatian_core_1.TestCase({}, { with: "something" }),
        alsatian_core_1.TestCase({ with: "something" }, {}),
        alsatian_core_1.TestCase([], [1, 2, 3]),
        alsatian_core_1.TestCase([1, 2, 3], []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], ToEqualTests.prototype, "differentComplexValuesDoNotThrowIfNotEqualRequested", null);
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
    ], ToEqualTests.prototype, "matchingComplexTypesThrowsExactMatchErrorWithCorrectMessage", null);
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
    ], ToEqualTests.prototype, "differentComplexTypesToThrow", null);
    __decorate([
        alsatian_core_1.TestCase({ with: { something: "deep" } }, [1, 2, 3]),
        alsatian_core_1.TestCase([{ this: "that" }], { with: "something" }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], ToEqualTests.prototype, "differentDeepComplexTypesToThrow", null);
    __decorate([
        alsatian_core_1.TestCase({ with: { something: "deep" } }, { with: { something: "different" } }),
        alsatian_core_1.TestCase([{ this: "that" }], [{ this: "and that" }]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], ToEqualTests.prototype, "differentDeepComplexToThrow", null);
    __decorate([
        alsatian_core_1.TestCase(alsatian_core_1.Any(Number), 42),
        alsatian_core_1.TestCase(alsatian_core_1.Any(String), "something"),
        alsatian_core_1.TestCase(alsatian_core_1.Any(Object).thatMatches("property", 42), {
            property: 42,
            anotherProperty: "something"
        }),
        alsatian_core_1.TestCase(alsatian_core_1.Any(Object).thatMatches({ anotherProperty: "something" }), {
            property: 42,
            anotherProperty: "something"
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], ToEqualTests.prototype, "canMatchWithAny", null);
    __decorate([
        alsatian_core_1.TestCase(alsatian_core_1.Any(Number), "something"),
        alsatian_core_1.TestCase(alsatian_core_1.Any(String), 42),
        alsatian_core_1.TestCase(alsatian_core_1.Any(Object).thatMatches("property", 42), {
            property: "something",
            anotherProperty: 42
        }),
        alsatian_core_1.TestCase(alsatian_core_1.Any(Object).thatMatches({ anotherProperty: "something" }), {
            property: "something",
            anotherProperty: 42
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], ToEqualTests.prototype, "throwsErrorsForNonMatchesWithAny", null);
    __decorate([
        alsatian_core_1.TestCase(alsatian_core_1.Any(Number), "something", 'Expected "something" to be equal to Any Number.'),
        alsatian_core_1.TestCase(alsatian_core_1.Any(String), 42, "Expected 42 to be equal to Any String."),
        alsatian_core_1.TestCase(alsatian_core_1.Any(Object).thatMatches("property", 42), { property: "something", anotherProperty: 42 }, "Expected {\"property\":\"something\",\"anotherProperty\":42} " +
            "to be equal to Any Object and with property 'property' equal to '42'."),
        alsatian_core_1.TestCase(alsatian_core_1.Any(Object).thatMatches({ anotherProperty: "something" }), { property: "something", anotherProperty: 42 }, "Expected {\"property\":\"something\",\"anotherProperty\":42} " +
            "to be equal to Any Object and matches '{\"anotherProperty\":\"something\"}'."),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, String]),
        __metadata("design:returntype", void 0)
    ], ToEqualTests.prototype, "throwsCorrectErrorMessageForNonMatchesWithAny", null);
    __decorate([
        alsatian_core_1.TestCase(Buffer.from([1, 2, 3]), Buffer.from([1, 2, 3])),
        alsatian_core_1.TestCase(Buffer.from([1, 2, 3]), [1, 2, 3]) // Array
        ,
        alsatian_core_1.TestCase(Buffer.from([1, 2, 3]), "") // String, "" was retrieved from Buffer.from([1, 2, 3]).toString()
        ,
        alsatian_core_1.TestCase(Buffer.from([1, 2, 3]), { 0: 1, 1: 2, 2: 3, length: 3 }) // ArrayLike
        ,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], ToEqualTests.prototype, "canMatchWithBuffer", null);
    __decorate([
        alsatian_core_1.TestCase(Buffer.from([1, 2, 3]), null),
        alsatian_core_1.TestCase(Buffer.from([1, 2, 3]), undefined),
        alsatian_core_1.TestCase(Buffer.from([1, 2, 3]), 1),
        alsatian_core_1.TestCase(Buffer.from([1, 2, 3]), {}),
        alsatian_core_1.TestCase(Buffer.from([1, 2, 3]), Buffer.from([1, 2])),
        alsatian_core_1.TestCase(Buffer.from([1, 2, 3]), [1, 2]),
        alsatian_core_1.TestCase(Buffer.from([1, 2, 3]), ""),
        alsatian_core_1.TestCase(Buffer.from([1, 2, 3]), { 0: 1, 1: 2, length: 2 }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], ToEqualTests.prototype, "throwsErrorsForNonMatchesWithBuffer", null);
    __decorate([
        alsatian_core_1.TestCase(Buffer.from([1, 2, 3]), null, "Expected null to be equal to {\"type\":\"Buffer\",\"data\":[1,2,3]}."),
        alsatian_core_1.TestCase(Buffer.from([1, 2, 3]), undefined, "Expected undefined to be equal to {\"type\":\"Buffer\",\"data\":[1,2,3]}."),
        alsatian_core_1.TestCase(Buffer.from([1, 2, 3]), 1, "Expected 1 to be equal to {\"type\":\"Buffer\",\"data\":[1,2,3]}."),
        alsatian_core_1.TestCase(Buffer.from([1, 2, 3]), {}, "Expected {} to be equal to {\"type\":\"Buffer\",\"data\":[1,2,3]}."),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, String]),
        __metadata("design:returntype", void 0)
    ], ToEqualTests.prototype, "throwsCorrectErrorMessageForNonMatchesWithBuffer", null);
    return ToEqualTests;
}());
exports.ToEqualTests = ToEqualTests;
//# sourceMappingURL=to-equal.spec.js.map