"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var alsatian_core_1 = require("../../../../core/alsatian-core");
var type_matcher_1 = require("../../../../core/spying/type-matcher");
var DerivedError = /** @class */ (function (_super) {
    __extends(DerivedError, _super);
    function DerivedError(state, message) {
        var _this = _super.call(this, message) || this;
        _this.state = state;
        return _this;
    }
    return DerivedError;
}(Error));
exports.DerivedError = DerivedError;
var Testable = /** @class */ (function () {
    function Testable(a, b) {
        this.a = a;
        this.b = b;
    }
    return Testable;
}());
exports.Testable = Testable;
var TypeMatcherTestFunctionTests = /** @class */ (function () {
    function TypeMatcherTestFunctionTests() {
    }
    TypeMatcherTestFunctionTests.prototype.numberTypeAndNumberValueReturnsTrue = function (value) {
        var matcher = new type_matcher_1.TypeMatcher(Number);
        alsatian_core_1.Expect(matcher.test(value)).toBe(true);
    };
    TypeMatcherTestFunctionTests.prototype.numberTypeAndNonNumberValueReturnsTrue = function (value) {
        var matcher = new type_matcher_1.TypeMatcher(Number);
        alsatian_core_1.Expect(matcher.test(value)).toBe(false);
    };
    TypeMatcherTestFunctionTests.prototype.stringTypeAndStringValueReturnsTrue = function (value) {
        var matcher = new type_matcher_1.TypeMatcher(String);
        alsatian_core_1.Expect(matcher.test(value)).toBe(true);
    };
    TypeMatcherTestFunctionTests.prototype.stringTypeAndNonStringValueReturnsTrue = function (value) {
        var matcher = new type_matcher_1.TypeMatcher(String);
        alsatian_core_1.Expect(matcher.test(value)).toBe(false);
    };
    TypeMatcherTestFunctionTests.prototype.booleanTypeAndBooleanValueReturnsTrue = function (value) {
        var matcher = new type_matcher_1.TypeMatcher(Boolean);
        alsatian_core_1.Expect(matcher.test(value)).toBe(true);
    };
    TypeMatcherTestFunctionTests.prototype.booleanTypeAndNonBooleanValueReturnsTrue = function (value) {
        var matcher = new type_matcher_1.TypeMatcher(Boolean);
        alsatian_core_1.Expect(matcher.test(value)).toBe(false);
    };
    TypeMatcherTestFunctionTests.prototype.objectTypeAndObjectValueReturnsTrue = function (value) {
        var matcher = new type_matcher_1.TypeMatcher(Object);
        alsatian_core_1.Expect(matcher.test(value)).toBe(true);
    };
    TypeMatcherTestFunctionTests.prototype.objectTypeAndNonObjectValueReturnsTrue = function (value) {
        var matcher = new type_matcher_1.TypeMatcher(Object);
        alsatian_core_1.Expect(matcher.test(value)).toBe(false);
    };
    TypeMatcherTestFunctionTests.prototype.arrayTypeAndArrayValueReturnsTrue = function (value) {
        var matcher = new type_matcher_1.TypeMatcher(Array);
        alsatian_core_1.Expect(matcher.test(value)).toBe(true);
    };
    TypeMatcherTestFunctionTests.prototype.arrayTypeAndNonArrayValueReturnsTrue = function (value) {
        var matcher = new type_matcher_1.TypeMatcher(Array);
        alsatian_core_1.Expect(matcher.test(value)).toBe(false);
    };
    TypeMatcherTestFunctionTests.prototype.errorTypeAndArrayValueReturnsTrue = function (value) {
        var matcher = new type_matcher_1.TypeMatcher(Error);
        alsatian_core_1.Expect(matcher.test(value)).toBe(true);
    };
    TypeMatcherTestFunctionTests.prototype.errorTypeAndNonErrorValueReturnsTrue = function (value) {
        var matcher = new type_matcher_1.TypeMatcher(Error);
        alsatian_core_1.Expect(matcher.test(value)).toBe(false);
    };
    TypeMatcherTestFunctionTests.prototype.thatMatchesWithValidArgumentsDoesNotThrow = function () {
        var sut = new type_matcher_1.TypeMatcher(Error);
        alsatian_core_1.Expect(function () { return sut.thatMatches("a", null); }).not.toThrow();
        alsatian_core_1.Expect(function () { return sut.thatMatches({}); }).not.toThrow();
        alsatian_core_1.Expect(function () { return sut.thatMatches(function (v) { return true; }); }).not.toThrow();
    };
    TypeMatcherTestFunctionTests.prototype.thatMatchesWithInvalidArgumentsDoesThrow = function () {
        var sut = new type_matcher_1.TypeMatcher(Error);
        alsatian_core_1.Expect(function () { return sut.thatMatches(null); }).toThrowError(TypeError, "thatMatches requires none-null or non-undefined argument");
        alsatian_core_1.Expect(function () { return sut.thatMatches(null); }).toThrowError(TypeError, "thatMatches requires none-null or non-undefined argument");
        alsatian_core_1.Expect(function () { return sut.thatMatches(3); }).toThrowError(Error, "Invalid arguments");
    };
    TypeMatcherTestFunctionTests.prototype.thatMatchesWithKeyAndValueReturnsExpected = function (item, key, value, output) {
        /* tslint:disable-line:max-line-length */
        var sut = new type_matcher_1.TypeMatcher(item.constructor).thatMatches(key, value);
        alsatian_core_1.Expect(sut.test(item)).toBe(output);
    };
    TypeMatcherTestFunctionTests.prototype.thatMatchesWithObjectLiteralReturnsExpected = function (item, properties, output) {
        /* tslint:disable-line:max-line-length */
        var sut = new type_matcher_1.TypeMatcher(item.constructor).thatMatches(properties);
        alsatian_core_1.Expect(sut.test(item)).toBe(output);
    };
    TypeMatcherTestFunctionTests.prototype.thatMatchesWithDelegateReturnsExpected = function (item, delegate, output) {
        /* tslint:disable-line:max-line-length */
        var sut = new type_matcher_1.TypeMatcher(item.constructor).thatMatches(delegate);
        alsatian_core_1.Expect(sut.test(item)).toBe(output);
    };
    TypeMatcherTestFunctionTests.prototype.thatMatchesWithKeyAndValueStringifiesAsExpected = function () {
        var sut = new type_matcher_1.TypeMatcher(Error).thatMatches("message", "This is my error");
        alsatian_core_1.Expect(sut.stringify()).toBe("Any Error and with property 'message' equal to '\"This is my error\"'");
    };
    TypeMatcherTestFunctionTests.prototype.thatMatchesWithObjectLiteralStringifiesAsExpected = function () {
        var literal = { message: "This is my error", someFunc: function (v) { return true; } };
        var sut = new type_matcher_1.TypeMatcher(Error).thatMatches(literal);
        alsatian_core_1.Expect(sut.stringify()).toBe("Any Error and matches '" + JSON.stringify(literal, replacer) + "'");
    };
    TypeMatcherTestFunctionTests.prototype.thatMatchesShouldMatchAClassInstance = function (instance, matcher) {
        var sut = new type_matcher_1.TypeMatcher(Testable).thatMatches(matcher);
        alsatian_core_1.Expect(sut.test(instance)).toBe(true);
    };
    TypeMatcherTestFunctionTests.prototype.thatMatchesWithDelegateStringifiesAsExpected = function () {
        var matcher = function (e) { return e.message === "This is my error"; };
        var sut = new type_matcher_1.TypeMatcher(Error).thatMatches(matcher);
        alsatian_core_1.Expect(sut.stringify()).toBe("Any Error and matches '" + matcher.toString() + "'");
    };
    TypeMatcherTestFunctionTests.prototype.thatMatchesWithChainStringifiesAsExpected = function () {
        var literal = { message: "This is my error" };
        var matcher = function (e) { return e.message === "This is my error"; };
        var sut = new type_matcher_1.TypeMatcher(Error)
            .thatMatches("message", "This is my error")
            .thatMatches(literal)
            .thatMatches(matcher);
        alsatian_core_1.Expect(sut.stringify()).toBe("Any Error and with property 'message' equal to '\"This is my error\"' and matches '" + JSON.stringify(literal, replacer) + "' and matches '" + matcher.toString() + "'"); /* tslint:disable-line:max-line-length */
    };
    var _a, _b, _c;
    __decorate([
        alsatian_core_1.TestCase(0),
        alsatian_core_1.TestCase(1),
        alsatian_core_1.TestCase(42),
        alsatian_core_1.TestCase(-42),
        alsatian_core_1.TestCase(new Number(0)),
        alsatian_core_1.TestCase(new Number(1)),
        alsatian_core_1.TestCase(new Number(42)),
        alsatian_core_1.TestCase(new Number(-42)),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], TypeMatcherTestFunctionTests.prototype, "numberTypeAndNumberValueReturnsTrue", null);
    __decorate([
        alsatian_core_1.TestCase(undefined),
        alsatian_core_1.TestCase(null),
        alsatian_core_1.TestCase(""),
        alsatian_core_1.TestCase(new String("")),
        alsatian_core_1.TestCase("test"),
        alsatian_core_1.TestCase(new String("test")),
        alsatian_core_1.TestCase(true),
        alsatian_core_1.TestCase(false),
        alsatian_core_1.TestCase(new Boolean(true)),
        alsatian_core_1.TestCase(new Boolean(false)),
        alsatian_core_1.TestCase({}),
        alsatian_core_1.TestCase({ an: "object" }),
        alsatian_core_1.TestCase(new Object({})),
        alsatian_core_1.TestCase(new Object({ an: "object" })),
        alsatian_core_1.TestCase([]),
        alsatian_core_1.TestCase(["an", "array"]),
        alsatian_core_1.TestCase(new Array([])),
        alsatian_core_1.TestCase(new Array(["an", "array"])),
        alsatian_core_1.TestCase(new Error()),
        alsatian_core_1.TestCase(new Error("something went wrong")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TypeMatcherTestFunctionTests.prototype, "numberTypeAndNonNumberValueReturnsTrue", null);
    __decorate([
        alsatian_core_1.TestCase(""),
        alsatian_core_1.TestCase(new String("")),
        alsatian_core_1.TestCase("test"),
        alsatian_core_1.TestCase(new String("test")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], TypeMatcherTestFunctionTests.prototype, "stringTypeAndStringValueReturnsTrue", null);
    __decorate([
        alsatian_core_1.TestCase(undefined),
        alsatian_core_1.TestCase(null),
        alsatian_core_1.TestCase(0),
        alsatian_core_1.TestCase(1),
        alsatian_core_1.TestCase(42),
        alsatian_core_1.TestCase(-42),
        alsatian_core_1.TestCase(new Number(0)),
        alsatian_core_1.TestCase(new Number(1)),
        alsatian_core_1.TestCase(new Number(42)),
        alsatian_core_1.TestCase(new Number(-42)),
        alsatian_core_1.TestCase(true),
        alsatian_core_1.TestCase(false),
        alsatian_core_1.TestCase(new Boolean(true)),
        alsatian_core_1.TestCase(new Boolean(false)),
        alsatian_core_1.TestCase({}),
        alsatian_core_1.TestCase({ an: "object" }),
        alsatian_core_1.TestCase(new Object({})),
        alsatian_core_1.TestCase(new Object({ an: "object" })),
        alsatian_core_1.TestCase([]),
        alsatian_core_1.TestCase(["an", "array"]),
        alsatian_core_1.TestCase(new Array([])),
        alsatian_core_1.TestCase(new Array(["an", "array"])),
        alsatian_core_1.TestCase(new Error()),
        alsatian_core_1.TestCase(new Error("something went wrong")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TypeMatcherTestFunctionTests.prototype, "stringTypeAndNonStringValueReturnsTrue", null);
    __decorate([
        alsatian_core_1.TestCase(true),
        alsatian_core_1.TestCase(false),
        alsatian_core_1.TestCase(new Boolean(true)),
        alsatian_core_1.TestCase(new Boolean(false)),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], TypeMatcherTestFunctionTests.prototype, "booleanTypeAndBooleanValueReturnsTrue", null);
    __decorate([
        alsatian_core_1.TestCase(undefined),
        alsatian_core_1.TestCase(null),
        alsatian_core_1.TestCase(0),
        alsatian_core_1.TestCase(1),
        alsatian_core_1.TestCase(42),
        alsatian_core_1.TestCase(-42),
        alsatian_core_1.TestCase(""),
        alsatian_core_1.TestCase(new String("")),
        alsatian_core_1.TestCase("test"),
        alsatian_core_1.TestCase(new String("test")),
        alsatian_core_1.TestCase(new Number(0)),
        alsatian_core_1.TestCase(new Number(1)),
        alsatian_core_1.TestCase(new Number(42)),
        alsatian_core_1.TestCase(new Number(-42)),
        alsatian_core_1.TestCase({}),
        alsatian_core_1.TestCase({ an: "object" }),
        alsatian_core_1.TestCase(new Object({})),
        alsatian_core_1.TestCase(new Object({ an: "object" })),
        alsatian_core_1.TestCase([]),
        alsatian_core_1.TestCase(["an", "array"]),
        alsatian_core_1.TestCase(new Array([])),
        alsatian_core_1.TestCase(new Array(["an", "array"])),
        alsatian_core_1.TestCase(new Error()),
        alsatian_core_1.TestCase(new Error("something went wrong")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TypeMatcherTestFunctionTests.prototype, "booleanTypeAndNonBooleanValueReturnsTrue", null);
    __decorate([
        alsatian_core_1.TestCase(new Number(0)),
        alsatian_core_1.TestCase(new Number(1)),
        alsatian_core_1.TestCase(new Number(42)),
        alsatian_core_1.TestCase(new Number(-42)),
        alsatian_core_1.TestCase(new String("test")),
        alsatian_core_1.TestCase(new String("")),
        alsatian_core_1.TestCase(new Boolean(true)),
        alsatian_core_1.TestCase(new Boolean(false)),
        alsatian_core_1.TestCase(new Object({})),
        alsatian_core_1.TestCase(new Object({ an: "object" })),
        alsatian_core_1.TestCase(new Array([])),
        alsatian_core_1.TestCase(new Array(["an", "array"])),
        alsatian_core_1.TestCase(new Error()),
        alsatian_core_1.TestCase(new Error("something went wrong")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TypeMatcherTestFunctionTests.prototype, "objectTypeAndObjectValueReturnsTrue", null);
    __decorate([
        alsatian_core_1.TestCase(undefined),
        alsatian_core_1.TestCase(null),
        alsatian_core_1.TestCase(0),
        alsatian_core_1.TestCase(1),
        alsatian_core_1.TestCase(42),
        alsatian_core_1.TestCase(-42),
        alsatian_core_1.TestCase(""),
        alsatian_core_1.TestCase("test"),
        alsatian_core_1.TestCase(true),
        alsatian_core_1.TestCase(false),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TypeMatcherTestFunctionTests.prototype, "objectTypeAndNonObjectValueReturnsTrue", null);
    __decorate([
        alsatian_core_1.TestCase(new Array([])),
        alsatian_core_1.TestCase(new Array(["an", "array"])),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array]),
        __metadata("design:returntype", void 0)
    ], TypeMatcherTestFunctionTests.prototype, "arrayTypeAndArrayValueReturnsTrue", null);
    __decorate([
        alsatian_core_1.TestCase(undefined),
        alsatian_core_1.TestCase(null),
        alsatian_core_1.TestCase(0),
        alsatian_core_1.TestCase(1),
        alsatian_core_1.TestCase(42),
        alsatian_core_1.TestCase(-42),
        alsatian_core_1.TestCase(new Number(0)),
        alsatian_core_1.TestCase(new Number(1)),
        alsatian_core_1.TestCase(new Number(42)),
        alsatian_core_1.TestCase(new Number(-42)),
        alsatian_core_1.TestCase(""),
        alsatian_core_1.TestCase("test"),
        alsatian_core_1.TestCase(new String("test")),
        alsatian_core_1.TestCase(new String("")),
        alsatian_core_1.TestCase(true),
        alsatian_core_1.TestCase(false),
        alsatian_core_1.TestCase(new Boolean(true)),
        alsatian_core_1.TestCase(new Boolean(false)),
        alsatian_core_1.TestCase(new Object({})),
        alsatian_core_1.TestCase(new Object({ an: "object" })),
        alsatian_core_1.TestCase(new Error()),
        alsatian_core_1.TestCase(new Error("something went wrong")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TypeMatcherTestFunctionTests.prototype, "arrayTypeAndNonArrayValueReturnsTrue", null);
    __decorate([
        alsatian_core_1.TestCase(new Error()),
        alsatian_core_1.TestCase(new Error("something went wrong")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Error]),
        __metadata("design:returntype", void 0)
    ], TypeMatcherTestFunctionTests.prototype, "errorTypeAndArrayValueReturnsTrue", null);
    __decorate([
        alsatian_core_1.TestCase(undefined),
        alsatian_core_1.TestCase(null),
        alsatian_core_1.TestCase(0),
        alsatian_core_1.TestCase(1),
        alsatian_core_1.TestCase(42),
        alsatian_core_1.TestCase(-42),
        alsatian_core_1.TestCase(new Number(0)),
        alsatian_core_1.TestCase(new Number(1)),
        alsatian_core_1.TestCase(new Number(42)),
        alsatian_core_1.TestCase(new Number(-42)),
        alsatian_core_1.TestCase(""),
        alsatian_core_1.TestCase("test"),
        alsatian_core_1.TestCase(new String("test")),
        alsatian_core_1.TestCase(new String("")),
        alsatian_core_1.TestCase(true),
        alsatian_core_1.TestCase(false),
        alsatian_core_1.TestCase(new Boolean(true)),
        alsatian_core_1.TestCase(new Boolean(false)),
        alsatian_core_1.TestCase(new Object({})),
        alsatian_core_1.TestCase(new Object({ an: "object" })),
        alsatian_core_1.TestCase(new Array([])),
        alsatian_core_1.TestCase(new Array(["an", "array"])),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TypeMatcherTestFunctionTests.prototype, "errorTypeAndNonErrorValueReturnsTrue", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TypeMatcherTestFunctionTests.prototype, "thatMatchesWithValidArgumentsDoesNotThrow", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TypeMatcherTestFunctionTests.prototype, "thatMatchesWithInvalidArgumentsDoesThrow", null);
    __decorate([
        alsatian_core_1.TestCase(new Error("This is my error"), "message", "This is my error", true),
        alsatian_core_1.TestCase(new Error("This is not my error"), "message", "This is my error", false),
        alsatian_core_1.TestCase(new Error("This is not my error"), "someNonExistantProperty", "This property doesn't exist", false),
        alsatian_core_1.TestCase(new DerivedError(32, "This is my error"), "state", 32, true),
        alsatian_core_1.TestCase(new DerivedError(32, "This is my error"), "state", "32", false),
        alsatian_core_1.TestCase(new DerivedError(32, "This is my error"), "state", 24, false),
        alsatian_core_1.TestCase("This is a string", "length", 16, true),
        alsatian_core_1.TestCase([2], "length", 1, true),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [typeof (_a = typeof ItemType !== "undefined" && ItemType) === "function" && _a || Object, String, Object, Boolean]),
        __metadata("design:returntype", void 0)
    ], TypeMatcherTestFunctionTests.prototype, "thatMatchesWithKeyAndValueReturnsExpected", null);
    __decorate([
        alsatian_core_1.TestCase(new Error("This is my error"), { message: "This is my error" }, true),
        alsatian_core_1.TestCase(new Error("This is not my error"), { message: "This is my error" }, false),
        alsatian_core_1.TestCase(new Error("This is not my error"), { someNonExistantProperty: "This property doesn't exist" }, false),
        alsatian_core_1.TestCase(new DerivedError(32, "This is my error"), { state: 32 }, true),
        alsatian_core_1.TestCase(new DerivedError(32, "This is my error"), { state: 32, message: "This is my error" }, true),
        alsatian_core_1.TestCase(new DerivedError(32, "This is my error"), { state: "32" }, false),
        alsatian_core_1.TestCase(new DerivedError(32, "This is my error"), { state: 24, message: "This is my error" }, false),
        alsatian_core_1.TestCase("This is a string", { length: 16 }, true),
        alsatian_core_1.TestCase([2], { length: 1 }, true),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [typeof (_b = typeof ItemType !== "undefined" && ItemType) === "function" && _b || Object, Object, Boolean]),
        __metadata("design:returntype", void 0)
    ], TypeMatcherTestFunctionTests.prototype, "thatMatchesWithObjectLiteralReturnsExpected", null);
    __decorate([
        alsatian_core_1.TestCase(new Error("This is my error"), function (e) { return e.message === "This is my error"; }, true),
        alsatian_core_1.TestCase(new Error("This is not my error"), function (e) { return e.message === "This is my error"; }, false),
        alsatian_core_1.TestCase(new DerivedError(32, "This is my error"), function (e) { return e.state === 32; }, true),
        alsatian_core_1.TestCase(new DerivedError(32, "This is my error"), function (e) { return e.message === "This is my error"; }, true),
        alsatian_core_1.TestCase(new DerivedError(32, "This is not my error"), function (e) { return e.message === "This is my error"; }, false),
        alsatian_core_1.TestCase("This is a string", function (e) { return e.length === 16; }, true),
        alsatian_core_1.TestCase([2], function (e) { return e.length === 1; }, true),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [typeof (_c = typeof ItemType !== "undefined" && ItemType) === "function" && _c || Object, Function, Boolean]),
        __metadata("design:returntype", void 0)
    ], TypeMatcherTestFunctionTests.prototype, "thatMatchesWithDelegateReturnsExpected", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TypeMatcherTestFunctionTests.prototype, "thatMatchesWithKeyAndValueStringifiesAsExpected", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TypeMatcherTestFunctionTests.prototype, "thatMatchesWithObjectLiteralStringifiesAsExpected", null);
    __decorate([
        alsatian_core_1.TestCase(new Testable("a", "b"), new Testable("a", "b")),
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Testable,
            Testable]),
        __metadata("design:returntype", void 0)
    ], TypeMatcherTestFunctionTests.prototype, "thatMatchesShouldMatchAClassInstance", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TypeMatcherTestFunctionTests.prototype, "thatMatchesWithDelegateStringifiesAsExpected", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TypeMatcherTestFunctionTests.prototype, "thatMatchesWithChainStringifiesAsExpected", null);
    return TypeMatcherTestFunctionTests;
}());
exports.TypeMatcherTestFunctionTests = TypeMatcherTestFunctionTests;
var replacer = function (key, value) {
    if (typeof value === "function") {
        return value.toString();
    }
    return value;
};
//# sourceMappingURL=test.spec.js.map