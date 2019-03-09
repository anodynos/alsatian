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
var empty_match_error_1 = require("../../../core/errors/empty-match-error");
var DummyClass = /** @class */ (function () {
    function DummyClass() {
    }
    return DummyClass;
}());
var ToBeEmptyTests = /** @class */ (function () {
    function ToBeEmptyTests() {
        this._typeErrorMessage = "toBeEmpty requires value passed in to Expect to be " +
            "an array, string, object literal or map";
    }
    ToBeEmptyTests.prototype.emptyShouldNotThrowTypeErrorForArrays = function (value) {
        var expect = alsatian_core_1.Expect(value);
        alsatian_core_1.Expect(function () { return expect.toBeEmpty(); }).not.toThrowError(TypeError, this._typeErrorMessage);
    };
    ToBeEmptyTests.prototype.emptyShouldNotThrowTypeErrorForStrings = function (value) {
        var expect = alsatian_core_1.Expect(value);
        alsatian_core_1.Expect(function () { return expect.toBeEmpty(); }).not.toThrowError(TypeError, this._typeErrorMessage);
    };
    ToBeEmptyTests.prototype.emptyShouldNotThrowTypeErrorForObjectLiterals = function (value) {
        var expect = alsatian_core_1.Expect(value);
        alsatian_core_1.Expect(function () { return expect.toBeEmpty(); }).not.toThrowError(TypeError, this._typeErrorMessage);
    };
    ToBeEmptyTests.prototype.emptyShouldNotThrowTypeErrorForMaps = function (value) {
        var expect = alsatian_core_1.Expect(value);
        alsatian_core_1.Expect(function () { return expect.toBeEmpty(); }).not.toThrowError(TypeError, this._typeErrorMessage);
    };
    ToBeEmptyTests.prototype.emptyShouldThrowTypeErrorForNullTypes = function (value) {
        var EXPECT = alsatian_core_1.Expect("");
        EXPECT._actualValue = value;
        alsatian_core_1.Expect(function () { return EXPECT.toBeEmpty(); }).toThrowError(TypeError, "toBeEmpty requires value passed in to Expect not to be null or undefined");
    };
    ToBeEmptyTests.prototype.emptyShouldThrowTypeErrorForInvalidTypes = function (value) {
        var EXPECT = alsatian_core_1.Expect("");
        EXPECT._actualValue = value;
        alsatian_core_1.Expect(function () { return EXPECT.toBeEmpty(); }).toThrowError(TypeError, this._typeErrorMessage);
    };
    ToBeEmptyTests.prototype.emptyShouldNotThrowErrorForEmptyArray = function () {
        var expect = alsatian_core_1.Expect([]);
        alsatian_core_1.Expect(function () { return expect.toBeEmpty(); }).not.toThrow();
    };
    ToBeEmptyTests.prototype.emptyShouldThrowErrorForNonEmptyArray = function () {
        var expect = alsatian_core_1.Expect([0]);
        alsatian_core_1.Expect(function () { return expect.toBeEmpty(); }).toThrowError(empty_match_error_1.EmptyMatchError, 'Expected "[0]" to be empty.');
    };
    ToBeEmptyTests.prototype.notEmptyShouldThrowErrorForEmptyArray = function () {
        var expect = alsatian_core_1.Expect([]);
        alsatian_core_1.Expect(function () { return expect.not.toBeEmpty(); }).toThrowError(empty_match_error_1.EmptyMatchError, 'Expected "[]" not to be empty.');
    };
    ToBeEmptyTests.prototype.notEmptyShouldNotThrowErrorForNonEmptyArray = function () {
        var expect = alsatian_core_1.Expect([0]);
        alsatian_core_1.Expect(function () { return expect.not.toBeEmpty(); }).not.toThrow();
    };
    ToBeEmptyTests.prototype.emptyShouldNotThrowErrorForEmptyString = function () {
        var expect = alsatian_core_1.Expect("");
        alsatian_core_1.Expect(function () { return expect.toBeEmpty(); }).not.toThrow();
    };
    ToBeEmptyTests.prototype.emptyShouldThrowErrorForNonEmptyString = function () {
        var expect = alsatian_core_1.Expect("string");
        alsatian_core_1.Expect(function () { return expect.toBeEmpty(); }).toThrowError(empty_match_error_1.EmptyMatchError, 'Expected "string" to be empty.');
    };
    ToBeEmptyTests.prototype.notEmptyShouldThrowErrorForEmptyString = function () {
        var expect = alsatian_core_1.Expect("");
        alsatian_core_1.Expect(function () { return expect.not.toBeEmpty(); }).toThrowError(empty_match_error_1.EmptyMatchError, 'Expected "" not to be empty.');
    };
    ToBeEmptyTests.prototype.notEmptyShouldNotThrowErrorForNonEmptyString = function () {
        var expect = alsatian_core_1.Expect("string");
        alsatian_core_1.Expect(function () { return expect.not.toBeEmpty(); }).not.toThrow();
    };
    ToBeEmptyTests.prototype.emptyShouldNotThrowErrorForEmptyObject = function () {
        var expect = alsatian_core_1.Expect({});
        alsatian_core_1.Expect(function () { return expect.toBeEmpty(); }).not.toThrow();
    };
    ToBeEmptyTests.prototype.emptyShouldThrowErrorForNonEmptyObject = function () {
        var expect = alsatian_core_1.Expect({ a: true });
        alsatian_core_1.Expect(function () { return expect.toBeEmpty(); }).toThrowError(empty_match_error_1.EmptyMatchError, 'Expected "{"a":true}" to be empty.');
    };
    ToBeEmptyTests.prototype.notEmptyShouldThrowErrorForEmptyObject = function () {
        var expect = alsatian_core_1.Expect({});
        alsatian_core_1.Expect(function () { return expect.not.toBeEmpty(); }).toThrowError(empty_match_error_1.EmptyMatchError, 'Expected "{}" not to be empty.');
    };
    ToBeEmptyTests.prototype.notEmptyShouldNotThrowErrorForNonEmptyObject = function () {
        var expect = alsatian_core_1.Expect({ a: true });
        alsatian_core_1.Expect(function () { return expect.not.toBeEmpty(); }).not.toThrow();
    };
    ToBeEmptyTests.prototype.emptyShouldNotThrowErrorForEmptyMap = function () {
        var expect = alsatian_core_1.Expect(new Map());
        alsatian_core_1.Expect(function () { return expect.toBeEmpty(); }).not.toThrow();
    };
    ToBeEmptyTests.prototype.emptyShouldThrowErrorForNonEmptyMap = function () {
        var expect = alsatian_core_1.Expect(new Map([["key", "value"]]));
        alsatian_core_1.Expect(function () { return expect.toBeEmpty(); }).toThrowError(empty_match_error_1.EmptyMatchError, 'Expected "Map<1>" to be empty.');
    };
    ToBeEmptyTests.prototype.notEmptyShouldThrowErrorForEmptyMap = function () {
        var expect = alsatian_core_1.Expect(new Map());
        alsatian_core_1.Expect(function () { return expect.not.toBeEmpty(); }).toThrowError(empty_match_error_1.EmptyMatchError, 'Expected "Map<0>" not to be empty.');
    };
    ToBeEmptyTests.prototype.notEmptyShouldNotThrowErrorForNonEmptyMap = function () {
        var expect = alsatian_core_1.Expect(new Map([["key", "value"]]));
        alsatian_core_1.Expect(function () { return expect.not.toBeEmpty(); }).not.toThrow();
    };
    __decorate([
        alsatian_core_1.TestCase([]),
        alsatian_core_1.TestCase([1]),
        alsatian_core_1.TestCase([1, 2]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array]),
        __metadata("design:returntype", void 0)
    ], ToBeEmptyTests.prototype, "emptyShouldNotThrowTypeErrorForArrays", null);
    __decorate([
        alsatian_core_1.TestCase(""),
        alsatian_core_1.TestCase("string"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], ToBeEmptyTests.prototype, "emptyShouldNotThrowTypeErrorForStrings", null);
    __decorate([
        alsatian_core_1.TestCase({}),
        alsatian_core_1.TestCase({ a: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ToBeEmptyTests.prototype, "emptyShouldNotThrowTypeErrorForObjectLiterals", null);
    __decorate([
        alsatian_core_1.TestCase(new Map()),
        alsatian_core_1.TestCase(new Map([["keyOne", "valueOne"]])),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Map]),
        __metadata("design:returntype", void 0)
    ], ToBeEmptyTests.prototype, "emptyShouldNotThrowTypeErrorForMaps", null);
    __decorate([
        alsatian_core_1.TestCase(null),
        alsatian_core_1.TestCase(undefined),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ToBeEmptyTests.prototype, "emptyShouldThrowTypeErrorForNullTypes", null);
    __decorate([
        alsatian_core_1.TestCase(0),
        alsatian_core_1.TestCase(42),
        alsatian_core_1.TestCase(-42),
        alsatian_core_1.TestCase(true),
        alsatian_core_1.TestCase(new Date()),
        alsatian_core_1.TestCase(new Error()),
        alsatian_core_1.TestCase(new DummyClass()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ToBeEmptyTests.prototype, "emptyShouldThrowTypeErrorForInvalidTypes", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToBeEmptyTests.prototype, "emptyShouldNotThrowErrorForEmptyArray", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToBeEmptyTests.prototype, "emptyShouldThrowErrorForNonEmptyArray", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToBeEmptyTests.prototype, "notEmptyShouldThrowErrorForEmptyArray", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToBeEmptyTests.prototype, "notEmptyShouldNotThrowErrorForNonEmptyArray", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToBeEmptyTests.prototype, "emptyShouldNotThrowErrorForEmptyString", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToBeEmptyTests.prototype, "emptyShouldThrowErrorForNonEmptyString", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToBeEmptyTests.prototype, "notEmptyShouldThrowErrorForEmptyString", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToBeEmptyTests.prototype, "notEmptyShouldNotThrowErrorForNonEmptyString", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToBeEmptyTests.prototype, "emptyShouldNotThrowErrorForEmptyObject", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToBeEmptyTests.prototype, "emptyShouldThrowErrorForNonEmptyObject", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToBeEmptyTests.prototype, "notEmptyShouldThrowErrorForEmptyObject", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToBeEmptyTests.prototype, "notEmptyShouldNotThrowErrorForNonEmptyObject", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToBeEmptyTests.prototype, "emptyShouldNotThrowErrorForEmptyMap", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToBeEmptyTests.prototype, "emptyShouldThrowErrorForNonEmptyMap", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToBeEmptyTests.prototype, "notEmptyShouldThrowErrorForEmptyMap", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToBeEmptyTests.prototype, "notEmptyShouldNotThrowErrorForNonEmptyMap", null);
    return ToBeEmptyTests;
}());
exports.ToBeEmptyTests = ToBeEmptyTests;
//# sourceMappingURL=to-be-empty.spec.js.map