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
var property_set_match_error_1 = require("../../../core/errors/property-set-match-error");
var stringification_1 = require("../../../core/stringification");
var PropertySetMatchErrorTests = /** @class */ (function () {
    function PropertySetMatchErrorTests() {
    }
    PropertySetMatchErrorTests.prototype.shouldBeSetMessage = function () {
        var fakePropertySpy = { setCalls: [] };
        var error = new property_set_match_error_1.PropertySetMatchError(fakePropertySpy, true);
        alsatian_core_1.Expect(error.message).toBe("Expected property to be set.");
    };
    PropertySetMatchErrorTests.prototype.shouldNotBeSetMessage = function () {
        var fakePropertySpy = { setCalls: [] };
        fakePropertySpy.setCalls.push({ args: [] });
        var error = new property_set_match_error_1.PropertySetMatchError(fakePropertySpy, false);
        alsatian_core_1.Expect(error.message).toBe("Expected property not to be set.");
    };
    PropertySetMatchErrorTests.prototype.shouldBeSetToValueMessage = function (value) {
        var fakePropertySpy = { setCalls: [] };
        fakePropertySpy.setCalls.push({ args: [] });
        var error = new property_set_match_error_1.PropertySetMatchError(fakePropertySpy, true, value);
        alsatian_core_1.Expect(error.message).toBe("Expected property to be set to " + stringification_1.stringify(value) + ".");
    };
    PropertySetMatchErrorTests.prototype.shouldNotBeSetToValueMessage = function (value) {
        var fakePropertySpy = { setCalls: [] };
        fakePropertySpy.setCalls.push({ args: [] });
        var error = new property_set_match_error_1.PropertySetMatchError(fakePropertySpy, false, value);
        alsatian_core_1.Expect(error.message).toBe("Expected property not to be set to " + stringification_1.stringify(value) + ".");
    };
    PropertySetMatchErrorTests.prototype.actualValueAndShouldMatchShouldBeSetToPropertyNotSet = function () {
        var fakePropertySpy = { setCalls: [] };
        fakePropertySpy.setCalls.push({ args: [] });
        var error = new property_set_match_error_1.PropertySetMatchError(fakePropertySpy, true);
        alsatian_core_1.Expect(error.actual).toBe("property was not set.");
    };
    PropertySetMatchErrorTests.prototype.actualValueAndShouldNotMatchShouldBeSetToPropertySet = function () {
        var fakePropertySpy = { setCalls: [] };
        fakePropertySpy.setCalls.push({ args: [] });
        var error = new property_set_match_error_1.PropertySetMatchError(fakePropertySpy, false);
        alsatian_core_1.Expect(error.actual).toBe("property was set.");
    };
    PropertySetMatchErrorTests.prototype.expectedValueAndShouldMatchShouldBeSetToPropertyToBeSet = function () {
        var fakePropertySpy = { setCalls: [] };
        fakePropertySpy.setCalls.push({ args: [] });
        var error = new property_set_match_error_1.PropertySetMatchError(fakePropertySpy, true);
        alsatian_core_1.Expect(error.expected).toBe("property to be set.");
    };
    PropertySetMatchErrorTests.prototype.expectedValueAndShouldNotMatchShouldBeSetToFunctionNotToBeCalled = function () {
        var fakePropertySpy = { setCalls: [] };
        fakePropertySpy.setCalls.push({ args: [] });
        var error = new property_set_match_error_1.PropertySetMatchError(fakePropertySpy, false);
        alsatian_core_1.Expect(error.expected).toBe("property not to be set.");
    };
    PropertySetMatchErrorTests.prototype.actualValueAndShouldMatchShouldBeSetToPropertyWasNotSetToValue = function (values) {
        var fakePropertySpy = { setCalls: [] };
        values.forEach(function (value) {
            fakePropertySpy.setCalls.push({ args: [value] });
        });
        var error = new property_set_match_error_1.PropertySetMatchError(fakePropertySpy, true, 42);
        alsatian_core_1.Expect(error.actual).toBe("property was set to " +
            values.map(function (value) { return JSON.stringify(value); }).join(", ") +
            ".");
    };
    PropertySetMatchErrorTests.prototype.actualValueAndShouldNotMatchShouldBeSetToPropertyWasSetToValue = function (values) {
        var fakePropertySpy = { setCalls: [] };
        values.forEach(function (value) {
            fakePropertySpy.setCalls.push({ args: [value] });
        });
        var error = new property_set_match_error_1.PropertySetMatchError(fakePropertySpy, false, 42);
        alsatian_core_1.Expect(error.actual).toBe("property was set to " +
            values.map(function (value) { return JSON.stringify(value); }).join(", ") +
            ".");
    };
    PropertySetMatchErrorTests.prototype.expectedValueAndShouldMatchShouldBeSetToPropertyToBeSetToValue = function (value) {
        var fakePropertySpy = { setCalls: [] };
        var error = new property_set_match_error_1.PropertySetMatchError(fakePropertySpy, true, value);
        alsatian_core_1.Expect(error.expected).toBe("property to be set to " + stringification_1.stringify(value) + ".");
    };
    PropertySetMatchErrorTests.prototype.expectedValueAndShouldNotMatchShouldBeSetToPropertyNotToBeSetToValue = function (value) {
        var fakePropertySpy = { setCalls: [] };
        var error = new property_set_match_error_1.PropertySetMatchError(fakePropertySpy, false, value);
        alsatian_core_1.Expect(error.expected).toBe("property not to be set to " + stringification_1.stringify(value) + ".");
    };
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PropertySetMatchErrorTests.prototype, "shouldBeSetMessage", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PropertySetMatchErrorTests.prototype, "shouldNotBeSetMessage", null);
    __decorate([
        alsatian_core_1.TestCase(undefined),
        alsatian_core_1.TestCase(null),
        alsatian_core_1.TestCase(0),
        alsatian_core_1.TestCase(42),
        alsatian_core_1.TestCase(4.2),
        alsatian_core_1.TestCase(-4.2),
        alsatian_core_1.TestCase(""),
        alsatian_core_1.TestCase("value"),
        alsatian_core_1.TestCase({ an: "object" }),
        alsatian_core_1.TestCase(["an", "array"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], PropertySetMatchErrorTests.prototype, "shouldBeSetToValueMessage", null);
    __decorate([
        alsatian_core_1.TestCase(undefined),
        alsatian_core_1.TestCase(null),
        alsatian_core_1.TestCase(0),
        alsatian_core_1.TestCase(42),
        alsatian_core_1.TestCase(4.2),
        alsatian_core_1.TestCase(-4.2),
        alsatian_core_1.TestCase(""),
        alsatian_core_1.TestCase("value"),
        alsatian_core_1.TestCase({ an: "object" }),
        alsatian_core_1.TestCase(["an", "array"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], PropertySetMatchErrorTests.prototype, "shouldNotBeSetToValueMessage", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PropertySetMatchErrorTests.prototype, "actualValueAndShouldMatchShouldBeSetToPropertyNotSet", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PropertySetMatchErrorTests.prototype, "actualValueAndShouldNotMatchShouldBeSetToPropertySet", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PropertySetMatchErrorTests.prototype, "expectedValueAndShouldMatchShouldBeSetToPropertyToBeSet", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PropertySetMatchErrorTests.prototype, "expectedValueAndShouldNotMatchShouldBeSetToFunctionNotToBeCalled", null);
    __decorate([
        alsatian_core_1.TestCase([null]),
        alsatian_core_1.TestCase([[], []]),
        alsatian_core_1.TestCase([1, 2, 3]),
        alsatian_core_1.TestCase(["something", "and", "another", "thing"]),
        alsatian_core_1.TestCase(["this", "or", "this", "or", "that", "other", "thing"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array]),
        __metadata("design:returntype", void 0)
    ], PropertySetMatchErrorTests.prototype, "actualValueAndShouldMatchShouldBeSetToPropertyWasNotSetToValue", null);
    __decorate([
        alsatian_core_1.TestCase([null]),
        alsatian_core_1.TestCase([[], []]),
        alsatian_core_1.TestCase([1, 2, 3]),
        alsatian_core_1.TestCase(["something", "and", "another", "thing"]),
        alsatian_core_1.TestCase(["this", "or", "this", "or", "that", "other", "thing"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array]),
        __metadata("design:returntype", void 0)
    ], PropertySetMatchErrorTests.prototype, "actualValueAndShouldNotMatchShouldBeSetToPropertyWasSetToValue", null);
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
        alsatian_core_1.TestCase(function () { }),
        alsatian_core_1.TestCase(function (thisCouldBe) { return "function"; }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], PropertySetMatchErrorTests.prototype, "expectedValueAndShouldMatchShouldBeSetToPropertyToBeSetToValue", null);
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
        alsatian_core_1.TestCase(function () { }),
        alsatian_core_1.TestCase(function (thisCouldBe) { return "function"; }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], PropertySetMatchErrorTests.prototype, "expectedValueAndShouldNotMatchShouldBeSetToPropertyNotToBeSetToValue", null);
    return PropertySetMatchErrorTests;
}());
exports.PropertySetMatchErrorTests = PropertySetMatchErrorTests;
//# sourceMappingURL=property-set-match-error.spec.js.map