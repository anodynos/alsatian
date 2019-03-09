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
var test_item_1 = require("../../../../core/running/test-item");
var test_builder_1 = require("../../../builders/test-builder");
var test_case_builder_1 = require("../../../builders/test-case-builder");
var test_fixture_builder_1 = require("../../../builders/test-fixture-builder");
var TestItemConstructorTests = /** @class */ (function () {
    function TestItemConstructorTests() {
    }
    TestItemConstructorTests.prototype.nullOrUndefinedTestFixtureThrowsError = function (testFixture) {
        var test = new test_builder_1.TestBuilder().build();
        var testCase = new test_case_builder_1.TestCaseBuilder().build();
        alsatian_core_1.Expect(function () { return new test_item_1.TestItem(testFixture, test, testCase); }).toThrowError(TypeError, "testFixture must not be null or undefined.");
    };
    TestItemConstructorTests.prototype.nullOrUndefinedTestThrowsError = function (test) {
        var testFixture = new test_fixture_builder_1.TestFixtureBuilder().build();
        var testCase = new test_case_builder_1.TestCaseBuilder().build();
        alsatian_core_1.Expect(function () { return new test_item_1.TestItem(testFixture, test, testCase); }).toThrowError(TypeError, "test must not be null or undefined.");
    };
    TestItemConstructorTests.prototype.nullOrUndefinedTestCaseThrowsError = function (testCase) {
        var testFixture = new test_fixture_builder_1.TestFixtureBuilder().build();
        var test = new test_builder_1.TestBuilder().build();
        alsatian_core_1.Expect(function () { return new test_item_1.TestItem(testFixture, test, testCase); }).toThrowError(TypeError, "testCase must not be null or undefined.");
    };
    __decorate([
        alsatian_core_1.TestCase(null),
        alsatian_core_1.TestCase(undefined),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TestItemConstructorTests.prototype, "nullOrUndefinedTestFixtureThrowsError", null);
    __decorate([
        alsatian_core_1.TestCase(null),
        alsatian_core_1.TestCase(undefined),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TestItemConstructorTests.prototype, "nullOrUndefinedTestThrowsError", null);
    __decorate([
        alsatian_core_1.TestCase(null),
        alsatian_core_1.TestCase(undefined),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TestItemConstructorTests.prototype, "nullOrUndefinedTestCaseThrowsError", null);
    return TestItemConstructorTests;
}());
exports.TestItemConstructorTests = TestItemConstructorTests;
//# sourceMappingURL=constructor.spec.js.map