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
var function_call_match_error_1 = require("../../../core/errors/function-call-match-error");
var function_spy_builder_1 = require("../../builders/function-spy-builder");
var spy_call_builder_1 = require("../../builders/spy-call-builder");
var stringification_1 = require("../../../core/stringification");
var FunctionCallMatchErrorTests = /** @class */ (function () {
    function FunctionCallMatchErrorTests() {
    }
    FunctionCallMatchErrorTests.prototype.shouldBeCalledMessage = function () {
        var fakeFunction = new function_spy_builder_1.FunctionSpyBuilder().build();
        var error = new function_call_match_error_1.FunctionCallMatchError(fakeFunction, true);
        alsatian_core_1.Expect(error.message).toBe("Expected function to be called.");
    };
    FunctionCallMatchErrorTests.prototype.shouldNotBeCalledMessage = function () {
        var fakeFunction = new function_spy_builder_1.FunctionSpyBuilder().build();
        fakeFunction.calls.push(new spy_call_builder_1.SpyCallBuilder().build());
        var error = new function_call_match_error_1.FunctionCallMatchError(fakeFunction, false);
        alsatian_core_1.Expect(error.message).toBe("Expected function not to be called.");
    };
    FunctionCallMatchErrorTests.prototype.actualValueAndShouldMatchShouldBeSetToFunctionWasNotCalled = function () {
        var fakeFunction = new function_spy_builder_1.FunctionSpyBuilder().build();
        fakeFunction.calls.push(new spy_call_builder_1.SpyCallBuilder().build());
        var error = new function_call_match_error_1.FunctionCallMatchError(fakeFunction, true);
        alsatian_core_1.Expect(error.actual).toBe("function was not called.");
    };
    FunctionCallMatchErrorTests.prototype.actualValueAndShouldNotMatchShouldBeSetToFunctionWasCalled = function () {
        var fakeFunction = new function_spy_builder_1.FunctionSpyBuilder().build();
        fakeFunction.calls.push(new spy_call_builder_1.SpyCallBuilder().build());
        var error = new function_call_match_error_1.FunctionCallMatchError(fakeFunction, false);
        alsatian_core_1.Expect(error.actual).toBe("function was called.");
    };
    FunctionCallMatchErrorTests.prototype.expectedValueAndShouldMatchShouldBeSetToFunctionToBeCalled = function () {
        var fakeFunction = new function_spy_builder_1.FunctionSpyBuilder().build();
        fakeFunction.calls.push(new spy_call_builder_1.SpyCallBuilder().build());
        var error = new function_call_match_error_1.FunctionCallMatchError(fakeFunction, true);
        alsatian_core_1.Expect(error.expected).toBe("function to be called.");
    };
    FunctionCallMatchErrorTests.prototype.expectedValueAndShouldNotMatchShouldBeSetToFunctionNotToBeCalled = function () {
        var fakeFunction = new function_spy_builder_1.FunctionSpyBuilder().build();
        fakeFunction.calls.push(new spy_call_builder_1.SpyCallBuilder().build());
        var error = new function_call_match_error_1.FunctionCallMatchError(fakeFunction, false);
        alsatian_core_1.Expect(error.expected).toBe("function not to be called.");
    };
    FunctionCallMatchErrorTests.prototype.shouldBeCalledWithArgsMessage = function (args) {
        var fakeFunction = new function_spy_builder_1.FunctionSpyBuilder().build();
        fakeFunction.calls.push(new spy_call_builder_1.SpyCallBuilder().build());
        var error = new function_call_match_error_1.FunctionCallMatchError(fakeFunction, true, args);
        alsatian_core_1.Expect(error.message).toBe("Expected function to be called with [" +
            args.map(function (arg) { return JSON.stringify(arg); }).join(", ") +
            "].");
    };
    FunctionCallMatchErrorTests.prototype.shouldNotBeCalledWithArgsMessage = function (expectedArguments) {
        var fakeFunction = new function_spy_builder_1.FunctionSpyBuilder().build();
        fakeFunction.calls.push(new spy_call_builder_1.SpyCallBuilder().withArguments(expectedArguments).build());
        var error = new function_call_match_error_1.FunctionCallMatchError(fakeFunction, false, expectedArguments);
        alsatian_core_1.Expect(error.message).toBe("Expected function not to be called with " +
            "[" +
            expectedArguments.map(function (arg) { return JSON.stringify(arg); }).join(", ") +
            "].");
    };
    FunctionCallMatchErrorTests.prototype.actualValueAndShouldMatchShouldBeSetToFunctionWasNotCalledWithArguments = function (actualArgumentsList) {
        var fakeFunction = new function_spy_builder_1.FunctionSpyBuilder().build();
        actualArgumentsList.forEach(function (actualArguments) {
            fakeFunction.calls.push(new spy_call_builder_1.SpyCallBuilder().withArguments(actualArguments).build());
        });
        var error = new function_call_match_error_1.FunctionCallMatchError(fakeFunction, true, []);
        alsatian_core_1.Expect(error.actual).toBe("function was called with " +
            actualArgumentsList.map(stringification_1.stringify).join(", ") +
            ".");
    };
    FunctionCallMatchErrorTests.prototype.actualValueAndShouldNotMatchShouldBeSetToFunctionWasCalledWithArguments = function (actualArgumentsList) {
        var fakeFunction = new function_spy_builder_1.FunctionSpyBuilder().build();
        actualArgumentsList.forEach(function (actualArguments) {
            fakeFunction.calls.push(new spy_call_builder_1.SpyCallBuilder().withArguments(actualArguments).build());
        });
        var error = new function_call_match_error_1.FunctionCallMatchError(fakeFunction, false, []);
        alsatian_core_1.Expect(error.actual).toBe("function was called with " +
            actualArgumentsList.map(stringification_1.stringify).join(", ") +
            ".");
    };
    FunctionCallMatchErrorTests.prototype.expectedValueAndShouldMatchShouldBeSetToFunctionToBeCalledWithArguments = function (expectedArguments) {
        var fakeFunction = new function_spy_builder_1.FunctionSpyBuilder().build();
        var error = new function_call_match_error_1.FunctionCallMatchError(fakeFunction, true, expectedArguments);
        alsatian_core_1.Expect(error.expected).toBe("function to be called with " +
            JSON.stringify(expectedArguments).replace(/,/g, ", ") +
            ".");
    };
    FunctionCallMatchErrorTests.prototype.expectedValueAndShouldNotMatchShouldBeSetToFunctionNotToBeCalledWithArguments = function (expectedArguments) {
        var fakeFunction = new function_spy_builder_1.FunctionSpyBuilder().build();
        fakeFunction.calls.push(new spy_call_builder_1.SpyCallBuilder().withArguments(expectedArguments).build());
        var error = new function_call_match_error_1.FunctionCallMatchError(fakeFunction, false, expectedArguments);
        alsatian_core_1.Expect(error.expected).toBe("function not to be called with " +
            JSON.stringify(expectedArguments).replace(/,/g, ", ") +
            ".");
    };
    FunctionCallMatchErrorTests.prototype.anyArgumentOutputAsAnythingInMessage = function () {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var functionCallError = new function_call_match_error_1.FunctionCallMatchError(fakeSpy, true, [alsatian_core_1.Any]);
        alsatian_core_1.Expect(functionCallError.message).toBe("Expected function to be called with [Anything].");
    };
    FunctionCallMatchErrorTests.prototype.twoAnyArgumentsBothOutputAsAnythingInMessage = function () {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var functionCallError = new function_call_match_error_1.FunctionCallMatchError(fakeSpy, true, [
            alsatian_core_1.Any,
            alsatian_core_1.Any
        ]);
        alsatian_core_1.Expect(functionCallError.message).toBe("Expected function to be called with [Anything, Anything].");
    };
    FunctionCallMatchErrorTests.prototype.anyArgumentOutputAsAnythingInNotExpectedMessage = function () {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var functionCallError = new function_call_match_error_1.FunctionCallMatchError(fakeSpy, false, [alsatian_core_1.Any]);
        alsatian_core_1.Expect(functionCallError.message).toBe("Expected function not to be called with [Anything].");
    };
    FunctionCallMatchErrorTests.prototype.twoAnyArgumentsBothOutputAsAnythingInNotExpectedMessage = function () {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var functionCallError = new function_call_match_error_1.FunctionCallMatchError(fakeSpy, false, [
            alsatian_core_1.Any,
            alsatian_core_1.Any
        ]);
        alsatian_core_1.Expect(functionCallError.message).toBe("Expected function not to be called with [Anything, Anything].");
    };
    FunctionCallMatchErrorTests.prototype.anyArgumentOutputAsAnythingInExpectedValue = function () {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var functionCallError = new function_call_match_error_1.FunctionCallMatchError(fakeSpy, true, [alsatian_core_1.Any]);
        alsatian_core_1.Expect(functionCallError.expected).toBe("function to be called with [Anything].");
    };
    FunctionCallMatchErrorTests.prototype.twoAnyArgumentsBothOutputAsAnythingInExpectedValue = function () {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var functionCallError = new function_call_match_error_1.FunctionCallMatchError(fakeSpy, true, [
            alsatian_core_1.Any,
            alsatian_core_1.Any
        ]);
        alsatian_core_1.Expect(functionCallError.expected).toBe("function to be called with [Anything, Anything].");
    };
    FunctionCallMatchErrorTests.prototype.anyArgumentOutputAsAnythingInNotExpectedValue = function () {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var functionCallError = new function_call_match_error_1.FunctionCallMatchError(fakeSpy, false, [alsatian_core_1.Any]);
        alsatian_core_1.Expect(functionCallError.expected).toBe("function not to be called with [Anything].");
    };
    FunctionCallMatchErrorTests.prototype.twoAnyArgumentsBothOutputAsAnythingInNotExpectedValue = function () {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var functionCallError = new function_call_match_error_1.FunctionCallMatchError(fakeSpy, false, [
            alsatian_core_1.Any,
            alsatian_core_1.Any
        ]);
        alsatian_core_1.Expect(functionCallError.expected).toBe("function not to be called with [Anything, Anything].");
    };
    FunctionCallMatchErrorTests.prototype.anyTypeArgumentOutputAsAnyTypeInMessage = function (type) {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var functionCallError = new function_call_match_error_1.FunctionCallMatchError(fakeSpy, true, [
            alsatian_core_1.Any(type)
        ]);
        alsatian_core_1.Expect(functionCallError.message).toBe("Expected function to be called with [Any " +
            type.name +
            "].");
    };
    FunctionCallMatchErrorTests.prototype.twoAnyTypeArgumentsBothOutputAsAnyTypeInMessage = function (typeOne, typeTwo) {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var functionCallError = new function_call_match_error_1.FunctionCallMatchError(fakeSpy, true, [
            alsatian_core_1.Any(typeOne),
            alsatian_core_1.Any(typeTwo)
        ]);
        alsatian_core_1.Expect(functionCallError.message).toBe("Expected function to be called with [Any " + typeOne.name + ", Any " + typeTwo.name + "].");
    };
    FunctionCallMatchErrorTests.prototype.anyTypeArgumentOutputAsAnyTypeInNotExpectedMessage = function (type) {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var functionCallError = new function_call_match_error_1.FunctionCallMatchError(fakeSpy, false, [
            alsatian_core_1.Any(type)
        ]);
        alsatian_core_1.Expect(functionCallError.message).toBe("Expected function not to be called with [Any " +
            type.name +
            "].");
    };
    FunctionCallMatchErrorTests.prototype.twoAnyTypeArgumentsBothOutputAsAnyTypeInNotExpectedMessage = function (typeOne, typeTwo) {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var functionCallError = new function_call_match_error_1.FunctionCallMatchError(fakeSpy, false, [
            alsatian_core_1.Any(typeOne),
            alsatian_core_1.Any(typeTwo)
        ]);
        alsatian_core_1.Expect(functionCallError.message).toBe("Expected function not to be called with [Any " + typeOne.name + ", Any " + typeTwo.name + "].");
    };
    FunctionCallMatchErrorTests.prototype.anyTypeArgumentOutputAsAnyTypeInExpectedValue = function (type) {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var functionCallError = new function_call_match_error_1.FunctionCallMatchError(fakeSpy, true, [
            alsatian_core_1.Any(type)
        ]);
        alsatian_core_1.Expect(functionCallError.expected).toBe("function to be called with [Any " + type.name + "].");
    };
    FunctionCallMatchErrorTests.prototype.twoAnyTypeArgumentsBothOutputAsAnyTypeInExpectedValue = function (typeOne, typeTwo) {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var functionCallError = new function_call_match_error_1.FunctionCallMatchError(fakeSpy, true, [
            alsatian_core_1.Any(typeOne),
            alsatian_core_1.Any(typeTwo)
        ]);
        alsatian_core_1.Expect(functionCallError.expected).toBe("function to be called with [Any " +
            typeOne.name +
            ", Any " +
            typeTwo.name +
            "].");
    };
    FunctionCallMatchErrorTests.prototype.anyTypeArgumentOutputAsAnyTypeInNotExpectedValue = function (type) {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var functionCallError = new function_call_match_error_1.FunctionCallMatchError(fakeSpy, false, [
            alsatian_core_1.Any(type)
        ]);
        alsatian_core_1.Expect(functionCallError.expected).toBe("function not to be called with [Any " + type.name + "].");
    };
    FunctionCallMatchErrorTests.prototype.twoAnyTypeArgumentsBothOutputAsAnyTypeInNotExpectedValue = function (typeOne, typeTwo) {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var functionCallError = new function_call_match_error_1.FunctionCallMatchError(fakeSpy, false, [
            alsatian_core_1.Any(typeOne),
            alsatian_core_1.Any(typeTwo)
        ]);
        alsatian_core_1.Expect(functionCallError.expected).toBe("function not to be called with [Any " +
            typeOne.name +
            ", Any " +
            typeTwo.name +
            "].");
    };
    FunctionCallMatchErrorTests.prototype.anyAndAnyTypeArgumentsBothOutputAsAnythingAndAnyTypeInMessage = function (type) {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var functionCallError = new function_call_match_error_1.FunctionCallMatchError(fakeSpy, true, [
            alsatian_core_1.Any,
            alsatian_core_1.Any(type)
        ]);
        alsatian_core_1.Expect(functionCallError.message).toBe("Expected function to be called with [Anything, Any " +
            type.name +
            "].");
    };
    FunctionCallMatchErrorTests.prototype.anyAndAnyTypeArgumentsBothOutputAsAnythingAndAnyTypeInMessageAnyTypeInNotExpectedMessage = function (type) {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var functionCallError = new function_call_match_error_1.FunctionCallMatchError(fakeSpy, false, [
            alsatian_core_1.Any,
            alsatian_core_1.Any(type)
        ]);
        alsatian_core_1.Expect(functionCallError.message).toBe("Expected function not to be called with [Anything, Any " +
            type.name +
            "].");
    };
    FunctionCallMatchErrorTests.prototype.anyAndAnyTypeArgumentsBothOutputAsAnythingAndAnyTypeInExpectedValue = function (type) {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var functionCallError = new function_call_match_error_1.FunctionCallMatchError(fakeSpy, true, [
            alsatian_core_1.Any,
            alsatian_core_1.Any(type)
        ]);
        alsatian_core_1.Expect(functionCallError.expected).toBe("function to be called with [Anything, Any " +
            type.name +
            "].");
    };
    FunctionCallMatchErrorTests.prototype.anyAndAnyTypeArgumentsBothOutputAsAnythignAndAnyTypeInNotExpectedValue = function (type) {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var functionCallError = new function_call_match_error_1.FunctionCallMatchError(fakeSpy, false, [
            alsatian_core_1.Any,
            alsatian_core_1.Any(type)
        ]);
        alsatian_core_1.Expect(functionCallError.expected).toBe("function not to be called with [Anything, Any " +
            type.name +
            "].");
    };
    FunctionCallMatchErrorTests.prototype.anyTypeAndAnyArgumentsBothOutputAsAnyTypeAndAnythingInMessage = function (type) {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var functionCallError = new function_call_match_error_1.FunctionCallMatchError(fakeSpy, true, [
            alsatian_core_1.Any(type),
            alsatian_core_1.Any
        ]);
        alsatian_core_1.Expect(functionCallError.message).toBe("Expected function to be called with [Any " +
            type.name +
            ", Anything].");
    };
    FunctionCallMatchErrorTests.prototype.anyTypeAndAnyArgumentsBothOutputAsAnyTypeAndAnythingInMessageAnyTypeInNotExpectedMessage = function (type) {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var functionCallError = new function_call_match_error_1.FunctionCallMatchError(fakeSpy, false, [
            alsatian_core_1.Any(type),
            alsatian_core_1.Any
        ]);
        alsatian_core_1.Expect(functionCallError.message).toBe("Expected function not to be called with [Any " +
            type.name +
            ", Anything].");
    };
    FunctionCallMatchErrorTests.prototype.anyTypeAndAnyArgumentsBothOutputAsAnyTypeAndAnythingInExpectedValue = function (type) {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var functionCallError = new function_call_match_error_1.FunctionCallMatchError(fakeSpy, true, [
            alsatian_core_1.Any(type),
            alsatian_core_1.Any
        ]);
        alsatian_core_1.Expect(functionCallError.expected).toBe("function to be called with [Any " +
            type.name +
            ", Anything].");
    };
    FunctionCallMatchErrorTests.prototype.anyTypeAndAnyArgumentsBothOutputAsAnyTypeAndAnythingInNotExpectedValue = function (type) {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var functionCallError = new function_call_match_error_1.FunctionCallMatchError(fakeSpy, false, [
            alsatian_core_1.Any(type),
            alsatian_core_1.Any
        ]);
        alsatian_core_1.Expect(functionCallError.expected).toBe("function not to be called with [Any " +
            type.name +
            ", Anything].");
    };
    FunctionCallMatchErrorTests.prototype.anyTypeThatMatchesArgumentOutputAsAnyTypeInMessage = function (type) {
        var fakeSpy = { calls: [] };
        var anyType = alsatian_core_1.Any(type).thatMatches(function (e) { return true; });
        var functionCallError = new function_call_match_error_1.FunctionCallMatchError(fakeSpy, true, [
            anyType
        ]);
        alsatian_core_1.Expect(functionCallError.message).toBe("Expected function to be called with [" + anyType.stringify() + "].");
    };
    FunctionCallMatchErrorTests.prototype.twoAnyTypeThatMatchesArgumentsBothOutputAsAnyTypeInMessage = function (typeOne, typeTwo) {
        var fakeSpy = { calls: [] };
        var anyTypeOne = alsatian_core_1.Any(typeOne).thatMatches(function (e) { return true; });
        var anyTypeTwo = alsatian_core_1.Any(typeTwo).thatMatches(function (e) { return true; });
        var functionCallError = new function_call_match_error_1.FunctionCallMatchError(fakeSpy, true, [
            anyTypeOne,
            anyTypeTwo
        ]);
        alsatian_core_1.Expect(functionCallError.message).toBe("Expected function to be called with [" + anyTypeOne.stringify() + ", " + anyTypeTwo.stringify() + "].");
    };
    FunctionCallMatchErrorTests.prototype.anyTypeThatMatchesArgumentOutputAsAnyTypeInNotExpectedMessage = function (type) {
        var fakeSpy = { calls: [] };
        var anyType = alsatian_core_1.Any(type).thatMatches(function (e) { return true; });
        var functionCallError = new function_call_match_error_1.FunctionCallMatchError(fakeSpy, false, [
            anyType
        ]);
        alsatian_core_1.Expect(functionCallError.message).toBe("Expected function not to be called with [" + anyType.stringify() + "].");
    };
    FunctionCallMatchErrorTests.prototype.twoAnyTypeThatMatchesArgumentsBothOutputAsAnyTypeInNotExpectedMessage = function (typeOne, typeTwo) {
        var fakeSpy = { calls: [] };
        var anyTypeOne = alsatian_core_1.Any(typeOne).thatMatches(function (e) { return true; });
        var anyTypeTwo = alsatian_core_1.Any(typeTwo).thatMatches(function (e) { return true; });
        var functionCallError = new function_call_match_error_1.FunctionCallMatchError(fakeSpy, false, [
            anyTypeOne,
            anyTypeTwo
        ]);
        alsatian_core_1.Expect(functionCallError.message).toBe("Expected function not to be called with [" + anyTypeOne.stringify() + ", " + anyTypeTwo.stringify() + "].");
    };
    FunctionCallMatchErrorTests.prototype.anyTypeThatMatchesArgumentOutputAsAnyTypeInExpectedValue = function (type) {
        var fakeSpy = { calls: [] };
        var anyType = alsatian_core_1.Any(type).thatMatches(function (e) { return true; });
        var functionCallError = new function_call_match_error_1.FunctionCallMatchError(fakeSpy, true, [
            anyType
        ]);
        alsatian_core_1.Expect(functionCallError.expected).toBe("function to be called with [" + anyType.stringify() + "].");
    };
    FunctionCallMatchErrorTests.prototype.twoAnyTypeThatMatchesArgumentsBothOutputAsAnyTypeInExpectedValue = function (typeOne, typeTwo) {
        var fakeSpy = { calls: [] };
        var anyTypeOne = alsatian_core_1.Any(typeOne).thatMatches(function (e) { return true; });
        var anyTypeTwo = alsatian_core_1.Any(typeTwo).thatMatches(function (e) { return true; });
        var functionCallError = new function_call_match_error_1.FunctionCallMatchError(fakeSpy, true, [
            anyTypeOne,
            anyTypeTwo
        ]);
        alsatian_core_1.Expect(functionCallError.expected).toBe("function to be called with [" + anyTypeOne.stringify() + ", " + anyTypeTwo.stringify() + "].");
    };
    FunctionCallMatchErrorTests.prototype.anyTypeArgumentThatMatchesOutputAsAnyTypeInNotExpectedValue = function (type) {
        var fakeSpy = { calls: [] };
        var anyType = alsatian_core_1.Any(type).thatMatches(function (e) { return true; });
        var functionCallError = new function_call_match_error_1.FunctionCallMatchError(fakeSpy, false, [
            anyType
        ]);
        alsatian_core_1.Expect(functionCallError.expected).toBe("function not to be called with [" + anyType.stringify() + "].");
    };
    FunctionCallMatchErrorTests.prototype.twoAnyTypeThatMatchesArgumentsBothOutputAsAnyTypeInNotExpectedValue = function (typeOne, typeTwo) {
        var fakeSpy = { calls: [] };
        var anyTypeOne = alsatian_core_1.Any(typeOne).thatMatches(function (e) { return true; });
        var anyTypeTwo = alsatian_core_1.Any(typeTwo).thatMatches(function (e) { return true; });
        var functionCallError = new function_call_match_error_1.FunctionCallMatchError(fakeSpy, false, [
            anyTypeOne,
            anyTypeTwo
        ]);
        alsatian_core_1.Expect(functionCallError.expected).toBe("function not to be called with [" + anyTypeOne.stringify() + ", " + anyTypeTwo.stringify() + "].");
    };
    FunctionCallMatchErrorTests.prototype.anyAndAnyTypeThatMatchesArgumentsBothOutputAsAnythingAndAnyTypeInMessage = function (type) {
        var fakeSpy = { calls: [] };
        var anyType = alsatian_core_1.Any(type).thatMatches(function (e) { return true; });
        var functionCallError = new function_call_match_error_1.FunctionCallMatchError(fakeSpy, true, [
            alsatian_core_1.Any,
            anyType
        ]);
        alsatian_core_1.Expect(functionCallError.message).toBe("Expected function to be called with [Anything, " + anyType.stringify() + "].");
    };
    FunctionCallMatchErrorTests.prototype.anyAndAnyTypeThatMatchesArgumentsBothOutputAsAnythingAndAnyTypeInMessageAnyTypeInNotExpectedMessage = function (type) {
        var fakeSpy = { calls: [] };
        var anyType = alsatian_core_1.Any(type).thatMatches(function (e) { return true; });
        var functionCallError = new function_call_match_error_1.FunctionCallMatchError(fakeSpy, false, [
            alsatian_core_1.Any,
            anyType
        ]);
        alsatian_core_1.Expect(functionCallError.message).toBe("Expected function not to be called with [Anything, " + anyType.stringify() + "].");
    };
    FunctionCallMatchErrorTests.prototype.anyAndAnyTypeThatMatchesArgumentsBothOutputAsAnythingAndAnyTypeInExpectedValue = function (type) {
        var fakeSpy = { calls: [] };
        var anyType = alsatian_core_1.Any(type).thatMatches(function (e) { return true; });
        var functionCallError = new function_call_match_error_1.FunctionCallMatchError(fakeSpy, true, [
            alsatian_core_1.Any,
            anyType
        ]);
        alsatian_core_1.Expect(functionCallError.expected).toBe("function to be called with [Anything, " + anyType.stringify() + "].");
    };
    FunctionCallMatchErrorTests.prototype.anyAndAnyTypeThatMatchesArgumentsBothOutputAsAnythignAndAnyTypeInNotExpectedValue = function (type) {
        var fakeSpy = { calls: [] };
        var anyType = alsatian_core_1.Any(type).thatMatches(function (e) { return true; });
        var functionCallError = new function_call_match_error_1.FunctionCallMatchError(fakeSpy, false, [
            alsatian_core_1.Any,
            anyType
        ]);
        alsatian_core_1.Expect(functionCallError.expected).toBe("function not to be called with [Anything, " + anyType.stringify() + "].");
    };
    FunctionCallMatchErrorTests.prototype.anyTypeAndAnyThatMatchesArgumentsBothOutputAsAnyTypeAndAnythingInMessage = function (type) {
        var fakeSpy = { calls: [] };
        var anyType = alsatian_core_1.Any(type).thatMatches(function (e) { return true; });
        var functionCallError = new function_call_match_error_1.FunctionCallMatchError(fakeSpy, true, [
            anyType,
            alsatian_core_1.Any
        ]);
        alsatian_core_1.Expect(functionCallError.message).toBe("Expected function to be called with [" + anyType.stringify() + ", Anything].");
    };
    FunctionCallMatchErrorTests.prototype.anyTypeAndAnyThatMatchesArgumentsBothOutputAsAnyTypeAndAnythingInMessageAnyTypeInNotExpectedMessage = function (type) {
        var fakeSpy = { calls: [] };
        var anyType = alsatian_core_1.Any(type).thatMatches(function (e) { return true; });
        var functionCallError = new function_call_match_error_1.FunctionCallMatchError(fakeSpy, false, [
            anyType,
            alsatian_core_1.Any
        ]);
        alsatian_core_1.Expect(functionCallError.message).toBe("Expected function not to be called with [" + anyType.stringify() + ", Anything].");
    };
    FunctionCallMatchErrorTests.prototype.anyTypeAndAnyThatMatchesArgumentsBothOutputAsAnyTypeAndAnythingInExpectedValue = function (type) {
        var fakeSpy = { calls: [] };
        var anyType = alsatian_core_1.Any(type).thatMatches(function (e) { return true; });
        var functionCallError = new function_call_match_error_1.FunctionCallMatchError(fakeSpy, true, [
            anyType,
            alsatian_core_1.Any
        ]);
        alsatian_core_1.Expect(functionCallError.expected).toBe("function to be called with [" + anyType.stringify() + ", Anything].");
    };
    FunctionCallMatchErrorTests.prototype.anyTypeAndAnyThatMatchesArgumentsBothOutputAsAnyTypeAndAnythingInNotExpectedValue = function (type) {
        var fakeSpy = { calls: [] };
        var anyType = alsatian_core_1.Any(type).thatMatches(function (e) { return true; });
        var functionCallError = new function_call_match_error_1.FunctionCallMatchError(fakeSpy, false, [
            anyType,
            alsatian_core_1.Any
        ]);
        alsatian_core_1.Expect(functionCallError.expected).toBe("function not to be called with [" + anyType.stringify() + ", Anything].");
    };
    FunctionCallMatchErrorTests.prototype.exactAndAnyArgumentsBothOutputAsExactAndAnythingInMessage = function (exactValue) {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var functionCallError = new function_call_match_error_1.FunctionCallMatchError(fakeSpy, true, [
            exactValue,
            alsatian_core_1.Any
        ]);
        alsatian_core_1.Expect(functionCallError.message).toBe("Expected function to be called with [" +
            JSON.stringify(exactValue) +
            ", Anything].");
    };
    FunctionCallMatchErrorTests.prototype.exactAndAnyArgumentsBothOutputAsExactAndAnythingInMessageAnyTyoeInNotExpectedMessage = function (exactValue) {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var functionCallError = new function_call_match_error_1.FunctionCallMatchError(fakeSpy, false, [
            exactValue,
            alsatian_core_1.Any
        ]);
        alsatian_core_1.Expect(functionCallError.message).toBe("Expected function not to be called with [" +
            JSON.stringify(exactValue) +
            ", Anything].");
    };
    FunctionCallMatchErrorTests.prototype.exactAndAnyArgumentsBothOutputAsExactAndAnythingInExpectedValue = function (exactValue) {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var functionCallError = new function_call_match_error_1.FunctionCallMatchError(fakeSpy, true, [
            exactValue,
            alsatian_core_1.Any
        ]);
        alsatian_core_1.Expect(functionCallError.expected).toBe("function to be called with [" +
            JSON.stringify(exactValue) +
            ", Anything].");
    };
    FunctionCallMatchErrorTests.prototype.exactAndAnyArgumentsBothOutputAsExactAndAnythingInNotExpectedValue = function (exactValue) {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var functionCallError = new function_call_match_error_1.FunctionCallMatchError(fakeSpy, false, [
            exactValue,
            alsatian_core_1.Any
        ]);
        alsatian_core_1.Expect(functionCallError.expected).toBe("function not to be called with [" +
            JSON.stringify(exactValue) +
            ", Anything].");
    };
    FunctionCallMatchErrorTests.prototype.anyAndExactArgumentsBothOutputAsAnythingAndExactInMessage = function (exactValue) {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var functionCallError = new function_call_match_error_1.FunctionCallMatchError(fakeSpy, true, [
            alsatian_core_1.Any,
            exactValue
        ]);
        alsatian_core_1.Expect(functionCallError.message).toBe("Expected function to be called with [Anything, " +
            JSON.stringify(exactValue) +
            "].");
    };
    FunctionCallMatchErrorTests.prototype.anyAndExaactArgumentsBothOutputAsAnythingAndExactInMessageAnyTyoeInNotExpectedMessage = function (exactValue) {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var functionCallError = new function_call_match_error_1.FunctionCallMatchError(fakeSpy, false, [
            alsatian_core_1.Any,
            exactValue
        ]);
        alsatian_core_1.Expect(functionCallError.message).toBe("Expected function not to be called with [Anything, " +
            JSON.stringify(exactValue) +
            "].");
    };
    FunctionCallMatchErrorTests.prototype.anyAndExactArgumentsBothOutputAsAnythingAndExactInExpectedValue = function (exactValue) {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var functionCallError = new function_call_match_error_1.FunctionCallMatchError(fakeSpy, true, [
            alsatian_core_1.Any,
            exactValue
        ]);
        alsatian_core_1.Expect(functionCallError.expected).toBe("function to be called with [Anything, " +
            JSON.stringify(exactValue) +
            "].");
    };
    FunctionCallMatchErrorTests.prototype.anyAndExactArgumentsBothOutputAsAnythingAndExactInNotExpectedValue = function (exactValue) {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var functionCallError = new function_call_match_error_1.FunctionCallMatchError(fakeSpy, false, [
            alsatian_core_1.Any,
            exactValue
        ]);
        alsatian_core_1.Expect(functionCallError.expected).toBe("function not to be called with [Anything, " +
            JSON.stringify(exactValue) +
            "].");
    };
    FunctionCallMatchErrorTests.prototype.exactAndAnyTypeArgumentsBothOutputAsExactAndAnyTypeInMessage = function (type, exactValue) {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var functionCallError = new function_call_match_error_1.FunctionCallMatchError(fakeSpy, true, [
            exactValue,
            alsatian_core_1.Any(type)
        ]);
        alsatian_core_1.Expect(functionCallError.message).toBe("Expected function to be called with [" + JSON.stringify(exactValue) + ", Any " + type.name + "].");
    };
    FunctionCallMatchErrorTests.prototype.exactAndAnyTypeArgumentsBothOutputAsExactAndAnyTypeInMessageAnyTypeInNotExpectedMessage = function (type, exactValue) {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var functionCallError = new function_call_match_error_1.FunctionCallMatchError(fakeSpy, false, [
            exactValue,
            alsatian_core_1.Any(type)
        ]);
        alsatian_core_1.Expect(functionCallError.message).toBe("Expected function not to be called with [" + JSON.stringify(exactValue) + ", Any " + type.name + "].");
    };
    FunctionCallMatchErrorTests.prototype.exactAndAnyTypeArgumentsBothOutputAsExactAndAnyTypeInExpectedValue = function (type, exactValue) {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var functionCallError = new function_call_match_error_1.FunctionCallMatchError(fakeSpy, true, [
            exactValue,
            alsatian_core_1.Any(type)
        ]);
        alsatian_core_1.Expect(functionCallError.expected).toBe("function to be called with [" +
            JSON.stringify(exactValue) +
            ", Any " +
            type.name +
            "].");
    };
    FunctionCallMatchErrorTests.prototype.exactAndAnyTypeArgumentsBothOutputAsExactAndAnyTypeInNotExpectedValue = function (type, exactValue) {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var functionCallError = new function_call_match_error_1.FunctionCallMatchError(fakeSpy, false, [
            exactValue,
            alsatian_core_1.Any(type)
        ]);
        alsatian_core_1.Expect(functionCallError.expected).toBe("function not to be called with [" +
            JSON.stringify(exactValue) +
            ", Any " +
            type.name +
            "].");
    };
    FunctionCallMatchErrorTests.prototype.anyTypeAndExactArgumentsBothOutputAsAnyTypeAndExactInMessage = function (type, exactValue) {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var functionCallError = new function_call_match_error_1.FunctionCallMatchError(fakeSpy, true, [
            alsatian_core_1.Any(type),
            exactValue
        ]);
        alsatian_core_1.Expect(functionCallError.message).toBe("Expected function to be called with [Any " + type.name + ", " + JSON.stringify(exactValue) + "].");
    };
    FunctionCallMatchErrorTests.prototype.anyTypeAndExaactArgumentsBothOutputAsAnyTypeAndExactInMessageAnyTyoeInNotExpectedMessage = function (type, exactValue) {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var functionCallError = new function_call_match_error_1.FunctionCallMatchError(fakeSpy, false, [
            alsatian_core_1.Any(type),
            exactValue
        ]);
        alsatian_core_1.Expect(functionCallError.message).toBe("Expected function not to be called with [Any " + type.name + ", " + JSON.stringify(exactValue) + "].");
    };
    FunctionCallMatchErrorTests.prototype.anyTypeAndExactArgumentsBothOutputAsAnyTypeAndExactInExpectedValue = function (type, exactValue) {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var functionCallError = new function_call_match_error_1.FunctionCallMatchError(fakeSpy, true, [
            alsatian_core_1.Any(type),
            exactValue
        ]);
        alsatian_core_1.Expect(functionCallError.expected).toBe("function to be called with [Any " +
            type.name +
            ", " +
            JSON.stringify(exactValue) +
            "].");
    };
    FunctionCallMatchErrorTests.prototype.anyTypeAndExactArgumentsBothOutputAsAnyTypeAndExactInNotExpectedValue = function (type, exactValue) {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var functionCallError = new function_call_match_error_1.FunctionCallMatchError(fakeSpy, false, [
            alsatian_core_1.Any(type),
            exactValue
        ]);
        alsatian_core_1.Expect(functionCallError.expected).toBe("function not to be called with [Any " +
            type.name +
            ", " +
            JSON.stringify(exactValue) +
            "].");
    };
    FunctionCallMatchErrorTests.prototype.exactAndAnyTypeThatMatchesArgumentsBothOutputAsExactAndAnyTypeInMessage = function (type, exactValue) {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var anyType = alsatian_core_1.Any(type).thatMatches(function (v) { return true; });
        var functionCallError = new function_call_match_error_1.FunctionCallMatchError(fakeSpy, true, [
            exactValue,
            anyType
        ]);
        alsatian_core_1.Expect(functionCallError.message).toBe("Expected function to be called with [" + JSON.stringify(exactValue) + ", " + anyType.stringify() + "].");
    };
    FunctionCallMatchErrorTests.prototype.exactAndAnyTypeThatMatchesArgumentsBothOutputAsExactAndAnyTypeInMessageAnyTypeInNotExpectedMessage = function (type, exactValue) {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var anyType = alsatian_core_1.Any(type).thatMatches(function (v) { return true; });
        var functionCallError = new function_call_match_error_1.FunctionCallMatchError(fakeSpy, false, [
            exactValue,
            anyType
        ]);
        alsatian_core_1.Expect(functionCallError.message).toBe("Expected function not to be called with [" + JSON.stringify(exactValue) + ", " + anyType.stringify() + "].");
    };
    FunctionCallMatchErrorTests.prototype.exactAndAnyTypeThatMatchesArgumentsBothOutputAsExactAndAnyTypeInExpectedValue = function (type, exactValue) {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var anyType = alsatian_core_1.Any(type).thatMatches(function (v) { return true; });
        var functionCallError = new function_call_match_error_1.FunctionCallMatchError(fakeSpy, true, [
            exactValue,
            anyType
        ]);
        alsatian_core_1.Expect(functionCallError.expected).toBe("function to be called with [" + JSON.stringify(exactValue) + ", " + anyType.stringify() + "].");
    };
    FunctionCallMatchErrorTests.prototype.exactAndAnyTypeThatMatchesArgumentsBothOutputAsExactAndAnyTypeInNotExpectedValue = function (type, exactValue) {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var anyType = alsatian_core_1.Any(type).thatMatches(function (v) { return true; });
        var functionCallError = new function_call_match_error_1.FunctionCallMatchError(fakeSpy, false, [
            exactValue,
            anyType
        ]);
        alsatian_core_1.Expect(functionCallError.expected).toBe("function not to be called with [" + JSON.stringify(exactValue) + ", " + anyType.stringify() + "].");
    };
    FunctionCallMatchErrorTests.prototype.anyTypeAndExactThatMatchesArgumentsBothOutputAsAnyTypeAndExactInMessage = function (type, exactValue) {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var anyType = alsatian_core_1.Any(type).thatMatches(function (v) { return true; });
        var functionCallError = new function_call_match_error_1.FunctionCallMatchError(fakeSpy, true, [
            anyType,
            exactValue
        ]);
        alsatian_core_1.Expect(functionCallError.message).toBe("Expected function to be called with [" + anyType.stringify() + ", " + JSON.stringify(exactValue) + "].");
    };
    FunctionCallMatchErrorTests.prototype.anyTypeAndExactThatMatchesArgumentsBothOutputAsAnyTypeAndExactInMessageAnyTyoeInNotExpectedMessage = function (type, exactValue) {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var anyType = alsatian_core_1.Any(type).thatMatches(function (v) { return true; });
        var functionCallError = new function_call_match_error_1.FunctionCallMatchError(fakeSpy, false, [
            anyType,
            exactValue
        ]);
        alsatian_core_1.Expect(functionCallError.message).toBe("Expected function not to be called with [" + anyType.stringify() + ", " + JSON.stringify(exactValue) + "].");
    };
    FunctionCallMatchErrorTests.prototype.anyTypeAndExactThatMatchesArgumentsBothOutputAsAnyTypeAndExactInExpectedValue = function (type, exactValue) {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var anyType = alsatian_core_1.Any(type).thatMatches(function (v) { return true; });
        var functionCallError = new function_call_match_error_1.FunctionCallMatchError(fakeSpy, true, [
            anyType,
            exactValue
        ]);
        alsatian_core_1.Expect(functionCallError.expected).toBe("function to be called with [" + anyType.stringify() + ", " + JSON.stringify(exactValue) + "].");
    };
    FunctionCallMatchErrorTests.prototype.anyTypeAndExactThatMatchesArgumentsBothOutputAsAnyTypeAndExactInNotExpectedValue = function (type, exactValue) {
        var fakeSpy = new function_spy_builder_1.FunctionSpyBuilder().build();
        var anyType = alsatian_core_1.Any(type).thatMatches(function (v) { return true; });
        var functionCallError = new function_call_match_error_1.FunctionCallMatchError(fakeSpy, false, [
            anyType,
            exactValue
        ]);
        alsatian_core_1.Expect(functionCallError.expected).toBe("function not to be called with [" + anyType.stringify() + ", " + JSON.stringify(exactValue) + "].");
    };
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FunctionCallMatchErrorTests.prototype, "shouldBeCalledMessage", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FunctionCallMatchErrorTests.prototype, "shouldNotBeCalledMessage", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FunctionCallMatchErrorTests.prototype, "actualValueAndShouldMatchShouldBeSetToFunctionWasNotCalled", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FunctionCallMatchErrorTests.prototype, "actualValueAndShouldNotMatchShouldBeSetToFunctionWasCalled", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FunctionCallMatchErrorTests.prototype, "expectedValueAndShouldMatchShouldBeSetToFunctionToBeCalled", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FunctionCallMatchErrorTests.prototype, "expectedValueAndShouldNotMatchShouldBeSetToFunctionNotToBeCalled", null);
    __decorate([
        alsatian_core_1.TestCase(["this"]),
        alsatian_core_1.TestCase(["this", "that"]),
        alsatian_core_1.TestCase([1, 2, 3]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array]),
        __metadata("design:returntype", void 0)
    ], FunctionCallMatchErrorTests.prototype, "shouldBeCalledWithArgsMessage", null);
    __decorate([
        alsatian_core_1.TestCase(["this"]),
        alsatian_core_1.TestCase(["this", "that"]),
        alsatian_core_1.TestCase([1, 2, 3]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array]),
        __metadata("design:returntype", void 0)
    ], FunctionCallMatchErrorTests.prototype, "shouldNotBeCalledWithArgsMessage", null);
    __decorate([
        alsatian_core_1.TestCase([[]]),
        alsatian_core_1.TestCase([[], []]),
        alsatian_core_1.TestCase([[1], [2], [3]]),
        alsatian_core_1.TestCase([["something", "and", "another", "thing"]]),
        alsatian_core_1.TestCase([["this", "or"], ["that", "other", "thing"]]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array]),
        __metadata("design:returntype", void 0)
    ], FunctionCallMatchErrorTests.prototype, "actualValueAndShouldMatchShouldBeSetToFunctionWasNotCalledWithArguments", null);
    __decorate([
        alsatian_core_1.TestCase([[]]),
        alsatian_core_1.TestCase([[], []]),
        alsatian_core_1.TestCase([[1], [2], [3]]),
        alsatian_core_1.TestCase([["something", "and", "another", "thing"]]),
        alsatian_core_1.TestCase([["this", "or"], ["that", "other", "thing"]]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array]),
        __metadata("design:returntype", void 0)
    ], FunctionCallMatchErrorTests.prototype, "actualValueAndShouldNotMatchShouldBeSetToFunctionWasCalledWithArguments", null);
    __decorate([
        alsatian_core_1.TestCase([]),
        alsatian_core_1.TestCase([1]),
        alsatian_core_1.TestCase(["something"]),
        alsatian_core_1.TestCase([1, "or", 2, "other", "things"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array]),
        __metadata("design:returntype", void 0)
    ], FunctionCallMatchErrorTests.prototype, "expectedValueAndShouldMatchShouldBeSetToFunctionToBeCalledWithArguments", null);
    __decorate([
        alsatian_core_1.TestCase([]),
        alsatian_core_1.TestCase([1]),
        alsatian_core_1.TestCase(["something"]),
        alsatian_core_1.TestCase([1, "or", 2, "other", "things"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array]),
        __metadata("design:returntype", void 0)
    ], FunctionCallMatchErrorTests.prototype, "expectedValueAndShouldNotMatchShouldBeSetToFunctionNotToBeCalledWithArguments", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FunctionCallMatchErrorTests.prototype, "anyArgumentOutputAsAnythingInMessage", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FunctionCallMatchErrorTests.prototype, "twoAnyArgumentsBothOutputAsAnythingInMessage", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FunctionCallMatchErrorTests.prototype, "anyArgumentOutputAsAnythingInNotExpectedMessage", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FunctionCallMatchErrorTests.prototype, "twoAnyArgumentsBothOutputAsAnythingInNotExpectedMessage", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FunctionCallMatchErrorTests.prototype, "anyArgumentOutputAsAnythingInExpectedValue", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FunctionCallMatchErrorTests.prototype, "twoAnyArgumentsBothOutputAsAnythingInExpectedValue", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FunctionCallMatchErrorTests.prototype, "anyArgumentOutputAsAnythingInNotExpectedValue", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FunctionCallMatchErrorTests.prototype, "twoAnyArgumentsBothOutputAsAnythingInNotExpectedValue", null);
    __decorate([
        alsatian_core_1.TestCase(Number),
        alsatian_core_1.TestCase(String),
        alsatian_core_1.TestCase(Object),
        alsatian_core_1.TestCase(Array),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function]),
        __metadata("design:returntype", void 0)
    ], FunctionCallMatchErrorTests.prototype, "anyTypeArgumentOutputAsAnyTypeInMessage", null);
    __decorate([
        alsatian_core_1.TestCase(Number, Array),
        alsatian_core_1.TestCase(String, Object),
        alsatian_core_1.TestCase(Object, String),
        alsatian_core_1.TestCase(Array, Number),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function, Function]),
        __metadata("design:returntype", void 0)
    ], FunctionCallMatchErrorTests.prototype, "twoAnyTypeArgumentsBothOutputAsAnyTypeInMessage", null);
    __decorate([
        alsatian_core_1.TestCase(Number),
        alsatian_core_1.TestCase(String),
        alsatian_core_1.TestCase(Object),
        alsatian_core_1.TestCase(Array),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function]),
        __metadata("design:returntype", void 0)
    ], FunctionCallMatchErrorTests.prototype, "anyTypeArgumentOutputAsAnyTypeInNotExpectedMessage", null);
    __decorate([
        alsatian_core_1.TestCase(Number, Array),
        alsatian_core_1.TestCase(String, Object),
        alsatian_core_1.TestCase(Object, String),
        alsatian_core_1.TestCase(Array, Number),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function, Function]),
        __metadata("design:returntype", void 0)
    ], FunctionCallMatchErrorTests.prototype, "twoAnyTypeArgumentsBothOutputAsAnyTypeInNotExpectedMessage", null);
    __decorate([
        alsatian_core_1.TestCase(Number),
        alsatian_core_1.TestCase(String),
        alsatian_core_1.TestCase(Object),
        alsatian_core_1.TestCase(Array),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function]),
        __metadata("design:returntype", void 0)
    ], FunctionCallMatchErrorTests.prototype, "anyTypeArgumentOutputAsAnyTypeInExpectedValue", null);
    __decorate([
        alsatian_core_1.TestCase(Number, Array),
        alsatian_core_1.TestCase(String, Object),
        alsatian_core_1.TestCase(Object, String),
        alsatian_core_1.TestCase(Array, Number),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function, Function]),
        __metadata("design:returntype", void 0)
    ], FunctionCallMatchErrorTests.prototype, "twoAnyTypeArgumentsBothOutputAsAnyTypeInExpectedValue", null);
    __decorate([
        alsatian_core_1.TestCase(Number),
        alsatian_core_1.TestCase(String),
        alsatian_core_1.TestCase(Object),
        alsatian_core_1.TestCase(Array),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function]),
        __metadata("design:returntype", void 0)
    ], FunctionCallMatchErrorTests.prototype, "anyTypeArgumentOutputAsAnyTypeInNotExpectedValue", null);
    __decorate([
        alsatian_core_1.TestCase(Number, Array),
        alsatian_core_1.TestCase(String, Object),
        alsatian_core_1.TestCase(Object, String),
        alsatian_core_1.TestCase(Array, Number),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function, Function]),
        __metadata("design:returntype", void 0)
    ], FunctionCallMatchErrorTests.prototype, "twoAnyTypeArgumentsBothOutputAsAnyTypeInNotExpectedValue", null);
    __decorate([
        alsatian_core_1.TestCase(Number),
        alsatian_core_1.TestCase(String),
        alsatian_core_1.TestCase(Object),
        alsatian_core_1.TestCase(Array),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function]),
        __metadata("design:returntype", void 0)
    ], FunctionCallMatchErrorTests.prototype, "anyAndAnyTypeArgumentsBothOutputAsAnythingAndAnyTypeInMessage", null);
    __decorate([
        alsatian_core_1.TestCase(Number),
        alsatian_core_1.TestCase(String),
        alsatian_core_1.TestCase(Object),
        alsatian_core_1.TestCase(Array),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function]),
        __metadata("design:returntype", void 0)
    ], FunctionCallMatchErrorTests.prototype, "anyAndAnyTypeArgumentsBothOutputAsAnythingAndAnyTypeInMessageAnyTypeInNotExpectedMessage", null);
    __decorate([
        alsatian_core_1.TestCase(Number),
        alsatian_core_1.TestCase(String),
        alsatian_core_1.TestCase(Object),
        alsatian_core_1.TestCase(Array),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function]),
        __metadata("design:returntype", void 0)
    ], FunctionCallMatchErrorTests.prototype, "anyAndAnyTypeArgumentsBothOutputAsAnythingAndAnyTypeInExpectedValue", null);
    __decorate([
        alsatian_core_1.TestCase(Number),
        alsatian_core_1.TestCase(String),
        alsatian_core_1.TestCase(Object),
        alsatian_core_1.TestCase(Array),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function]),
        __metadata("design:returntype", void 0)
    ], FunctionCallMatchErrorTests.prototype, "anyAndAnyTypeArgumentsBothOutputAsAnythignAndAnyTypeInNotExpectedValue", null);
    __decorate([
        alsatian_core_1.TestCase(Number),
        alsatian_core_1.TestCase(String),
        alsatian_core_1.TestCase(Object),
        alsatian_core_1.TestCase(Array),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function]),
        __metadata("design:returntype", void 0)
    ], FunctionCallMatchErrorTests.prototype, "anyTypeAndAnyArgumentsBothOutputAsAnyTypeAndAnythingInMessage", null);
    __decorate([
        alsatian_core_1.TestCase(Number),
        alsatian_core_1.TestCase(String),
        alsatian_core_1.TestCase(Object),
        alsatian_core_1.TestCase(Array),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function]),
        __metadata("design:returntype", void 0)
    ], FunctionCallMatchErrorTests.prototype, "anyTypeAndAnyArgumentsBothOutputAsAnyTypeAndAnythingInMessageAnyTypeInNotExpectedMessage", null);
    __decorate([
        alsatian_core_1.TestCase(Number),
        alsatian_core_1.TestCase(String),
        alsatian_core_1.TestCase(Object),
        alsatian_core_1.TestCase(Array),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function]),
        __metadata("design:returntype", void 0)
    ], FunctionCallMatchErrorTests.prototype, "anyTypeAndAnyArgumentsBothOutputAsAnyTypeAndAnythingInExpectedValue", null);
    __decorate([
        alsatian_core_1.TestCase(Number),
        alsatian_core_1.TestCase(String),
        alsatian_core_1.TestCase(Object),
        alsatian_core_1.TestCase(Array),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function]),
        __metadata("design:returntype", void 0)
    ], FunctionCallMatchErrorTests.prototype, "anyTypeAndAnyArgumentsBothOutputAsAnyTypeAndAnythingInNotExpectedValue", null);
    __decorate([
        alsatian_core_1.TestCase(Number),
        alsatian_core_1.TestCase(String),
        alsatian_core_1.TestCase(Object),
        alsatian_core_1.TestCase(Array),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function]),
        __metadata("design:returntype", void 0)
    ], FunctionCallMatchErrorTests.prototype, "anyTypeThatMatchesArgumentOutputAsAnyTypeInMessage", null);
    __decorate([
        alsatian_core_1.TestCase(Number, Array),
        alsatian_core_1.TestCase(String, Object),
        alsatian_core_1.TestCase(Object, String),
        alsatian_core_1.TestCase(Array, Number),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function, Function]),
        __metadata("design:returntype", void 0)
    ], FunctionCallMatchErrorTests.prototype, "twoAnyTypeThatMatchesArgumentsBothOutputAsAnyTypeInMessage", null);
    __decorate([
        alsatian_core_1.TestCase(Number),
        alsatian_core_1.TestCase(String),
        alsatian_core_1.TestCase(Object),
        alsatian_core_1.TestCase(Array),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function]),
        __metadata("design:returntype", void 0)
    ], FunctionCallMatchErrorTests.prototype, "anyTypeThatMatchesArgumentOutputAsAnyTypeInNotExpectedMessage", null);
    __decorate([
        alsatian_core_1.TestCase(Number, Array),
        alsatian_core_1.TestCase(String, Object),
        alsatian_core_1.TestCase(Object, String),
        alsatian_core_1.TestCase(Array, Number),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function, Function]),
        __metadata("design:returntype", void 0)
    ], FunctionCallMatchErrorTests.prototype, "twoAnyTypeThatMatchesArgumentsBothOutputAsAnyTypeInNotExpectedMessage", null);
    __decorate([
        alsatian_core_1.TestCase(Number),
        alsatian_core_1.TestCase(String),
        alsatian_core_1.TestCase(Object),
        alsatian_core_1.TestCase(Array),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function]),
        __metadata("design:returntype", void 0)
    ], FunctionCallMatchErrorTests.prototype, "anyTypeThatMatchesArgumentOutputAsAnyTypeInExpectedValue", null);
    __decorate([
        alsatian_core_1.TestCase(Number, Array),
        alsatian_core_1.TestCase(String, Object),
        alsatian_core_1.TestCase(Object, String),
        alsatian_core_1.TestCase(Array, Number),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function, Function]),
        __metadata("design:returntype", void 0)
    ], FunctionCallMatchErrorTests.prototype, "twoAnyTypeThatMatchesArgumentsBothOutputAsAnyTypeInExpectedValue", null);
    __decorate([
        alsatian_core_1.TestCase(Number),
        alsatian_core_1.TestCase(String),
        alsatian_core_1.TestCase(Object),
        alsatian_core_1.TestCase(Array),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function]),
        __metadata("design:returntype", void 0)
    ], FunctionCallMatchErrorTests.prototype, "anyTypeArgumentThatMatchesOutputAsAnyTypeInNotExpectedValue", null);
    __decorate([
        alsatian_core_1.TestCase(Number, Array),
        alsatian_core_1.TestCase(String, Object),
        alsatian_core_1.TestCase(Object, String),
        alsatian_core_1.TestCase(Array, Number),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function, Function]),
        __metadata("design:returntype", void 0)
    ], FunctionCallMatchErrorTests.prototype, "twoAnyTypeThatMatchesArgumentsBothOutputAsAnyTypeInNotExpectedValue", null);
    __decorate([
        alsatian_core_1.TestCase(Number),
        alsatian_core_1.TestCase(String),
        alsatian_core_1.TestCase(Object),
        alsatian_core_1.TestCase(Array),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function]),
        __metadata("design:returntype", void 0)
    ], FunctionCallMatchErrorTests.prototype, "anyAndAnyTypeThatMatchesArgumentsBothOutputAsAnythingAndAnyTypeInMessage", null);
    __decorate([
        alsatian_core_1.TestCase(Number),
        alsatian_core_1.TestCase(String),
        alsatian_core_1.TestCase(Object),
        alsatian_core_1.TestCase(Array),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function]),
        __metadata("design:returntype", void 0)
    ], FunctionCallMatchErrorTests.prototype, "anyAndAnyTypeThatMatchesArgumentsBothOutputAsAnythingAndAnyTypeInMessageAnyTypeInNotExpectedMessage", null);
    __decorate([
        alsatian_core_1.TestCase(Number),
        alsatian_core_1.TestCase(String),
        alsatian_core_1.TestCase(Object),
        alsatian_core_1.TestCase(Array),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function]),
        __metadata("design:returntype", void 0)
    ], FunctionCallMatchErrorTests.prototype, "anyAndAnyTypeThatMatchesArgumentsBothOutputAsAnythingAndAnyTypeInExpectedValue", null);
    __decorate([
        alsatian_core_1.TestCase(Number),
        alsatian_core_1.TestCase(String),
        alsatian_core_1.TestCase(Object),
        alsatian_core_1.TestCase(Array),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function]),
        __metadata("design:returntype", void 0)
    ], FunctionCallMatchErrorTests.prototype, "anyAndAnyTypeThatMatchesArgumentsBothOutputAsAnythignAndAnyTypeInNotExpectedValue", null);
    __decorate([
        alsatian_core_1.TestCase(Number),
        alsatian_core_1.TestCase(String),
        alsatian_core_1.TestCase(Object),
        alsatian_core_1.TestCase(Array),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function]),
        __metadata("design:returntype", void 0)
    ], FunctionCallMatchErrorTests.prototype, "anyTypeAndAnyThatMatchesArgumentsBothOutputAsAnyTypeAndAnythingInMessage", null);
    __decorate([
        alsatian_core_1.TestCase(Number),
        alsatian_core_1.TestCase(String),
        alsatian_core_1.TestCase(Object),
        alsatian_core_1.TestCase(Array),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function]),
        __metadata("design:returntype", void 0)
    ], FunctionCallMatchErrorTests.prototype, "anyTypeAndAnyThatMatchesArgumentsBothOutputAsAnyTypeAndAnythingInMessageAnyTypeInNotExpectedMessage", null);
    __decorate([
        alsatian_core_1.TestCase(Number),
        alsatian_core_1.TestCase(String),
        alsatian_core_1.TestCase(Object),
        alsatian_core_1.TestCase(Array),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function]),
        __metadata("design:returntype", void 0)
    ], FunctionCallMatchErrorTests.prototype, "anyTypeAndAnyThatMatchesArgumentsBothOutputAsAnyTypeAndAnythingInExpectedValue", null);
    __decorate([
        alsatian_core_1.TestCase(Number),
        alsatian_core_1.TestCase(String),
        alsatian_core_1.TestCase(Object),
        alsatian_core_1.TestCase(Array),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function]),
        __metadata("design:returntype", void 0)
    ], FunctionCallMatchErrorTests.prototype, "anyTypeAndAnyThatMatchesArgumentsBothOutputAsAnyTypeAndAnythingInNotExpectedValue", null);
    __decorate([
        alsatian_core_1.TestCase("test"),
        alsatian_core_1.TestCase(42),
        alsatian_core_1.TestCase("something else"),
        alsatian_core_1.TestCase(-42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], FunctionCallMatchErrorTests.prototype, "exactAndAnyArgumentsBothOutputAsExactAndAnythingInMessage", null);
    __decorate([
        alsatian_core_1.TestCase("test"),
        alsatian_core_1.TestCase(42),
        alsatian_core_1.TestCase("something else"),
        alsatian_core_1.TestCase(-42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], FunctionCallMatchErrorTests.prototype, "exactAndAnyArgumentsBothOutputAsExactAndAnythingInMessageAnyTyoeInNotExpectedMessage", null);
    __decorate([
        alsatian_core_1.TestCase("test"),
        alsatian_core_1.TestCase(42),
        alsatian_core_1.TestCase("something else"),
        alsatian_core_1.TestCase(-42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], FunctionCallMatchErrorTests.prototype, "exactAndAnyArgumentsBothOutputAsExactAndAnythingInExpectedValue", null);
    __decorate([
        alsatian_core_1.TestCase("test"),
        alsatian_core_1.TestCase(42),
        alsatian_core_1.TestCase("something else"),
        alsatian_core_1.TestCase(-42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], FunctionCallMatchErrorTests.prototype, "exactAndAnyArgumentsBothOutputAsExactAndAnythingInNotExpectedValue", null);
    __decorate([
        alsatian_core_1.TestCase("test"),
        alsatian_core_1.TestCase(42),
        alsatian_core_1.TestCase("something else"),
        alsatian_core_1.TestCase(-42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], FunctionCallMatchErrorTests.prototype, "anyAndExactArgumentsBothOutputAsAnythingAndExactInMessage", null);
    __decorate([
        alsatian_core_1.TestCase("test"),
        alsatian_core_1.TestCase(42),
        alsatian_core_1.TestCase("something else"),
        alsatian_core_1.TestCase(-42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], FunctionCallMatchErrorTests.prototype, "anyAndExaactArgumentsBothOutputAsAnythingAndExactInMessageAnyTyoeInNotExpectedMessage", null);
    __decorate([
        alsatian_core_1.TestCase("test"),
        alsatian_core_1.TestCase(42),
        alsatian_core_1.TestCase("something else"),
        alsatian_core_1.TestCase(-42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], FunctionCallMatchErrorTests.prototype, "anyAndExactArgumentsBothOutputAsAnythingAndExactInExpectedValue", null);
    __decorate([
        alsatian_core_1.TestCase("test"),
        alsatian_core_1.TestCase(42),
        alsatian_core_1.TestCase("something else"),
        alsatian_core_1.TestCase(-42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], FunctionCallMatchErrorTests.prototype, "anyAndExactArgumentsBothOutputAsAnythingAndExactInNotExpectedValue", null);
    __decorate([
        alsatian_core_1.TestCase(Number, "test"),
        alsatian_core_1.TestCase(String, 42),
        alsatian_core_1.TestCase(Object, "something else"),
        alsatian_core_1.TestCase(Array, -42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function, Object]),
        __metadata("design:returntype", void 0)
    ], FunctionCallMatchErrorTests.prototype, "exactAndAnyTypeArgumentsBothOutputAsExactAndAnyTypeInMessage", null);
    __decorate([
        alsatian_core_1.TestCase(Number, "test"),
        alsatian_core_1.TestCase(String, 42),
        alsatian_core_1.TestCase(Object, "something else"),
        alsatian_core_1.TestCase(Array, -42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function, Object]),
        __metadata("design:returntype", void 0)
    ], FunctionCallMatchErrorTests.prototype, "exactAndAnyTypeArgumentsBothOutputAsExactAndAnyTypeInMessageAnyTypeInNotExpectedMessage", null);
    __decorate([
        alsatian_core_1.TestCase(Number, "test"),
        alsatian_core_1.TestCase(String, 42),
        alsatian_core_1.TestCase(Object, "something else"),
        alsatian_core_1.TestCase(Array, -42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function, Object]),
        __metadata("design:returntype", void 0)
    ], FunctionCallMatchErrorTests.prototype, "exactAndAnyTypeArgumentsBothOutputAsExactAndAnyTypeInExpectedValue", null);
    __decorate([
        alsatian_core_1.TestCase(Number, "test"),
        alsatian_core_1.TestCase(String, 42),
        alsatian_core_1.TestCase(Object, "something else"),
        alsatian_core_1.TestCase(Array, -42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function, Object]),
        __metadata("design:returntype", void 0)
    ], FunctionCallMatchErrorTests.prototype, "exactAndAnyTypeArgumentsBothOutputAsExactAndAnyTypeInNotExpectedValue", null);
    __decorate([
        alsatian_core_1.TestCase(Number, "test"),
        alsatian_core_1.TestCase(String, 42),
        alsatian_core_1.TestCase(Object, "something else"),
        alsatian_core_1.TestCase(Array, -42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function, Object]),
        __metadata("design:returntype", void 0)
    ], FunctionCallMatchErrorTests.prototype, "anyTypeAndExactArgumentsBothOutputAsAnyTypeAndExactInMessage", null);
    __decorate([
        alsatian_core_1.TestCase(Number, "test"),
        alsatian_core_1.TestCase(String, 42),
        alsatian_core_1.TestCase(Object, "something else"),
        alsatian_core_1.TestCase(Array, -42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function, Object]),
        __metadata("design:returntype", void 0)
    ], FunctionCallMatchErrorTests.prototype, "anyTypeAndExaactArgumentsBothOutputAsAnyTypeAndExactInMessageAnyTyoeInNotExpectedMessage", null);
    __decorate([
        alsatian_core_1.TestCase(Number, "test"),
        alsatian_core_1.TestCase(String, 42),
        alsatian_core_1.TestCase(Object, "something else"),
        alsatian_core_1.TestCase(Array, -42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function, Object]),
        __metadata("design:returntype", void 0)
    ], FunctionCallMatchErrorTests.prototype, "anyTypeAndExactArgumentsBothOutputAsAnyTypeAndExactInExpectedValue", null);
    __decorate([
        alsatian_core_1.TestCase(Number, "test"),
        alsatian_core_1.TestCase(String, 42),
        alsatian_core_1.TestCase(Object, "something else"),
        alsatian_core_1.TestCase(Array, -42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function, Object]),
        __metadata("design:returntype", void 0)
    ], FunctionCallMatchErrorTests.prototype, "anyTypeAndExactArgumentsBothOutputAsAnyTypeAndExactInNotExpectedValue", null);
    __decorate([
        alsatian_core_1.TestCase(Number, "test"),
        alsatian_core_1.TestCase(String, 42),
        alsatian_core_1.TestCase(Object, "something else"),
        alsatian_core_1.TestCase(Array, -42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function, Object]),
        __metadata("design:returntype", void 0)
    ], FunctionCallMatchErrorTests.prototype, "exactAndAnyTypeThatMatchesArgumentsBothOutputAsExactAndAnyTypeInMessage", null);
    __decorate([
        alsatian_core_1.TestCase(Number, "test"),
        alsatian_core_1.TestCase(String, 42),
        alsatian_core_1.TestCase(Object, "something else"),
        alsatian_core_1.TestCase(Array, -42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function, Object]),
        __metadata("design:returntype", void 0)
    ], FunctionCallMatchErrorTests.prototype, "exactAndAnyTypeThatMatchesArgumentsBothOutputAsExactAndAnyTypeInMessageAnyTypeInNotExpectedMessage", null);
    __decorate([
        alsatian_core_1.TestCase(Number, "test"),
        alsatian_core_1.TestCase(String, 42),
        alsatian_core_1.TestCase(Object, "something else"),
        alsatian_core_1.TestCase(Array, -42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function, Object]),
        __metadata("design:returntype", void 0)
    ], FunctionCallMatchErrorTests.prototype, "exactAndAnyTypeThatMatchesArgumentsBothOutputAsExactAndAnyTypeInExpectedValue", null);
    __decorate([
        alsatian_core_1.TestCase(Number, "test"),
        alsatian_core_1.TestCase(String, 42),
        alsatian_core_1.TestCase(Object, "something else"),
        alsatian_core_1.TestCase(Array, -42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function, Object]),
        __metadata("design:returntype", void 0)
    ], FunctionCallMatchErrorTests.prototype, "exactAndAnyTypeThatMatchesArgumentsBothOutputAsExactAndAnyTypeInNotExpectedValue", null);
    __decorate([
        alsatian_core_1.TestCase(Number, "test"),
        alsatian_core_1.TestCase(String, 42),
        alsatian_core_1.TestCase(Object, "something else"),
        alsatian_core_1.TestCase(Array, -42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function, Object]),
        __metadata("design:returntype", void 0)
    ], FunctionCallMatchErrorTests.prototype, "anyTypeAndExactThatMatchesArgumentsBothOutputAsAnyTypeAndExactInMessage", null);
    __decorate([
        alsatian_core_1.TestCase(Number, "test"),
        alsatian_core_1.TestCase(String, 42),
        alsatian_core_1.TestCase(Object, "something else"),
        alsatian_core_1.TestCase(Array, -42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function, Object]),
        __metadata("design:returntype", void 0)
    ], FunctionCallMatchErrorTests.prototype, "anyTypeAndExactThatMatchesArgumentsBothOutputAsAnyTypeAndExactInMessageAnyTyoeInNotExpectedMessage", null);
    __decorate([
        alsatian_core_1.TestCase(Number, "test"),
        alsatian_core_1.TestCase(String, 42),
        alsatian_core_1.TestCase(Object, "something else"),
        alsatian_core_1.TestCase(Array, -42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function, Object]),
        __metadata("design:returntype", void 0)
    ], FunctionCallMatchErrorTests.prototype, "anyTypeAndExactThatMatchesArgumentsBothOutputAsAnyTypeAndExactInExpectedValue", null);
    __decorate([
        alsatian_core_1.TestCase(Number, "test"),
        alsatian_core_1.TestCase(String, 42),
        alsatian_core_1.TestCase(Object, "something else"),
        alsatian_core_1.TestCase(Array, -42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function, Object]),
        __metadata("design:returntype", void 0)
    ], FunctionCallMatchErrorTests.prototype, "anyTypeAndExactThatMatchesArgumentsBothOutputAsAnyTypeAndExactInNotExpectedValue", null);
    return FunctionCallMatchErrorTests;
}());
exports.FunctionCallMatchErrorTests = FunctionCallMatchErrorTests;
//# sourceMappingURL=function-call-match-error.spec.js.map