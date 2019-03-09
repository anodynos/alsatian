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
var contents_match_error_1 = require("../../../core/errors/contents-match-error");
var ToContainTests = /** @class */ (function () {
    function ToContainTests() {
    }
    ToContainTests.prototype.shouldContainArrayItemAndDoesNotThrows = function (actualValue, expectedContent) {
        var expect = alsatian_core_1.Expect(actualValue);
        alsatian_core_1.Expect(function () { return expect.toContain(expectedContent); }).toThrowError(contents_match_error_1.ContentsMatchError, "Expected " + JSON.stringify(actualValue).replace(",", ", ") + " to contain " + JSON.stringify(expectedContent) + ".");
    };
    ToContainTests.prototype.shouldContainStringAndDoesNotThrow = function (actualValue, expectedContent) {
        var expect = alsatian_core_1.Expect(actualValue);
        alsatian_core_1.Expect(function () { return expect.toContain(expectedContent); }).toThrowError(contents_match_error_1.ContentsMatchError, "Expected " + JSON.stringify(actualValue).replace(",", ", ") + " to contain " + JSON.stringify(expectedContent) + ".");
    };
    ToContainTests.prototype.shouldContainArrayItemAndDoesDoesNotThrow = function (actualValue, expectedContent) {
        var expect = alsatian_core_1.Expect(actualValue);
        alsatian_core_1.Expect(function () { return expect.toContain(expectedContent); }).not.toThrow();
    };
    ToContainTests.prototype.shouldContainStringAndDoesDoesNotThrow = function (actualValue, expectedContent) {
        var expect = alsatian_core_1.Expect(actualValue);
        alsatian_core_1.Expect(function () { return expect.toContain(expectedContent); }).not.toThrow();
    };
    ToContainTests.prototype.shouldNotContainArrayItemAndDoesNotDoesNotThrow = function (actualValue, expectedContent) {
        var expect = alsatian_core_1.Expect(actualValue);
        alsatian_core_1.Expect(function () { return expect.not.toContain(expectedContent); }).not.toThrow();
    };
    ToContainTests.prototype.shouldNotContainStringAndDoesNotDoesNotThrow = function (actualValue, expectedContent) {
        var expect = alsatian_core_1.Expect(actualValue);
        alsatian_core_1.Expect(function () { return expect.not.toContain(expectedContent); }).not.toThrow();
    };
    ToContainTests.prototype.shouldNotContainArrayItemAndDoesThrows = function (actualValue, expectedContent) {
        var expect = alsatian_core_1.Expect(actualValue);
        alsatian_core_1.Expect(function () { return expect.not.toContain(expectedContent); }).toThrowError(contents_match_error_1.ContentsMatchError, "Expected " + JSON.stringify(actualValue).replace(",", ", ") + " " +
            ("not to contain " + JSON.stringify(expectedContent) + "."));
    };
    ToContainTests.prototype.shouldNotContainStringAndDoesThrow = function (actualValue, expectedContent) {
        var expect = alsatian_core_1.Expect(actualValue);
        alsatian_core_1.Expect(function () { return expect.not.toContain(expectedContent); }).toThrowError(contents_match_error_1.ContentsMatchError, "Expected " + JSON.stringify(actualValue).replace(",", ", ") + " " +
            ("not to contain " + JSON.stringify(expectedContent) + "."));
    };
    ToContainTests.prototype.shouldBeTruthyArrayActualValueSet = function (container, expectedContent) {
        var contentsError;
        try {
            alsatian_core_1.Expect(container).toContain(expectedContent);
        }
        catch (error) {
            contentsError = error;
        }
        alsatian_core_1.Expect(contentsError).toBeDefined();
        alsatian_core_1.Expect(contentsError).not.toBeNull();
        alsatian_core_1.Expect(contentsError.actual).toBe(container);
    };
    ToContainTests.prototype.shouldBeTruthyStringActualValueSet = function (container, expectedContent) {
        var contentsError;
        try {
            alsatian_core_1.Expect(container).toContain(expectedContent);
        }
        catch (error) {
            contentsError = error;
        }
        alsatian_core_1.Expect(contentsError).toBeDefined();
        alsatian_core_1.Expect(contentsError).not.toBeNull();
        alsatian_core_1.Expect(contentsError.actual).toBe(container);
    };
    ToContainTests.prototype.shouldNotBeTruthyArrayActualValueSet = function (container, expectedContent) {
        var contentsError;
        try {
            alsatian_core_1.Expect(container).not.toContain(expectedContent);
        }
        catch (error) {
            contentsError = error;
        }
        alsatian_core_1.Expect(contentsError).toBeDefined();
        alsatian_core_1.Expect(contentsError).not.toBeNull();
        alsatian_core_1.Expect(contentsError.actual).toBe(container);
    };
    ToContainTests.prototype.shouldNotBeTruthyStringActualValueSet = function (container, expectedContent) {
        var contentsError;
        try {
            alsatian_core_1.Expect(container).not.toContain(expectedContent);
        }
        catch (error) {
            contentsError = error;
        }
        alsatian_core_1.Expect(contentsError).toBeDefined();
        alsatian_core_1.Expect(contentsError).not.toBeNull();
        alsatian_core_1.Expect(contentsError.actual).toBe(container);
    };
    ToContainTests.prototype.shoulContainExpectedValueSetToArrayItemExpectedContent = function (container, expectedContent) {
        var contentsError;
        try {
            alsatian_core_1.Expect(container).toContain(expectedContent);
        }
        catch (error) {
            contentsError = error;
        }
        alsatian_core_1.Expect(contentsError).toBeDefined();
        alsatian_core_1.Expect(contentsError).not.toBeNull();
        alsatian_core_1.Expect(contentsError.expected).toBe(expectedContent);
    };
    ToContainTests.prototype.shoulContainExpectedValueSetToStringExpectedContent = function (container, expectedContent) {
        var contentsError;
        try {
            alsatian_core_1.Expect(container).toContain(expectedContent);
        }
        catch (error) {
            contentsError = error;
        }
        alsatian_core_1.Expect(contentsError).toBeDefined();
        alsatian_core_1.Expect(contentsError).not.toBeNull();
        alsatian_core_1.Expect(contentsError.expected).toBe(expectedContent);
    };
    ToContainTests.prototype.shouldNotConrtainExpectedValueSetToArrayItemExpectedContent = function (container, expectedContent) {
        var contentsError;
        try {
            alsatian_core_1.Expect(container).not.toContain(expectedContent);
        }
        catch (error) {
            contentsError = error;
        }
        alsatian_core_1.Expect(contentsError).toBeDefined();
        alsatian_core_1.Expect(contentsError).not.toBeNull();
        alsatian_core_1.Expect(contentsError.expected).toBe(expectedContent);
    };
    ToContainTests.prototype.shouldNotContainExpectedValueSetToStringExpectedContent = function (container, expectedContent) {
        var contentsError;
        try {
            alsatian_core_1.Expect(container).not.toContain(expectedContent);
        }
        catch (error) {
            contentsError = error;
        }
        alsatian_core_1.Expect(contentsError).toBeDefined();
        alsatian_core_1.Expect(contentsError).not.toBeNull();
        alsatian_core_1.Expect(contentsError.expected).toBe(expectedContent);
    };
    ToContainTests.prototype.checkingNonStringOrArraysContainShouldThrow = function (container) {
        var EXPECT = alsatian_core_1.Expect([]);
        EXPECT._actualValue = container;
        alsatian_core_1.Expect(function () { return EXPECT.toContain("something"); }).toThrowError(TypeError, "toContain must only be used to check whether strings or arrays contain given contents.");
    };
    ToContainTests.prototype.checkingNonStringOrArraysDoNotContainShouldThrow = function (container) {
        var EXPECT = alsatian_core_1.Expect([]);
        EXPECT._actualValue = container;
        alsatian_core_1.Expect(function () { return EXPECT.not.toContain("something"); }).toThrowError(TypeError, "toContain must only be used to check whether strings or arrays contain given contents.");
    };
    ToContainTests.prototype.checkingStringContainsNonStringShouldThrow = function (expectedContent) {
        alsatian_core_1.Expect(function () { return alsatian_core_1.Expect("something").toContain(expectedContent); }).toThrowError(TypeError, "toContain cannot check whether a string contains a non string value.");
    };
    ToContainTests.prototype.checkingStringDoesNotContainsNonStringShouldThrow = function (expectedContent) {
        alsatian_core_1.Expect(function () {
            return alsatian_core_1.Expect("something").not.toContain(expectedContent);
        }).toThrowError(TypeError, "toContain cannot check whether a string contains a non string value.");
    };
    var _a, _b, _c, _d, _e, _f, _g, _h;
    __decorate([
        alsatian_core_1.TestCase([], 1),
        alsatian_core_1.TestCase([1, 2], 42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array, typeof (_a = typeof T !== "undefined" && T) === "function" && _a || Object]),
        __metadata("design:returntype", void 0)
    ], ToContainTests.prototype, "shouldContainArrayItemAndDoesNotThrows", null);
    __decorate([
        alsatian_core_1.TestCase("", "something"),
        alsatian_core_1.TestCase("something", "another thing"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", void 0)
    ], ToContainTests.prototype, "shouldContainStringAndDoesNotThrow", null);
    __decorate([
        alsatian_core_1.TestCase([1], 1),
        alsatian_core_1.TestCase([1, 42], 42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array, typeof (_b = typeof T !== "undefined" && T) === "function" && _b || Object]),
        __metadata("design:returntype", void 0)
    ], ToContainTests.prototype, "shouldContainArrayItemAndDoesDoesNotThrow", null);
    __decorate([
        alsatian_core_1.TestCase("something", "something"),
        alsatian_core_1.TestCase("something", "thing"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", void 0)
    ], ToContainTests.prototype, "shouldContainStringAndDoesDoesNotThrow", null);
    __decorate([
        alsatian_core_1.TestCase([], 1),
        alsatian_core_1.TestCase([1, 2], 42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array, typeof (_c = typeof T !== "undefined" && T) === "function" && _c || Object]),
        __metadata("design:returntype", void 0)
    ], ToContainTests.prototype, "shouldNotContainArrayItemAndDoesNotDoesNotThrow", null);
    __decorate([
        alsatian_core_1.TestCase("", "something"),
        alsatian_core_1.TestCase("something", "another thing"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", void 0)
    ], ToContainTests.prototype, "shouldNotContainStringAndDoesNotDoesNotThrow", null);
    __decorate([
        alsatian_core_1.TestCase([1], 1),
        alsatian_core_1.TestCase([1, 42], 42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array, typeof (_d = typeof T !== "undefined" && T) === "function" && _d || Object]),
        __metadata("design:returntype", void 0)
    ], ToContainTests.prototype, "shouldNotContainArrayItemAndDoesThrows", null);
    __decorate([
        alsatian_core_1.TestCase("something", "something"),
        alsatian_core_1.TestCase("something", "thing"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", void 0)
    ], ToContainTests.prototype, "shouldNotContainStringAndDoesThrow", null);
    __decorate([
        alsatian_core_1.TestCase([], 1),
        alsatian_core_1.TestCase([1, 2], 42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array, typeof (_e = typeof T !== "undefined" && T) === "function" && _e || Object]),
        __metadata("design:returntype", void 0)
    ], ToContainTests.prototype, "shouldBeTruthyArrayActualValueSet", null);
    __decorate([
        alsatian_core_1.TestCase("", "something"),
        alsatian_core_1.TestCase("something", "another thing"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", void 0)
    ], ToContainTests.prototype, "shouldBeTruthyStringActualValueSet", null);
    __decorate([
        alsatian_core_1.TestCase([1], 1),
        alsatian_core_1.TestCase([1, 42], 42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array, typeof (_f = typeof T !== "undefined" && T) === "function" && _f || Object]),
        __metadata("design:returntype", void 0)
    ], ToContainTests.prototype, "shouldNotBeTruthyArrayActualValueSet", null);
    __decorate([
        alsatian_core_1.TestCase("something", "something"),
        alsatian_core_1.TestCase("something", "thing"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", void 0)
    ], ToContainTests.prototype, "shouldNotBeTruthyStringActualValueSet", null);
    __decorate([
        alsatian_core_1.TestCase([], 1),
        alsatian_core_1.TestCase([1, 2], 42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array, typeof (_g = typeof T !== "undefined" && T) === "function" && _g || Object]),
        __metadata("design:returntype", void 0)
    ], ToContainTests.prototype, "shoulContainExpectedValueSetToArrayItemExpectedContent", null);
    __decorate([
        alsatian_core_1.TestCase("", "something"),
        alsatian_core_1.TestCase("something", "another thing"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", void 0)
    ], ToContainTests.prototype, "shoulContainExpectedValueSetToStringExpectedContent", null);
    __decorate([
        alsatian_core_1.TestCase([1], 1),
        alsatian_core_1.TestCase([1, 42], 42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array, typeof (_h = typeof T !== "undefined" && T) === "function" && _h || Object]),
        __metadata("design:returntype", void 0)
    ], ToContainTests.prototype, "shouldNotConrtainExpectedValueSetToArrayItemExpectedContent", null);
    __decorate([
        alsatian_core_1.TestCase("something", "something"),
        alsatian_core_1.TestCase("something", "thing"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", void 0)
    ], ToContainTests.prototype, "shouldNotContainExpectedValueSetToStringExpectedContent", null);
    __decorate([
        alsatian_core_1.TestCase(undefined),
        alsatian_core_1.TestCase(null),
        alsatian_core_1.TestCase(0),
        alsatian_core_1.TestCase(1),
        alsatian_core_1.TestCase(42),
        alsatian_core_1.TestCase({}),
        alsatian_core_1.TestCase({ an: "object" }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ToContainTests.prototype, "checkingNonStringOrArraysContainShouldThrow", null);
    __decorate([
        alsatian_core_1.TestCase(undefined),
        alsatian_core_1.TestCase(null),
        alsatian_core_1.TestCase(0),
        alsatian_core_1.TestCase(1),
        alsatian_core_1.TestCase(42),
        alsatian_core_1.TestCase({}),
        alsatian_core_1.TestCase({ an: "object" }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ToContainTests.prototype, "checkingNonStringOrArraysDoNotContainShouldThrow", null);
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
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ToContainTests.prototype, "checkingStringContainsNonStringShouldThrow", null);
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
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ToContainTests.prototype, "checkingStringDoesNotContainsNonStringShouldThrow", null);
    return ToContainTests;
}());
exports.ToContainTests = ToContainTests;
//# sourceMappingURL=to-contain.spec.js.map