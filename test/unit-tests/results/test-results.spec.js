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
var test_outcome_1 = require("../../../core/results/test-outcome");
var test_results_1 = require("../../../core/results/test-results");
var test_builder_1 = require("../../builders/test-builder");
var TestResultsTests = /** @class */ (function () {
    function TestResultsTests() {
    }
    TestResultsTests.prototype.oneTestCaseNoErrorOutcomePass = function () {
        var test = new test_builder_1.TestBuilder().build();
        var testResults = new test_results_1.TestResults(test);
        testResults.addTestCaseResult([]);
        alsatian_core_1.Expect(testResults.outcome).toBe(test_outcome_1.TestOutcome.Pass);
    };
    TestResultsTests.prototype.oneIgnoredTestCaseNoErrorOutcomeSkip = function () {
        var test = new test_builder_1.TestBuilder().build();
        test.ignored = true;
        var testResults = new test_results_1.TestResults(test);
        testResults.addTestCaseResult([]);
        alsatian_core_1.Expect(testResults.outcome).toBe(test_outcome_1.TestOutcome.Skip);
    };
    TestResultsTests.prototype.oneTestCaseErrorOutcomeError = function (errorType) {
        var test = new test_builder_1.TestBuilder().build();
        var testResults = new test_results_1.TestResults(test);
        testResults.addTestCaseResult([], new errorType());
        alsatian_core_1.Expect(testResults.outcome).toBe(test_outcome_1.TestOutcome.Error);
    };
    TestResultsTests.prototype.oneTestCaseMatchErrorOutcomeError = function (errorType) {
        var test = new test_builder_1.TestBuilder().build();
        var testResults = new test_results_1.TestResults(test);
        testResults.addTestCaseResult([], new errorType());
        alsatian_core_1.Expect(testResults.outcome).toBe(test_outcome_1.TestOutcome.Fail);
    };
    TestResultsTests.prototype.twoTestCasesOnePassOneMatchErrorOutcomeFail = function (errorType) {
        var test = new test_builder_1.TestBuilder().build();
        var testResults = new test_results_1.TestResults(test);
        testResults.addTestCaseResult([]);
        testResults.addTestCaseResult([], new errorType());
        alsatian_core_1.Expect(testResults.outcome).toBe(test_outcome_1.TestOutcome.Fail);
    };
    TestResultsTests.prototype.twoTestCasesOnePassOneErrorOutcomeError = function (errorType) {
        var test = new test_builder_1.TestBuilder().build();
        var testResults = new test_results_1.TestResults(test);
        testResults.addTestCaseResult([]);
        testResults.addTestCaseResult([], new errorType());
        alsatian_core_1.Expect(testResults.outcome).toBe(test_outcome_1.TestOutcome.Error);
    };
    TestResultsTests.prototype.twoTestCasesOneMatchErrorOneErrorOutcomeError = function (errorTypeA, errorTypeB) {
        var test = new test_builder_1.TestBuilder().build();
        var testResults = new test_results_1.TestResults(test);
        testResults.addTestCaseResult([], new errorTypeA());
        testResults.addTestCaseResult([], new errorTypeB());
        alsatian_core_1.Expect(testResults.outcome).toBe(test_outcome_1.TestOutcome.Error);
    };
    TestResultsTests.prototype.twoTestCasesNoErrorOutcomePass = function () {
        var test = new test_builder_1.TestBuilder().build();
        var testResults = new test_results_1.TestResults(test);
        testResults.addTestCaseResult([]);
        testResults.addTestCaseResult([]);
        alsatian_core_1.Expect(testResults.outcome).toBe(test_outcome_1.TestOutcome.Pass);
    };
    TestResultsTests.prototype.testInConstructorIsAccessible = function (description) {
        var test = new test_builder_1.TestBuilder().withDescription(description).build();
        var testResults = new test_results_1.TestResults(test);
        alsatian_core_1.Expect(testResults.test).toBe(test);
    };
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TestResultsTests.prototype, "oneTestCaseNoErrorOutcomePass", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TestResultsTests.prototype, "oneIgnoredTestCaseNoErrorOutcomeSkip", null);
    __decorate([
        alsatian_core_1.TestCase(TypeError),
        alsatian_core_1.TestCase(RangeError),
        alsatian_core_1.TestCase(EvalError),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function]),
        __metadata("design:returntype", void 0)
    ], TestResultsTests.prototype, "oneTestCaseErrorOutcomeError", null);
    __decorate([
        alsatian_core_1.TestCase(errors_1.MatchError),
        alsatian_core_1.TestCase(errors_1.ExactMatchError),
        alsatian_core_1.TestCase(errors_1.EqualMatchError),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function]),
        __metadata("design:returntype", void 0)
    ], TestResultsTests.prototype, "oneTestCaseMatchErrorOutcomeError", null);
    __decorate([
        alsatian_core_1.TestCase(errors_1.MatchError),
        alsatian_core_1.TestCase(errors_1.ExactMatchError),
        alsatian_core_1.TestCase(errors_1.EqualMatchError),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function]),
        __metadata("design:returntype", void 0)
    ], TestResultsTests.prototype, "twoTestCasesOnePassOneMatchErrorOutcomeFail", null);
    __decorate([
        alsatian_core_1.TestCase(EvalError),
        alsatian_core_1.TestCase(RangeError),
        alsatian_core_1.TestCase(TypeError),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function]),
        __metadata("design:returntype", void 0)
    ], TestResultsTests.prototype, "twoTestCasesOnePassOneErrorOutcomeError", null);
    __decorate([
        alsatian_core_1.TestCase(EvalError, errors_1.MatchError),
        alsatian_core_1.TestCase(errors_1.ExactMatchError, RangeError),
        alsatian_core_1.TestCase(TypeError, errors_1.EqualMatchError),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function, Function]),
        __metadata("design:returntype", void 0)
    ], TestResultsTests.prototype, "twoTestCasesOneMatchErrorOneErrorOutcomeError", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TestResultsTests.prototype, "twoTestCasesNoErrorOutcomePass", null);
    __decorate([
        alsatian_core_1.TestCase("fixture"),
        alsatian_core_1.TestCase("awesome fixture"),
        alsatian_core_1.TestCase("super sweet fixture"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], TestResultsTests.prototype, "testInConstructorIsAccessible", null);
    return TestResultsTests;
}());
exports.TestResultsTests = TestResultsTests;
//# sourceMappingURL=test-results.spec.js.map