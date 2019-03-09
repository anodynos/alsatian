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
var PropertySpyTests = /** @class */ (function () {
    function PropertySpyTests() {
    }
    PropertySpyTests.prototype.spyIsReturned = function () {
        var object = {};
        var originalGetter = function () { };
        Object.defineProperty(object, "property", {
            get: originalGetter,
            configurable: true
        });
        var propertySpy = new spying_1.PropertySpy(object, "property");
        var returnValue = propertySpy.andReturnValue("value");
        alsatian_core_1.Expect(propertySpy).toBe(returnValue);
    };
    PropertySpyTests.prototype.getterReturnsGivenValue = function (value) {
        var object = {};
        var originalGetter = function () { };
        Object.defineProperty(object, "property", {
            get: originalGetter,
            configurable: true
        });
        var propertySpy = new spying_1.PropertySpy(object, "property").andReturnValue(value);
        alsatian_core_1.Expect(object.property).toBe(value);
    };
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PropertySpyTests.prototype, "spyIsReturned", null);
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
    ], PropertySpyTests.prototype, "getterReturnsGivenValue", null);
    return PropertySpyTests;
}());
exports.PropertySpyTests = PropertySpyTests;
//# sourceMappingURL=and-return-value.spec.js.map