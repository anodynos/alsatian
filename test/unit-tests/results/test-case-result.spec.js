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
var test_case_result_1 = require("../../../core/results/test-case-result");
var test_outcome_1 = require("../../../core/results/test-outcome");
var test_builder_1 = require("../../builders/test-builder");
var TestCaseResultTests = /** @class */ (function () {
    function TestCaseResultTests() {
    }
    TestCaseResultTests.prototype.argumentsAreStored = function () {
        var inputArguments = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            inputArguments[_i] = arguments[_i];
        }
        var test = new test_builder_1.TestBuilder().build();
        var testCaseResult = new test_case_result_1.TestCaseResult(test, inputArguments);
        alsatian_core_1.Expect(testCaseResult.arguments).toEqual(inputArguments);
    };
    TestCaseResultTests.prototype.noErrorAndNotIgnoredTestOutcomeIsPass = function () {
        var test = new test_builder_1.TestBuilder().build();
        var testCaseResult = new test_case_result_1.TestCaseResult(test, []);
        alsatian_core_1.Expect(testCaseResult.outcome).toEqual(test_outcome_1.TestOutcome.Pass);
    };
    TestCaseResultTests.prototype.noErrorAndIgnoredTestOutcomeIsSkip = function () {
        var test = new test_builder_1.TestBuilder().build();
        test.ignored = true;
        var testCaseResult = new test_case_result_1.TestCaseResult(test, []);
        alsatian_core_1.Expect(testCaseResult.outcome).toEqual(test_outcome_1.TestOutcome.Skip);
    };
    TestCaseResultTests.prototype.errorOutcomeIsError = function (errorType) {
        var test = new test_builder_1.TestBuilder().build();
        test.ignored = true;
        var testCaseResult = new test_case_result_1.TestCaseResult(test, [], new errorType());
        alsatian_core_1.Expect(testCaseResult.outcome).toEqual(test_outcome_1.TestOutcome.Error);
    };
    TestCaseResultTests.prototype.matchErrorOutcomeIsFail = function (errorType) {
        var test = new test_builder_1.TestBuilder().build();
        test.ignored = true;
        var testCaseResult = new test_case_result_1.TestCaseResult(test, [], new errorType());
        alsatian_core_1.Expect(testCaseResult.outcome).toEqual(test_outcome_1.TestOutcome.Fail);
    };
    __decorate([
        alsatian_core_1.TestCase(),
        alsatian_core_1.TestCase(1),
        alsatian_core_1.TestCase(1, 2),
        alsatian_core_1.TestCase("a", "list", "of", "arguments"),
        alsatian_core_1.TestCase(1, "or", 2, "mixed", "arguments"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TestCaseResultTests.prototype, "argumentsAreStored", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TestCaseResultTests.prototype, "noErrorAndNotIgnoredTestOutcomeIsPass", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TestCaseResultTests.prototype, "noErrorAndIgnoredTestOutcomeIsSkip", null);
    __decorate([
        alsatian_core_1.TestCase(TypeError),
        alsatian_core_1.TestCase(RangeError),
        alsatian_core_1.TestCase(EvalError),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function]),
        __metadata("design:returntype", void 0)
    ], TestCaseResultTests.prototype, "errorOutcomeIsError", null);
    __decorate([
        alsatian_core_1.TestCase(errors_1.MatchError),
        alsatian_core_1.TestCase(errors_1.ExactMatchError),
        alsatian_core_1.TestCase(errors_1.EqualMatchError),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function]),
        __metadata("design:returntype", void 0)
    ], TestCaseResultTests.prototype, "matchErrorOutcomeIsFail", null);
    return TestCaseResultTests;
}());
exports.TestCaseResultTests = TestCaseResultTests;
//# sourceMappingURL=test-case-result.spec.js.map