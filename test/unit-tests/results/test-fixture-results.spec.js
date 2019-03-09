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
var test_fixture_results_1 = require("../../../core/results/test-fixture-results");
var test_outcome_1 = require("../../../core/results/test-outcome");
var test_builder_1 = require("../../builders/test-builder");
var test_fixture_builder_1 = require("../../builders/test-fixture-builder");
var TestFixtureResultsTests = /** @class */ (function () {
    function TestFixtureResultsTests() {
    }
    TestFixtureResultsTests.prototype.onePassingTestOutcomePass = function () {
        var testFixture = new test_fixture_builder_1.TestFixtureBuilder().build();
        var test = new test_builder_1.TestBuilder().build();
        var testFixtureResults = new test_fixture_results_1.TestFixtureResults(testFixture);
        testFixtureResults.addTestResult(test).addTestCaseResult([]);
        alsatian_core_1.Expect(testFixtureResults.outcome).toBe(test_outcome_1.TestOutcome.Pass);
    };
    TestFixtureResultsTests.prototype.oneIgnoredTestOutcomeSkip = function () {
        var testFixture = new test_fixture_builder_1.TestFixtureBuilder().build();
        var test = new test_builder_1.TestBuilder().build();
        test.ignored = true;
        var testFixtureResults = new test_fixture_results_1.TestFixtureResults(testFixture);
        testFixtureResults.addTestResult(test).addTestCaseResult([]);
        alsatian_core_1.Expect(testFixtureResults.outcome).toBe(test_outcome_1.TestOutcome.Skip);
    };
    TestFixtureResultsTests.prototype.oneTestErrorOutcomeError = function (errorType) {
        var testFixture = new test_fixture_builder_1.TestFixtureBuilder().build();
        var test = new test_builder_1.TestBuilder().build();
        var testFixtureResults = new test_fixture_results_1.TestFixtureResults(testFixture);
        testFixtureResults
            .addTestResult(test)
            .addTestCaseResult([], new errorType());
        alsatian_core_1.Expect(testFixtureResults.outcome).toBe(test_outcome_1.TestOutcome.Error);
    };
    TestFixtureResultsTests.prototype.oneTestMatchErrorOutcomeFail = function (errorType) {
        var testFixture = new test_fixture_builder_1.TestFixtureBuilder().build();
        var test = new test_builder_1.TestBuilder().build();
        var testFixtureResults = new test_fixture_results_1.TestFixtureResults(testFixture);
        testFixtureResults
            .addTestResult(test)
            .addTestCaseResult([], new errorType());
        alsatian_core_1.Expect(testFixtureResults.outcome).toBe(test_outcome_1.TestOutcome.Fail);
    };
    TestFixtureResultsTests.prototype.twoTestsOnePassOneMatchErrorOutcomeFail = function (errorType) {
        var testFixture = new test_fixture_builder_1.TestFixtureBuilder().build();
        var test = new test_builder_1.TestBuilder().build();
        var testFixtureResults = new test_fixture_results_1.TestFixtureResults(testFixture);
        testFixtureResults.addTestResult(test).addTestCaseResult([]);
        testFixtureResults
            .addTestResult(test)
            .addTestCaseResult([], new errorType());
        alsatian_core_1.Expect(testFixtureResults.outcome).toBe(test_outcome_1.TestOutcome.Fail);
    };
    TestFixtureResultsTests.prototype.twoTestsOnePassOneErrorOutcomeError = function (errorType) {
        var testFixture = new test_fixture_builder_1.TestFixtureBuilder().build();
        var test = new test_builder_1.TestBuilder().build();
        var testFixtureResults = new test_fixture_results_1.TestFixtureResults(testFixture);
        testFixtureResults.addTestResult(test).addTestCaseResult([]);
        testFixtureResults
            .addTestResult(test)
            .addTestCaseResult([], new errorType());
        alsatian_core_1.Expect(testFixtureResults.outcome).toBe(test_outcome_1.TestOutcome.Error);
    };
    TestFixtureResultsTests.prototype.twoTestsOneMatchErrorOneErrorOutcomeError = function (errorTypeA, errorTypeB) {
        var testFixture = new test_fixture_builder_1.TestFixtureBuilder().build();
        var test = new test_builder_1.TestBuilder().build();
        var testFixtureResults = new test_fixture_results_1.TestFixtureResults(testFixture);
        testFixtureResults
            .addTestResult(test)
            .addTestCaseResult([], new errorTypeA());
        testFixtureResults
            .addTestResult(test)
            .addTestCaseResult([], new errorTypeB());
        alsatian_core_1.Expect(testFixtureResults.outcome).toBe(test_outcome_1.TestOutcome.Error);
    };
    TestFixtureResultsTests.prototype.twoTestsNoErrorOutcomePass = function () {
        var testFixture = new test_fixture_builder_1.TestFixtureBuilder().build();
        var test = new test_builder_1.TestBuilder().build();
        var testFixtureResults = new test_fixture_results_1.TestFixtureResults(testFixture);
        testFixtureResults.addTestResult(test).addTestCaseResult([]);
        testFixtureResults.addTestResult(test).addTestCaseResult([]);
        alsatian_core_1.Expect(testFixtureResults.outcome).toBe(test_outcome_1.TestOutcome.Pass);
    };
    TestFixtureResultsTests.prototype.testFixtureInConstructorIsAccessible = function (description) {
        var testFixture = new test_fixture_builder_1.TestFixtureBuilder()
            .withDescription(description)
            .build();
        var testFixtureResults = new test_fixture_results_1.TestFixtureResults(testFixture);
        alsatian_core_1.Expect(testFixtureResults.fixture).toBe(testFixture);
    };
    TestFixtureResultsTests.prototype.correctNumberOfTestsAdded = function (testCount) {
        var testFixture = new test_fixture_builder_1.TestFixtureBuilder().build();
        var testFixtureResults = new test_fixture_results_1.TestFixtureResults(testFixture);
        for (var i = 0; i < testCount; i++) {
            testFixtureResults.addTestResult(new test_builder_1.TestBuilder().build());
        }
        alsatian_core_1.Expect(testFixtureResults.testResults.length).toBe(testCount);
    };
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TestFixtureResultsTests.prototype, "onePassingTestOutcomePass", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TestFixtureResultsTests.prototype, "oneIgnoredTestOutcomeSkip", null);
    __decorate([
        alsatian_core_1.TestCase(TypeError),
        alsatian_core_1.TestCase(RangeError),
        alsatian_core_1.TestCase(EvalError),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function]),
        __metadata("design:returntype", void 0)
    ], TestFixtureResultsTests.prototype, "oneTestErrorOutcomeError", null);
    __decorate([
        alsatian_core_1.TestCase(errors_1.MatchError),
        alsatian_core_1.TestCase(errors_1.ExactMatchError),
        alsatian_core_1.TestCase(errors_1.EqualMatchError),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function]),
        __metadata("design:returntype", void 0)
    ], TestFixtureResultsTests.prototype, "oneTestMatchErrorOutcomeFail", null);
    __decorate([
        alsatian_core_1.TestCase(errors_1.MatchError),
        alsatian_core_1.TestCase(errors_1.ExactMatchError),
        alsatian_core_1.TestCase(errors_1.EqualMatchError),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function]),
        __metadata("design:returntype", void 0)
    ], TestFixtureResultsTests.prototype, "twoTestsOnePassOneMatchErrorOutcomeFail", null);
    __decorate([
        alsatian_core_1.TestCase(EvalError),
        alsatian_core_1.TestCase(RangeError),
        alsatian_core_1.TestCase(TypeError),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function]),
        __metadata("design:returntype", void 0)
    ], TestFixtureResultsTests.prototype, "twoTestsOnePassOneErrorOutcomeError", null);
    __decorate([
        alsatian_core_1.TestCase(EvalError, errors_1.MatchError),
        alsatian_core_1.TestCase(errors_1.ExactMatchError, RangeError),
        alsatian_core_1.TestCase(TypeError, errors_1.EqualMatchError),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function, Function]),
        __metadata("design:returntype", void 0)
    ], TestFixtureResultsTests.prototype, "twoTestsOneMatchErrorOneErrorOutcomeError", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TestFixtureResultsTests.prototype, "twoTestsNoErrorOutcomePass", null);
    __decorate([
        alsatian_core_1.TestCase("fixture"),
        alsatian_core_1.TestCase("awesome fixture"),
        alsatian_core_1.TestCase("super sweet fixture"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], TestFixtureResultsTests.prototype, "testFixtureInConstructorIsAccessible", null);
    __decorate([
        alsatian_core_1.TestCase(1),
        alsatian_core_1.TestCase(2),
        alsatian_core_1.TestCase(42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], TestFixtureResultsTests.prototype, "correctNumberOfTestsAdded", null);
    return TestFixtureResultsTests;
}());
exports.TestFixtureResultsTests = TestFixtureResultsTests;
//# sourceMappingURL=test-fixture-results.spec.js.map