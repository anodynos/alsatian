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
var alsatian_core_1 = require("../../../../core/alsatian-core");
var spying_1 = require("../../../../core/spying");
var AndCallSetterTests = /** @class */ (function () {
    function AndCallSetterTests() {
    }
    AndCallSetterTests.prototype.originalSetterCalled = function () {
        var testObject = {};
        var propertyDescriptor = {
            set: function (value) {
                testObject._secretValue = value;
            },
            configurable: true
        };
        alsatian_core_1.SpyOn(propertyDescriptor, "set");
        Object.defineProperty(testObject, "property", propertyDescriptor);
        var propertySpy = new spying_1.PropertySpy(testObject, "property");
        testObject.property = "something";
        alsatian_core_1.Expect(propertyDescriptor.set).toHaveBeenCalled();
    };
    AndCallSetterTests.prototype.originalSetterNotCalledIfSetterOverloaded = function () {
        var testObject = {};
        var propertyDescriptor = {
            set: function (value) {
                testObject._secretValue = value;
            },
            configurable: true
        };
        alsatian_core_1.SpyOn(propertyDescriptor, "set");
        Object.defineProperty(testObject, "property", propertyDescriptor);
        var propertySpy = new spying_1.PropertySpy(testObject, "property").andCallSetter(function () { });
        testObject.property = "something";
        alsatian_core_1.Expect(propertyDescriptor.set).not.toHaveBeenCalled();
    };
    AndCallSetterTests.prototype.propertySpyIsReturned = function () {
        var testObject = {};
        var propertyDescriptor = {
            set: function (value) {
                testObject._secretValue = value;
            },
            configurable: true
        };
        alsatian_core_1.SpyOn(propertyDescriptor, "set");
        Object.defineProperty(testObject, "property", propertyDescriptor);
        var propertySpy = new spying_1.PropertySpy(testObject, "property");
        alsatian_core_1.Expect(propertySpy.andCallSetter(function () { })).toBe(propertySpy);
    };
    AndCallSetterTests.prototype.newValueIsSet = function (expectedValue) {
        var testObject = {};
        var propertyDescriptor = {
            configurable: true,
            get: function () { return testObject._secretValue; },
            set: function (value) { }
        };
        alsatian_core_1.SpyOn(propertyDescriptor, "set");
        Object.defineProperty(testObject, "property", propertyDescriptor);
        var propertySpy = new spying_1.PropertySpy(testObject, "property").andCallSetter(function (value) {
            testObject._secretValue = value;
        });
        testObject.property = expectedValue;
        alsatian_core_1.Expect(testObject.property).toBe(expectedValue);
    };
    AndCallSetterTests.prototype.andCallSetterValueIsReturnedWhenReturnValueIsCalledPreviously = function (setterValue, andReturnValue) {
        var testObject = {};
        var propertyDescriptor = {
            configurable: true,
            get: function () { return testObject._secretValue; },
            set: function (value) { }
        };
        alsatian_core_1.SpyOn(propertyDescriptor, "set");
        Object.defineProperty(testObject, "property", propertyDescriptor);
        var propertySpy = new spying_1.PropertySpy(testObject, "property")
            .andReturnValue(andReturnValue)
            .andCallSetter(function (value) {
            testObject._secretValue = value;
        });
        testObject.property = setterValue;
        alsatian_core_1.Expect(testObject.property).toBe(setterValue);
    };
    AndCallSetterTests.prototype.andReturnValueValueIsReturnedWhenReturnValueIsCalledAfter = function (setterValue, andReturnValue) {
        var testObject = {};
        var propertyDescriptor = {
            configurable: true,
            get: function () { return testObject._secretValue; },
            set: function (value) { }
        };
        alsatian_core_1.SpyOn(propertyDescriptor, "set");
        Object.defineProperty(testObject, "property", propertyDescriptor);
        var propertySpy = new spying_1.PropertySpy(testObject, "property")
            .andCallSetter(function (value) {
            testObject._secretValue = value;
        })
            .andReturnValue(andReturnValue);
        testObject.property = setterValue;
        alsatian_core_1.Expect(testObject.property).toBe(andReturnValue);
    };
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AndCallSetterTests.prototype, "originalSetterCalled", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AndCallSetterTests.prototype, "originalSetterNotCalledIfSetterOverloaded", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AndCallSetterTests.prototype, "propertySpyIsReturned", null);
    __decorate([
        alsatian_core_1.TestCase(null),
        alsatian_core_1.TestCase(undefined),
        alsatian_core_1.TestCase(42),
        alsatian_core_1.TestCase("something"),
        alsatian_core_1.TestCase({ an: "object" }),
        alsatian_core_1.TestCase(["an", "array"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AndCallSetterTests.prototype, "newValueIsSet", null);
    __decorate([
        alsatian_core_1.TestCase(null, ["an", "array"]),
        alsatian_core_1.TestCase(undefined, { an: "object" }),
        alsatian_core_1.TestCase(42, "something"),
        alsatian_core_1.TestCase("something", 42),
        alsatian_core_1.TestCase({ an: "object" }, undefined),
        alsatian_core_1.TestCase(["an", "array"], null),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], AndCallSetterTests.prototype, "andCallSetterValueIsReturnedWhenReturnValueIsCalledPreviously", null);
    __decorate([
        alsatian_core_1.TestCase(null, ["an", "array"]),
        alsatian_core_1.TestCase(undefined, { an: "object" }),
        alsatian_core_1.TestCase(42, "something"),
        alsatian_core_1.TestCase("something", 42),
        alsatian_core_1.TestCase({ an: "object" }, undefined),
        alsatian_core_1.TestCase(["an", "array"], null),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], AndCallSetterTests.prototype, "andReturnValueValueIsReturnedWhenReturnValueIsCalledAfter", null);
    return AndCallSetterTests;
}());
exports.AndCallSetterTests = AndCallSetterTests;
//# sourceMappingURL=and-call-setter.spec.js.map