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
var test_set_results_1 = require("../../../core/results/test-set-results");
var test_builder_1 = require("../../builders/test-builder");
var test_fixture_builder_1 = require("../../builders/test-fixture-builder");
var TestSetResultsTests = /** @class */ (function () {
    function TestSetResultsTests() {
    }
    TestSetResultsTests.prototype.onePassingTestFixtureOutcomePass = function () {
        var testFixture = new test_fixture_builder_1.TestFixtureBuilder().build();
        var test = new test_builder_1.TestBuilder().build();
        var testSetResults = new test_set_results_1.TestSetResults();
        testSetResults
            .addTestFixtureResult(testFixture)
            .addTestResult(test)
            .addTestCaseResult([]);
        alsatian_core_1.Expect(testSetResults.outcome).toBe(test_outcome_1.TestOutcome.Pass);
    };
    TestSetResultsTests.prototype.oneIgnoredTestFixtureOutcomeSkip = function () {
        var testFixture = new test_fixture_builder_1.TestFixtureBuilder().build();
        var test = new test_builder_1.TestBuilder().build();
        test.ignored = true;
        var testSetResults = new test_set_results_1.TestSetResults();
        testSetResults
            .addTestFixtureResult(testFixture)
            .addTestResult(test)
            .addTestCaseResult([]);
        alsatian_core_1.Expect(testSetResults.outcome).toBe(test_outcome_1.TestOutcome.Skip);
    };
    TestSetResultsTests.prototype.oneTestFixtureErrorOutcomeError = function (errorType) {
        var testFixture = new test_fixture_builder_1.TestFixtureBuilder().build();
        var test = new test_builder_1.TestBuilder().build();
        var testSetResults = new test_set_results_1.TestSetResults();
        testSetResults
            .addTestFixtureResult(testFixture)
            .addTestResult(test)
            .addTestCaseResult([], new errorType());
        alsatian_core_1.Expect(testSetResults.outcome).toBe(test_outcome_1.TestOutcome.Error);
    };
    TestSetResultsTests.prototype.oneTestFixtureMatchErrorOutcomeFail = function (errorType) {
        var testFixture = new test_fixture_builder_1.TestFixtureBuilder().build();
        var test = new test_builder_1.TestBuilder().build();
        var testSetResults = new test_set_results_1.TestSetResults();
        testSetResults
            .addTestFixtureResult(testFixture)
            .addTestResult(test)
            .addTestCaseResult([], new errorType());
        alsatian_core_1.Expect(testSetResults.outcome).toBe(test_outcome_1.TestOutcome.Fail);
    };
    TestSetResultsTests.prototype.twoTestFixturesOnePassOneMatchErrorOutcomeFail = function (errorType) {
        var testFixture = new test_fixture_builder_1.TestFixtureBuilder().build();
        var test = new test_builder_1.TestBuilder().build();
        var testSetResults = new test_set_results_1.TestSetResults();
        testSetResults
            .addTestFixtureResult(testFixture)
            .addTestResult(test)
            .addTestCaseResult([]);
        testSetResults
            .addTestFixtureResult(testFixture)
            .addTestResult(test)
            .addTestCaseResult([], new errorType());
        alsatian_core_1.Expect(testSetResults.outcome).toBe(test_outcome_1.TestOutcome.Fail);
    };
    TestSetResultsTests.prototype.twoTestFixturesOnePassOneErrorOutcomeError = function (errorType) {
        var testFixture = new test_fixture_builder_1.TestFixtureBuilder().build();
        var test = new test_builder_1.TestBuilder().build();
        var testSetResults = new test_set_results_1.TestSetResults();
        testSetResults
            .addTestFixtureResult(testFixture)
            .addTestResult(test)
            .addTestCaseResult([]);
        testSetResults
            .addTestFixtureResult(testFixture)
            .addTestResult(test)
            .addTestCaseResult([], new errorType());
        alsatian_core_1.Expect(testSetResults.outcome).toBe(test_outcome_1.TestOutcome.Error);
    };
    TestSetResultsTests.prototype.twoTestFixturesOneMatchErrorOneErrorOutcomeError = function (errorTypeA, errorTypeB) {
        var testFixture = new test_fixture_builder_1.TestFixtureBuilder().build();
        var test = new test_builder_1.TestBuilder().build();
        var testSetResults = new test_set_results_1.TestSetResults();
        testSetResults
            .addTestFixtureResult(testFixture)
            .addTestResult(test)
            .addTestCaseResult([], new errorTypeA());
        testSetResults
            .addTestFixtureResult(testFixture)
            .addTestResult(test)
            .addTestCaseResult([], new errorTypeB());
        alsatian_core_1.Expect(testSetResults.outcome).toBe(test_outcome_1.TestOutcome.Error);
    };
    TestSetResultsTests.prototype.twoTestFixturesNoErrorOutcomePass = function () {
        var testFixture = new test_fixture_builder_1.TestFixtureBuilder().build();
        var test = new test_builder_1.TestBuilder().build();
        var testSetResults = new test_set_results_1.TestSetResults();
        testSetResults
            .addTestFixtureResult(testFixture)
            .addTestResult(test)
            .addTestCaseResult([]);
        testSetResults
            .addTestFixtureResult(testFixture)
            .addTestResult(test)
            .addTestCaseResult([]);
        alsatian_core_1.Expect(testSetResults.outcome).toBe(test_outcome_1.TestOutcome.Pass);
    };
    TestSetResultsTests.prototype.correctNumberOfTestFixtureResultsAdded = function (testFixtureCount) {
        var testSetResults = new test_set_results_1.TestSetResults();
        for (var i = 0; i < testFixtureCount; i++) {
            var testFixture = new test_fixture_builder_1.TestFixtureBuilder().build();
            var test = new test_builder_1.TestBuilder().build();
            testSetResults
                .addTestFixtureResult(testFixture)
                .addTestResult(test)
                .addTestCaseResult([]);
        }
        alsatian_core_1.Expect(testSetResults.testFixtureResults.length).toBe(testFixtureCount);
    };
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TestSetResultsTests.prototype, "onePassingTestFixtureOutcomePass", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TestSetResultsTests.prototype, "oneIgnoredTestFixtureOutcomeSkip", null);
    __decorate([
        alsatian_core_1.TestCase(TypeError),
        alsatian_core_1.TestCase(RangeError),
        alsatian_core_1.TestCase(EvalError),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function]),
        __metadata("design:returntype", void 0)
    ], TestSetResultsTests.prototype, "oneTestFixtureErrorOutcomeError", null);
    __decorate([
        alsatian_core_1.TestCase(errors_1.MatchError),
        alsatian_core_1.TestCase(errors_1.ExactMatchError),
        alsatian_core_1.TestCase(errors_1.EqualMatchError),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function]),
        __metadata("design:returntype", void 0)
    ], TestSetResultsTests.prototype, "oneTestFixtureMatchErrorOutcomeFail", null);
    __decorate([
        alsatian_core_1.TestCase(errors_1.MatchError),
        alsatian_core_1.TestCase(errors_1.ExactMatchError),
        alsatian_core_1.TestCase(errors_1.EqualMatchError),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function]),
        __metadata("design:returntype", void 0)
    ], TestSetResultsTests.prototype, "twoTestFixturesOnePassOneMatchErrorOutcomeFail", null);
    __decorate([
        alsatian_core_1.TestCase(EvalError),
        alsatian_core_1.TestCase(RangeError),
        alsatian_core_1.TestCase(TypeError),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function]),
        __metadata("design:returntype", void 0)
    ], TestSetResultsTests.prototype, "twoTestFixturesOnePassOneErrorOutcomeError", null);
    __decorate([
        alsatian_core_1.TestCase(EvalError, errors_1.MatchError),
        alsatian_core_1.TestCase(errors_1.ExactMatchError, RangeError),
        alsatian_core_1.TestCase(TypeError, errors_1.EqualMatchError),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function, Function]),
        __metadata("design:returntype", void 0)
    ], TestSetResultsTests.prototype, "twoTestFixturesOneMatchErrorOneErrorOutcomeError", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TestSetResultsTests.prototype, "twoTestFixturesNoErrorOutcomePass", null);
    __decorate([
        alsatian_core_1.TestCase(1),
        alsatian_core_1.TestCase(2),
        alsatian_core_1.TestCase(42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], TestSetResultsTests.prototype, "correctNumberOfTestFixtureResultsAdded", null);
    return TestSetResultsTests;
}());
exports.TestSetResultsTests = TestSetResultsTests;
//# sourceMappingURL=test-set-results.spec.js.map