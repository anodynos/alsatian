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
var stringification_1 = require("../../../core/stringification");
var StringifyTests = /** @class */ (function () {
    function StringifyTests() {
    }
    StringifyTests.prototype.jsonifiedNormalValues = function (value) {
        alsatian_core_1.Expect(stringification_1.stringify(value)).toBe(JSON.stringify(value));
    };
    StringifyTests.prototype.undefinedStringified = function () {
        alsatian_core_1.Expect(stringification_1.stringify(undefined)).toBe("undefined");
    };
    StringifyTests.prototype.anyReturnsAnything = function () {
        alsatian_core_1.Expect(stringification_1.stringify(alsatian_core_1.Any)).toBe("Anything");
    };
    StringifyTests.prototype.anyTypeReturnsAnyTypeName = function (constructor) {
        alsatian_core_1.Expect(stringification_1.stringify(alsatian_core_1.Any(constructor))).toBe("Any " + constructor.name);
    };
    __decorate([
        alsatian_core_1.TestCase("string"),
        alsatian_core_1.TestCase("string"),
        alsatian_core_1.TestCase(1),
        alsatian_core_1.TestCase(42),
        alsatian_core_1.TestCase(null),
        alsatian_core_1.Test("normally returns JSONified version of value"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], StringifyTests.prototype, "jsonifiedNormalValues", null);
    __decorate([
        alsatian_core_1.Test("undefined is stringified"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], StringifyTests.prototype, "undefinedStringified", null);
    __decorate([
        alsatian_core_1.Test("Any returns \"Anything\""),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], StringifyTests.prototype, "anyReturnsAnything", null);
    __decorate([
        alsatian_core_1.TestCase(Object),
        alsatian_core_1.TestCase(String),
        alsatian_core_1.TestCase(Number),
        alsatian_core_1.TestCase(Array),
        alsatian_core_1.TestCase(Error),
        alsatian_core_1.Test("typed Any returns \"Any [type name]\""),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], StringifyTests.prototype, "anyTypeReturnsAnyTypeName", null);
    StringifyTests = __decorate([
        alsatian_core_1.TestFixture("stringification")
    ], StringifyTests);
    return StringifyTests;
}());
exports.StringifyTests = StringifyTests;
//# sourceMappingURL=stringify.spec.js.map