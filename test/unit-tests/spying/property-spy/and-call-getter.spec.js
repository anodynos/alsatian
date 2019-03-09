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
var AndCallGetterTests = /** @class */ (function () {
    function AndCallGetterTests() {
    }
    AndCallGetterTests.prototype.originalGetterCalled = function () {
        var testObject = {};
        var propertyDescriptor = {
            configurable: true,
            get: function () { }
        };
        alsatian_core_1.SpyOn(propertyDescriptor, "get");
        Object.defineProperty(testObject, "property", propertyDescriptor);
        var propertySpy = new spying_1.PropertySpy(testObject, "property");
        var property = testObject.property;
        alsatian_core_1.Expect(propertyDescriptor.get).toHaveBeenCalled();
    };
    AndCallGetterTests.prototype.originalGetterNotCalledIfGetterOverloaded = function () {
        var testObject = {};
        var propertyDescriptor = {
            configurable: true,
            get: function () { }
        };
        alsatian_core_1.SpyOn(propertyDescriptor, "get");
        Object.defineProperty(testObject, "property", propertyDescriptor);
        var propertySpy = new spying_1.PropertySpy(testObject, "property").andCallGetter(function () { return undefined; });
        var property = testObject.property;
        alsatian_core_1.Expect(propertyDescriptor.get).not.toHaveBeenCalled();
    };
    AndCallGetterTests.prototype.propertySpyIsReturned = function () {
        var testObject = {};
        var propertyDescriptor = {
            configurable: true,
            get: function () { }
        };
        alsatian_core_1.SpyOn(propertyDescriptor, "get");
        Object.defineProperty(testObject, "property", propertyDescriptor);
        var propertySpy = new spying_1.PropertySpy(testObject, "property");
        alsatian_core_1.Expect(propertySpy.andCallGetter(function () { return undefined; })).toBe(propertySpy);
    };
    AndCallGetterTests.prototype.newValueIsReturned = function (value) {
        var testObject = {};
        var propertyDescriptor = {
            configurable: true,
            get: function () { }
        };
        alsatian_core_1.SpyOn(propertyDescriptor, "get");
        Object.defineProperty(testObject, "property", propertyDescriptor);
        new spying_1.PropertySpy(testObject, "property").andCallGetter(function () { return value; });
        alsatian_core_1.Expect(testObject.property).toBe(value);
    };
    AndCallGetterTests.prototype.andCallGetterValueIsReturnedWhenReturnValueIsCalledPreviously = function (getterValue, andReturnValue) {
        var testObject = {};
        var propertyDescriptor = {
            configurable: true,
            get: function () { }
        };
        alsatian_core_1.SpyOn(propertyDescriptor, "get");
        Object.defineProperty(testObject, "property", propertyDescriptor);
        new spying_1.PropertySpy(testObject, "property")
            .andReturnValue(andReturnValue)
            .andCallGetter(function () { return getterValue; });
        alsatian_core_1.Expect(testObject.property).toBe(getterValue);
    };
    AndCallGetterTests.prototype.andReturnValueValueIsReturnedWhenReturnValueIsCalledAfter = function (getterValue, andReturnValue) {
        var testObject = {};
        var propertyDescriptor = {
            configurable: true,
            get: function () { }
        };
        alsatian_core_1.SpyOn(propertyDescriptor, "get");
        Object.defineProperty(testObject, "property", propertyDescriptor);
        new spying_1.PropertySpy(testObject, "property")
            .andCallGetter(function () { return getterValue; })
            .andReturnValue(andReturnValue);
        alsatian_core_1.Expect(testObject.property).toBe(andReturnValue);
    };
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AndCallGetterTests.prototype, "originalGetterCalled", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AndCallGetterTests.prototype, "originalGetterNotCalledIfGetterOverloaded", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AndCallGetterTests.prototype, "propertySpyIsReturned", null);
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
    ], AndCallGetterTests.prototype, "newValueIsReturned", null);
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
    ], AndCallGetterTests.prototype, "andCallGetterValueIsReturnedWhenReturnValueIsCalledPreviously", null);
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
    ], AndCallGetterTests.prototype, "andReturnValueValueIsReturnedWhenReturnValueIsCalledAfter", null);
    return AndCallGetterTests;
}());
exports.AndCallGetterTests = AndCallGetterTests;
//# sourceMappingURL=and-call-getter.spec.js.map