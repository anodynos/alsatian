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
var ToHaveBeenSetTests = /** @class */ (function () {
    function ToHaveBeenSetTests() {
    }
    ToHaveBeenSetTests.prototype.propertySetPasses = function () {
        var some = {
            set property(value) { }
        };
        var propertySpy = alsatian_core_1.SpyOnProperty(some, "property");
        some.property = "something";
        alsatian_core_1.Expect(function () { return alsatian_core_1.Expect(propertySpy).toHaveBeenSet(); }).not.toThrow();
    };
    ToHaveBeenSetTests.prototype.propertyNotSetFails = function () {
        var some = {
            set property(value) { }
        };
        var propertySpy = alsatian_core_1.SpyOnProperty(some, "property");
        alsatian_core_1.Expect(function () { return alsatian_core_1.Expect(propertySpy).toHaveBeenSet(); }).toThrow();
    };
    ToHaveBeenSetTests.prototype.propertyNotSetFailsWithCorrectError = function () {
        var some = {
            set property(value) { }
        };
        var propertySpy = alsatian_core_1.SpyOnProperty(some, "property");
        alsatian_core_1.Expect(function () { return alsatian_core_1.Expect(propertySpy).toHaveBeenSet(); }).toThrowError(errors_1.PropertySetMatchError, "Expected property to be set.");
    };
    ToHaveBeenSetTests.prototype.propertyNotSetPassesWhenShouldNotCall = function () {
        var some = {
            set property(value) { }
        };
        var propertySpy = alsatian_core_1.SpyOnProperty(some, "property");
        alsatian_core_1.Expect(function () { return alsatian_core_1.Expect(propertySpy).not.toHaveBeenSet(); }).not.toThrow();
    };
    ToHaveBeenSetTests.prototype.propertySetButShouldNotBeThrowsError = function () {
        var some = {
            set property(value) { }
        };
        var propertySpy = alsatian_core_1.SpyOnProperty(some, "property");
        some.property = "something";
        alsatian_core_1.Expect(function () { return alsatian_core_1.Expect(propertySpy).not.toHaveBeenSet(); }).toThrow();
    };
    ToHaveBeenSetTests.prototype.propertySetButShouldNotBeThrowsCorrectError = function () {
        var some = {
            set property(value) { }
        };
        var propertySpy = alsatian_core_1.SpyOnProperty(some, "property");
        some.property = "something";
        alsatian_core_1.Expect(function () { return alsatian_core_1.Expect(propertySpy).not.toHaveBeenSet(); }).toThrowError(errors_1.PropertySetMatchError, "Expected property not to be set.");
    };
    ToHaveBeenSetTests.prototype.checkingWhetherNonPropertySpyHasBeenSetShouldThrow = function (actualValue) {
        var some = {
            set property(value) { }
        };
        var propertySpy = alsatian_core_1.SpyOnProperty(some, "property");
        var EXPECT = alsatian_core_1.Expect(propertySpy);
        EXPECT._actualValue = actualValue;
        alsatian_core_1.Expect(function () { return EXPECT.toHaveBeenSet(); }).toThrowError(TypeError, "toHaveBeenSet requires value passed in to Expect to be a PropertySpy.");
    };
    ToHaveBeenSetTests.prototype.checkingWhetherNonPropertySpyHasNotBeenSetShouldThrow = function (actualValue) {
        var some = {
            set property(value) { }
        };
        var propertySpy = alsatian_core_1.SpyOnProperty(some, "property");
        var EXPECT = alsatian_core_1.Expect(propertySpy);
        EXPECT._actualValue = actualValue;
        alsatian_core_1.Expect(function () { return EXPECT.not.toHaveBeenSet(); }).toThrowError(TypeError, "toHaveBeenSet requires value passed in to Expect to be a PropertySpy.");
    };
    ToHaveBeenSetTests.prototype.actualValueAndShouldMatchShouldBeSetToPropertyNotSet = function () {
        var some = {
            set property(value) { }
        };
        var propertySpy = alsatian_core_1.SpyOnProperty(some, "property");
        var propertyError;
        try {
            alsatian_core_1.Expect(propertySpy).toHaveBeenSet();
        }
        catch (error) {
            propertyError = error;
        }
        alsatian_core_1.Expect(propertyError).toBeDefined();
        alsatian_core_1.Expect(propertyError).not.toBeNull();
        alsatian_core_1.Expect(propertyError.actual).toBe("property was not set.");
    };
    ToHaveBeenSetTests.prototype.actualValueAndShouldNotMatchShouldBeSetToPropertySet = function () {
        var some = {
            set property(value) { }
        };
        var propertySpy = alsatian_core_1.SpyOnProperty(some, "property");
        some.property = "something";
        var propertyError;
        try {
            alsatian_core_1.Expect(propertySpy).not.toHaveBeenSet();
        }
        catch (error) {
            propertyError = error;
        }
        alsatian_core_1.Expect(propertyError).toBeDefined();
        alsatian_core_1.Expect(propertyError).not.toBeNull();
        alsatian_core_1.Expect(propertyError.actual).toBe("property was set.");
    };
    ToHaveBeenSetTests.prototype.expectedValueAndShouldMatchShouldBeSetToPropertyToBeSet = function () {
        var some = {
            set property(value) { }
        };
        var propertySpy = alsatian_core_1.SpyOnProperty(some, "property");
        var propertyError;
        try {
            alsatian_core_1.Expect(propertySpy).toHaveBeenSet();
        }
        catch (error) {
            propertyError = error;
        }
        alsatian_core_1.Expect(propertyError).toBeDefined();
        alsatian_core_1.Expect(propertyError).not.toBeNull();
        alsatian_core_1.Expect(propertyError.expected).toBe("property to be set.");
    };
    ToHaveBeenSetTests.prototype.expectedValueAndShouldNotMatchShouldBeSetToFunctionNotToBeCalled = function () {
        var some = {
            set property(value) { }
        };
        var propertySpy = alsatian_core_1.SpyOnProperty(some, "property");
        some.property = "something";
        var propertyError;
        try {
            alsatian_core_1.Expect(propertySpy).not.toHaveBeenSet();
        }
        catch (error) {
            propertyError = error;
        }
        alsatian_core_1.Expect(propertyError).toBeDefined();
        alsatian_core_1.Expect(propertyError).not.toBeNull();
        alsatian_core_1.Expect(propertyError.expected).toBe("property not to be set.");
    };
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenSetTests.prototype, "propertySetPasses", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenSetTests.prototype, "propertyNotSetFails", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenSetTests.prototype, "propertyNotSetFailsWithCorrectError", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenSetTests.prototype, "propertyNotSetPassesWhenShouldNotCall", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenSetTests.prototype, "propertySetButShouldNotBeThrowsError", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenSetTests.prototype, "propertySetButShouldNotBeThrowsCorrectError", null);
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
    ], ToHaveBeenSetTests.prototype, "checkingWhetherNonPropertySpyHasBeenSetShouldThrow", null);
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
    ], ToHaveBeenSetTests.prototype, "checkingWhetherNonPropertySpyHasNotBeenSetShouldThrow", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenSetTests.prototype, "actualValueAndShouldMatchShouldBeSetToPropertyNotSet", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenSetTests.prototype, "actualValueAndShouldNotMatchShouldBeSetToPropertySet", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenSetTests.prototype, "expectedValueAndShouldMatchShouldBeSetToPropertyToBeSet", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenSetTests.prototype, "expectedValueAndShouldNotMatchShouldBeSetToFunctionNotToBeCalled", null);
    return ToHaveBeenSetTests;
}());
exports.ToHaveBeenSetTests = ToHaveBeenSetTests;
//# sourceMappingURL=to-have-been-set.spec.js.map