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
var type_matcher_1 = require("../../../../core/spying/type-matcher");
var TypeMatcherConstructorTests = /** @class */ (function () {
    function TypeMatcherConstructorTests() {
    }
    TypeMatcherConstructorTests.prototype.nullOrUndefinedTypesThrowError = function (type) {
        alsatian_core_1.Expect(function () { return new type_matcher_1.TypeMatcher(type); }).toThrowError(TypeError, "type must not be null or undefined");
    };
    TypeMatcherConstructorTests.prototype.objectTypesDoNotThrow = function (type) {
        alsatian_core_1.Expect(function () { return new type_matcher_1.TypeMatcher(type); }).not.toThrow();
    };
    __decorate([
        alsatian_core_1.TestCase(null),
        alsatian_core_1.TestCase(undefined),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TypeMatcherConstructorTests.prototype, "nullOrUndefinedTypesThrowError", null);
    __decorate([
        alsatian_core_1.TestCase(Number),
        alsatian_core_1.TestCase(String),
        alsatian_core_1.TestCase(Boolean),
        alsatian_core_1.TestCase(Array),
        alsatian_core_1.TestCase(Object),
        alsatian_core_1.TestCase(Error),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function]),
        __metadata("design:returntype", void 0)
    ], TypeMatcherConstructorTests.prototype, "objectTypesDoNotThrow", null);
    return TypeMatcherConstructorTests;
}());
exports.TypeMatcherConstructorTests = TypeMatcherConstructorTests;
//# sourceMappingURL=constructor.spec.js.map