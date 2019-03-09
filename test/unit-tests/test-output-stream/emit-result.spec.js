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
var test_builder_1 = require("../../builders/test-builder");
var test_outcome_1 = require("../../../core/results/test-outcome");
var _getErrorYaml = function (error) {
    return (" ---\n" +
        ("   message: \"" + error.message
            .replace(/\\/g, "\\\\")
            .replace(/"/g, '\\"') + "\"\n") +
        "   severity: fail\n" +
        "   data:\n" +
        ("     got: " + JSON.stringify(error.actual) + "\n") +
        ("     expect: " + JSON.stringify(error.expected) + "\n ...\n"));
};
var _getUnhandledErrorMessage = function (stack) {
    return (" ---\n" +
        '   message: "The test threw an unhandled error."\n' +
        "   severity: fail\n" +
        "   data:\n" +
        "     got: an unhandled error\n" +
        "     expect: no unhandled errors to be thrown\n" +
        "     stack: |\n" +
        stack
            .split("\n")
            .map(function (l) { return "       " + l; })
            .join("\n") +
        "\n" +
        " ...\n");
};
function _getUnhandledErrorMessageNoStack() {
    return (" ---\n" +
        '   message: "The test threw an unhandled error."\n' +
        "   severity: fail\n" +
        "   data:\n" +
        "     got: an unhandled error\n" +
        "     expect: no unhandled errors to be thrown\n" +
        " ...\n");
}
var EmitResultTests = /** @class */ (function () {
    function EmitResultTests() {
    }
    EmitResultTests.prototype.shouldEmitWithCorrectTestId = function (testId) {
        var testOutput = new alsatian_core_1.TestOutputStream();
        alsatian_core_1.SpyOn(testOutput, "push");
        var test = new test_builder_1.TestBuilder().build();
        var testCaseResult = new alsatian_core_1.TestCaseResult(test, []);
        testOutput.emitResult(testId, testCaseResult);
        var expected = "ok " + testId + " " + test.description + "\n";
        alsatian_core_1.Expect(testOutput.push).toHaveBeenCalledWith(expected);
    };
    EmitResultTests.prototype.shouldEmitWithCorrectTestDescription = function (description) {
        var testOutput = new alsatian_core_1.TestOutputStream();
        alsatian_core_1.SpyOn(testOutput, "push");
        var test = new test_builder_1.TestBuilder().withDescription(description).build();
        var testCaseResult = new alsatian_core_1.TestCaseResult(test, []);
        testOutput.emitResult(1, testCaseResult);
        var expected = "ok 1 " + description + "\n";
        alsatian_core_1.Expect(testOutput.push).toHaveBeenCalledWith(expected);
    };
    EmitResultTests.prototype.shouldEmitWithCorrectCaseArguments = function (testCaseArguments, testCaseOutput) {
        var testOutput = new alsatian_core_1.TestOutputStream();
        alsatian_core_1.SpyOn(testOutput, "push");
        var test = new test_builder_1.TestBuilder().build();
        var testCaseResult = new alsatian_core_1.TestCaseResult(test, testCaseArguments);
        testOutput.emitResult(1, testCaseResult);
        var expected = "ok 1 " + test.description + " " + testCaseOutput + "\n";
        alsatian_core_1.Expect(testOutput.push).toHaveBeenCalledWith(expected);
    };
    EmitResultTests.prototype.shouldEmitWithOkIfPass = function () {
        var testOutput = new alsatian_core_1.TestOutputStream();
        alsatian_core_1.SpyOn(testOutput, "push");
        var test = new test_builder_1.TestBuilder().build();
        var testCaseResult = new alsatian_core_1.TestCaseResult(test, []);
        testOutput.emitResult(1, testCaseResult);
        var expected = "ok 1 " + test.description + "\n";
        alsatian_core_1.Expect(testOutput.push).toHaveBeenCalledWith(expected);
    };
    EmitResultTests.prototype.shouldEmitWithNotOkIfPass = function () {
        var testOutput = new alsatian_core_1.TestOutputStream();
        alsatian_core_1.SpyOn(testOutput, "push");
        var test = new test_builder_1.TestBuilder().build();
        // match error causes a "fail"
        var testCaseResult = new alsatian_core_1.TestCaseResult(test, [], new errors_1.MatchError("message", 1, 2));
        testOutput.emitResult(1, testCaseResult);
        var expected = "not ok 1 " + test.description + "\n";
        alsatian_core_1.Expect(testOutput.push).toHaveBeenCalledWith(expected);
    };
    EmitResultTests.prototype.shouldEmitSkipCorrectly = function () {
        var testOutput = new alsatian_core_1.TestOutputStream();
        alsatian_core_1.SpyOn(testOutput, "push");
        var test = new test_builder_1.TestBuilder().ignored().build();
        var testCaseResult = new alsatian_core_1.TestCaseResult(test, []);
        testOutput.emitResult(1, testCaseResult);
        var expected = "ok 1 " + test.description + " # skip\n";
        alsatian_core_1.Expect(testOutput.push).toHaveBeenCalledWith(expected);
    };
    EmitResultTests.prototype.shouldEmitSkipWithReasonCorrectly = function (reason) {
        var testOutput = new alsatian_core_1.TestOutputStream();
        alsatian_core_1.SpyOn(testOutput, "push");
        var test = new test_builder_1.TestBuilder().ignored(reason).build();
        var testCaseResult = new alsatian_core_1.TestCaseResult(test, []);
        testOutput.emitResult(1, testCaseResult);
        var expected = "ok 1 " + test.description + " # skip " + reason + "\n";
        alsatian_core_1.Expect(testOutput.push).toHaveBeenCalledWith(expected);
    };
    EmitResultTests.prototype.shouldEmitErrorCorrectly = function () {
        var testOutput = new alsatian_core_1.TestOutputStream();
        alsatian_core_1.SpyOn(testOutput, "push");
        var test = new test_builder_1.TestBuilder().build();
        // any error apart from a MatchError causes an "error" outcome
        var testCaseResult = new alsatian_core_1.TestCaseResult(test, [], new Error("an error occured when running the test"));
        testOutput.emitResult(1, testCaseResult);
        var expected = "not ok 1 " + test.description + "\n";
        alsatian_core_1.Expect(testOutput.push).toHaveBeenCalledWith(expected);
    };
    EmitResultTests.prototype.shouldEmitYamlWithCorrectMessage = function (message) {
        var testOutput = new alsatian_core_1.TestOutputStream();
        alsatian_core_1.SpyOn(testOutput, "push");
        var test = new test_builder_1.TestBuilder().build();
        var error = new errors_1.MatchError(message, 1, 2);
        var testCaseResult = new alsatian_core_1.TestCaseResult(test, [], error);
        var expected = _getErrorYaml(error);
        testOutput.emitResult(1, testCaseResult);
        alsatian_core_1.Expect(testOutput.push).toHaveBeenCalledWith(expected);
    };
    EmitResultTests.prototype.shouldEmitYamlWithCorrectActualValue = function (actualValue) {
        var testOutput = new alsatian_core_1.TestOutputStream();
        alsatian_core_1.SpyOn(testOutput, "push");
        var test = new test_builder_1.TestBuilder().build();
        var error = new errors_1.EqualMatchError(actualValue, 2, true);
        var testCaseResult = new alsatian_core_1.TestCaseResult(test, [], error);
        var expected = _getErrorYaml(error);
        testOutput.emitResult(1, testCaseResult);
        alsatian_core_1.Expect(testOutput.push).toHaveBeenCalledWith(expected);
    };
    EmitResultTests.prototype.shouldEmitYamlWithCorrectExpectedValue = function (expectedValue) {
        var testOutput = new alsatian_core_1.TestOutputStream();
        alsatian_core_1.SpyOn(testOutput, "push");
        var test = new test_builder_1.TestBuilder().build();
        var error = new errors_1.EqualMatchError(1, expectedValue, true);
        var testCaseResult = new alsatian_core_1.TestCaseResult(test, [], error);
        var expected = _getErrorYaml(error);
        testOutput.emitResult(1, testCaseResult);
        alsatian_core_1.Expect(testOutput.push).toHaveBeenCalledWith(expected);
    };
    EmitResultTests.prototype.invalidResultOutcomeThrowsError = function (testOutcome) {
        var testCaseResult = { outcome: testOutcome };
        var testOutput = new alsatian_core_1.TestOutputStream();
        alsatian_core_1.Expect(function () { return testOutput.emitResult(1, testCaseResult); }).toThrowError(TypeError, "Invalid test outcome: " + testOutcome);
    };
    EmitResultTests.prototype.shouldEmitCorrectUnhandledErrorStack = function (stack) {
        var testOutput = new alsatian_core_1.TestOutputStream();
        alsatian_core_1.SpyOn(testOutput, "push");
        var test = new test_builder_1.TestBuilder().build();
        var error = new Error("empty message");
        error.stack = stack;
        var testCaseResult = new alsatian_core_1.TestCaseResult(test, [], error);
        var expected = _getUnhandledErrorMessage(stack);
        testOutput.emitResult(1, testCaseResult);
        alsatian_core_1.Expect(testOutput.push).toHaveBeenCalledWith(expected);
    };
    EmitResultTests.prototype.shouldEmitCorrectUnhandledErrorWithUndefOrNullError = function (error) {
        var testOutput = new alsatian_core_1.TestOutputStream();
        alsatian_core_1.SpyOn(testOutput, "push");
        var test = new test_builder_1.TestBuilder().build();
        var testCaseResult = new alsatian_core_1.TestCaseResult(test, [], error);
        alsatian_core_1.SpyOnProperty(testCaseResult, "outcome").andCallGetter(function () { return test_outcome_1.TestOutcome.Error; });
        var expected = _getUnhandledErrorMessageNoStack();
        testOutput.emitResult(1, testCaseResult);
        alsatian_core_1.Expect(testOutput.push).toHaveBeenCalledWith(expected);
    };
    __decorate([
        alsatian_core_1.TestCase(1),
        alsatian_core_1.TestCase(2),
        alsatian_core_1.TestCase(3),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], EmitResultTests.prototype, "shouldEmitWithCorrectTestId", null);
    __decorate([
        alsatian_core_1.TestCase("test that should pass"),
        alsatian_core_1.TestCase("bla bla bla"),
        alsatian_core_1.TestCase("hello this is a test"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], EmitResultTests.prototype, "shouldEmitWithCorrectTestDescription", null);
    __decorate([
        alsatian_core_1.TestCase([1, 5, 7, 8], "( 1, 5, 7, 8 )"),
        alsatian_core_1.TestCase(["a", 3, true], '( "a", 3, true )'),
        alsatian_core_1.TestCase([5.25, 6.25, 7.22], "( 5.25, 6.25, 7.22 )"),
        alsatian_core_1.TestCase([TypeError, RangeError], "( TypeError, RangeError )"),
        alsatian_core_1.TestCase([function () { return "I am anonymous"; }], "( anonymous function )"),
        alsatian_core_1.TestCase([undefined], "( undefined )"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array, String]),
        __metadata("design:returntype", void 0)
    ], EmitResultTests.prototype, "shouldEmitWithCorrectCaseArguments", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], EmitResultTests.prototype, "shouldEmitWithOkIfPass", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], EmitResultTests.prototype, "shouldEmitWithNotOkIfPass", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], EmitResultTests.prototype, "shouldEmitSkipCorrectly", null);
    __decorate([
        alsatian_core_1.TestCase("first reason"),
        alsatian_core_1.TestCase("this reason is the second one!"),
        alsatian_core_1.TestCase("last, but most certainly not least"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], EmitResultTests.prototype, "shouldEmitSkipWithReasonCorrectly", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], EmitResultTests.prototype, "shouldEmitErrorCorrectly", null);
    __decorate([
        alsatian_core_1.TestCase("message one"),
        alsatian_core_1.TestCase("another message"),
        alsatian_core_1.TestCase("yaba daba doo"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], EmitResultTests.prototype, "shouldEmitYamlWithCorrectMessage", null);
    __decorate([
        alsatian_core_1.TestCase(5),
        alsatian_core_1.TestCase("tweny"),
        alsatian_core_1.TestCase(false),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], EmitResultTests.prototype, "shouldEmitYamlWithCorrectActualValue", null);
    __decorate([
        alsatian_core_1.TestCase("five"),
        alsatian_core_1.TestCase(20),
        alsatian_core_1.TestCase(true),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], EmitResultTests.prototype, "shouldEmitYamlWithCorrectExpectedValue", null);
    __decorate([
        alsatian_core_1.TestCase(100),
        alsatian_core_1.TestCase(42),
        alsatian_core_1.TestCase(-42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], EmitResultTests.prototype, "invalidResultOutcomeThrowsError", null);
    __decorate([
        alsatian_core_1.TestCase("line 1\nline3\nline 7"),
        alsatian_core_1.TestCase("function foo in a.ts\nfunction bar in z.ts\nfunction x in entry.ts"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], EmitResultTests.prototype, "shouldEmitCorrectUnhandledErrorStack", null);
    __decorate([
        alsatian_core_1.TestCase(undefined),
        alsatian_core_1.TestCase(null),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Error]),
        __metadata("design:returntype", void 0)
    ], EmitResultTests.prototype, "shouldEmitCorrectUnhandledErrorWithUndefOrNullError", null);
    return EmitResultTests;
}());
exports.EmitResultTests = EmitResultTests;
//# sourceMappingURL=emit-result.spec.js.map