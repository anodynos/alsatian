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
var errors_1 = require("../../../core/errors");
var stringification_1 = require("../../../core/stringification");
var ToHaveBeenSetToTests = /** @class */ (function () {
    function ToHaveBeenSetToTests() {
    }
    ToHaveBeenSetToTests.prototype.propertySetPasses = function () {
        var some = {
            set property(value) { }
        };
        var propertySpy = alsatian_core_1.SpyOnProperty(some, "property");
        some.property = "something";
        alsatian_core_1.Expect(function () {
            return alsatian_core_1.Expect(propertySpy).toHaveBeenSetTo("something");
        }).not.toThrow();
    };
    ToHaveBeenSetToTests.prototype.propertyNotSetFails = function () {
        var some = {
            set property(value) { }
        };
        var propertySpy = alsatian_core_1.SpyOnProperty(some, "property");
        alsatian_core_1.Expect(function () { return alsatian_core_1.Expect(propertySpy).toHaveBeenSetTo("something"); }).toThrow();
    };
    ToHaveBeenSetToTests.prototype.propertyNotSetFailsWithCorrectError = function () {
        var some = {
            set property(value) { }
        };
        var propertySpy = alsatian_core_1.SpyOnProperty(some, "property");
        alsatian_core_1.Expect(function () { return alsatian_core_1.Expect(propertySpy).toHaveBeenSetTo("something"); }).toThrowError(errors_1.PropertySetMatchError, 'Expected property to be set to "something".');
    };
    ToHaveBeenSetToTests.prototype.propertySetToCorrectValuePasses = function (expectedValue) {
        var some = {
            set property(value) { }
        };
        var propertySpy = alsatian_core_1.SpyOnProperty(some, "property");
        some.property = expectedValue;
        alsatian_core_1.Expect(function () {
            return alsatian_core_1.Expect(propertySpy).toHaveBeenSetTo(expectedValue);
        }).not.toThrow();
    };
    ToHaveBeenSetToTests.prototype.functionCalledWithSimilarArgumentsFailsWithCorrectError = function (expectedValue, actualValue) {
        var some = {
            set property(value) { }
        };
        var propertySpy = alsatian_core_1.SpyOnProperty(some, "property");
        some.property = actualValue;
        alsatian_core_1.Expect(function () {
            return alsatian_core_1.Expect(propertySpy).toHaveBeenSetTo(expectedValue);
        }).toThrowError(errors_1.PropertySetMatchError, "Expected property to be set to " + stringification_1.stringify(expectedValue) + ".");
    };
    ToHaveBeenSetToTests.prototype.propertyNotSetPassesWhenShouldNotCall = function () {
        var some = {
            set property(value) { }
        };
        var propertySpy = alsatian_core_1.SpyOnProperty(some, "property");
        alsatian_core_1.Expect(function () {
            return alsatian_core_1.Expect(propertySpy).not.toHaveBeenSetTo("something");
        }).not.toThrow();
    };
    ToHaveBeenSetToTests.prototype.propertySetWhenShouldNotBeSetThrowsError = function () {
        var some = {
            set property(value) { }
        };
        var propertySpy = alsatian_core_1.SpyOnProperty(some, "property");
        some.property = "something";
        alsatian_core_1.Expect(function () {
            return alsatian_core_1.Expect(propertySpy).not.toHaveBeenSetTo("something");
        }).toThrow();
    };
    ToHaveBeenSetToTests.prototype.propertySetWhenShouldNotBeSetThrowsCorrectError = function (expectedValue) {
        var some = {
            set property(value) { }
        };
        var propertySpy = alsatian_core_1.SpyOnProperty(some, "property");
        some.property = expectedValue;
        alsatian_core_1.Expect(function () {
            return alsatian_core_1.Expect(propertySpy).not.toHaveBeenSetTo(expectedValue);
        }).toThrowError(errors_1.PropertySetMatchError, "Expected property not to be set to " + stringification_1.stringify(expectedValue) + ".");
    };
    ToHaveBeenSetToTests.prototype.propertySetToSimilarValuePassesWhenShouldNotBeSet = function (expectedValue, similarValue) {
        var some = {
            set property(value) { }
        };
        var propertySpy = alsatian_core_1.SpyOnProperty(some, "property");
        some.property = similarValue;
        alsatian_core_1.Expect(function () {
            return alsatian_core_1.Expect(propertySpy).not.toHaveBeenSetTo(expectedValue);
        }).not.toThrow();
    };
    ToHaveBeenSetToTests.prototype.propertySetToSimilarValueFailsWhenShouldBeSet = function (expectedValue, similarValue) {
        var some = {
            set property(value) { }
        };
        var propertySpy = alsatian_core_1.SpyOnProperty(some, "property");
        some.property = similarValue;
        alsatian_core_1.Expect(function () {
            return alsatian_core_1.Expect(propertySpy).toHaveBeenSetTo(expectedValue);
        }).toThrowError(errors_1.PropertySetMatchError, "Expected property to be set to " + JSON.stringify(expectedValue) + ".");
    };
    ToHaveBeenSetToTests.prototype.checkingWhetherNonPropertySpyHasBeenSetToAValueShouldThrow = function (actualValue) {
        var some = {
            set property(value) { }
        };
        var propertySpy = alsatian_core_1.SpyOnProperty(some, "property");
        var EXPECT = alsatian_core_1.Expect(propertySpy);
        EXPECT._actualValue = actualValue;
        alsatian_core_1.Expect(function () { return EXPECT.toHaveBeenSetTo("something"); }).toThrowError(TypeError, "toHaveBeenSetTo requires value passed in to Expect to be a PropertySpy.");
    };
    ToHaveBeenSetToTests.prototype.checkingWhetherNonPropertySpyHasNotBeenSetToAValueShouldThrow = function (actualValue) {
        var some = {
            set property(value) { }
        };
        var propertySpy = alsatian_core_1.SpyOnProperty(some, "property");
        var EXPECT = alsatian_core_1.Expect(propertySpy);
        EXPECT._actualValue = actualValue;
        alsatian_core_1.Expect(function () { return EXPECT.not.toHaveBeenSetTo("something"); }).toThrowError(TypeError, "toHaveBeenSetTo requires value passed in to Expect to be a PropertySpy.");
    };
    ToHaveBeenSetToTests.prototype.actualValueAndShouldMatchShouldBeSetToPropertyWasNotSetToValue = function (values) {
        var some = {
            set property(value) { }
        };
        var propertySpy = alsatian_core_1.SpyOnProperty(some, "property");
        values.forEach(function (value) {
            some.property = value;
        });
        var propertyError;
        try {
            alsatian_core_1.Expect(propertySpy).toHaveBeenSetTo({ something: "weird" });
        }
        catch (error) {
            propertyError = error;
        }
        alsatian_core_1.Expect(propertyError).toBeDefined();
        alsatian_core_1.Expect(propertyError).not.toBeNull();
        alsatian_core_1.Expect(propertyError.actual).toBe("property was set to " +
            values.map(function (value) { return JSON.stringify(value); }).join(", ") +
            ".");
    };
    ToHaveBeenSetToTests.prototype.actualValueAndShouldNotMatchShouldBeSetToPropertyWasSetToValue = function (values) {
        var some = {
            set property(value) { }
        };
        var propertySpy = alsatian_core_1.SpyOnProperty(some, "property");
        values.forEach(function (value) {
            some.property = value;
        });
        var propertyError;
        try {
            alsatian_core_1.Expect(propertySpy).not.toHaveBeenSetTo(values[0]);
        }
        catch (error) {
            propertyError = error;
        }
        alsatian_core_1.Expect(propertyError).toBeDefined();
        alsatian_core_1.Expect(propertyError).not.toBeNull();
        alsatian_core_1.Expect(propertyError.actual).toBe("property was set to " +
            values.map(function (value) { return JSON.stringify(value); }).join(", ") +
            ".");
    };
    ToHaveBeenSetToTests.prototype.expectedValueAndShouldMatchShouldBeSetToPropertyToBeSetToValue = function (expectedValue) {
        var some = {
            set property(value) { }
        };
        var propertySpy = alsatian_core_1.SpyOnProperty(some, "property");
        var propertyError;
        try {
            alsatian_core_1.Expect(propertySpy).toHaveBeenSetTo(expectedValue);
        }
        catch (error) {
            propertyError = error;
        }
        alsatian_core_1.Expect(propertyError).toBeDefined();
        alsatian_core_1.Expect(propertyError).not.toBeNull();
        alsatian_core_1.Expect(propertyError.expected).toBe("property to be set to " + stringification_1.stringify(expectedValue) + ".");
    };
    ToHaveBeenSetToTests.prototype.expectedValueAndShouldNotMatchShouldBeSetToPropertyNotToBeSetToValue = function (expectedValue) {
        var some = {
            set property(value) { }
        };
        var propertySpy = alsatian_core_1.SpyOnProperty(some, "property");
        some.property = expectedValue;
        var propertyError;
        try {
            alsatian_core_1.Expect(propertySpy).not.toHaveBeenSetTo(expectedValue);
        }
        catch (error) {
            propertyError = error;
        }
        alsatian_core_1.Expect(propertyError).toBeDefined();
        alsatian_core_1.Expect(propertyError).not.toBeNull();
        alsatian_core_1.Expect(propertyError.expected).toBe("property not to be set to " + stringification_1.stringify(expectedValue) + ".");
    };
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenSetToTests.prototype, "propertySetPasses", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenSetToTests.prototype, "propertyNotSetFails", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenSetToTests.prototype, "propertyNotSetFailsWithCorrectError", null);
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
    ], ToHaveBeenSetToTests.prototype, "propertySetToCorrectValuePasses", null);
    __decorate([
        alsatian_core_1.TestCase(undefined, ["an", "array"]),
        alsatian_core_1.TestCase(null, { an: "object" }),
        alsatian_core_1.TestCase(0, "value"),
        alsatian_core_1.TestCase(42, ""),
        alsatian_core_1.TestCase(4.2, -4.2),
        alsatian_core_1.TestCase(-4.2, 4.2),
        alsatian_core_1.TestCase("", 0),
        alsatian_core_1.TestCase("value", null),
        alsatian_core_1.TestCase({ an: "object" }, undefined),
        alsatian_core_1.TestCase(["an", "array"], "something completely different"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenSetToTests.prototype, "functionCalledWithSimilarArgumentsFailsWithCorrectError", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenSetToTests.prototype, "propertyNotSetPassesWhenShouldNotCall", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenSetToTests.prototype, "propertySetWhenShouldNotBeSetThrowsError", null);
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
    ], ToHaveBeenSetToTests.prototype, "propertySetWhenShouldNotBeSetThrowsCorrectError", null);
    __decorate([
        alsatian_core_1.TestCase("1", 1),
        alsatian_core_1.TestCase(1, "1"),
        alsatian_core_1.TestCase("42", 42),
        alsatian_core_1.TestCase(42, "42"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenSetToTests.prototype, "propertySetToSimilarValuePassesWhenShouldNotBeSet", null);
    __decorate([
        alsatian_core_1.TestCase("1", 1),
        alsatian_core_1.TestCase(1, "1"),
        alsatian_core_1.TestCase("42", 42),
        alsatian_core_1.TestCase(42, "42"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenSetToTests.prototype, "propertySetToSimilarValueFailsWhenShouldBeSet", null);
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
    ], ToHaveBeenSetToTests.prototype, "checkingWhetherNonPropertySpyHasBeenSetToAValueShouldThrow", null);
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
    ], ToHaveBeenSetToTests.prototype, "checkingWhetherNonPropertySpyHasNotBeenSetToAValueShouldThrow", null);
    __decorate([
        alsatian_core_1.TestCase([null]),
        alsatian_core_1.TestCase([[], []]),
        alsatian_core_1.TestCase([1, 2, 3]),
        alsatian_core_1.TestCase(["something", "and", "another", "thing"]),
        alsatian_core_1.TestCase(["this", "or", "this", "or", "that", "other", "thing"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenSetToTests.prototype, "actualValueAndShouldMatchShouldBeSetToPropertyWasNotSetToValue", null);
    __decorate([
        alsatian_core_1.TestCase([null]),
        alsatian_core_1.TestCase([[], []]),
        alsatian_core_1.TestCase([1, 2, 3]),
        alsatian_core_1.TestCase(["something", "and", "another", "thing"]),
        alsatian_core_1.TestCase(["this", "or", "this", "or", "that", "other", "thing"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenSetToTests.prototype, "actualValueAndShouldNotMatchShouldBeSetToPropertyWasSetToValue", null);
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
    ], ToHaveBeenSetToTests.prototype, "expectedValueAndShouldMatchShouldBeSetToPropertyToBeSetToValue", null);
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
    ], ToHaveBeenSetToTests.prototype, "expectedValueAndShouldNotMatchShouldBeSetToPropertyNotToBeSetToValue", null);
    return ToHaveBeenSetToTests;
}());
exports.ToHaveBeenSetToTests = ToHaveBeenSetToTests;
//# sourceMappingURL=to-have-been-set-to.spec.js.map