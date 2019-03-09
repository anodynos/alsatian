"use strict";
/* tslint:disable:no-unused-expression */
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
var ToHaveBeenCalledTests = /** @class */ (function () {
    function ToHaveBeenCalledTests() {
    }
    ToHaveBeenCalledTests.prototype.functionCalledPasses = function () {
        var some = {
            function: function () { }
        };
        alsatian_core_1.SpyOn(some, "function");
        some.function();
        alsatian_core_1.Expect(function () { return alsatian_core_1.Expect(some.function).toHaveBeenCalled(); }).not.toThrow();
    };
    ToHaveBeenCalledTests.prototype.functionNotCalledFails = function () {
        var some = {
            function: function () { }
        };
        alsatian_core_1.SpyOn(some, "function");
        alsatian_core_1.Expect(function () { return alsatian_core_1.Expect(some.function).toHaveBeenCalled(); }).toThrow();
    };
    ToHaveBeenCalledTests.prototype.functionNotCalledFailsWithCorrectError = function () {
        var some = {
            function: function () { }
        };
        alsatian_core_1.SpyOn(some, "function");
        alsatian_core_1.Expect(function () { return alsatian_core_1.Expect(some.function).toHaveBeenCalled(); }).toThrowError(errors_1.FunctionCallMatchError, "Expected function to be called.");
    };
    ToHaveBeenCalledTests.prototype.functionNotCalledPassesWhenShouldNotCall = function () {
        var some = {
            function: function () { }
        };
        alsatian_core_1.SpyOn(some, "function");
        alsatian_core_1.Expect(function () { return alsatian_core_1.Expect(some.function).not.toHaveBeenCalled(); }).not.toThrow();
    };
    ToHaveBeenCalledTests.prototype.functionThrowsErrorFailsWhenShouldNotThrow = function () {
        var some = {
            function: function () { }
        };
        alsatian_core_1.SpyOn(some, "function");
        some.function();
        alsatian_core_1.Expect(function () { return alsatian_core_1.Expect(some.function).not.toHaveBeenCalled(); }).toThrow();
    };
    ToHaveBeenCalledTests.prototype.functionThrowsErrorFailsWithCorrectError = function () {
        var some = {
            function: function () { }
        };
        alsatian_core_1.SpyOn(some, "function");
        some.function();
        alsatian_core_1.Expect(function () { return alsatian_core_1.Expect(some.function).not.toHaveBeenCalled(); }).toThrowError(errors_1.FunctionCallMatchError, "Expected function not to be called.");
    };
    ToHaveBeenCalledTests.prototype.checkingWhetherNonFunctionSpyOrSpiedOnFunctionHasBeenCalledShouldThrow = function (actualValue) {
        var EXPECT = alsatian_core_1.Expect(function () { });
        EXPECT._actualValue = actualValue;
        alsatian_core_1.Expect(function () { return EXPECT.toHaveBeenCalled(); }).toThrowError(TypeError, "toHaveBeenCalled requires value passed in to Expect to be a FunctionSpy or a spied on function.");
    };
    ToHaveBeenCalledTests.prototype.checkingWhetherNonFunctionSpyOrSpiedOnFunctionHasNotBeenCalledShouldThrow = function (actualValue) {
        var EXPECT = alsatian_core_1.Expect(function () { });
        EXPECT._actualValue = actualValue;
        alsatian_core_1.Expect(function () { return EXPECT.not.toHaveBeenCalled(); }).toThrowError(TypeError, "toHaveBeenCalled requires value passed in to Expect to be a FunctionSpy or a spied on function.");
    };
    ToHaveBeenCalledTests.prototype.actualValueAndShouldMatchShouldBeSetToFunctionWasNotCalled = function () {
        var some = {
            function: function () { }
        };
        alsatian_core_1.SpyOn(some, "function");
        var functionError;
        try {
            alsatian_core_1.Expect(some.function).toHaveBeenCalled();
        }
        catch (error) {
            functionError = error;
        }
        alsatian_core_1.Expect(functionError).toBeDefined();
        alsatian_core_1.Expect(functionError).not.toBeNull();
        alsatian_core_1.Expect(functionError.actual).toBe("function was not called.");
    };
    ToHaveBeenCalledTests.prototype.actualValueAndShouldNotMatchShouldBeSetToFunctionWasCalled = function () {
        var some = {
            function: function () { }
        };
        alsatian_core_1.SpyOn(some, "function");
        some.function();
        var functionError;
        try {
            alsatian_core_1.Expect(some.function).not.toHaveBeenCalled();
        }
        catch (error) {
            functionError = error;
        }
        alsatian_core_1.Expect(functionError).toBeDefined();
        alsatian_core_1.Expect(functionError).not.toBeNull();
        alsatian_core_1.Expect(functionError.actual).toBe("function was called.");
    };
    ToHaveBeenCalledTests.prototype.expectedValueAndShouldMatchShouldBeSetToFunctionToBeCalled = function () {
        var some = {
            function: function () { }
        };
        alsatian_core_1.SpyOn(some, "function");
        var functionError;
        try {
            alsatian_core_1.Expect(some.function).toHaveBeenCalled();
        }
        catch (error) {
            functionError = error;
        }
        alsatian_core_1.Expect(functionError).toBeDefined();
        alsatian_core_1.Expect(functionError).not.toBeNull();
        alsatian_core_1.Expect(functionError.expected).toBe("function to be called.");
    };
    ToHaveBeenCalledTests.prototype.expectedValueAndShouldNotMatchShouldBeSetToFunctionNotToBeCalled = function () {
        var some = {
            function: function () { }
        };
        alsatian_core_1.SpyOn(some, "function");
        some.function();
        var functionError;
        try {
            alsatian_core_1.Expect(some.function).not.toHaveBeenCalled();
        }
        catch (error) {
            functionError = error;
        }
        alsatian_core_1.Expect(functionError).toBeDefined();
        alsatian_core_1.Expect(functionError).not.toBeNull();
        alsatian_core_1.Expect(functionError.expected).toBe("function not to be called.");
    };
    ToHaveBeenCalledTests.prototype.spyCalledCorrectAmountOfTimesDoesNotThrow = function (callCount) {
        var some = {
            function: function () { }
        };
        alsatian_core_1.SpyOn(some, "function");
        for (var i = 0; i < callCount; i++) {
            some.function();
        }
        alsatian_core_1.Expect(function () {
            return alsatian_core_1.Expect(some.function)
                .toHaveBeenCalled()
                .exactly(callCount).times;
        }).not.toThrow();
    };
    ToHaveBeenCalledTests.prototype.spyCalledCorrectAmountOfTimesThrowsCorrectError = function (expectedCallCount, actualCallCount) {
        var some = {
            function: function () { }
        };
        alsatian_core_1.SpyOn(some, "function");
        for (var i = 0; i < actualCallCount; i++) {
            some.function();
        }
        if (expectedCallCount === 1) {
            alsatian_core_1.Expect(function () {
                return alsatian_core_1.Expect(some.function)
                    .toHaveBeenCalled()
                    .exactly(expectedCallCount).times;
            }).toThrowError(errors_1.FunctionCallCountMatchError, "Expected function to be called " + expectedCallCount + " time.");
        }
        else {
            alsatian_core_1.Expect(function () {
                return alsatian_core_1.Expect(some.function)
                    .toHaveBeenCalled()
                    .exactly(expectedCallCount).times;
            }).toThrowError(errors_1.FunctionCallCountMatchError, "Expected function to be called " + expectedCallCount + " times.");
        }
    };
    ToHaveBeenCalledTests.prototype.spyCalledCorrectAmountOfTimesThrowsCorrectErrorExpectedValue = function (expectedCallCount, actualCallCount) {
        var some = {
            function: function () { }
        };
        alsatian_core_1.SpyOn(some, "function");
        for (var i = 0; i < actualCallCount; i++) {
            some.function();
        }
        var functionError;
        try {
            alsatian_core_1.Expect(some.function)
                .toHaveBeenCalled()
                .exactly(expectedCallCount).times;
        }
        catch (error) {
            functionError = error;
        }
        alsatian_core_1.Expect(functionError).toBeDefined();
        alsatian_core_1.Expect(functionError).not.toBeNull();
        if (expectedCallCount === 1) {
            alsatian_core_1.Expect(functionError.expected).toBe("function to be called " + expectedCallCount + " time.");
        }
        else {
            alsatian_core_1.Expect(functionError.expected).toBe("function to be called " + expectedCallCount + " times.");
        }
    };
    ToHaveBeenCalledTests.prototype.spyCalledCorrectAmountOfTimesThrowsCorrectErrorActualValue = function (expectedCallCount, actualCallCount) {
        var some = {
            function: function () { }
        };
        alsatian_core_1.SpyOn(some, "function");
        for (var i = 0; i < actualCallCount; i++) {
            some.function();
        }
        var functionError;
        try {
            alsatian_core_1.Expect(some.function)
                .toHaveBeenCalled()
                .exactly(expectedCallCount).times;
        }
        catch (error) {
            functionError = error;
        }
        alsatian_core_1.Expect(functionError).toBeDefined();
        alsatian_core_1.Expect(functionError).not.toBeNull();
        if (actualCallCount === 1) {
            alsatian_core_1.Expect(functionError.actual).toBe("function was called " + actualCallCount + " time.");
        }
        else {
            alsatian_core_1.Expect(functionError.actual).toBe("function was called " + actualCallCount + " times.");
        }
    };
    ToHaveBeenCalledTests.prototype.spyNotCalledCorrectAmountOfTimesDoesNotThrow = function (expectedCallCount, actualCallCount) {
        var some = {
            function: function () { }
        };
        alsatian_core_1.SpyOn(some, "function");
        for (var i = 0; i < actualCallCount; i++) {
            some.function();
        }
        alsatian_core_1.Expect(function () {
            return alsatian_core_1.Expect(some.function)
                .toHaveBeenCalled()
                .anythingBut(expectedCallCount).times;
        }).not.toThrow();
    };
    ToHaveBeenCalledTests.prototype.spyCalledCorrectAmountOfTimesButShouldNotThrowsCorrectError = function (callCount) {
        var some = {
            function: function () { }
        };
        alsatian_core_1.SpyOn(some, "function");
        for (var i = 0; i < callCount; i++) {
            some.function();
        }
        if (callCount === 1) {
            alsatian_core_1.Expect(function () {
                return alsatian_core_1.Expect(some.function)
                    .toHaveBeenCalled()
                    .anythingBut(callCount).times;
            }).toThrowError(errors_1.FunctionCallCountMatchError, "Expected function not to be called " + callCount + " time.");
        }
        else {
            alsatian_core_1.Expect(function () {
                return alsatian_core_1.Expect(some.function)
                    .toHaveBeenCalled()
                    .anythingBut(callCount).times;
            }).toThrowError(errors_1.FunctionCallCountMatchError, "Expected function not to be called " + callCount + " times.");
        }
    };
    ToHaveBeenCalledTests.prototype.spyCalledCorrectAmountOfTimesButShouldNotThrowsCorrectErrorExpectedValue = function (callCount) {
        var some = {
            function: function () { }
        };
        alsatian_core_1.SpyOn(some, "function");
        for (var i = 0; i < callCount; i++) {
            some.function();
        }
        var functionError;
        try {
            alsatian_core_1.Expect(some.function)
                .toHaveBeenCalled()
                .anythingBut(callCount).times;
        }
        catch (error) {
            functionError = error;
        }
        alsatian_core_1.Expect(functionError).toBeDefined();
        alsatian_core_1.Expect(functionError).not.toBeNull();
        if (callCount === 1) {
            alsatian_core_1.Expect(functionError.expected).toBe("function not to be called " + callCount + " time.");
        }
        else {
            alsatian_core_1.Expect(functionError.expected).toBe("function not to be called " + callCount + " times.");
        }
    };
    ToHaveBeenCalledTests.prototype.spyCalledCorrectAmountOfTimesButShouldNotThrowsCorrectErrorActualValue = function (callCount) {
        var some = {
            function: function () { }
        };
        alsatian_core_1.SpyOn(some, "function");
        for (var i = 0; i < callCount; i++) {
            some.function();
        }
        var functionError;
        try {
            alsatian_core_1.Expect(some.function)
                .toHaveBeenCalled()
                .anythingBut(callCount).times;
        }
        catch (error) {
            functionError = error;
        }
        alsatian_core_1.Expect(functionError).toBeDefined();
        alsatian_core_1.Expect(functionError).not.toBeNull();
        if (callCount === 1) {
            alsatian_core_1.Expect(functionError.actual).toBe("function was called " + callCount + " time.");
        }
        else {
            alsatian_core_1.Expect(functionError.actual).toBe("function was called " + callCount + " times.");
        }
    };
    ToHaveBeenCalledTests.prototype.spyCalledGreaterThanMinimumTimesDoesNotThrow = function (minimumCallCount, actualCallCount) {
        var some = {
            function: function () { }
        };
        alsatian_core_1.SpyOn(some, "function");
        for (var i = 0; i < actualCallCount; i++) {
            some.function();
        }
        alsatian_core_1.Expect(function () {
            return alsatian_core_1.Expect(some.function)
                .toHaveBeenCalled()
                .greaterThan(minimumCallCount).times;
        }).not.toThrow();
    };
    ToHaveBeenCalledTests.prototype.spyCalledNotGreaterThanMinimumTimesThrowsCorrectError = function (minimumCallCount, actualCallCount) {
        var some = {
            function: function () { }
        };
        alsatian_core_1.SpyOn(some, "function");
        for (var i = 0; i < actualCallCount; i++) {
            some.function();
        }
        if (minimumCallCount === 1) {
            alsatian_core_1.Expect(function () {
                return alsatian_core_1.Expect(some.function)
                    .toHaveBeenCalled()
                    .greaterThan(minimumCallCount).times;
            }).toThrowError(errors_1.FunctionCallCountMatchError, "Expected function to be called greater than " +
                minimumCallCount +
                " time.");
        }
        else {
            alsatian_core_1.Expect(function () {
                return alsatian_core_1.Expect(some.function)
                    .toHaveBeenCalled()
                    .greaterThan(minimumCallCount).times;
            }).toThrowError(errors_1.FunctionCallCountMatchError, "Expected function to be called greater than " +
                minimumCallCount +
                " times.");
        }
    };
    ToHaveBeenCalledTests.prototype.spyCalledNotGreaterThanMinimumTimesThrowsCorrectErrorExpectedValue = function (minimumCallCount, actualCallCount) {
        var some = {
            function: function () { }
        };
        alsatian_core_1.SpyOn(some, "function");
        for (var i = 0; i < actualCallCount; i++) {
            some.function();
        }
        var functionError;
        try {
            alsatian_core_1.Expect(some.function)
                .toHaveBeenCalled()
                .greaterThan(minimumCallCount).times;
        }
        catch (error) {
            functionError = error;
        }
        alsatian_core_1.Expect(functionError).toBeDefined();
        alsatian_core_1.Expect(functionError).not.toBeNull();
        if (minimumCallCount === 1) {
            alsatian_core_1.Expect(functionError.expected).toBe("function to be called greater than " + minimumCallCount + " time.");
        }
        else {
            alsatian_core_1.Expect(functionError.expected).toBe("function to be called greater than " + minimumCallCount + " times.");
        }
    };
    ToHaveBeenCalledTests.prototype.spyCalledNotGreaterThanMinimumTimesThrowsCorrectErrorActualValue = function (minimumCallCount, actualCallCount) {
        var some = {
            function: function () { }
        };
        alsatian_core_1.SpyOn(some, "function");
        for (var i = 0; i < actualCallCount; i++) {
            some.function();
        }
        var functionError;
        try {
            alsatian_core_1.Expect(some.function)
                .toHaveBeenCalled()
                .greaterThan(minimumCallCount).times;
        }
        catch (error) {
            functionError = error;
        }
        alsatian_core_1.Expect(functionError).toBeDefined();
        alsatian_core_1.Expect(functionError).not.toBeNull();
        if (actualCallCount === 1) {
            alsatian_core_1.Expect(functionError.actual).toBe("function was called " + actualCallCount + " time.");
        }
        else {
            alsatian_core_1.Expect(functionError.actual).toBe("function was called " + actualCallCount + " times.");
        }
    };
    ToHaveBeenCalledTests.prototype.spyNotCalledLessThanMaximumTimesDoesNotThrow = function (maximumCallCount, actualCallCount) {
        var some = {
            function: function () { }
        };
        alsatian_core_1.SpyOn(some, "function");
        for (var i = 0; i < actualCallCount; i++) {
            some.function();
        }
        alsatian_core_1.Expect(function () {
            return alsatian_core_1.Expect(some.function)
                .toHaveBeenCalled()
                .lessThan(maximumCallCount).times;
        }).not.toThrow();
    };
    ToHaveBeenCalledTests.prototype.spyCalledGreaterThanMaximumTimesButShouldNotThrowsCorrectError = function (maximumCallCount, actualCallCount) {
        var some = {
            function: function () { }
        };
        alsatian_core_1.SpyOn(some, "function");
        for (var i = 0; i < actualCallCount; i++) {
            some.function();
        }
        if (maximumCallCount === 1) {
            alsatian_core_1.Expect(function () {
                return alsatian_core_1.Expect(some.function)
                    .toHaveBeenCalled()
                    .lessThan(maximumCallCount).times;
            }).toThrowError(errors_1.FunctionCallCountMatchError, "Expected function to be called less than " +
                maximumCallCount +
                " time.");
        }
        else {
            alsatian_core_1.Expect(function () {
                return alsatian_core_1.Expect(some.function)
                    .toHaveBeenCalled()
                    .lessThan(maximumCallCount).times;
            }).toThrowError(errors_1.FunctionCallCountMatchError, "Expected function to be called less than " +
                maximumCallCount +
                " times.");
        }
    };
    ToHaveBeenCalledTests.prototype.spyCalledGreaterThanMaximumTimesButShouldNotThrowsCorrectErrorExpectedValue = function (maximumCallCount, actualCallCount) {
        var some = {
            function: function () { }
        };
        alsatian_core_1.SpyOn(some, "function");
        for (var i = 0; i < actualCallCount; i++) {
            some.function();
        }
        var functionError;
        try {
            alsatian_core_1.Expect(some.function)
                .toHaveBeenCalled()
                .lessThan(maximumCallCount).times;
        }
        catch (error) {
            functionError = error;
        }
        alsatian_core_1.Expect(functionError).toBeDefined();
        alsatian_core_1.Expect(functionError).not.toBeNull();
        if (maximumCallCount === 1) {
            alsatian_core_1.Expect(functionError.expected).toBe("function to be called less than " + maximumCallCount + " time.");
        }
        else {
            alsatian_core_1.Expect(functionError.expected).toBe("function to be called less than " + maximumCallCount + " times.");
        }
    };
    ToHaveBeenCalledTests.prototype.spyCalledGreaterThanMaximumTimesButShouldNotThrowsCorrectErrorActualValue = function (maximumCallCount, actualCallCount) {
        var some = {
            function: function () { }
        };
        alsatian_core_1.SpyOn(some, "function");
        for (var i = 0; i < actualCallCount; i++) {
            some.function();
        }
        var functionError;
        try {
            alsatian_core_1.Expect(some.function)
                .toHaveBeenCalled()
                .lessThan(maximumCallCount).times;
        }
        catch (error) {
            functionError = error;
        }
        alsatian_core_1.Expect(functionError).toBeDefined();
        alsatian_core_1.Expect(functionError).not.toBeNull();
        if (actualCallCount === 1) {
            alsatian_core_1.Expect(functionError.actual).toBe("function was called " + actualCallCount + " time.");
        }
        else {
            alsatian_core_1.Expect(functionError.actual).toBe("function was called " + actualCallCount + " times.");
        }
    };
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledTests.prototype, "functionCalledPasses", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledTests.prototype, "functionNotCalledFails", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledTests.prototype, "functionNotCalledFailsWithCorrectError", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledTests.prototype, "functionNotCalledPassesWhenShouldNotCall", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledTests.prototype, "functionThrowsErrorFailsWhenShouldNotThrow", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledTests.prototype, "functionThrowsErrorFailsWithCorrectError", null);
    __decorate([
        alsatian_core_1.TestCase(undefined),
        alsatian_core_1.TestCase(null),
        alsatian_core_1.TestCase(0),
        alsatian_core_1.TestCase(1),
        alsatian_core_1.TestCase(42),
        alsatian_core_1.TestCase({}),
        alsatian_core_1.TestCase({ an: "object" }),
        alsatian_core_1.TestCase([]),
        alsatian_core_1.TestCase(["an", "array"]),
        alsatian_core_1.TestCase(function () { }),
        alsatian_core_1.TestCase(function (thisCouldBe) { return "function"; }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledTests.prototype, "checkingWhetherNonFunctionSpyOrSpiedOnFunctionHasBeenCalledShouldThrow", null);
    __decorate([
        alsatian_core_1.TestCase(undefined),
        alsatian_core_1.TestCase(null),
        alsatian_core_1.TestCase(0),
        alsatian_core_1.TestCase(1),
        alsatian_core_1.TestCase(42),
        alsatian_core_1.TestCase({}),
        alsatian_core_1.TestCase({ an: "object" }),
        alsatian_core_1.TestCase([]),
        alsatian_core_1.TestCase(["an", "array"]),
        alsatian_core_1.TestCase(function () { }),
        alsatian_core_1.TestCase(function (thisCouldBe) { return "function"; }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledTests.prototype, "checkingWhetherNonFunctionSpyOrSpiedOnFunctionHasNotBeenCalledShouldThrow", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledTests.prototype, "actualValueAndShouldMatchShouldBeSetToFunctionWasNotCalled", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledTests.prototype, "actualValueAndShouldNotMatchShouldBeSetToFunctionWasCalled", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledTests.prototype, "expectedValueAndShouldMatchShouldBeSetToFunctionToBeCalled", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledTests.prototype, "expectedValueAndShouldNotMatchShouldBeSetToFunctionNotToBeCalled", null);
    __decorate([
        alsatian_core_1.TestCase(1),
        alsatian_core_1.TestCase(2),
        alsatian_core_1.TestCase(42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledTests.prototype, "spyCalledCorrectAmountOfTimesDoesNotThrow", null);
    __decorate([
        alsatian_core_1.TestCase(1, 2),
        alsatian_core_1.TestCase(2, 42),
        alsatian_core_1.TestCase(42, 1),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledTests.prototype, "spyCalledCorrectAmountOfTimesThrowsCorrectError", null);
    __decorate([
        alsatian_core_1.TestCase(1, 2),
        alsatian_core_1.TestCase(2, 42),
        alsatian_core_1.TestCase(42, 1),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledTests.prototype, "spyCalledCorrectAmountOfTimesThrowsCorrectErrorExpectedValue", null);
    __decorate([
        alsatian_core_1.TestCase(1, 2),
        alsatian_core_1.TestCase(2, 42),
        alsatian_core_1.TestCase(42, 1),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledTests.prototype, "spyCalledCorrectAmountOfTimesThrowsCorrectErrorActualValue", null);
    __decorate([
        alsatian_core_1.TestCase(1, 2),
        alsatian_core_1.TestCase(2, 42),
        alsatian_core_1.TestCase(42, 1),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledTests.prototype, "spyNotCalledCorrectAmountOfTimesDoesNotThrow", null);
    __decorate([
        alsatian_core_1.TestCase(1),
        alsatian_core_1.TestCase(2),
        alsatian_core_1.TestCase(42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledTests.prototype, "spyCalledCorrectAmountOfTimesButShouldNotThrowsCorrectError", null);
    __decorate([
        alsatian_core_1.TestCase(1),
        alsatian_core_1.TestCase(2),
        alsatian_core_1.TestCase(42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledTests.prototype, "spyCalledCorrectAmountOfTimesButShouldNotThrowsCorrectErrorExpectedValue", null);
    __decorate([
        alsatian_core_1.TestCase(1),
        alsatian_core_1.TestCase(2),
        alsatian_core_1.TestCase(42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledTests.prototype, "spyCalledCorrectAmountOfTimesButShouldNotThrowsCorrectErrorActualValue", null);
    __decorate([
        alsatian_core_1.TestCase(1, 2),
        alsatian_core_1.TestCase(2, 42),
        alsatian_core_1.TestCase(42, 50),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledTests.prototype, "spyCalledGreaterThanMinimumTimesDoesNotThrow", null);
    __decorate([
        alsatian_core_1.TestCase(1, 1),
        alsatian_core_1.TestCase(2, 1),
        alsatian_core_1.TestCase(42, 13),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledTests.prototype, "spyCalledNotGreaterThanMinimumTimesThrowsCorrectError", null);
    __decorate([
        alsatian_core_1.TestCase(1, 1),
        alsatian_core_1.TestCase(2, 1),
        alsatian_core_1.TestCase(42, 13),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledTests.prototype, "spyCalledNotGreaterThanMinimumTimesThrowsCorrectErrorExpectedValue", null);
    __decorate([
        alsatian_core_1.TestCase(1, 1),
        alsatian_core_1.TestCase(2, 1),
        alsatian_core_1.TestCase(42, 13),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledTests.prototype, "spyCalledNotGreaterThanMinimumTimesThrowsCorrectErrorActualValue", null);
    __decorate([
        alsatian_core_1.TestCase(2, 1),
        alsatian_core_1.TestCase(42, 13),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledTests.prototype, "spyNotCalledLessThanMaximumTimesDoesNotThrow", null);
    __decorate([
        alsatian_core_1.TestCase(1, 1),
        alsatian_core_1.TestCase(2, 3),
        alsatian_core_1.TestCase(42, 50),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledTests.prototype, "spyCalledGreaterThanMaximumTimesButShouldNotThrowsCorrectError", null);
    __decorate([
        alsatian_core_1.TestCase(1, 1),
        alsatian_core_1.TestCase(2, 3),
        alsatian_core_1.TestCase(42, 50),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledTests.prototype, "spyCalledGreaterThanMaximumTimesButShouldNotThrowsCorrectErrorExpectedValue", null);
    __decorate([
        alsatian_core_1.TestCase(1, 1),
        alsatian_core_1.TestCase(2, 3),
        alsatian_core_1.TestCase(42, 50),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledTests.prototype, "spyCalledGreaterThanMaximumTimesButShouldNotThrowsCorrectErrorActualValue", null);
    return ToHaveBeenCalledTests;
}());
exports.ToHaveBeenCalledTests = ToHaveBeenCalledTests;
//# sourceMappingURL=to-have-been-called.spec.js.map