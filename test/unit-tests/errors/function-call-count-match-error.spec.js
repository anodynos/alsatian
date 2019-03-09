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
var function_call_count_match_error_1 = require("../../../core/errors/function-call-count-match-error");
var matchers_1 = require("../../../core/matchers");
var function_spy_builder_1 = require("../../builders/function-spy-builder");
var spy_call_builder_1 = require("../../builders/spy-call-builder");
var stringification_1 = require("../../../core/stringification");
var FunctionCallCountMatchErrorTests = /** @class */ (function () {
    function FunctionCallCountMatchErrorTests() {
    }
    FunctionCallCountMatchErrorTests.prototype.shouldBeCalledMessage = function (callCount) {
        var fakeFunction = new function_spy_builder_1.FunctionSpyBuilder().build();
        var error = new function_call_count_match_error_1.FunctionCallCountMatchError(fakeFunction, true, callCount, matchers_1.SpyCallCountType.Exactly);
        if (callCount === 1) {
            alsatian_core_1.Expect(error.message).toBe("Expected function to be called 1 time.");
        }
        else {
            alsatian_core_1.Expect(error.message).toBe("Expected function to be called " + callCount + " times.");
        }
    };
    FunctionCallCountMatchErrorTests.prototype.shouldNotBeCalledMessage = function (callCount) {
        var fakeFunction = new function_spy_builder_1.FunctionSpyBuilder().build();
        fakeFunction.calls.push(new spy_call_builder_1.SpyCallBuilder().build());
        var error = new function_call_count_match_error_1.FunctionCallCountMatchError(fakeFunction, false, callCount, matchers_1.SpyCallCountType.Exactly);
        if (callCount === 1) {
            alsatian_core_1.Expect(error.message).toBe("Expected function not to be called 1 time.");
        }
        else {
            alsatian_core_1.Expect(error.message).toBe("Expected function not to be called " + callCount + " times.");
        }
    };
    FunctionCallCountMatchErrorTests.prototype.shouldBeCalledGreaterThanMessage = function (callCount) {
        var fakeFunction = new function_spy_builder_1.FunctionSpyBuilder().build();
        var error = new function_call_count_match_error_1.FunctionCallCountMatchError(fakeFunction, true, callCount, matchers_1.SpyCallCountType.GreaterThan);
        if (callCount === 1) {
            alsatian_core_1.Expect(error.message).toBe("Expected function to be called greater than 1 time.");
        }
        else {
            alsatian_core_1.Expect(error.message).toBe("Expected function to be called greater than " + callCount + " times.");
        }
    };
    FunctionCallCountMatchErrorTests.prototype.shouldBeCalledLessThanMessage = function (callCount) {
        var fakeFunction = new function_spy_builder_1.FunctionSpyBuilder().build();
        var error = new function_call_count_match_error_1.FunctionCallCountMatchError(fakeFunction, true, callCount, matchers_1.SpyCallCountType.LessThan);
        if (callCount === 1) {
            alsatian_core_1.Expect(error.message).toBe("Expected function to be called less than 1 time.");
        }
        else {
            alsatian_core_1.Expect(error.message).toBe("Expected function to be called less than " + callCount + " times.");
        }
    };
    FunctionCallCountMatchErrorTests.prototype.actualValueAndShouldNotMatchShouldBeSetToFunctionWasCalled = function (callCount) {
        var fakeFunction = new function_spy_builder_1.FunctionSpyBuilder().build();
        for (var i = 0; i < callCount; i++) {
            fakeFunction.calls.push(new spy_call_builder_1.SpyCallBuilder().build());
        }
        var error = new function_call_count_match_error_1.FunctionCallCountMatchError(fakeFunction, false, 100, matchers_1.SpyCallCountType.Exactly);
        if (callCount === 1) {
            alsatian_core_1.Expect(error.actual).toBe("function was called 1 time.");
        }
        else {
            alsatian_core_1.Expect(error.actual).toBe("function was called " + callCount + " times.");
        }
    };
    FunctionCallCountMatchErrorTests.prototype.expectedValueAndShouldMatchShouldBeSetToFunctionToBeCalled = function (callCount) {
        var fakeFunction = new function_spy_builder_1.FunctionSpyBuilder().build();
        var error = new function_call_count_match_error_1.FunctionCallCountMatchError(fakeFunction, true, callCount, matchers_1.SpyCallCountType.Exactly);
        if (callCount === 1) {
            alsatian_core_1.Expect(error.message).toBe("Expected function to be called 1 time.");
        }
        else {
            alsatian_core_1.Expect(error.message).toBe("Expected function to be called " + callCount + " times.");
        }
    };
    FunctionCallCountMatchErrorTests.prototype.expectedValueAndShouldNotMatchShouldBeSetToFunctionNotToBeCalled = function (callCount) {
        var fakeFunction = new function_spy_builder_1.FunctionSpyBuilder().build();
        fakeFunction.calls.push(new spy_call_builder_1.SpyCallBuilder().build());
        var error = new function_call_count_match_error_1.FunctionCallCountMatchError(fakeFunction, false, callCount, matchers_1.SpyCallCountType.Exactly);
        if (callCount === 1) {
            alsatian_core_1.Expect(error.message).toBe("Expected function not to be called 1 time.");
        }
        else {
            alsatian_core_1.Expect(error.message).toBe("Expected function not to be called " + callCount + " times.");
        }
    };
    FunctionCallCountMatchErrorTests.prototype.expectedValueAndShouldMatchGreaterThanShouldBeSetToFunctionToBeCalled = function (callCount) {
        var fakeFunction = new function_spy_builder_1.FunctionSpyBuilder().build();
        var error = new function_call_count_match_error_1.FunctionCallCountMatchError(fakeFunction, true, callCount, matchers_1.SpyCallCountType.GreaterThan);
        if (callCount === 1) {
            alsatian_core_1.Expect(error.message).toBe("Expected function to be called greater than 1 time.");
        }
        else {
            alsatian_core_1.Expect(error.message).toBe("Expected function to be called greater than " + callCount + " times.");
        }
    };
    FunctionCallCountMatchErrorTests.prototype.expectedValueAndShouldMatchLessThanShouldBeSetToFunctionToBeCalled = function (callCount) {
        var fakeFunction = new function_spy_builder_1.FunctionSpyBuilder().build();
        var error = new function_call_count_match_error_1.FunctionCallCountMatchError(fakeFunction, true, callCount, matchers_1.SpyCallCountType.LessThan);
        if (callCount === 1) {
            alsatian_core_1.Expect(error.message).toBe("Expected function to be called less than 1 time.");
        }
        else {
            alsatian_core_1.Expect(error.message).toBe("Expected function to be called less than " + callCount + " times.");
        }
    };
    FunctionCallCountMatchErrorTests.prototype.shouldBeCalledWithArgsMessage = function (args) {
        var fakeFunction = new function_spy_builder_1.FunctionSpyBuilder().build();
        fakeFunction.calls.push(new spy_call_builder_1.SpyCallBuilder().build());
        var error = new function_call_count_match_error_1.FunctionCallCountMatchError(fakeFunction, true, 1, matchers_1.SpyCallCountType.Exactly, args);
        alsatian_core_1.Expect(error.message).toBe("Expected function to be called with [" +
            args.map(function (arg) { return JSON.stringify(arg); }).join(", ") +
            "] 1 time.");
    };
    FunctionCallCountMatchErrorTests.prototype.shouldNotBeCalledWithArgsMessage = function (expectedArguments) {
        var fakeFunction = new function_spy_builder_1.FunctionSpyBuilder().build();
        fakeFunction.calls.push(new spy_call_builder_1.SpyCallBuilder().withArguments(expectedArguments).build());
        var error = new function_call_count_match_error_1.FunctionCallCountMatchError(fakeFunction, false, 1, matchers_1.SpyCallCountType.Exactly, expectedArguments);
        alsatian_core_1.Expect(error.message).toBe("Expected function not to be called with " +
            ("[" + expectedArguments
                .map(function (arg) { return JSON.stringify(arg); })
                .join(", ") + "] 1 time."));
    };
    FunctionCallCountMatchErrorTests.prototype.shouldBeCalledGreaterThanWithArgsMessage = function (args) {
        var fakeFunction = new function_spy_builder_1.FunctionSpyBuilder().build();
        fakeFunction.calls.push(new spy_call_builder_1.SpyCallBuilder().build());
        var error = new function_call_count_match_error_1.FunctionCallCountMatchError(fakeFunction, true, 1, matchers_1.SpyCallCountType.GreaterThan, args);
        alsatian_core_1.Expect(error.message).toBe("Expected function to be called " +
            "with [" +
            args.map(function (arg) { return JSON.stringify(arg); }).join(", ") +
            "] greater than 1 time.");
    };
    FunctionCallCountMatchErrorTests.prototype.shouldBeCalledLessThanWithArgsMessage = function (expectedArguments) {
        var fakeFunction = new function_spy_builder_1.FunctionSpyBuilder().build();
        fakeFunction.calls.push(new spy_call_builder_1.SpyCallBuilder().withArguments(expectedArguments).build());
        var error = new function_call_count_match_error_1.FunctionCallCountMatchError(fakeFunction, true, 1, matchers_1.SpyCallCountType.LessThan, expectedArguments);
        alsatian_core_1.Expect(error.message).toBe("Expected function to be called with " +
            ("[" + expectedArguments
                .map(function (arg) { return JSON.stringify(arg); })
                .join(", ") + "] less than 1 time."));
    };
    FunctionCallCountMatchErrorTests.prototype.actualValueAndShouldMatchShouldBeSetToFunctionWasNotCalledWithArguments = function (actualArgumentsList) {
        var fakeFunction = new function_spy_builder_1.FunctionSpyBuilder().build();
        actualArgumentsList.forEach(function (actualArguments) {
            fakeFunction.calls.push(new spy_call_builder_1.SpyCallBuilder().withArguments(actualArguments).build());
        });
        var error = new function_call_count_match_error_1.FunctionCallCountMatchError(fakeFunction, true, 1, matchers_1.SpyCallCountType.Exactly, []);
        alsatian_core_1.Expect(error.actual).toBe("function was called " +
            "with " +
            actualArgumentsList.map(stringification_1.stringify).join(", ") +
            " " +
            actualArgumentsList.length +
            " time" +
            (actualArgumentsList.length !== 1 ? "s" : "") +
            ".");
    };
    FunctionCallCountMatchErrorTests.prototype.actualValueAndShouldNotMatchShouldBeSetToFunctionWasCalledWithArguments = function (actualArgumentsList) {
        var fakeFunction = new function_spy_builder_1.FunctionSpyBuilder().build();
        actualArgumentsList.forEach(function (actualArguments) {
            fakeFunction.calls.push(new spy_call_builder_1.SpyCallBuilder().withArguments(actualArguments).build());
        });
        var error = new function_call_count_match_error_1.FunctionCallCountMatchError(fakeFunction, false, 1, matchers_1.SpyCallCountType.Exactly, []);
        alsatian_core_1.Expect(error.actual).toBe("function was called " +
            "with " +
            actualArgumentsList.map(stringification_1.stringify).join(", ") +
            " " +
            actualArgumentsList.length +
            " time" +
            (actualArgumentsList.length !== 1 ? "s" : "") +
            ".");
    };
    FunctionCallCountMatchErrorTests.prototype.actualValueAndShouldMatchGreaterThanShouldBeSetToFunctionWasNotCalledWithArguments = function (actualArgumentsList) {
        var fakeFunction = new function_spy_builder_1.FunctionSpyBuilder().build();
        actualArgumentsList.forEach(function (actualArguments) {
            fakeFunction.calls.push(new spy_call_builder_1.SpyCallBuilder().withArguments(actualArguments).build());
        });
        var error = new function_call_count_match_error_1.FunctionCallCountMatchError(fakeFunction, true, 1, matchers_1.SpyCallCountType.GreaterThan, []);
        alsatian_core_1.Expect(error.actual).toBe("function was called " +
            "with " +
            actualArgumentsList.map(stringification_1.stringify).join(", ") +
            " " +
            actualArgumentsList.length +
            " time" +
            (actualArgumentsList.length !== 1 ? "s" : "") +
            ".");
    };
    FunctionCallCountMatchErrorTests.prototype.actualValueAndShouldMatchLessThanShouldBeSetToFunctionWasNotCalledWithArguments = function (actualArgumentsList) {
        var fakeFunction = new function_spy_builder_1.FunctionSpyBuilder().build();
        actualArgumentsList.forEach(function (actualArguments) {
            fakeFunction.calls.push(new spy_call_builder_1.SpyCallBuilder().withArguments(actualArguments).build());
        });
        var error = new function_call_count_match_error_1.FunctionCallCountMatchError(fakeFunction, true, 1, matchers_1.SpyCallCountType.GreaterThan, []);
        alsatian_core_1.Expect(error.actual).toBe("function was called " +
            "with " +
            actualArgumentsList.map(stringification_1.stringify).join(", ") +
            " " +
            actualArgumentsList.length +
            " time" +
            (actualArgumentsList.length !== 1 ? "s" : "") +
            ".");
    };
    FunctionCallCountMatchErrorTests.prototype.expectedValueAndShouldMatchShouldBeSetToFunctionToBeCalledWithArguments = function (expectedArguments) {
        var fakeFunction = new function_spy_builder_1.FunctionSpyBuilder().build();
        var error = new function_call_count_match_error_1.FunctionCallCountMatchError(fakeFunction, true, 1, matchers_1.SpyCallCountType.Exactly, expectedArguments);
        alsatian_core_1.Expect(error.expected).toBe("function to be called with " +
            JSON.stringify(expectedArguments).replace(/,/g, ", ") +
            " 1 time.");
    };
    FunctionCallCountMatchErrorTests.prototype.expectedValueAndShouldNotMatchShouldBeSetToFunctionNotToBeCalledWithArguments = function (expectedArguments) {
        var fakeFunction = new function_spy_builder_1.FunctionSpyBuilder().build();
        fakeFunction.calls.push(new spy_call_builder_1.SpyCallBuilder().withArguments(expectedArguments).build());
        var error = new function_call_count_match_error_1.FunctionCallCountMatchError(fakeFunction, false, 1, matchers_1.SpyCallCountType.Exactly, expectedArguments);
        alsatian_core_1.Expect(error.expected).toBe("function not to be called with " +
            JSON.stringify(expectedArguments).replace(/,/g, ", ") +
            " 1 time.");
    };
    FunctionCallCountMatchErrorTests.prototype.anyArgumentOutputAsAnythingInMessage = function () {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var functionCallError = new function_call_count_match_error_1.FunctionCallCountMatchError(fakeSpy, true, 1, matchers_1.SpyCallCountType.Exactly, [alsatian_core_1.Any]);
        alsatian_core_1.Expect(functionCallError.message).toBe("Expected function to be called with [Anything] 1 time.");
    };
    FunctionCallCountMatchErrorTests.prototype.twoAnyArgumentsBothOutputAsAnythingInMessage = function () {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var functionCallError = new function_call_count_match_error_1.FunctionCallCountMatchError(fakeSpy, true, 1, matchers_1.SpyCallCountType.Exactly, [alsatian_core_1.Any, alsatian_core_1.Any]);
        alsatian_core_1.Expect(functionCallError.message).toBe("Expected function to be called with [Anything, Anything] 1 time.");
    };
    FunctionCallCountMatchErrorTests.prototype.anyArgumentOutputAsAnythingInNotExpectedMessage = function () {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var functionCallError = new function_call_count_match_error_1.FunctionCallCountMatchError(fakeSpy, false, 1, matchers_1.SpyCallCountType.Exactly, [alsatian_core_1.Any]);
        alsatian_core_1.Expect(functionCallError.message).toBe("Expected function not to be called with [Anything] 1 time.");
    };
    FunctionCallCountMatchErrorTests.prototype.twoAnyArgumentsBothOutputAsAnythingInNotExpectedMessage = function () {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var functionCallError = new function_call_count_match_error_1.FunctionCallCountMatchError(fakeSpy, false, 1, matchers_1.SpyCallCountType.Exactly, [alsatian_core_1.Any, alsatian_core_1.Any]);
        alsatian_core_1.Expect(functionCallError.message).toBe("Expected function not to be called with [Anything, Anything] 1 time.");
    };
    FunctionCallCountMatchErrorTests.prototype.anyArgumentOutputAsAnythingInGreaterThanMessage = function () {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var functionCallError = new function_call_count_match_error_1.FunctionCallCountMatchError(fakeSpy, true, 1, matchers_1.SpyCallCountType.GreaterThan, [alsatian_core_1.Any]);
        alsatian_core_1.Expect(functionCallError.message).toBe("Expected function to be called with [Anything] greater than 1 time.");
    };
    FunctionCallCountMatchErrorTests.prototype.twoAnyArgumentsBothOutputAsAnythingInGreaterThanMessage = function () {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var functionCallError = new function_call_count_match_error_1.FunctionCallCountMatchError(fakeSpy, true, 1, matchers_1.SpyCallCountType.GreaterThan, [alsatian_core_1.Any, alsatian_core_1.Any]);
        alsatian_core_1.Expect(functionCallError.message).toBe("Expected function to be called with [Anything, Anything] greater than 1 time.");
    };
    FunctionCallCountMatchErrorTests.prototype.anyArgumentOutputAsAnythingInLessThanMessage = function () {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var functionCallError = new function_call_count_match_error_1.FunctionCallCountMatchError(fakeSpy, true, 1, matchers_1.SpyCallCountType.LessThan, [alsatian_core_1.Any]);
        alsatian_core_1.Expect(functionCallError.message).toBe("Expected function to be called with [Anything] less than 1 time.");
    };
    FunctionCallCountMatchErrorTests.prototype.twoAnyArgumentsBothOutputAsAnythingInLessThanMessage = function () {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var functionCallError = new function_call_count_match_error_1.FunctionCallCountMatchError(fakeSpy, true, 1, matchers_1.SpyCallCountType.LessThan, [alsatian_core_1.Any, alsatian_core_1.Any]);
        alsatian_core_1.Expect(functionCallError.message).toBe("Expected function to be called with [Anything, Anything] less than 1 time.");
    };
    FunctionCallCountMatchErrorTests.prototype.anyArgumentOutputAsAnythingInExpectedValue = function () {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var functionCallError = new function_call_count_match_error_1.FunctionCallCountMatchError(fakeSpy, true, 1, matchers_1.SpyCallCountType.Exactly, [alsatian_core_1.Any]);
        alsatian_core_1.Expect(functionCallError.expected).toBe("function to be called with [Anything] 1 time.");
    };
    FunctionCallCountMatchErrorTests.prototype.twoAnyArgumentsBothOutputAsAnythingInExpectedValue = function () {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var functionCallError = new function_call_count_match_error_1.FunctionCallCountMatchError(fakeSpy, true, 1, matchers_1.SpyCallCountType.Exactly, [alsatian_core_1.Any, alsatian_core_1.Any]);
        alsatian_core_1.Expect(functionCallError.expected).toBe("function to be called with [Anything, Anything] 1 time.");
    };
    FunctionCallCountMatchErrorTests.prototype.anyArgumentOutputAsAnythingInNotExpectedValue = function () {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var functionCallError = new function_call_count_match_error_1.FunctionCallCountMatchError(fakeSpy, false, 1, matchers_1.SpyCallCountType.Exactly, [alsatian_core_1.Any]);
        alsatian_core_1.Expect(functionCallError.expected).toBe("function not to be called with [Anything] 1 time.");
    };
    FunctionCallCountMatchErrorTests.prototype.twoAnyArgumentsBothOutputAsAnythingInNotExpectedValue = function () {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var functionCallError = new function_call_count_match_error_1.FunctionCallCountMatchError(fakeSpy, false, 1, matchers_1.SpyCallCountType.Exactly, [alsatian_core_1.Any, alsatian_core_1.Any]);
        alsatian_core_1.Expect(functionCallError.expected).toBe("function not to be called with [Anything, Anything] 1 time.");
    };
    FunctionCallCountMatchErrorTests.prototype.anyArgumentOutputAsAnythingInGreaterThanExpectedValue = function () {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var functionCallError = new function_call_count_match_error_1.FunctionCallCountMatchError(fakeSpy, true, 1, matchers_1.SpyCallCountType.GreaterThan, [alsatian_core_1.Any]);
        alsatian_core_1.Expect(functionCallError.expected).toBe("function to be called with [Anything] greater than 1 time.");
    };
    FunctionCallCountMatchErrorTests.prototype.twoAnyArgumentsBothOutputAsAnythingInGreaterThanExpectedValue = function () {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var functionCallError = new function_call_count_match_error_1.FunctionCallCountMatchError(fakeSpy, true, 1, matchers_1.SpyCallCountType.GreaterThan, [alsatian_core_1.Any, alsatian_core_1.Any]);
        alsatian_core_1.Expect(functionCallError.expected).toBe("function to be called with [Anything, Anything] greater than 1 time.");
    };
    FunctionCallCountMatchErrorTests.prototype.anyArgumentOutputAsAnythingInLessThanExpectedValue = function () {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var functionCallError = new function_call_count_match_error_1.FunctionCallCountMatchError(fakeSpy, true, 1, matchers_1.SpyCallCountType.LessThan, [alsatian_core_1.Any]);
        alsatian_core_1.Expect(functionCallError.expected).toBe("function to be called with [Anything] less than 1 time.");
    };
    FunctionCallCountMatchErrorTests.prototype.twoAnyArgumentsBothOutputAsAnythingInLessThanExpectedValue = function () {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var functionCallError = new function_call_count_match_error_1.FunctionCallCountMatchError(fakeSpy, true, 1, matchers_1.SpyCallCountType.LessThan, [alsatian_core_1.Any, alsatian_core_1.Any]);
        alsatian_core_1.Expect(functionCallError.expected).toBe("function to be called with [Anything, Anything] less than 1 time.");
    };
    FunctionCallCountMatchErrorTests.prototype.anyTypeArgumentOutputAsAnyTypeInMessage = function (type) {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var functionCallError = new function_call_count_match_error_1.FunctionCallCountMatchError(fakeSpy, true, 1, matchers_1.SpyCallCountType.Exactly, [alsatian_core_1.Any(type)]);
        alsatian_core_1.Expect(functionCallError.message).toBe("Expected function to be called with [Any " +
            type.name +
            "] 1 time.");
    };
    FunctionCallCountMatchErrorTests.prototype.twoAnyTypeArgumentsBothOutputAsAnyTypeInMessage = function (typeOne, typeTwo) {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var functionCallError = new function_call_count_match_error_1.FunctionCallCountMatchError(fakeSpy, true, 1, matchers_1.SpyCallCountType.Exactly, [alsatian_core_1.Any(typeOne), alsatian_core_1.Any(typeTwo)]);
        alsatian_core_1.Expect(functionCallError.message).toBe("Expected function to be called " +
            "with [Any " +
            typeOne.name +
            ", Any " +
            typeTwo.name +
            "] 1 time.");
    };
    FunctionCallCountMatchErrorTests.prototype.anyTypeArgumentOutputAsAnyTypeInNotExpectedMessage = function (type) {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var functionCallError = new function_call_count_match_error_1.FunctionCallCountMatchError(fakeSpy, false, 1, matchers_1.SpyCallCountType.Exactly, [alsatian_core_1.Any(type)]);
        alsatian_core_1.Expect(functionCallError.message).toBe("Expected function not to be called with [Any " +
            type.name +
            "] 1 time.");
    };
    FunctionCallCountMatchErrorTests.prototype.twoAnyTypeArgumentsBothOutputAsAnyTyoeInNotExpectedMessage = function (typeOne, typeTwo) {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var functionCallError = new function_call_count_match_error_1.FunctionCallCountMatchError(fakeSpy, false, 1, matchers_1.SpyCallCountType.Exactly, [alsatian_core_1.Any(typeOne), alsatian_core_1.Any(typeTwo)]);
        alsatian_core_1.Expect(functionCallError.message).toBe("Expected function not to be called " +
            "with [Any " +
            typeOne.name +
            ", Any " +
            typeTwo.name +
            "] 1 time.");
    };
    FunctionCallCountMatchErrorTests.prototype.anyTypeArgumentOutputAsAnyTypeInGreaterThanMessage = function (type) {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var functionCallError = new function_call_count_match_error_1.FunctionCallCountMatchError(fakeSpy, true, 1, matchers_1.SpyCallCountType.GreaterThan, [alsatian_core_1.Any(type)]);
        alsatian_core_1.Expect(functionCallError.message).toBe("Expected function to be called with [Any " +
            type.name +
            "] greater than 1 time.");
    };
    FunctionCallCountMatchErrorTests.prototype.twoAnyTypeArgumentsBothOutputAsAnyTypeInGreaterThanMessage = function (typeOne, typeTwo) {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var functionCallError = new function_call_count_match_error_1.FunctionCallCountMatchError(fakeSpy, true, 1, matchers_1.SpyCallCountType.GreaterThan, [alsatian_core_1.Any(typeOne), alsatian_core_1.Any(typeTwo)]);
        alsatian_core_1.Expect(functionCallError.message).toBe("Expected function to be called " +
            "with [Any " +
            typeOne.name +
            ", Any " +
            typeTwo.name +
            "] greater than 1 time.");
    };
    FunctionCallCountMatchErrorTests.prototype.anyTypeArgumentOutputAsAnyTypeInLessThanMessage = function (type) {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var functionCallError = new function_call_count_match_error_1.FunctionCallCountMatchError(fakeSpy, true, 1, matchers_1.SpyCallCountType.LessThan, [alsatian_core_1.Any(type)]);
        alsatian_core_1.Expect(functionCallError.message).toBe("Expected function to be called with [Any " +
            type.name +
            "] less than 1 time.");
    };
    FunctionCallCountMatchErrorTests.prototype.twoAnyTypeArgumentsBothOutputAsAnyTypeInLessThanMessage = function (typeOne, typeTwo) {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var functionCallError = new function_call_count_match_error_1.FunctionCallCountMatchError(fakeSpy, true, 1, matchers_1.SpyCallCountType.LessThan, [alsatian_core_1.Any(typeOne), alsatian_core_1.Any(typeTwo)]);
        alsatian_core_1.Expect(functionCallError.message).toBe("Expected function to be called " +
            "with [Any " +
            typeOne.name +
            ", Any " +
            typeTwo.name +
            "] less than 1 time.");
    };
    FunctionCallCountMatchErrorTests.prototype.anyTypeArgumentOutputAsAnyTypeInExpectedValue = function (type) {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var functionCallError = new function_call_count_match_error_1.FunctionCallCountMatchError(fakeSpy, true, 1, matchers_1.SpyCallCountType.Exactly, [alsatian_core_1.Any(type)]);
        alsatian_core_1.Expect(functionCallError.expected).toBe("function to be called with [Any " +
            type.name +
            "] 1 time.");
    };
    FunctionCallCountMatchErrorTests.prototype.twoAnyTypeArgumentsBothOutputAsAnyTypeInExpectedValue = function (typeOne, typeTwo) {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var functionCallError = new function_call_count_match_error_1.FunctionCallCountMatchError(fakeSpy, true, 1, matchers_1.SpyCallCountType.Exactly, [alsatian_core_1.Any(typeOne), alsatian_core_1.Any(typeTwo)]);
        alsatian_core_1.Expect(functionCallError.expected).toBe("function to be called with [Any " + typeOne.name + ", Any " + typeTwo.name + "] 1 time.");
    };
    FunctionCallCountMatchErrorTests.prototype.anyTypeArgumentOutputAsAnyTypeInNotExpectedValue = function (type) {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var functionCallError = new function_call_count_match_error_1.FunctionCallCountMatchError(fakeSpy, false, 1, matchers_1.SpyCallCountType.Exactly, [alsatian_core_1.Any(type)]);
        alsatian_core_1.Expect(functionCallError.expected).toBe("function not to be called with [Any " + type.name + "] 1 time.");
    };
    FunctionCallCountMatchErrorTests.prototype.twoAnyTypeArgumentsBothOutputAsAnyTypeInNotExpectedValue = function (typeOne, typeTwo) {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var functionCallError = new function_call_count_match_error_1.FunctionCallCountMatchError(fakeSpy, false, 1, matchers_1.SpyCallCountType.Exactly, [alsatian_core_1.Any(typeOne), alsatian_core_1.Any(typeTwo)]);
        alsatian_core_1.Expect(functionCallError.expected).toBe("function not to be called with [Any " + typeOne.name + ", Any " + typeTwo.name + "] 1 time.");
    };
    FunctionCallCountMatchErrorTests.prototype.anyAndAnyTypeArgumentsBothOutputAsAnythingAndAnyTypeInMessage = function (type) {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var functionCallError = new function_call_count_match_error_1.FunctionCallCountMatchError(fakeSpy, true, 1, matchers_1.SpyCallCountType.Exactly, [alsatian_core_1.Any, alsatian_core_1.Any(type)]);
        alsatian_core_1.Expect(functionCallError.message).toBe("Expected function to be called with [Anything, Any " +
            type.name +
            "] 1 time.");
    };
    FunctionCallCountMatchErrorTests.prototype.anyAndAnyTypeArgumentsBothOutputAsAnythingAndAnyTypeInMessageAnyTyoeInNotExpectedMessage = function (type) {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var functionCallError = new function_call_count_match_error_1.FunctionCallCountMatchError(fakeSpy, false, 1, matchers_1.SpyCallCountType.Exactly, [alsatian_core_1.Any, alsatian_core_1.Any(type)]);
        alsatian_core_1.Expect(functionCallError.message).toBe("Expected function not to be called with [Anything, Any " +
            type.name +
            "] 1 time.");
    };
    FunctionCallCountMatchErrorTests.prototype.anyAndAnyTypeArgumentsBothOutputAsAnythingAndAnyTypeInExpectedValue = function (type) {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var functionCallError = new function_call_count_match_error_1.FunctionCallCountMatchError(fakeSpy, true, 1, matchers_1.SpyCallCountType.Exactly, [alsatian_core_1.Any, alsatian_core_1.Any(type)]);
        alsatian_core_1.Expect(functionCallError.expected).toBe("function to be called with [Anything, Any " +
            type.name +
            "] 1 time.");
    };
    FunctionCallCountMatchErrorTests.prototype.anyAndAnyTypeArgumentsBothOutputAsAnythignAndAnyTypeInNotExpectedValue = function (type) {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var functionCallError = new function_call_count_match_error_1.FunctionCallCountMatchError(fakeSpy, false, 1, matchers_1.SpyCallCountType.Exactly, [alsatian_core_1.Any, alsatian_core_1.Any(type)]);
        alsatian_core_1.Expect(functionCallError.expected).toBe("function not to be called with [Anything, Any " +
            type.name +
            "] 1 time.");
    };
    FunctionCallCountMatchErrorTests.prototype.anyTypeAndAnyArgumentsBothOutputAsAnyTypeAndAnythingInMessage = function (type) {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var functionCallError = new function_call_count_match_error_1.FunctionCallCountMatchError(fakeSpy, true, 1, matchers_1.SpyCallCountType.Exactly, [alsatian_core_1.Any(type), alsatian_core_1.Any]);
        alsatian_core_1.Expect(functionCallError.message).toBe("Expected function to be called with [Any " +
            type.name +
            ", Anything] 1 time.");
    };
    FunctionCallCountMatchErrorTests.prototype.anyTypeAndAnyArgumentsBothOutputAsAnyTypeAndAnythingInMessageAnyTyoeInNotExpectedMessage = function (type) {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var functionCallError = new function_call_count_match_error_1.FunctionCallCountMatchError(fakeSpy, false, 1, matchers_1.SpyCallCountType.Exactly, [alsatian_core_1.Any(type), alsatian_core_1.Any]);
        alsatian_core_1.Expect(functionCallError.message).toBe("Expected function not to be called with [Any " +
            type.name +
            ", Anything] 1 time.");
    };
    FunctionCallCountMatchErrorTests.prototype.anyTypeAndAnyArgumentsBothOutputAsAnyTypeAndAnythingInExpectedValue = function (type) {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var functionCallError = new function_call_count_match_error_1.FunctionCallCountMatchError(fakeSpy, true, 1, matchers_1.SpyCallCountType.Exactly, [alsatian_core_1.Any(type), alsatian_core_1.Any]);
        alsatian_core_1.Expect(functionCallError.expected).toBe("function to be called with [Any " +
            type.name +
            ", Anything] 1 time.");
    };
    FunctionCallCountMatchErrorTests.prototype.anyTypeAndAnyArgumentsBothOutputAsAnyTypeAndAnythingInNotExpectedValue = function (type) {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var functionCallError = new function_call_count_match_error_1.FunctionCallCountMatchError(fakeSpy, false, 1, matchers_1.SpyCallCountType.Exactly, [alsatian_core_1.Any(type), alsatian_core_1.Any]);
        alsatian_core_1.Expect(functionCallError.expected).toBe("function not to be called with [Any " +
            type.name +
            ", Anything] 1 time.");
    };
    FunctionCallCountMatchErrorTests.prototype.exactAndAnyArgumentsBothOutputAsExactAndAnythingInMessage = function (exactValue) {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var functionCallError = new function_call_count_match_error_1.FunctionCallCountMatchError(fakeSpy, true, 1, matchers_1.SpyCallCountType.Exactly, [exactValue, alsatian_core_1.Any]);
        alsatian_core_1.Expect(functionCallError.message).toBe("Expected function to be called with [" +
            JSON.stringify(exactValue) +
            ", Anything] 1 time.");
    };
    FunctionCallCountMatchErrorTests.prototype.exactAndAnyArgumentsBothOutputAsExactAndAnythingInMessageAnyTyoeInNotExpectedMessage = function (exactValue) {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var functionCallError = new function_call_count_match_error_1.FunctionCallCountMatchError(fakeSpy, false, 1, matchers_1.SpyCallCountType.Exactly, [exactValue, alsatian_core_1.Any]);
        alsatian_core_1.Expect(functionCallError.message).toBe("Expected function not to be called with [" +
            JSON.stringify(exactValue) +
            ", Anything] 1 time.");
    };
    FunctionCallCountMatchErrorTests.prototype.exactAndAnyArgumentsBothOutputAsExactAndAnythingInExpectedValue = function (exactValue) {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var functionCallError = new function_call_count_match_error_1.FunctionCallCountMatchError(fakeSpy, true, 1, matchers_1.SpyCallCountType.Exactly, [exactValue, alsatian_core_1.Any]);
        alsatian_core_1.Expect(functionCallError.expected).toBe("function to be called with [" +
            JSON.stringify(exactValue) +
            ", Anything] 1 time.");
    };
    FunctionCallCountMatchErrorTests.prototype.exactAndAnyArgumentsBothOutputAsExactAndAnythingInNotExpectedValue = function (exactValue) {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var functionCallError = new function_call_count_match_error_1.FunctionCallCountMatchError(fakeSpy, false, 1, matchers_1.SpyCallCountType.Exactly, [exactValue, alsatian_core_1.Any]);
        alsatian_core_1.Expect(functionCallError.expected).toBe("function not to be called with [" +
            JSON.stringify(exactValue) +
            ", Anything] 1 time.");
    };
    FunctionCallCountMatchErrorTests.prototype.anyAndExactArgumentsBothOutputAsAnythingAndExactInMessage = function (exactValue) {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var functionCallError = new function_call_count_match_error_1.FunctionCallCountMatchError(fakeSpy, true, 1, matchers_1.SpyCallCountType.Exactly, [alsatian_core_1.Any, exactValue]);
        alsatian_core_1.Expect(functionCallError.message).toBe("Expected function to be called with [Anything, " +
            JSON.stringify(exactValue) +
            "] 1 time.");
    };
    FunctionCallCountMatchErrorTests.prototype.anyAndExaactArgumentsBothOutputAsAnythingAndExactInMessageAnyTyoeInNotExpectedMessage = function (exactValue) {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var functionCallError = new function_call_count_match_error_1.FunctionCallCountMatchError(fakeSpy, false, 1, matchers_1.SpyCallCountType.Exactly, [alsatian_core_1.Any, exactValue]);
        alsatian_core_1.Expect(functionCallError.message).toBe("Expected function not to be called with [Anything, " +
            JSON.stringify(exactValue) +
            "] 1 time.");
    };
    FunctionCallCountMatchErrorTests.prototype.anyAndExactArgumentsBothOutputAsAnythingAndExactInExpectedValue = function (exactValue) {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var functionCallError = new function_call_count_match_error_1.FunctionCallCountMatchError(fakeSpy, true, 1, matchers_1.SpyCallCountType.Exactly, [alsatian_core_1.Any, exactValue]);
        alsatian_core_1.Expect(functionCallError.expected).toBe("function to be called with [Anything, " +
            JSON.stringify(exactValue) +
            "] 1 time.");
    };
    FunctionCallCountMatchErrorTests.prototype.anyAndExactArgumentsBothOutputAsAnythingAndExactInNotExpectedValue = function (exactValue) {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var functionCallError = new function_call_count_match_error_1.FunctionCallCountMatchError(fakeSpy, false, 1, matchers_1.SpyCallCountType.Exactly, [alsatian_core_1.Any, exactValue]);
        alsatian_core_1.Expect(functionCallError.expected).toBe("function not to be called with [Anything, " +
            JSON.stringify(exactValue) +
            "] 1 time.");
    };
    FunctionCallCountMatchErrorTests.prototype.exactAndAnyTypeArgumentsBothOutputAsExactAndAnyTypeInMessage = function (type, exactValue) {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var functionCallError = new function_call_count_match_error_1.FunctionCallCountMatchError(fakeSpy, true, 1, matchers_1.SpyCallCountType.Exactly, [exactValue, alsatian_core_1.Any(type)]);
        alsatian_core_1.Expect(functionCallError.message).toBe("Expected function to be called " +
            "with [" +
            JSON.stringify(exactValue) +
            ", Any " +
            type.name +
            "] 1 time.");
    };
    FunctionCallCountMatchErrorTests.prototype.exactAndAnyTypeArgumentsBothOutputAsExactAndAnyTypeInMessageAnyTyoeInNotExpectedMessage = function (type, exactValue) {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var functionCallError = new function_call_count_match_error_1.FunctionCallCountMatchError(fakeSpy, false, 1, matchers_1.SpyCallCountType.Exactly, [exactValue, alsatian_core_1.Any(type)]);
        alsatian_core_1.Expect(functionCallError.message).toBe("Expected function not to be called " +
            "with [" +
            JSON.stringify(exactValue) +
            ", Any " +
            type.name +
            "] 1 time.");
    };
    FunctionCallCountMatchErrorTests.prototype.exactAndAnyTypeArgumentsBothOutputAsExactAndAnyTypeInExpectedValue = function (type, exactValue) {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var functionCallError = new function_call_count_match_error_1.FunctionCallCountMatchError(fakeSpy, true, 1, matchers_1.SpyCallCountType.Exactly, [exactValue, alsatian_core_1.Any(type)]);
        alsatian_core_1.Expect(functionCallError.expected).toBe("function to be called with [" + JSON.stringify(exactValue) + ", Any " + type.name + "] 1 time.");
    };
    FunctionCallCountMatchErrorTests.prototype.exactAndAnyTypeArgumentsBothOutputAsExactAndAnyTypeInNotExpectedValue = function (type, exactValue) {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var functionCallError = new function_call_count_match_error_1.FunctionCallCountMatchError(fakeSpy, false, 1, matchers_1.SpyCallCountType.Exactly, [exactValue, alsatian_core_1.Any(type)]);
        alsatian_core_1.Expect(functionCallError.expected).toBe("function not to be called with [" + JSON.stringify(exactValue) + ", Any " + type.name + "] 1 time.");
    };
    FunctionCallCountMatchErrorTests.prototype.anyTypeAndExactArgumentsBothOutputAsAnyTypeAndExactInMessage = function (type, exactValue) {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var functionCallError = new function_call_count_match_error_1.FunctionCallCountMatchError(fakeSpy, true, 1, matchers_1.SpyCallCountType.Exactly, [alsatian_core_1.Any(type), exactValue]);
        alsatian_core_1.Expect(functionCallError.message).toBe("Expected function to be called " +
            ("with [Any " + type.name + ", " + JSON.stringify(exactValue) + "] 1 time."));
    };
    FunctionCallCountMatchErrorTests.prototype.anyTypeAndExaactArgumentsBothOutputAsAnyTypeAndExactInMessageAnyTyoeInNotExpectedMessage = function (type, exactValue) {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var functionCallError = new function_call_count_match_error_1.FunctionCallCountMatchError(fakeSpy, false, 1, matchers_1.SpyCallCountType.Exactly, [alsatian_core_1.Any(type), exactValue]);
        alsatian_core_1.Expect(functionCallError.message).toBe("Expected function not to be called " +
            ("with [Any " + type.name + ", " + JSON.stringify(exactValue) + "] 1 time."));
    };
    FunctionCallCountMatchErrorTests.prototype.anyTypeAndExactArgumentsBothOutputAsAnyTypeAndExactInExpectedValue = function (type, exactValue) {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var functionCallError = new function_call_count_match_error_1.FunctionCallCountMatchError(fakeSpy, true, 1, matchers_1.SpyCallCountType.Exactly, [alsatian_core_1.Any(type), exactValue]);
        alsatian_core_1.Expect(functionCallError.expected).toBe("function to be called with [Any " + type.name + ", " + JSON.stringify(exactValue) + "] 1 time.");
    };
    FunctionCallCountMatchErrorTests.prototype.anyTypeAndExactArgumentsBothOutputAsAnyTypeAndExactInNotExpectedValue = function (type, exactValue) {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var functionCallError = new function_call_count_match_error_1.FunctionCallCountMatchError(fakeSpy, false, 1, matchers_1.SpyCallCountType.Exactly, [alsatian_core_1.Any(type), exactValue]);
        alsatian_core_1.Expect(functionCallError.expected).toBe("function not to be called with [Any " + type.name + ", " + JSON.stringify(exactValue) + "] 1 time.");
    };
    __decorate([
        alsatian_core_1.TestCase(1),
        alsatian_core_1.TestCase(2),
        alsatian_core_1.TestCase(42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], FunctionCallCountMatchErrorTests.prototype, "shouldBeCalledMessage", null);
    __decorate([
        alsatian_core_1.TestCase(1),
        alsatian_core_1.TestCase(2),
        alsatian_core_1.TestCase(42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], FunctionCallCountMatchErrorTests.prototype, "shouldNotBeCalledMessage", null);
    __decorate([
        alsatian_core_1.TestCase(1),
        alsatian_core_1.TestCase(2),
        alsatian_core_1.TestCase(42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], FunctionCallCountMatchErrorTests.prototype, "shouldBeCalledGreaterThanMessage", null);
    __decorate([
        alsatian_core_1.TestCase(1),
        alsatian_core_1.TestCase(2),
        alsatian_core_1.TestCase(42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], FunctionCallCountMatchErrorTests.prototype, "shouldBeCalledLessThanMessage", null);
    __decorate([
        alsatian_core_1.TestCase(1),
        alsatian_core_1.TestCase(2),
        alsatian_core_1.TestCase(42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], FunctionCallCountMatchErrorTests.prototype, "actualValueAndShouldNotMatchShouldBeSetToFunctionWasCalled", null);
    __decorate([
        alsatian_core_1.TestCase(1),
        alsatian_core_1.TestCase(2),
        alsatian_core_1.TestCase(42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], FunctionCallCountMatchErrorTests.prototype, "expectedValueAndShouldMatchShouldBeSetToFunctionToBeCalled", null);
    __decorate([
        alsatian_core_1.TestCase(1),
        alsatian_core_1.TestCase(2),
        alsatian_core_1.TestCase(42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], FunctionCallCountMatchErrorTests.prototype, "expectedValueAndShouldNotMatchShouldBeSetToFunctionNotToBeCalled", null);
    __decorate([
        alsatian_core_1.TestCase(1),
        alsatian_core_1.TestCase(2),
        alsatian_core_1.TestCase(42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], FunctionCallCountMatchErrorTests.prototype, "expectedValueAndShouldMatchGreaterThanShouldBeSetToFunctionToBeCalled", null);
    __decorate([
        alsatian_core_1.TestCase(1),
        alsatian_core_1.TestCase(2),
        alsatian_core_1.TestCase(42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], FunctionCallCountMatchErrorTests.prototype, "expectedValueAndShouldMatchLessThanShouldBeSetToFunctionToBeCalled", null);
    __decorate([
        alsatian_core_1.TestCase(["this"]),
        alsatian_core_1.TestCase(["this", "that"]),
        alsatian_core_1.TestCase([1, 2, 3]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array]),
        __metadata("design:returntype", void 0)
    ], FunctionCallCountMatchErrorTests.prototype, "shouldBeCalledWithArgsMessage", null);
    __decorate([
        alsatian_core_1.TestCase(["this"]),
        alsatian_core_1.TestCase(["this", "that"]),
        alsatian_core_1.TestCase([1, 2, 3]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array]),
        __metadata("design:returntype", void 0)
    ], FunctionCallCountMatchErrorTests.prototype, "shouldNotBeCalledWithArgsMessage", null);
    __decorate([
        alsatian_core_1.TestCase(["this"]),
        alsatian_core_1.TestCase(["this", "that"]),
        alsatian_core_1.TestCase([1, 2, 3]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array]),
        __metadata("design:returntype", void 0)
    ], FunctionCallCountMatchErrorTests.prototype, "shouldBeCalledGreaterThanWithArgsMessage", null);
    __decorate([
        alsatian_core_1.TestCase(["this"]),
        alsatian_core_1.TestCase(["this", "that"]),
        alsatian_core_1.TestCase([1, 2, 3]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array]),
        __metadata("design:returntype", void 0)
    ], FunctionCallCountMatchErrorTests.prototype, "shouldBeCalledLessThanWithArgsMessage", null);
    __decorate([
        alsatian_core_1.TestCase([[]]),
        alsatian_core_1.TestCase([[], []]),
        alsatian_core_1.TestCase([[1], [2], [3]]),
        alsatian_core_1.TestCase([["something", "and", "another", "thing"]]),
        alsatian_core_1.TestCase([["this", "or"], ["that", "other", "thing"]]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array]),
        __metadata("design:returntype", void 0)
    ], FunctionCallCountMatchErrorTests.prototype, "actualValueAndShouldMatchShouldBeSetToFunctionWasNotCalledWithArguments", null);
    __decorate([
        alsatian_core_1.TestCase([[]]),
        alsatian_core_1.TestCase([[], []]),
        alsatian_core_1.TestCase([[1], [2], [3]]),
        alsatian_core_1.TestCase([["something", "and", "another", "thing"]]),
        alsatian_core_1.TestCase([["this", "or"], ["that", "other", "thing"]]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array]),
        __metadata("design:returntype", void 0)
    ], FunctionCallCountMatchErrorTests.prototype, "actualValueAndShouldNotMatchShouldBeSetToFunctionWasCalledWithArguments", null);
    __decorate([
        alsatian_core_1.TestCase([[]]),
        alsatian_core_1.TestCase([[], []]),
        alsatian_core_1.TestCase([[1], [2], [3]]),
        alsatian_core_1.TestCase([["something", "and", "another", "thing"]]),
        alsatian_core_1.TestCase([["this", "or"], ["that", "other", "thing"]]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array]),
        __metadata("design:returntype", void 0)
    ], FunctionCallCountMatchErrorTests.prototype, "actualValueAndShouldMatchGreaterThanShouldBeSetToFunctionWasNotCalledWithArguments", null);
    __decorate([
        alsatian_core_1.TestCase([[]]),
        alsatian_core_1.TestCase([[], []]),
        alsatian_core_1.TestCase([[1], [2], [3]]),
        alsatian_core_1.TestCase([["something", "and", "another", "thing"]]),
        alsatian_core_1.TestCase([["this", "or"], ["that", "other", "thing"]]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array]),
        __metadata("design:returntype", void 0)
    ], FunctionCallCountMatchErrorTests.prototype, "actualValueAndShouldMatchLessThanShouldBeSetToFunctionWasNotCalledWithArguments", null);
    __decorate([
        alsatian_core_1.TestCase([]),
        alsatian_core_1.TestCase([1]),
        alsatian_core_1.TestCase(["something"]),
        alsatian_core_1.TestCase([1, "or", 2, "other", "things"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array]),
        __metadata("design:returntype", void 0)
    ], FunctionCallCountMatchErrorTests.prototype, "expectedValueAndShouldMatchShouldBeSetToFunctionToBeCalledWithArguments", null);
    __decorate([
        alsatian_core_1.TestCase([]),
        alsatian_core_1.TestCase([1]),
        alsatian_core_1.TestCase(["something"]),
        alsatian_core_1.TestCase([1, "or", 2, "other", "things"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array]),
        __metadata("design:returntype", void 0)
    ], FunctionCallCountMatchErrorTests.prototype, "expectedValueAndShouldNotMatchShouldBeSetToFunctionNotToBeCalledWithArguments", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FunctionCallCountMatchErrorTests.prototype, "anyArgumentOutputAsAnythingInMessage", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FunctionCallCountMatchErrorTests.prototype, "twoAnyArgumentsBothOutputAsAnythingInMessage", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FunctionCallCountMatchErrorTests.prototype, "anyArgumentOutputAsAnythingInNotExpectedMessage", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FunctionCallCountMatchErrorTests.prototype, "twoAnyArgumentsBothOutputAsAnythingInNotExpectedMessage", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FunctionCallCountMatchErrorTests.prototype, "anyArgumentOutputAsAnythingInGreaterThanMessage", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FunctionCallCountMatchErrorTests.prototype, "twoAnyArgumentsBothOutputAsAnythingInGreaterThanMessage", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FunctionCallCountMatchErrorTests.prototype, "anyArgumentOutputAsAnythingInLessThanMessage", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FunctionCallCountMatchErrorTests.prototype, "twoAnyArgumentsBothOutputAsAnythingInLessThanMessage", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FunctionCallCountMatchErrorTests.prototype, "anyArgumentOutputAsAnythingInExpectedValue", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FunctionCallCountMatchErrorTests.prototype, "twoAnyArgumentsBothOutputAsAnythingInExpectedValue", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FunctionCallCountMatchErrorTests.prototype, "anyArgumentOutputAsAnythingInNotExpectedValue", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FunctionCallCountMatchErrorTests.prototype, "twoAnyArgumentsBothOutputAsAnythingInNotExpectedValue", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FunctionCallCountMatchErrorTests.prototype, "anyArgumentOutputAsAnythingInGreaterThanExpectedValue", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FunctionCallCountMatchErrorTests.prototype, "twoAnyArgumentsBothOutputAsAnythingInGreaterThanExpectedValue", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FunctionCallCountMatchErrorTests.prototype, "anyArgumentOutputAsAnythingInLessThanExpectedValue", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FunctionCallCountMatchErrorTests.prototype, "twoAnyArgumentsBothOutputAsAnythingInLessThanExpectedValue", null);
    __decorate([
        alsatian_core_1.TestCase(Number),
        alsatian_core_1.TestCase(String),
        alsatian_core_1.TestCase(Object),
        alsatian_core_1.TestCase(Array),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function]),
        __metadata("design:returntype", void 0)
    ], FunctionCallCountMatchErrorTests.prototype, "anyTypeArgumentOutputAsAnyTypeInMessage", null);
    __decorate([
        alsatian_core_1.TestCase(Number, Array),
        alsatian_core_1.TestCase(String, Object),
        alsatian_core_1.TestCase(Object, String),
        alsatian_core_1.TestCase(Array, Number),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function, Function]),
        __metadata("design:returntype", void 0)
    ], FunctionCallCountMatchErrorTests.prototype, "twoAnyTypeArgumentsBothOutputAsAnyTypeInMessage", null);
    __decorate([
        alsatian_core_1.TestCase(Number),
        alsatian_core_1.TestCase(String),
        alsatian_core_1.TestCase(Object),
        alsatian_core_1.TestCase(Array),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function]),
        __metadata("design:returntype", void 0)
    ], FunctionCallCountMatchErrorTests.prototype, "anyTypeArgumentOutputAsAnyTypeInNotExpectedMessage", null);
    __decorate([
        alsatian_core_1.TestCase(Number, Array),
        alsatian_core_1.TestCase(String, Object),
        alsatian_core_1.TestCase(Object, String),
        alsatian_core_1.TestCase(Array, Number),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function, Function]),
        __metadata("design:returntype", void 0)
    ], FunctionCallCountMatchErrorTests.prototype, "twoAnyTypeArgumentsBothOutputAsAnyTyoeInNotExpectedMessage", null);
    __decorate([
        alsatian_core_1.TestCase(Number),
        alsatian_core_1.TestCase(String),
        alsatian_core_1.TestCase(Object),
        alsatian_core_1.TestCase(Array),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function]),
        __metadata("design:returntype", void 0)
    ], FunctionCallCountMatchErrorTests.prototype, "anyTypeArgumentOutputAsAnyTypeInGreaterThanMessage", null);
    __decorate([
        alsatian_core_1.TestCase(Number, Array),
        alsatian_core_1.TestCase(String, Object),
        alsatian_core_1.TestCase(Object, String),
        alsatian_core_1.TestCase(Array, Number),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function, Function]),
        __metadata("design:returntype", void 0)
    ], FunctionCallCountMatchErrorTests.prototype, "twoAnyTypeArgumentsBothOutputAsAnyTypeInGreaterThanMessage", null);
    __decorate([
        alsatian_core_1.TestCase(Number),
        alsatian_core_1.TestCase(String),
        alsatian_core_1.TestCase(Object),
        alsatian_core_1.TestCase(Array),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function]),
        __metadata("design:returntype", void 0)
    ], FunctionCallCountMatchErrorTests.prototype, "anyTypeArgumentOutputAsAnyTypeInLessThanMessage", null);
    __decorate([
        alsatian_core_1.TestCase(Number, Array),
        alsatian_core_1.TestCase(String, Object),
        alsatian_core_1.TestCase(Object, String),
        alsatian_core_1.TestCase(Array, Number),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function, Function]),
        __metadata("design:returntype", void 0)
    ], FunctionCallCountMatchErrorTests.prototype, "twoAnyTypeArgumentsBothOutputAsAnyTypeInLessThanMessage", null);
    __decorate([
        alsatian_core_1.TestCase(Number),
        alsatian_core_1.TestCase(String),
        alsatian_core_1.TestCase(Object),
        alsatian_core_1.TestCase(Array),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function]),
        __metadata("design:returntype", void 0)
    ], FunctionCallCountMatchErrorTests.prototype, "anyTypeArgumentOutputAsAnyTypeInExpectedValue", null);
    __decorate([
        alsatian_core_1.TestCase(Number, Array),
        alsatian_core_1.TestCase(String, Object),
        alsatian_core_1.TestCase(Object, String),
        alsatian_core_1.TestCase(Array, Number),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function, Function]),
        __metadata("design:returntype", void 0)
    ], FunctionCallCountMatchErrorTests.prototype, "twoAnyTypeArgumentsBothOutputAsAnyTypeInExpectedValue", null);
    __decorate([
        alsatian_core_1.TestCase(Number),
        alsatian_core_1.TestCase(String),
        alsatian_core_1.TestCase(Object),
        alsatian_core_1.TestCase(Array),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function]),
        __metadata("design:returntype", void 0)
    ], FunctionCallCountMatchErrorTests.prototype, "anyTypeArgumentOutputAsAnyTypeInNotExpectedValue", null);
    __decorate([
        alsatian_core_1.TestCase(Number, Array),
        alsatian_core_1.TestCase(String, Object),
        alsatian_core_1.TestCase(Object, String),
        alsatian_core_1.TestCase(Array, Number),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function, Function]),
        __metadata("design:returntype", void 0)
    ], FunctionCallCountMatchErrorTests.prototype, "twoAnyTypeArgumentsBothOutputAsAnyTypeInNotExpectedValue", null);
    __decorate([
        alsatian_core_1.TestCase(Number),
        alsatian_core_1.TestCase(String),
        alsatian_core_1.TestCase(Object),
        alsatian_core_1.TestCase(Array),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function]),
        __metadata("design:returntype", void 0)
    ], FunctionCallCountMatchErrorTests.prototype, "anyAndAnyTypeArgumentsBothOutputAsAnythingAndAnyTypeInMessage", null);
    __decorate([
        alsatian_core_1.TestCase(Number),
        alsatian_core_1.TestCase(String),
        alsatian_core_1.TestCase(Object),
        alsatian_core_1.TestCase(Array),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function]),
        __metadata("design:returntype", void 0)
    ], FunctionCallCountMatchErrorTests.prototype, "anyAndAnyTypeArgumentsBothOutputAsAnythingAndAnyTypeInMessageAnyTyoeInNotExpectedMessage", null);
    __decorate([
        alsatian_core_1.TestCase(Number),
        alsatian_core_1.TestCase(String),
        alsatian_core_1.TestCase(Object),
        alsatian_core_1.TestCase(Array),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function]),
        __metadata("design:returntype", void 0)
    ], FunctionCallCountMatchErrorTests.prototype, "anyAndAnyTypeArgumentsBothOutputAsAnythingAndAnyTypeInExpectedValue", null);
    __decorate([
        alsatian_core_1.TestCase(Number),
        alsatian_core_1.TestCase(String),
        alsatian_core_1.TestCase(Object),
        alsatian_core_1.TestCase(Array),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function]),
        __metadata("design:returntype", void 0)
    ], FunctionCallCountMatchErrorTests.prototype, "anyAndAnyTypeArgumentsBothOutputAsAnythignAndAnyTypeInNotExpectedValue", null);
    __decorate([
        alsatian_core_1.TestCase(Number),
        alsatian_core_1.TestCase(String),
        alsatian_core_1.TestCase(Object),
        alsatian_core_1.TestCase(Array),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function]),
        __metadata("design:returntype", void 0)
    ], FunctionCallCountMatchErrorTests.prototype, "anyTypeAndAnyArgumentsBothOutputAsAnyTypeAndAnythingInMessage", null);
    __decorate([
        alsatian_core_1.TestCase(Number),
        alsatian_core_1.TestCase(String),
        alsatian_core_1.TestCase(Object),
        alsatian_core_1.TestCase(Array),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function]),
        __metadata("design:returntype", void 0)
    ], FunctionCallCountMatchErrorTests.prototype, "anyTypeAndAnyArgumentsBothOutputAsAnyTypeAndAnythingInMessageAnyTyoeInNotExpectedMessage", null);
    __decorate([
        alsatian_core_1.TestCase(Number),
        alsatian_core_1.TestCase(String),
        alsatian_core_1.TestCase(Object),
        alsatian_core_1.TestCase(Array),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function]),
        __metadata("design:returntype", void 0)
    ], FunctionCallCountMatchErrorTests.prototype, "anyTypeAndAnyArgumentsBothOutputAsAnyTypeAndAnythingInExpectedValue", null);
    __decorate([
        alsatian_core_1.TestCase(Number),
        alsatian_core_1.TestCase(String),
        alsatian_core_1.TestCase(Object),
        alsatian_core_1.TestCase(Array),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function]),
        __metadata("design:returntype", void 0)
    ], FunctionCallCountMatchErrorTests.prototype, "anyTypeAndAnyArgumentsBothOutputAsAnyTypeAndAnythingInNotExpectedValue", null);
    __decorate([
        alsatian_core_1.TestCase("test"),
        alsatian_core_1.TestCase(42),
        alsatian_core_1.TestCase("something else"),
        alsatian_core_1.TestCase(-42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], FunctionCallCountMatchErrorTests.prototype, "exactAndAnyArgumentsBothOutputAsExactAndAnythingInMessage", null);
    __decorate([
        alsatian_core_1.TestCase("test"),
        alsatian_core_1.TestCase(42),
        alsatian_core_1.TestCase("something else"),
        alsatian_core_1.TestCase(-42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], FunctionCallCountMatchErrorTests.prototype, "exactAndAnyArgumentsBothOutputAsExactAndAnythingInMessageAnyTyoeInNotExpectedMessage", null);
    __decorate([
        alsatian_core_1.TestCase("test"),
        alsatian_core_1.TestCase(42),
        alsatian_core_1.TestCase("something else"),
        alsatian_core_1.TestCase(-42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], FunctionCallCountMatchErrorTests.prototype, "exactAndAnyArgumentsBothOutputAsExactAndAnythingInExpectedValue", null);
    __decorate([
        alsatian_core_1.TestCase("test"),
        alsatian_core_1.TestCase(42),
        alsatian_core_1.TestCase("something else"),
        alsatian_core_1.TestCase(-42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], FunctionCallCountMatchErrorTests.prototype, "exactAndAnyArgumentsBothOutputAsExactAndAnythingInNotExpectedValue", null);
    __decorate([
        alsatian_core_1.TestCase("test"),
        alsatian_core_1.TestCase(42),
        alsatian_core_1.TestCase("something else"),
        alsatian_core_1.TestCase(-42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], FunctionCallCountMatchErrorTests.prototype, "anyAndExactArgumentsBothOutputAsAnythingAndExactInMessage", null);
    __decorate([
        alsatian_core_1.TestCase("test"),
        alsatian_core_1.TestCase(42),
        alsatian_core_1.TestCase("something else"),
        alsatian_core_1.TestCase(-42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], FunctionCallCountMatchErrorTests.prototype, "anyAndExaactArgumentsBothOutputAsAnythingAndExactInMessageAnyTyoeInNotExpectedMessage", null);
    __decorate([
        alsatian_core_1.TestCase("test"),
        alsatian_core_1.TestCase(42),
        alsatian_core_1.TestCase("something else"),
        alsatian_core_1.TestCase(-42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], FunctionCallCountMatchErrorTests.prototype, "anyAndExactArgumentsBothOutputAsAnythingAndExactInExpectedValue", null);
    __decorate([
        alsatian_core_1.TestCase("test"),
        alsatian_core_1.TestCase(42),
        alsatian_core_1.TestCase("something else"),
        alsatian_core_1.TestCase(-42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], FunctionCallCountMatchErrorTests.prototype, "anyAndExactArgumentsBothOutputAsAnythingAndExactInNotExpectedValue", null);
    __decorate([
        alsatian_core_1.TestCase(Number, "test"),
        alsatian_core_1.TestCase(String, 42),
        alsatian_core_1.TestCase(Object, "something else"),
        alsatian_core_1.TestCase(Array, -42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function, Object]),
        __metadata("design:returntype", void 0)
    ], FunctionCallCountMatchErrorTests.prototype, "exactAndAnyTypeArgumentsBothOutputAsExactAndAnyTypeInMessage", null);
    __decorate([
        alsatian_core_1.TestCase(Number, "test"),
        alsatian_core_1.TestCase(String, 42),
        alsatian_core_1.TestCase(Object, "something else"),
        alsatian_core_1.TestCase(Array, -42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function, Object]),
        __metadata("design:returntype", void 0)
    ], FunctionCallCountMatchErrorTests.prototype, "exactAndAnyTypeArgumentsBothOutputAsExactAndAnyTypeInMessageAnyTyoeInNotExpectedMessage", null);
    __decorate([
        alsatian_core_1.TestCase(Number, "test"),
        alsatian_core_1.TestCase(String, 42),
        alsatian_core_1.TestCase(Object, "something else"),
        alsatian_core_1.TestCase(Array, -42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function, Object]),
        __metadata("design:returntype", void 0)
    ], FunctionCallCountMatchErrorTests.prototype, "exactAndAnyTypeArgumentsBothOutputAsExactAndAnyTypeInExpectedValue", null);
    __decorate([
        alsatian_core_1.TestCase(Number, "test"),
        alsatian_core_1.TestCase(String, 42),
        alsatian_core_1.TestCase(Object, "something else"),
        alsatian_core_1.TestCase(Array, -42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function, Object]),
        __metadata("design:returntype", void 0)
    ], FunctionCallCountMatchErrorTests.prototype, "exactAndAnyTypeArgumentsBothOutputAsExactAndAnyTypeInNotExpectedValue", null);
    __decorate([
        alsatian_core_1.TestCase(Number, "test"),
        alsatian_core_1.TestCase(String, 42),
        alsatian_core_1.TestCase(Object, "something else"),
        alsatian_core_1.TestCase(Array, -42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function, Object]),
        __metadata("design:returntype", void 0)
    ], FunctionCallCountMatchErrorTests.prototype, "anyTypeAndExactArgumentsBothOutputAsAnyTypeAndExactInMessage", null);
    __decorate([
        alsatian_core_1.TestCase(Number, "test"),
        alsatian_core_1.TestCase(String, 42),
        alsatian_core_1.TestCase(Object, "something else"),
        alsatian_core_1.TestCase(Array, -42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function, Object]),
        __metadata("design:returntype", void 0)
    ], FunctionCallCountMatchErrorTests.prototype, "anyTypeAndExaactArgumentsBothOutputAsAnyTypeAndExactInMessageAnyTyoeInNotExpectedMessage", null);
    __decorate([
        alsatian_core_1.TestCase(Number, "test"),
        alsatian_core_1.TestCase(String, 42),
        alsatian_core_1.TestCase(Object, "something else"),
        alsatian_core_1.TestCase(Array, -42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function, Object]),
        __metadata("design:returntype", void 0)
    ], FunctionCallCountMatchErrorTests.prototype, "anyTypeAndExactArgumentsBothOutputAsAnyTypeAndExactInExpectedValue", null);
    __decorate([
        alsatian_core_1.TestCase(Number, "test"),
        alsatian_core_1.TestCase(String, 42),
        alsatian_core_1.TestCase(Object, "something else"),
        alsatian_core_1.TestCase(Array, -42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function, Object]),
        __metadata("design:returntype", void 0)
    ], FunctionCallCountMatchErrorTests.prototype, "anyTypeAndExactArgumentsBothOutputAsAnyTypeAndExactInNotExpectedValue", null);
    return FunctionCallCountMatchErrorTests;
}());
exports.FunctionCallCountMatchErrorTests = FunctionCallCountMatchErrorTests;
//# sourceMappingURL=function-call-count-match-error.spec.js.map