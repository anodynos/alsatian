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
var results_1 = require("../../../core/results");
var running_1 = require("../../../core/running");
var test_builder_1 = require("../../builders/test-builder");
var test_case_builder_1 = require("../../builders/test-case-builder");
var test_fixture_builder_1 = require("../../builders/test-fixture-builder");
var test_set_builder_1 = require("../../builders/test-set-builder");
var TestSetRunInfoTests = /** @class */ (function () {
    function TestSetRunInfoTests() {
    }
    TestSetRunInfoTests.prototype.correctTestPlanSet = function (testPlan) {
        var testSetRunInfo = new running_1.TestSetRunInfo(testPlan, new results_1.TestSetResults(), 1);
        alsatian_core_1.Expect(testSetRunInfo.testPlan).toBe(testPlan);
    };
    TestSetRunInfoTests.prototype.correctTestSetResultsSet = function (testSetResults) {
        var testSet = new test_set_builder_1.TestSetBuilder().build();
        var testSetRunInfo = new running_1.TestSetRunInfo(new running_1.TestPlan(testSet), testSetResults, 1);
        alsatian_core_1.Expect(testSetRunInfo.testSetResults).toBe(testSetResults);
    };
    TestSetRunInfoTests.prototype.correctTimeoutSet = function (timeout) {
        var testSet = new test_set_builder_1.TestSetBuilder().build();
        var testSetRunInfo = new running_1.TestSetRunInfo(new running_1.TestPlan(testSet), new results_1.TestSetResults(), timeout);
        alsatian_core_1.Expect(testSetRunInfo.timeout).toBe(timeout);
    };
    TestSetRunInfoTests.prototype.settingNullOrUndefinedTestPlanItemThrowsError = function (testPlanItem) {
        var testSet = new test_set_builder_1.TestSetBuilder().build();
        var testSetRunInfo = new running_1.TestSetRunInfo(new running_1.TestPlan(testSet), new results_1.TestSetResults(), 1);
        alsatian_core_1.Expect(function () { return (testSetRunInfo.testPlanItem = testPlanItem); }).toThrowError(TypeError, "testPlanItem must not be null or undefined.");
    };
    TestSetRunInfoTests.prototype.settingTestPlanItemIsStored = function () {
        var testSet = new test_set_builder_1.TestSetBuilder().build();
        var testSetRunInfo = new running_1.TestSetRunInfo(new running_1.TestPlan(testSet), new results_1.TestSetResults(), 1);
        var testPlanItem = new running_1.TestItem(new test_fixture_builder_1.TestFixtureBuilder().build(), new test_builder_1.TestBuilder().build(), new test_case_builder_1.TestCaseBuilder().build());
        testSetRunInfo.testPlanItem = testPlanItem;
        alsatian_core_1.Expect(testSetRunInfo.testPlanItem).toBe(testPlanItem);
    };
    __decorate([
        alsatian_core_1.TestCase(undefined),
        alsatian_core_1.TestCase(null),
        alsatian_core_1.TestCase(new running_1.TestPlan(new test_set_builder_1.TestSetBuilder().build())),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [running_1.TestPlan]),
        __metadata("design:returntype", void 0)
    ], TestSetRunInfoTests.prototype, "correctTestPlanSet", null);
    __decorate([
        alsatian_core_1.TestCase(undefined),
        alsatian_core_1.TestCase(null),
        alsatian_core_1.TestCase(new results_1.TestSetResults()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [results_1.TestSetResults]),
        __metadata("design:returntype", void 0)
    ], TestSetRunInfoTests.prototype, "correctTestSetResultsSet", null);
    __decorate([
        alsatian_core_1.TestCase(0),
        alsatian_core_1.TestCase(1),
        alsatian_core_1.TestCase(42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], TestSetRunInfoTests.prototype, "correctTimeoutSet", null);
    __decorate([
        alsatian_core_1.TestCase(null),
        alsatian_core_1.TestCase(undefined),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [running_1.TestItem]),
        __metadata("design:returntype", void 0)
    ], TestSetRunInfoTests.prototype, "settingNullOrUndefinedTestPlanItemThrowsError", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TestSetRunInfoTests.prototype, "settingTestPlanItemIsStored", null);
    return TestSetRunInfoTests;
}());
exports.TestSetRunInfoTests = TestSetRunInfoTests;
//# sourceMappingURL=test-set-run-info.spec.js.map