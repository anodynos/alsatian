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
var Testing = /** @class */ (function () {
    function Testing() {
    }
    Object.defineProperty(Testing.prototype, "test", {
        get: function () {
            return 42;
        },
        enumerable: true,
        configurable: true
    });
    return Testing;
}());
var SpyOnPropertyTests = /** @class */ (function () {
    function SpyOnPropertyTests() {
    }
    SpyOnPropertyTests.prototype.getterIsReplacedWithSpy = function () {
        var object = {};
        var originalGetter = function () { };
        Object.defineProperty(object, "property", {
            get: originalGetter,
            configurable: true
        });
        alsatian_core_1.SpyOnProperty(object, "property");
        alsatian_core_1.Expect(Object.getOwnPropertyDescriptor(object, "property").get).not.toBe(originalGetter);
    };
    SpyOnPropertyTests.prototype.setterIsReplacedWithSpy = function () {
        var object = {};
        var originalSetter = function () { };
        Object.defineProperty(object, "property", {
            set: originalSetter,
            configurable: true
        });
        alsatian_core_1.SpyOnProperty(object, "property");
        alsatian_core_1.Expect(Object.getOwnPropertyDescriptor(object, "property").set).not.toBe(originalSetter);
    };
    SpyOnPropertyTests.prototype.propertyStillReturnsOriginalValue = function (originalValue) {
        var object = {
            _property: false
        };
        Object.defineProperty(object, "property", {
            get: function () { return originalValue; },
            configurable: true
        });
        alsatian_core_1.SpyOnProperty(object, "property");
        alsatian_core_1.Expect(object.property).toBe(originalValue);
    };
    SpyOnPropertyTests.prototype.spyShouldBeReturned = function () {
        var object = {};
        Object.defineProperty(object, "property", {
            get: function () { },
            configurable: true
        });
        var spy = alsatian_core_1.SpyOnProperty(object, "property");
        alsatian_core_1.Expect(spy).toBeDefined();
        alsatian_core_1.Expect(spy).not.toBeNull();
    };
    SpyOnPropertyTests.prototype.spyingOnNonPropertyShouldThrowError = function (propertyName) {
        var object = {};
        alsatian_core_1.Expect(function () { return alsatian_core_1.SpyOnProperty(object, propertyName); }).toThrowError(TypeError, propertyName + " is not a property.");
    };
    SpyOnPropertyTests.prototype.spyingOnPropertyShouldNotThrowError = function (propertyName) {
        var object = {};
        Object.defineProperty(object, propertyName, {
            get: function () { },
            configurable: true
        });
        alsatian_core_1.Expect(function () { return alsatian_core_1.SpyOnProperty(object, propertyName); }).not.toThrow();
    };
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SpyOnPropertyTests.prototype, "getterIsReplacedWithSpy", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SpyOnPropertyTests.prototype, "setterIsReplacedWithSpy", null);
    __decorate([
        alsatian_core_1.TestCase(undefined),
        alsatian_core_1.TestCase(null),
        alsatian_core_1.TestCase(0),
        alsatian_core_1.TestCase(1),
        alsatian_core_1.TestCase(42),
        alsatian_core_1.TestCase(""),
        alsatian_core_1.TestCase("something"),
        alsatian_core_1.TestCase({}),
        alsatian_core_1.TestCase({ an: "object" }),
        alsatian_core_1.TestCase([]),
        alsatian_core_1.TestCase(["an", "array"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SpyOnPropertyTests.prototype, "propertyStillReturnsOriginalValue", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SpyOnPropertyTests.prototype, "spyShouldBeReturned", null);
    __decorate([
        alsatian_core_1.TestCase("property"),
        alsatian_core_1.TestCase("proper tea"),
        alsatian_core_1.TestCase("anotherProperty"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], SpyOnPropertyTests.prototype, "spyingOnNonPropertyShouldThrowError", null);
    __decorate([
        alsatian_core_1.TestCase("property"),
        alsatian_core_1.TestCase("proper tea"),
        alsatian_core_1.TestCase("anotherProperty"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], SpyOnPropertyTests.prototype, "spyingOnPropertyShouldNotThrowError", null);
    return SpyOnPropertyTests;
}());
exports.SpyOnPropertyTests = SpyOnPropertyTests;
//# sourceMappingURL=spy-on-property.spec.js.map