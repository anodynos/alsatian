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
var core_1 = require("../../../core/");
var alsatian_core_1 = require("../../../core/alsatian-core");
var test_set_1 = require("../../../core/test-set");
var TestSetConstructorTests = /** @class */ (function () {
    function TestSetConstructorTests() {
    }
    TestSetConstructorTests.prototype.nullOrUndefinedTestLoaderThrowsError = function (testLoader) {
        var globHelper = new core_1.GlobHelper();
        alsatian_core_1.Expect(function () { return new test_set_1.TestSet(testLoader, globHelper); }).toThrowError(TypeError, "testLoader must not be null or undefined.");
    };
    TestSetConstructorTests.prototype.nullOrUndefinedGlobHelperThrowsError = function (globHelper) {
        var testLoader = new core_1.TestLoader(null);
        alsatian_core_1.Expect(function () { return new test_set_1.TestSet(testLoader, globHelper); }).toThrowError(TypeError, "globHelper must not be null or undefined.");
    };
    __decorate([
        alsatian_core_1.TestCase(null),
        alsatian_core_1.TestCase(undefined),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [core_1.TestLoader]),
        __metadata("design:returntype", void 0)
    ], TestSetConstructorTests.prototype, "nullOrUndefinedTestLoaderThrowsError", null);
    __decorate([
        alsatian_core_1.TestCase(null),
        alsatian_core_1.TestCase(undefined),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [core_1.GlobHelper]),
        __metadata("design:returntype", void 0)
    ], TestSetConstructorTests.prototype, "nullOrUndefinedGlobHelperThrowsError", null);
    return TestSetConstructorTests;
}());
exports.TestSetConstructorTests = TestSetConstructorTests;
//# sourceMappingURL=constructor.spec.js.map