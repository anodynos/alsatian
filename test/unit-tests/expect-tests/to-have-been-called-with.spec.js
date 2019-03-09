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
var stringification_1 = require("../../../core/stringification");
var ToHaveBeenCalledWithTests = /** @class */ (function () {
    function ToHaveBeenCalledWithTests() {
    }
    ToHaveBeenCalledWithTests.prototype.functionCalledPasses = function () {
        var some = {
            function: function () { }
        };
        alsatian_core_1.SpyOn(some, "function");
        some.function();
        alsatian_core_1.Expect(function () { return alsatian_core_1.Expect(some.function).toHaveBeenCalledWith(); }).not.toThrow();
    };
    ToHaveBeenCalledWithTests.prototype.functionNotCalledFails = function () {
        var some = {
            function: function () { }
        };
        alsatian_core_1.SpyOn(some, "function");
        alsatian_core_1.Expect(function () { return alsatian_core_1.Expect(some.function).toHaveBeenCalledWith(); }).toThrow();
    };
    ToHaveBeenCalledWithTests.prototype.functionNotCalledFailsWithCorrectError = function () {
        var some = {
            function: function () { }
        };
        alsatian_core_1.SpyOn(some, "function");
        alsatian_core_1.Expect(function () { return alsatian_core_1.Expect(some.function).toHaveBeenCalledWith(); }).toThrowError(errors_1.FunctionCallMatchError, "Expected function to be called with [].");
    };
    ToHaveBeenCalledWithTests.prototype.functionCalledWithCorrectArgumentsPasses = function (expectedArguments) {
        var some = {
            function: function () { }
        };
        alsatian_core_1.SpyOn(some, "function");
        some.function.apply(some, expectedArguments);
        alsatian_core_1.Expect(function () {
            var matcher = alsatian_core_1.Expect(some.function);
            matcher.toHaveBeenCalledWith.apply(matcher, expectedArguments);
        }).not.toThrow();
    };
    ToHaveBeenCalledWithTests.prototype.functionCalledWithSimilarArgumentsFailsWithCorrectError = function (expectedArguments, actualArguments) {
        var some = {
            function: function () { }
        };
        alsatian_core_1.SpyOn(some, "function");
        some.function.apply(some, actualArguments);
        alsatian_core_1.Expect(function () {
            var matcher = alsatian_core_1.Expect(some.function);
            matcher.toHaveBeenCalledWith.apply(matcher, expectedArguments);
        }).toThrowError(errors_1.FunctionCallMatchError, "Expected function to be called with [" + expectedArguments
            .map(function (arg) { return stringification_1.stringify(arg); })
            .join(", ") + "].");
    };
    ToHaveBeenCalledWithTests.prototype.functionCalledWithWrongNumberOfArgumentsFailsWithCorrectError = function (expectedArguments, actualArguments) {
        var some = {
            function: function () { }
        };
        alsatian_core_1.SpyOn(some, "function");
        some.function.apply(some, actualArguments);
        alsatian_core_1.Expect(function () {
            var matcher = alsatian_core_1.Expect(some.function);
            matcher.toHaveBeenCalledWith.apply(matcher, expectedArguments);
        }).toThrowError(errors_1.FunctionCallMatchError, "Expected function to be called with [" + expectedArguments
            .map(function (arg) { return stringification_1.stringify(arg); })
            .join(", ") + "].");
    };
    ToHaveBeenCalledWithTests.prototype.functionCalledWithRightArgumentsInWrongOrderFailsWithCorrectError = function (expectedArguments, actualArguments) {
        var some = {
            function: function () { }
        };
        alsatian_core_1.SpyOn(some, "function");
        some.function.apply(some, actualArguments);
        alsatian_core_1.Expect(function () {
            var matcher = alsatian_core_1.Expect(some.function);
            matcher.toHaveBeenCalledWith.apply(matcher, expectedArguments);
        }).toThrowError(errors_1.FunctionCallMatchError, "Expected function to be called with [" + expectedArguments
            .map(function (arg) { return JSON.stringify(arg); })
            .join(", ") + "].");
    };
    ToHaveBeenCalledWithTests.prototype.functionNotCalledPassesWhenShouldNotCall = function () {
        var some = {
            function: function () { }
        };
        alsatian_core_1.SpyOn(some, "function");
        alsatian_core_1.Expect(function () {
            return alsatian_core_1.Expect(some.function).not.toHaveBeenCalledWith();
        }).not.toThrow();
    };
    ToHaveBeenCalledWithTests.prototype.functionThrowsErrorFailsWhenShouldNotThrow = function () {
        var some = {
            function: function () { }
        };
        alsatian_core_1.SpyOn(some, "function");
        some.function();
        alsatian_core_1.Expect(function () { return alsatian_core_1.Expect(some.function).not.toHaveBeenCalledWith(); }).toThrow();
    };
    ToHaveBeenCalledWithTests.prototype.functionThrowsErrorFailsWithCorrectError = function () {
        var some = {
            function: function () { }
        };
        alsatian_core_1.SpyOn(some, "function");
        some.function();
        alsatian_core_1.Expect(function () { return alsatian_core_1.Expect(some.function).not.toHaveBeenCalledWith(); }).toThrowError(errors_1.FunctionCallMatchError, "Expected function not to be called with [].");
    };
    ToHaveBeenCalledWithTests.prototype.functionCalledWithSimilarArgumentsPasses = function (expectedArguments, actualArguments) {
        var some = {
            function: function () { }
        };
        alsatian_core_1.SpyOn(some, "function");
        some.function.apply(some, actualArguments);
        alsatian_core_1.Expect(function () {
            var matcher = alsatian_core_1.Expect(some.function);
            matcher.not.toHaveBeenCalledWith.apply(matcher, expectedArguments);
        }).not.toThrow();
    };
    ToHaveBeenCalledWithTests.prototype.functionCalledWithWrongNumberOfArgumentsPasses = function (expectedArguments, actualArguments) {
        var some = {
            function: function () { }
        };
        alsatian_core_1.SpyOn(some, "function");
        some.function.apply(some, actualArguments);
        alsatian_core_1.Expect(function () {
            var matcher = alsatian_core_1.Expect(some.function);
            matcher.not.toHaveBeenCalledWith.apply(matcher, expectedArguments);
        }).not.toThrow();
    };
    ToHaveBeenCalledWithTests.prototype.functionNotCalledWithRightArgumentsInWrongOrderPasses = function (expectedArguments, actualArguments) {
        var some = {
            function: function () { }
        };
        alsatian_core_1.SpyOn(some, "function");
        some.function.apply(some, actualArguments);
        alsatian_core_1.Expect(function () {
            var matcher = alsatian_core_1.Expect(some.function);
            matcher.not.toHaveBeenCalledWith.apply(matcher, expectedArguments);
        }).not.toThrow();
    };
    ToHaveBeenCalledWithTests.prototype.functionNotCalledWithDifferentArgumentsFailsWithCorrectError = function (expectedArguments) {
        var some = {
            function: function () { }
        };
        alsatian_core_1.SpyOn(some, "function");
        some.function.apply(some, expectedArguments);
        alsatian_core_1.Expect(function () {
            var matcher = alsatian_core_1.Expect(some.function);
            matcher.not.toHaveBeenCalledWith.apply(matcher, expectedArguments);
        }).toThrowError(errors_1.FunctionCallMatchError, "Expected function not to be called with [" + expectedArguments
            .map(function (arg) { return JSON.stringify(arg); })
            .join(", ") + "].");
    };
    ToHaveBeenCalledWithTests.prototype.checkingWhetherNonFunctionSpyOrSpiedOnFunctionHasBeenCalledShouldThrow = function (actualValue) {
        var EXPECT = alsatian_core_1.Expect(function () { });
        EXPECT._actualValue = actualValue;
        alsatian_core_1.Expect(function () { return EXPECT.toHaveBeenCalledWith(); }).toThrowError(TypeError, "toHaveBeenCalledWith requires value passed in to Expect to be a FunctionSpy or a spied on function.");
    };
    ToHaveBeenCalledWithTests.prototype.checkingWhetherNonFunctionSpyOrSpiedOnFunctionHasNotBeenCalledShouldThrow = function (actualValue) {
        var EXPECT = alsatian_core_1.Expect(function () { });
        EXPECT._actualValue = actualValue;
        alsatian_core_1.Expect(function () { return EXPECT.not.toHaveBeenCalledWith(); }).toThrowError(TypeError, "toHaveBeenCalledWith requires value passed in to Expect to be a FunctionSpy or a spied on function.");
    };
    ToHaveBeenCalledWithTests.prototype.actualValueAndShouldMatchShouldBeSetToFunctionWasNotCalledWithArguments = function (actualArgumentsList) {
        var some = {
            function: function (args) { }
        };
        alsatian_core_1.SpyOn(some, "function");
        actualArgumentsList.forEach(function (actualArguments) {
            some.function.apply(some, actualArguments);
        });
        var functionError;
        try {
            alsatian_core_1.Expect(some.function).toHaveBeenCalledWith([]);
        }
        catch (error) {
            functionError = error;
        }
        alsatian_core_1.Expect(functionError).toBeDefined();
        alsatian_core_1.Expect(functionError).not.toBeNull();
        alsatian_core_1.Expect(functionError.actual).toBe("function was called with " +
            actualArgumentsList.map(function (args) { return stringification_1.stringify(args); }).join(", ") +
            ".");
    };
    ToHaveBeenCalledWithTests.prototype.actualValueAndShouldNotMatchShouldBeSetToFunctionWasCalledWithArguments = function (actualArgumentsList) {
        var some = {
            function: function (args) { }
        };
        alsatian_core_1.SpyOn(some, "function");
        actualArgumentsList.forEach(function (actualArguments) {
            some.function.apply(some, actualArguments);
        });
        var functionError;
        try {
            var expect = alsatian_core_1.Expect(some.function);
            expect.not.toHaveBeenCalledWith.apply(expect, actualArgumentsList[0]);
        }
        catch (error) {
            functionError = error;
        }
        alsatian_core_1.Expect(functionError).toBeDefined();
        alsatian_core_1.Expect(functionError).not.toBeNull();
        alsatian_core_1.Expect(functionError.actual).toBe("function was called with " +
            actualArgumentsList.map(function (args) { return stringification_1.stringify(args); }).join(", ") +
            ".");
    };
    ToHaveBeenCalledWithTests.prototype.expectedValueAndShouldMatchShouldBeSetToFunctionToBeCalledWithArguments = function (expectedArguments) {
        var some = {
            function: function (args) { }
        };
        alsatian_core_1.SpyOn(some, "function");
        var functionError;
        try {
            var expect = alsatian_core_1.Expect(some.function);
            expect.toHaveBeenCalledWith.apply(expect, expectedArguments);
        }
        catch (error) {
            functionError = error;
        }
        alsatian_core_1.Expect(functionError).toBeDefined();
        alsatian_core_1.Expect(functionError).not.toBeNull();
        alsatian_core_1.Expect(functionError.expected).toBe("function to be called with " +
            JSON.stringify(expectedArguments).replace(/,/g, ", ") +
            ".");
    };
    ToHaveBeenCalledWithTests.prototype.expectedValueAndShouldNotMatchShouldBeSetToFunctionNotToBeCalledWithArguments = function (expectedArguments) {
        var some = {
            function: function (args) { }
        };
        alsatian_core_1.SpyOn(some, "function");
        some.function.apply(some, expectedArguments);
        var functionError;
        try {
            var expect = alsatian_core_1.Expect(some.function);
            expect.not.toHaveBeenCalledWith.apply(expect, expectedArguments);
        }
        catch (error) {
            functionError = error;
        }
        alsatian_core_1.Expect(functionError).toBeDefined();
        alsatian_core_1.Expect(functionError).not.toBeNull();
        alsatian_core_1.Expect(functionError.expected).toBe("function not to be called with " +
            JSON.stringify(expectedArguments).replace(/,/g, ", ") +
            ".");
    };
    ToHaveBeenCalledWithTests.prototype.anyArgumentShouldNotThrowIfOneArgument = function (argument) {
        var some = {
            function: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
            }
        };
        alsatian_core_1.SpyOn(some, "function");
        some.function(argument);
        alsatian_core_1.Expect(function () { return alsatian_core_1.Expect(some.function).toHaveBeenCalledWith(alsatian_core_1.Any); }).not.toThrow();
    };
    ToHaveBeenCalledWithTests.prototype.anyArgumentShouldNotThrowIfTwoArguments = function () {
        var some = {
            function: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
            }
        };
        alsatian_core_1.SpyOn(some, "function");
        some.function(1, "two");
        alsatian_core_1.Expect(function () {
            return alsatian_core_1.Expect(some.function).toHaveBeenCalledWith(alsatian_core_1.Any, alsatian_core_1.Any);
        }).not.toThrow();
    };
    ToHaveBeenCalledWithTests.prototype.anyArgumentShouldNotThrowIfThreeArguments = function () {
        var some = {
            function: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
            }
        };
        alsatian_core_1.SpyOn(some, "function");
        some.function(1, "two", undefined);
        alsatian_core_1.Expect(function () {
            return alsatian_core_1.Expect(some.function).toHaveBeenCalledWith(alsatian_core_1.Any, alsatian_core_1.Any, alsatian_core_1.Any);
        }).not.toThrow();
    };
    ToHaveBeenCalledWithTests.prototype.anyArgumentShouldThrowIfOneArgumentExpectedAndNotProvided = function () {
        var callArguments = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            callArguments[_i] = arguments[_i];
        }
        var some = {
            function: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
            }
        };
        alsatian_core_1.SpyOn(some, "function");
        some.function.apply(some, callArguments);
        alsatian_core_1.Expect(function () { return alsatian_core_1.Expect(some.function).toHaveBeenCalledWith(alsatian_core_1.Any); }).toThrowError(errors_1.FunctionCallMatchError, "Expected function to be called with [Anything].");
    };
    ToHaveBeenCalledWithTests.prototype.anyArgumentShouldThrowIfTwoArgumentsExpectedAndNotProvided = function () {
        var callArguments = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            callArguments[_i] = arguments[_i];
        }
        var some = {
            function: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
            }
        };
        alsatian_core_1.SpyOn(some, "function");
        some.function.apply(some, callArguments);
        alsatian_core_1.Expect(function () {
            return alsatian_core_1.Expect(some.function).toHaveBeenCalledWith(alsatian_core_1.Any, alsatian_core_1.Any);
        }).toThrowError(errors_1.FunctionCallMatchError, "Expected function to be called with [Anything, Anything].");
    };
    ToHaveBeenCalledWithTests.prototype.anyArgumentShouldThrowWithExpectedMessageIfOneArgumentExpectedAndNotProvided = function () {
        var callArguments = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            callArguments[_i] = arguments[_i];
        }
        var some = {
            function: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
            }
        };
        alsatian_core_1.SpyOn(some, "function");
        some.function.apply(some, callArguments);
        var functionCallError;
        try {
            alsatian_core_1.Expect(some.function).toHaveBeenCalledWith(alsatian_core_1.Any);
        }
        catch (error) {
            functionCallError = error;
        }
        alsatian_core_1.Expect(functionCallError).toBeDefined();
        alsatian_core_1.Expect(functionCallError).not.toBeNull();
        alsatian_core_1.Expect(functionCallError.expected).toBe("function to be called with [Anything].");
    };
    ToHaveBeenCalledWithTests.prototype.anyArgumentShouldThrowWithexpectedMessageIfTwoArgumentsExpectedAndNotProvided = function () {
        var callArguments = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            callArguments[_i] = arguments[_i];
        }
        var some = {
            function: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
            }
        };
        alsatian_core_1.SpyOn(some, "function");
        some.function.apply(some, callArguments);
        var functionCallError;
        try {
            alsatian_core_1.Expect(some.function).toHaveBeenCalledWith(alsatian_core_1.Any, alsatian_core_1.Any);
        }
        catch (error) {
            functionCallError = error;
        }
        alsatian_core_1.Expect(functionCallError).toBeDefined();
        alsatian_core_1.Expect(functionCallError).not.toBeNull();
        alsatian_core_1.Expect(functionCallError.expected).toBe("function to be called with [Anything, Anything].");
    };
    ToHaveBeenCalledWithTests.prototype.anyNumberArgumentShouldNotThrowIfNumberArgument = function (argument) {
        var some = {
            function: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
            }
        };
        alsatian_core_1.SpyOn(some, "function");
        some.function(argument);
        alsatian_core_1.Expect(function () {
            return alsatian_core_1.Expect(some.function).toHaveBeenCalledWith(alsatian_core_1.Any(Number));
        }).not.toThrow();
    };
    ToHaveBeenCalledWithTests.prototype.anyNumberArgumentShouldNotBeCalledShouldThrowIfNumberArgument = function (argument) {
        var some = {
            function: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
            }
        };
        alsatian_core_1.SpyOn(some, "function");
        some.function(argument);
        alsatian_core_1.Expect(function () {
            return alsatian_core_1.Expect(some.function).not.toHaveBeenCalledWith(alsatian_core_1.Any(Number));
        }).toThrowError(errors_1.FunctionCallMatchError, "Expected function not to be called with [Any Number].");
    };
    ToHaveBeenCalledWithTests.prototype.anyNumberArgumentShouldThrowIfNonNumberArgument = function (argument) {
        var some = {
            function: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
            }
        };
        alsatian_core_1.SpyOn(some, "function");
        some.function(argument);
        alsatian_core_1.Expect(function () {
            return alsatian_core_1.Expect(some.function).toHaveBeenCalledWith(alsatian_core_1.Any(Number));
        }).toThrowError(errors_1.FunctionCallMatchError, "Expected function to be called with [Any Number].");
    };
    ToHaveBeenCalledWithTests.prototype.anyNumberArgumentShouldThrowWithExpectedValueIfNonNumberArgument = function (argument) {
        var some = {
            function: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
            }
        };
        alsatian_core_1.SpyOn(some, "function");
        some.function(argument);
        var functionCallError;
        try {
            alsatian_core_1.Expect(some.function).toHaveBeenCalledWith(alsatian_core_1.Any(Number));
        }
        catch (error) {
            functionCallError = error;
        }
        alsatian_core_1.Expect(functionCallError).toBeDefined();
        alsatian_core_1.Expect(functionCallError).not.toBeNull();
        alsatian_core_1.Expect(functionCallError.expected).toBe("function to be called with [Any Number].");
    };
    ToHaveBeenCalledWithTests.prototype.anyStringArgumentShouldNotThrowIfStringArgument = function (argument) {
        var some = {
            function: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
            }
        };
        alsatian_core_1.SpyOn(some, "function");
        some.function(argument);
        alsatian_core_1.Expect(function () {
            return alsatian_core_1.Expect(some.function).toHaveBeenCalledWith(alsatian_core_1.Any(String));
        }).not.toThrow();
    };
    ToHaveBeenCalledWithTests.prototype.anyStringArgumentShouldNotBeCalledShouldThrowIfStringArgument = function (argument) {
        var some = {
            function: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
            }
        };
        alsatian_core_1.SpyOn(some, "function");
        some.function(argument);
        alsatian_core_1.Expect(function () {
            return alsatian_core_1.Expect(some.function).not.toHaveBeenCalledWith(alsatian_core_1.Any(String));
        }).toThrowError(errors_1.FunctionCallMatchError, "Expected function not to be called with [Any String].");
    };
    ToHaveBeenCalledWithTests.prototype.anyStringArgumentShouldThrowIfNonStringArgument = function (argument) {
        var some = {
            function: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
            }
        };
        alsatian_core_1.SpyOn(some, "function");
        some.function(argument);
        alsatian_core_1.Expect(function () {
            return alsatian_core_1.Expect(some.function).toHaveBeenCalledWith(alsatian_core_1.Any(String));
        }).toThrowError(errors_1.FunctionCallMatchError, "Expected function to be called with [Any String].");
    };
    ToHaveBeenCalledWithTests.prototype.anyStringArgumentShouldThrowWithExpectedValueIfNonStringArgument = function (argument) {
        var some = {
            function: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
            }
        };
        alsatian_core_1.SpyOn(some, "function");
        some.function(argument);
        var functionCallError;
        try {
            alsatian_core_1.Expect(some.function).toHaveBeenCalledWith(alsatian_core_1.Any(String));
        }
        catch (error) {
            functionCallError = error;
        }
        alsatian_core_1.Expect(functionCallError).toBeDefined();
        alsatian_core_1.Expect(functionCallError).not.toBeNull();
        alsatian_core_1.Expect(functionCallError.expected).toBe("function to be called with [Any String].");
    };
    ToHaveBeenCalledWithTests.prototype.anyBooleanArgumentShouldNotThrowIfBooleanArgument = function (argument) {
        var some = {
            function: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
            }
        };
        alsatian_core_1.SpyOn(some, "function");
        some.function(argument);
        alsatian_core_1.Expect(function () {
            return alsatian_core_1.Expect(some.function).toHaveBeenCalledWith(alsatian_core_1.Any(Boolean));
        }).not.toThrow();
    };
    ToHaveBeenCalledWithTests.prototype.anyBooleanArgumentShouldNotBeCalledShouldThrowIfBooleanArgument = function (argument) {
        var some = {
            function: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
            }
        };
        alsatian_core_1.SpyOn(some, "function");
        some.function(argument);
        alsatian_core_1.Expect(function () {
            return alsatian_core_1.Expect(some.function).not.toHaveBeenCalledWith(alsatian_core_1.Any(Boolean));
        }).toThrowError(errors_1.FunctionCallMatchError, "Expected function not to be called with [Any Boolean].");
    };
    ToHaveBeenCalledWithTests.prototype.anyBooleanArgumentShouldThrowIfNonBooleanArgument = function (argument) {
        var some = {
            function: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
            }
        };
        alsatian_core_1.SpyOn(some, "function");
        some.function(argument);
        alsatian_core_1.Expect(function () {
            return alsatian_core_1.Expect(some.function).toHaveBeenCalledWith(alsatian_core_1.Any(Boolean));
        }).toThrowError(errors_1.FunctionCallMatchError, "Expected function to be called with [Any Boolean].");
    };
    ToHaveBeenCalledWithTests.prototype.anyBooleanArgumentShouldThrowWithExpectedValueIfNonBooleanArgument = function (argument) {
        var some = {
            function: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
            }
        };
        alsatian_core_1.SpyOn(some, "function");
        some.function(argument);
        var functionCallError;
        try {
            alsatian_core_1.Expect(some.function).toHaveBeenCalledWith(alsatian_core_1.Any(Boolean));
        }
        catch (error) {
            functionCallError = error;
        }
        alsatian_core_1.Expect(functionCallError).toBeDefined();
        alsatian_core_1.Expect(functionCallError).not.toBeNull();
        alsatian_core_1.Expect(functionCallError.expected).toBe("function to be called with [Any Boolean].");
    };
    ToHaveBeenCalledWithTests.prototype.anyObjectArgumentShouldNotThrowIfObjectArgument = function (argument) {
        var some = {
            function: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
            }
        };
        alsatian_core_1.SpyOn(some, "function");
        some.function(argument);
        alsatian_core_1.Expect(function () {
            return alsatian_core_1.Expect(some.function).toHaveBeenCalledWith(alsatian_core_1.Any(Object));
        }).not.toThrow();
    };
    ToHaveBeenCalledWithTests.prototype.anyObjectArgumentShouldNotBeCalledShouldThrowIfObjectArgument = function (argument) {
        var some = {
            function: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
            }
        };
        alsatian_core_1.SpyOn(some, "function");
        some.function(argument);
        alsatian_core_1.Expect(function () {
            return alsatian_core_1.Expect(some.function).not.toHaveBeenCalledWith(alsatian_core_1.Any(Object));
        }).toThrowError(errors_1.FunctionCallMatchError, "Expected function not to be called with [Any Object].");
    };
    ToHaveBeenCalledWithTests.prototype.anyObjectArgumentShouldThrowIfNonObjectArgument = function (argument) {
        var some = {
            function: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
            }
        };
        alsatian_core_1.SpyOn(some, "function");
        some.function(argument);
        alsatian_core_1.Expect(function () {
            return alsatian_core_1.Expect(some.function).toHaveBeenCalledWith(alsatian_core_1.Any(Object));
        }).toThrowError(errors_1.FunctionCallMatchError, "Expected function to be called with [Any Object].");
    };
    ToHaveBeenCalledWithTests.prototype.anyObjectArgumentShouldThrowWithExpectedValueIfNonObjectArgument = function (argument) {
        var some = {
            function: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
            }
        };
        alsatian_core_1.SpyOn(some, "function");
        some.function(argument);
        var functionCallError;
        try {
            alsatian_core_1.Expect(some.function).toHaveBeenCalledWith(alsatian_core_1.Any(Object));
        }
        catch (error) {
            functionCallError = error;
        }
        alsatian_core_1.Expect(functionCallError).toBeDefined();
        alsatian_core_1.Expect(functionCallError).not.toBeNull();
        alsatian_core_1.Expect(functionCallError.expected).toBe("function to be called with [Any Object].");
    };
    ToHaveBeenCalledWithTests.prototype.anyArrayArgumentShouldNotThrowIfArrayArgument = function (argument) {
        var some = {
            function: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
            }
        };
        alsatian_core_1.SpyOn(some, "function");
        some.function(argument);
        alsatian_core_1.Expect(function () {
            return alsatian_core_1.Expect(some.function).toHaveBeenCalledWith(alsatian_core_1.Any(Array));
        }).not.toThrow();
    };
    ToHaveBeenCalledWithTests.prototype.anyArrayArgumentShouldNotBeCalledShouldThrowIfArrayArgument = function (argument) {
        var some = {
            function: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
            }
        };
        alsatian_core_1.SpyOn(some, "function");
        some.function(argument);
        alsatian_core_1.Expect(function () {
            return alsatian_core_1.Expect(some.function).not.toHaveBeenCalledWith(alsatian_core_1.Any(Array));
        }).toThrowError(errors_1.FunctionCallMatchError, "Expected function not to be called with [Any Array].");
    };
    ToHaveBeenCalledWithTests.prototype.anyArrayArgumentShouldThrowIfNonArrayArgument = function (argument) {
        var some = {
            function: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
            }
        };
        alsatian_core_1.SpyOn(some, "function");
        some.function(argument);
        alsatian_core_1.Expect(function () {
            return alsatian_core_1.Expect(some.function).toHaveBeenCalledWith(alsatian_core_1.Any(Array));
        }).toThrowError(errors_1.FunctionCallMatchError, "Expected function to be called with [Any Array].");
    };
    ToHaveBeenCalledWithTests.prototype.anyArrayArgumentShouldThrowWithExpectedValueIfNonArrayArgument = function (argument) {
        var some = {
            function: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
            }
        };
        alsatian_core_1.SpyOn(some, "function");
        some.function(argument);
        var functionCallError;
        try {
            alsatian_core_1.Expect(some.function).toHaveBeenCalledWith(alsatian_core_1.Any(Array));
        }
        catch (error) {
            functionCallError = error;
        }
        alsatian_core_1.Expect(functionCallError).toBeDefined();
        alsatian_core_1.Expect(functionCallError).not.toBeNull();
        alsatian_core_1.Expect(functionCallError.expected).toBe("function to be called with [Any Array].");
    };
    ToHaveBeenCalledWithTests.prototype.anyErrorArgumentShouldNotThrowIfErrorArgument = function (argument) {
        var some = {
            function: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
            }
        };
        alsatian_core_1.SpyOn(some, "function");
        some.function(argument);
        alsatian_core_1.Expect(function () {
            return alsatian_core_1.Expect(some.function).toHaveBeenCalledWith(alsatian_core_1.Any(Error));
        }).not.toThrow();
    };
    ToHaveBeenCalledWithTests.prototype.anyErrorArgumentShouldNotBeCalledShouldThrowIfErrorArgument = function (argument) {
        var some = {
            function: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
            }
        };
        alsatian_core_1.SpyOn(some, "function");
        some.function(argument);
        alsatian_core_1.Expect(function () {
            return alsatian_core_1.Expect(some.function).not.toHaveBeenCalledWith(alsatian_core_1.Any(Error));
        }).toThrowError(errors_1.FunctionCallMatchError, "Expected function not to be called with [Any Error].");
    };
    ToHaveBeenCalledWithTests.prototype.anyErrorArgumentShouldThrowIfNonErrorArgument = function (argument) {
        var some = {
            function: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
            }
        };
        alsatian_core_1.SpyOn(some, "function");
        some.function(argument);
        alsatian_core_1.Expect(function () {
            return alsatian_core_1.Expect(some.function).toHaveBeenCalledWith(alsatian_core_1.Any(Error));
        }).toThrowError(errors_1.FunctionCallMatchError, "Expected function to be called with [Any Error].");
    };
    ToHaveBeenCalledWithTests.prototype.anyErrorArgumentShouldThrowWithExpectedValueIfNonErrorArgument = function (argument) {
        var some = {
            function: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
            }
        };
        alsatian_core_1.SpyOn(some, "function");
        some.function(argument);
        var functionCallError;
        try {
            alsatian_core_1.Expect(some.function).toHaveBeenCalledWith(alsatian_core_1.Any(Error));
        }
        catch (error) {
            functionCallError = error;
        }
        alsatian_core_1.Expect(functionCallError).toBeDefined();
        alsatian_core_1.Expect(functionCallError).not.toBeNull();
        alsatian_core_1.Expect(functionCallError.expected).toBe("function to be called with [Any Error].");
    };
    ToHaveBeenCalledWithTests.prototype.expectedAnyArgumentAndAnyTypeArgumentGivenCorrectArgumentsPass = function (argument, type) {
        var some = {
            function: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
            }
        };
        alsatian_core_1.SpyOn(some, "function");
        some.function(42, argument);
        alsatian_core_1.Expect(function () {
            return alsatian_core_1.Expect(some.function).toHaveBeenCalledWith(alsatian_core_1.Any, alsatian_core_1.Any(type));
        }).not.toThrow();
    };
    ToHaveBeenCalledWithTests.prototype.expectedAnyArgumentAndAnyTypeArgumentToThorwGivenIncorrectArgumentTypesPass = function (argument, type) {
        var some = {
            function: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
            }
        };
        alsatian_core_1.SpyOn(some, "function");
        some.function(42, argument);
        alsatian_core_1.Expect(function () {
            return alsatian_core_1.Expect(some.function).toHaveBeenCalledWith(alsatian_core_1.Any, alsatian_core_1.Any(type));
        }).toThrowError(errors_1.FunctionCallMatchError, "Expected function to be called with [Anything, Any " + type.name + "].");
    };
    ToHaveBeenCalledWithTests.prototype.expectedAnyTypeArgumentAndAnyArgumentGivenCorrectArgumentsPass = function (argument, type) {
        var some = {
            function: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
            }
        };
        alsatian_core_1.SpyOn(some, "function");
        some.function(argument, 42);
        alsatian_core_1.Expect(function () {
            return alsatian_core_1.Expect(some.function).toHaveBeenCalledWith(alsatian_core_1.Any(type), alsatian_core_1.Any);
        }).not.toThrow();
    };
    ToHaveBeenCalledWithTests.prototype.expectedAnyTypeArgumentAndAnyArgumentToThorwGivenIncorrectArgumentTypesPass = function (argument, type) {
        var some = {
            function: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
            }
        };
        alsatian_core_1.SpyOn(some, "function");
        some.function(argument, 42);
        alsatian_core_1.Expect(function () {
            return alsatian_core_1.Expect(some.function).toHaveBeenCalledWith(alsatian_core_1.Any(type), alsatian_core_1.Any);
        }).toThrowError(errors_1.FunctionCallMatchError, "Expected function to be called with [Any " + type.name + ", Anything].");
    };
    ToHaveBeenCalledWithTests.prototype.expectedExactArgumentAndAnyTypeArgumentGivenCorrectArgumentsPass = function (argument, type) {
        var some = {
            function: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
            }
        };
        alsatian_core_1.SpyOn(some, "function");
        some.function(42, argument);
        alsatian_core_1.Expect(function () {
            return alsatian_core_1.Expect(some.function).toHaveBeenCalledWith(42, alsatian_core_1.Any(type));
        }).not.toThrow();
    };
    ToHaveBeenCalledWithTests.prototype.expectedExactArgumentAndAnyTypeArgumentToThorwGivenIncorrectArgumentTypesPass = function (argument, type) {
        var some = {
            function: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
            }
        };
        alsatian_core_1.SpyOn(some, "function");
        some.function(42, argument);
        alsatian_core_1.Expect(function () {
            return alsatian_core_1.Expect(some.function).toHaveBeenCalledWith(42, alsatian_core_1.Any(type));
        }).toThrowError(errors_1.FunctionCallMatchError, "Expected function to be called with [42, Any " + type.name + "].");
    };
    ToHaveBeenCalledWithTests.prototype.expectedAnyTypeArgumentAndExactArgumentGivenCorrectArgumentsPass = function (argument, type) {
        var some = {
            function: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
            }
        };
        alsatian_core_1.SpyOn(some, "function");
        some.function(argument, 42);
        alsatian_core_1.Expect(function () {
            return alsatian_core_1.Expect(some.function).toHaveBeenCalledWith(alsatian_core_1.Any(type), 42);
        }).not.toThrow();
    };
    ToHaveBeenCalledWithTests.prototype.expectedAnyTypeArgumentAndExactArgumentToThorwGivenIncorrectArgumentTypesPass = function (argument, type) {
        var some = {
            function: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
            }
        };
        alsatian_core_1.SpyOn(some, "function");
        some.function(argument, 42);
        alsatian_core_1.Expect(function () {
            return alsatian_core_1.Expect(some.function).toHaveBeenCalledWith(alsatian_core_1.Any(type), 42);
        }).toThrowError(errors_1.FunctionCallMatchError, "Expected function to be called with [Any " + type.name + ", 42].");
    };
    ToHaveBeenCalledWithTests.prototype.expectedExactArgumentAndAnyArgumentGivenCorrectArgumentsPass = function (argument) {
        var some = {
            function: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
            }
        };
        alsatian_core_1.SpyOn(some, "function");
        some.function(42, argument);
        alsatian_core_1.Expect(function () {
            return alsatian_core_1.Expect(some.function).toHaveBeenCalledWith(42, alsatian_core_1.Any);
        }).not.toThrow();
    };
    ToHaveBeenCalledWithTests.prototype.expectedAnyArgumentAndExactArgumentGivenCorrectArgumentsPass = function (argument) {
        var some = {
            function: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
            }
        };
        alsatian_core_1.SpyOn(some, "function");
        some.function(argument, 42);
        alsatian_core_1.Expect(function () {
            return alsatian_core_1.Expect(some.function).toHaveBeenCalledWith(alsatian_core_1.Any, 42);
        }).not.toThrow();
    };
    ToHaveBeenCalledWithTests.prototype.calledExactlyCorrectNumberOfTimesWithCorrectArgumentsPasses = function (expectedCallCount) {
        var some = {
            function: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
            }
        };
        alsatian_core_1.SpyOn(some, "function");
        for (var i = 0; i < expectedCallCount; i++) {
            some.function(42);
        }
        alsatian_core_1.Expect(function () {
            return alsatian_core_1.Expect(some.function)
                .toHaveBeenCalledWith(42)
                .exactly(expectedCallCount).times;
        }).not.toThrow();
    };
    ToHaveBeenCalledWithTests.prototype.calledExactlyCorrectNumberOfTimesWithCorrectAnyArgumentsPasses = function (expectedCallCount) {
        var some = {
            function: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
            }
        };
        alsatian_core_1.SpyOn(some, "function");
        for (var i = 0; i < expectedCallCount; i++) {
            some.function(42);
        }
        alsatian_core_1.Expect(function () {
            return alsatian_core_1.Expect(some.function)
                .toHaveBeenCalledWith(alsatian_core_1.Any)
                .exactly(expectedCallCount).times;
        }).not.toThrow();
    };
    ToHaveBeenCalledWithTests.prototype.calledExactlyCorrectNumberOfTimesWithCorrectAnyTypeArgumentsPasses = function (expectedCallCount) {
        var some = {
            function: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
            }
        };
        alsatian_core_1.SpyOn(some, "function");
        for (var i = 0; i < expectedCallCount; i++) {
            some.function(42);
        }
        alsatian_core_1.Expect(function () {
            return alsatian_core_1.Expect(some.function)
                .toHaveBeenCalledWith(alsatian_core_1.Any(Number))
                .exactly(expectedCallCount).times;
        }).not.toThrow();
    };
    ToHaveBeenCalledWithTests.prototype.calledExactlyCorrectNumberOfTimesWithWrongArgumentsThrowsError = function (expectedCallCount) {
        var some = {
            function: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
            }
        };
        alsatian_core_1.SpyOn(some, "function");
        // called once but not correct amount of times
        some.function(42);
        for (var i = 0; i < expectedCallCount; i++) {
            some.function(43);
        }
        if (expectedCallCount === 1) {
            alsatian_core_1.Expect(function () {
                return alsatian_core_1.Expect(some.function)
                    .toHaveBeenCalledWith(42)
                    .exactly(expectedCallCount).times;
            }).toThrowError(errors_1.FunctionCallCountMatchError, "Expected function to be called with [42] 1 time.");
        }
        else {
            alsatian_core_1.Expect(function () {
                return alsatian_core_1.Expect(some.function)
                    .toHaveBeenCalledWith(42)
                    .exactly(expectedCallCount).times;
            }).toThrowError(errors_1.FunctionCallCountMatchError, "Expected function to be called with [42] " + expectedCallCount + " times.");
        }
    };
    ToHaveBeenCalledWithTests.prototype.calledExactlyCorrectNumberOfTimesWithRightArgumentsInTheWrongOrderThrowsError = function (expectedCallCount) {
        var some = {
            function: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
            }
        };
        alsatian_core_1.SpyOn(some, "function");
        // called once but not correct amount of times
        some.function("some", "thing");
        for (var i = 0; i < expectedCallCount; i++) {
            some.function("thing", "some");
        }
        if (expectedCallCount === 1) {
            alsatian_core_1.Expect(function () {
                return alsatian_core_1.Expect(some.function)
                    .toHaveBeenCalledWith("some", "thing")
                    .exactly(expectedCallCount).times;
            }).toThrowError(errors_1.FunctionCallCountMatchError, 'Expected function to be called with ["some", "thing"] 1 time.');
        }
        else {
            alsatian_core_1.Expect(function () {
                return alsatian_core_1.Expect(some.function)
                    .toHaveBeenCalledWith("some", "thing")
                    .exactly(expectedCallCount).times;
            }).toThrowError(errors_1.FunctionCallCountMatchError, "Expected function to be called with [\"some\", \"thing\"] " + expectedCallCount + " times.");
        }
    };
    ToHaveBeenCalledWithTests.prototype.calledAnythingButCorrectNumberOfTimesWithCorrectArgumentsPasses = function (notExpectedCallCount, actualCallCount) {
        var some = {
            function: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
            }
        };
        alsatian_core_1.SpyOn(some, "function");
        for (var i = 0; i < actualCallCount; i++) {
            some.function(42);
        }
        alsatian_core_1.Expect(function () {
            return alsatian_core_1.Expect(some.function)
                .toHaveBeenCalledWith(42)
                .anythingBut(notExpectedCallCount).times;
        }).not.toThrow();
    };
    ToHaveBeenCalledWithTests.prototype.calledAnythingButCorrectNumberOfTimesWithCorrectAnyArgumentsPasses = function (notExpectedCallCount, actualCallCount) {
        var some = {
            function: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
            }
        };
        alsatian_core_1.SpyOn(some, "function");
        for (var i = 0; i < actualCallCount; i++) {
            some.function(42);
        }
        alsatian_core_1.Expect(function () {
            return alsatian_core_1.Expect(some.function)
                .toHaveBeenCalledWith(alsatian_core_1.Any)
                .anythingBut(notExpectedCallCount).times;
        }).not.toThrow();
    };
    ToHaveBeenCalledWithTests.prototype.calledAnythingButCorrectNumberOfTimesWithCorrectAnyTypeArgumentsPasses = function (notExpectedCallCount, actualCallCount) {
        var some = {
            function: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
            }
        };
        alsatian_core_1.SpyOn(some, "function");
        for (var i = 0; i < actualCallCount; i++) {
            some.function(42);
        }
        alsatian_core_1.Expect(function () {
            return alsatian_core_1.Expect(some.function)
                .toHaveBeenCalledWith(alsatian_core_1.Any(Number))
                .anythingBut(notExpectedCallCount).times;
        }).not.toThrow();
    };
    ToHaveBeenCalledWithTests.prototype.calledAnythingButCorrectNumberOfTimesWithExtraCallWithWrongArgumentsThrowsError = function (expectedCallCount) {
        var some = {
            function: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
            }
        };
        alsatian_core_1.SpyOn(some, "function");
        for (var i = 0; i < expectedCallCount; i++) {
            some.function(42);
        }
        // called an extra time with a different argument
        some.function(43);
        if (expectedCallCount === 1) {
            alsatian_core_1.Expect(function () {
                return alsatian_core_1.Expect(some.function)
                    .toHaveBeenCalledWith(42)
                    .anythingBut(expectedCallCount).times;
            }).toThrowError(errors_1.FunctionCallCountMatchError, "Expected function not to be called with [42] 1 time.");
        }
        else {
            alsatian_core_1.Expect(function () {
                return alsatian_core_1.Expect(some.function)
                    .toHaveBeenCalledWith(42)
                    .anythingBut(expectedCallCount).times;
            }).toThrowError(errors_1.FunctionCallCountMatchError, "Expected function not to be called with [42] " + expectedCallCount + " times.");
        }
    };
    ToHaveBeenCalledWithTests.prototype.calledAnythingButCorrectNumberOfTimesWithExtraCallWithArgumentsInWrongOrderThrowsError = function (expectedCallCount) {
        var some = {
            function: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
            }
        };
        alsatian_core_1.SpyOn(some, "function");
        for (var i = 0; i < expectedCallCount; i++) {
            some.function("some", "thing");
        }
        // called an extra time with arguments in wrong order
        some.function("thing", "some");
        if (expectedCallCount === 1) {
            alsatian_core_1.Expect(function () {
                return alsatian_core_1.Expect(some.function)
                    .toHaveBeenCalledWith("some", "thing")
                    .anythingBut(expectedCallCount).times;
            }).toThrowError(errors_1.FunctionCallCountMatchError, 'Expected function not to be called with ["some", "thing"] 1 time.');
        }
        else {
            alsatian_core_1.Expect(function () {
                return alsatian_core_1.Expect(some.function)
                    .toHaveBeenCalledWith("some", "thing")
                    .anythingBut(expectedCallCount).times;
            }).toThrowError(errors_1.FunctionCallCountMatchError, "Expected function not to be called with [\"some\", \"thing\"] " + expectedCallCount + " times.");
        }
    };
    ToHaveBeenCalledWithTests.prototype.calledGreaterThanCorrectNumberOfTimesWithCorrectArgumentsPasses = function (minimumCallCount, actualCallCount) {
        var some = {
            function: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
            }
        };
        alsatian_core_1.SpyOn(some, "function");
        for (var i = 0; i < actualCallCount; i++) {
            some.function(42);
        }
        alsatian_core_1.Expect(function () {
            return alsatian_core_1.Expect(some.function)
                .toHaveBeenCalledWith(42)
                .greaterThan(minimumCallCount).times;
        }).not.toThrow();
    };
    ToHaveBeenCalledWithTests.prototype.calledGreaterThanCorrectNumberOfTimesWithCorrectAnyArgumentsPasses = function (minimumCallCount, actualCallCount) {
        var some = {
            function: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
            }
        };
        alsatian_core_1.SpyOn(some, "function");
        for (var i = 0; i < actualCallCount; i++) {
            some.function(42);
        }
        alsatian_core_1.Expect(function () {
            return alsatian_core_1.Expect(some.function)
                .toHaveBeenCalledWith(alsatian_core_1.Any)
                .greaterThan(minimumCallCount).times;
        }).not.toThrow();
    };
    ToHaveBeenCalledWithTests.prototype.calledGreaterThanCorrectNumberOfTimesWithCorrectAnyTypeArgumentsPasses = function (minimumCallCount, actualCallCount) {
        var some = {
            function: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
            }
        };
        alsatian_core_1.SpyOn(some, "function");
        for (var i = 0; i < actualCallCount; i++) {
            some.function(42);
        }
        alsatian_core_1.Expect(function () {
            return alsatian_core_1.Expect(some.function)
                .toHaveBeenCalledWith(alsatian_core_1.Any(Number))
                .greaterThan(minimumCallCount).times;
        }).not.toThrow();
    };
    ToHaveBeenCalledWithTests.prototype.calledGreaterThanCorrectNumberOfTimesWithOneCallWithWrongArgumentsThrowsError = function (minimumCallCount) {
        var some = {
            function: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
            }
        };
        alsatian_core_1.SpyOn(some, "function");
        for (var i = 0; i < minimumCallCount; i++) {
            some.function(42);
        }
        // called an extra time with a different argument
        some.function(43);
        if (minimumCallCount === 1) {
            alsatian_core_1.Expect(function () {
                return alsatian_core_1.Expect(some.function)
                    .toHaveBeenCalledWith(42)
                    .greaterThan(minimumCallCount).times;
            }).toThrowError(errors_1.FunctionCallCountMatchError, "Expected function to be called with [42] greater than 1 time.");
        }
        else {
            alsatian_core_1.Expect(function () {
                return alsatian_core_1.Expect(some.function)
                    .toHaveBeenCalledWith(42)
                    .greaterThan(minimumCallCount).times;
            }).toThrowError(errors_1.FunctionCallCountMatchError, "Expected function to be called with [42] greater than " + minimumCallCount + " times.");
        }
    };
    ToHaveBeenCalledWithTests.prototype.calledGreaterThanCorrectNumberOfTimesWithExtraCallWithArgumentsInWrongOrderThrowsError = function (minimumCallCount) {
        var some = {
            function: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
            }
        };
        alsatian_core_1.SpyOn(some, "function");
        for (var i = 0; i < minimumCallCount; i++) {
            some.function("some", "thing");
        }
        // called an extra time with arguments in wrong order
        some.function("thing", "some");
        if (minimumCallCount === 1) {
            alsatian_core_1.Expect(function () {
                return alsatian_core_1.Expect(some.function)
                    .toHaveBeenCalledWith("some", "thing")
                    .greaterThan(minimumCallCount).times;
            }).toThrowError(errors_1.FunctionCallCountMatchError, 'Expected function to be called with ["some", "thing"] greater than 1 time.');
        }
        else {
            alsatian_core_1.Expect(function () {
                return alsatian_core_1.Expect(some.function)
                    .toHaveBeenCalledWith("some", "thing")
                    .greaterThan(minimumCallCount).times;
            }).toThrowError(errors_1.FunctionCallCountMatchError, "Expected function to be called with [\"some\", \"thing\"] greater than " + minimumCallCount + " times.");
        }
    };
    ToHaveBeenCalledWithTests.prototype.calledLessThanCorrectNumberOfTimesWithCorrectArgumentsPasses = function (maximumCallCount, actualCallCount) {
        var some = {
            function: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
            }
        };
        alsatian_core_1.SpyOn(some, "function");
        for (var i = 0; i < actualCallCount; i++) {
            some.function(42);
        }
        alsatian_core_1.Expect(function () {
            return alsatian_core_1.Expect(some.function)
                .toHaveBeenCalledWith(42)
                .lessThan(maximumCallCount).times;
        }).not.toThrow();
    };
    ToHaveBeenCalledWithTests.prototype.calledLessThanCorrectNumberOfTimesWithCorrectAnyArgumentsPasses = function (maximumCallCount, actualCallCount) {
        var some = {
            function: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
            }
        };
        alsatian_core_1.SpyOn(some, "function");
        for (var i = 0; i < actualCallCount; i++) {
            some.function(42);
        }
        alsatian_core_1.Expect(function () {
            return alsatian_core_1.Expect(some.function)
                .toHaveBeenCalledWith(alsatian_core_1.Any)
                .lessThan(maximumCallCount).times;
        }).not.toThrow();
    };
    ToHaveBeenCalledWithTests.prototype.calledLessThanCorrectNumberOfTimesWithCorrectAnyTypeArgumentsPasses = function (maximumCallCount, actualCallCount) {
        var some = {
            function: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
            }
        };
        alsatian_core_1.SpyOn(some, "function");
        for (var i = 0; i < actualCallCount; i++) {
            some.function(42);
        }
        alsatian_core_1.Expect(function () {
            return alsatian_core_1.Expect(some.function)
                .toHaveBeenCalledWith(alsatian_core_1.Any(Number))
                .lessThan(maximumCallCount).times;
        }).not.toThrow();
    };
    ToHaveBeenCalledWithTests.prototype.calledLessThanCorrectNumberOfTimesWithOneCallWithWrongArgumentsPasses = function (maximumCallCount) {
        var some = {
            function: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
            }
        };
        alsatian_core_1.SpyOn(some, "function");
        for (var i = 0; i < maximumCallCount - 2; i++) {
            some.function(42);
        }
        // called an extra time with a different argument
        some.function(43);
        alsatian_core_1.Expect(function () {
            return alsatian_core_1.Expect(some.function)
                .toHaveBeenCalledWith(42)
                .lessThan(maximumCallCount).times;
        }).not.toThrow();
    };
    ToHaveBeenCalledWithTests.prototype.calledLessThanCorrectNumberOfTimesWithExtraCallWithArgumentsInWrongOrderPasses = function (maximumCallCount) {
        var some = {
            function: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
            }
        };
        alsatian_core_1.SpyOn(some, "function");
        for (var i = 0; i < maximumCallCount - 2; i++) {
            some.function("some", "thing");
        }
        // called an extra time with arguments in wrong order
        some.function("thing", "some");
        alsatian_core_1.Expect(function () {
            return alsatian_core_1.Expect(some.function)
                .toHaveBeenCalledWith("some", "thing")
                .lessThan(maximumCallCount).times;
        }).not.toThrow();
    };
    ToHaveBeenCalledWithTests.prototype.calledTheSameTimesWhenExpectedLessThanThrowsError = function (maximumCallCount) {
        var some = {
            function: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
            }
        };
        alsatian_core_1.SpyOn(some, "function");
        for (var i = 0; i < maximumCallCount; i++) {
            some.function("some", "thing");
        }
        if (maximumCallCount === 1) {
            alsatian_core_1.Expect(function () {
                return alsatian_core_1.Expect(some.function)
                    .toHaveBeenCalledWith("some", "thing")
                    .lessThan(maximumCallCount).times;
            }).toThrowError(errors_1.FunctionCallCountMatchError, 'Expected function to be called with ["some", "thing"] less than 1 time.');
        }
        else {
            alsatian_core_1.Expect(function () {
                return alsatian_core_1.Expect(some.function)
                    .toHaveBeenCalledWith("some", "thing")
                    .lessThan(maximumCallCount).times;
            }).toThrowError(errors_1.FunctionCallCountMatchError, "Expected function to be called with [\"some\", \"thing\"] less than " + maximumCallCount + " times.");
        }
    };
    ToHaveBeenCalledWithTests.prototype.calledOneMoreTimesWhenExpectedLessThanThrowsError = function (maximumCallCount) {
        var some = {
            function: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
            }
        };
        alsatian_core_1.SpyOn(some, "function");
        for (var i = 0; i < maximumCallCount; i++) {
            some.function("some", "thing");
        }
        // called an extra time with arguments
        some.function("some", "thing");
        if (maximumCallCount === 1) {
            alsatian_core_1.Expect(function () {
                return alsatian_core_1.Expect(some.function)
                    .toHaveBeenCalledWith("some", "thing")
                    .lessThan(maximumCallCount).times;
            }).toThrowError(errors_1.FunctionCallCountMatchError, 'Expected function to be called with ["some", "thing"] less than 1 time.');
        }
        else {
            alsatian_core_1.Expect(function () {
                return alsatian_core_1.Expect(some.function)
                    .toHaveBeenCalledWith("some", "thing")
                    .lessThan(maximumCallCount).times;
            }).toThrowError(errors_1.FunctionCallCountMatchError, "Expected function to be called with [\"some\", \"thing\"] less than " + maximumCallCount + " times.");
        }
    };
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledWithTests.prototype, "functionCalledPasses", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledWithTests.prototype, "functionNotCalledFails", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledWithTests.prototype, "functionNotCalledFailsWithCorrectError", null);
    __decorate([
        alsatian_core_1.TestCase([1]),
        alsatian_core_1.TestCase(["argument"]),
        alsatian_core_1.TestCase([1, "argument"]),
        alsatian_core_1.TestCase(["argument", 1]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledWithTests.prototype, "functionCalledWithCorrectArgumentsPasses", null);
    __decorate([
        alsatian_core_1.TestCase(["1"], [1]),
        alsatian_core_1.TestCase([1], ["1"]),
        alsatian_core_1.TestCase(["42"], [42]),
        alsatian_core_1.TestCase([42], ["42"]),
        alsatian_core_1.TestCase([1, "42"], [1, 42]),
        alsatian_core_1.TestCase([1, 42], [1, "42"]),
        alsatian_core_1.TestCase([1, "42"], ["1", 42]),
        alsatian_core_1.TestCase(["1", 42], [1, "42"]),
        alsatian_core_1.TestCase(["1", "42"], [1, 42]),
        alsatian_core_1.TestCase([1, 42], ["1", "42"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array,
            Array]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledWithTests.prototype, "functionCalledWithSimilarArgumentsFailsWithCorrectError", null);
    __decorate([
        alsatian_core_1.TestCase([], [1]),
        alsatian_core_1.TestCase([1], []),
        alsatian_core_1.TestCase([], ["argument"]),
        alsatian_core_1.TestCase(["argument"], []),
        alsatian_core_1.TestCase([1], [1, 42]),
        alsatian_core_1.TestCase([42], [1, 42]),
        alsatian_core_1.TestCase([], [1, 42]),
        alsatian_core_1.TestCase([42, 1], []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array,
            Array]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledWithTests.prototype, "functionCalledWithWrongNumberOfArgumentsFailsWithCorrectError", null);
    __decorate([
        alsatian_core_1.TestCase(["argument", 1], [1, "argument"]),
        alsatian_core_1.TestCase([1, "argument"], ["argument", 1]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array,
            Array]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledWithTests.prototype, "functionCalledWithRightArgumentsInWrongOrderFailsWithCorrectError", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledWithTests.prototype, "functionNotCalledPassesWhenShouldNotCall", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledWithTests.prototype, "functionThrowsErrorFailsWhenShouldNotThrow", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledWithTests.prototype, "functionThrowsErrorFailsWithCorrectError", null);
    __decorate([
        alsatian_core_1.TestCase(["1"], [1]),
        alsatian_core_1.TestCase([1], ["1"]),
        alsatian_core_1.TestCase(["42"], [42]),
        alsatian_core_1.TestCase([42], ["42"]),
        alsatian_core_1.TestCase([1, "42"], [1, 42]),
        alsatian_core_1.TestCase([1, 42], [1, "42"]),
        alsatian_core_1.TestCase([1, "42"], ["1", 42]),
        alsatian_core_1.TestCase(["1", 42], [1, "42"]),
        alsatian_core_1.TestCase(["1", "42"], [1, 42]),
        alsatian_core_1.TestCase([1, 42], ["1", "42"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array,
            Array]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledWithTests.prototype, "functionCalledWithSimilarArgumentsPasses", null);
    __decorate([
        alsatian_core_1.TestCase([], [1]),
        alsatian_core_1.TestCase([1], []),
        alsatian_core_1.TestCase([], ["argument"]),
        alsatian_core_1.TestCase(["argument"], []),
        alsatian_core_1.TestCase([1], [1, 42]),
        alsatian_core_1.TestCase([42], [1, 42]),
        alsatian_core_1.TestCase([], [1, 42]),
        alsatian_core_1.TestCase([42, 1], []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array,
            Array]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledWithTests.prototype, "functionCalledWithWrongNumberOfArgumentsPasses", null);
    __decorate([
        alsatian_core_1.TestCase(["argument", 1], [1, "argument"]),
        alsatian_core_1.TestCase([1, "argument"], ["argument", 1]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array,
            Array]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledWithTests.prototype, "functionNotCalledWithRightArgumentsInWrongOrderPasses", null);
    __decorate([
        alsatian_core_1.TestCase([1]),
        alsatian_core_1.TestCase(["argument"]),
        alsatian_core_1.TestCase([1, "argument"]),
        alsatian_core_1.TestCase(["argument", 1]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledWithTests.prototype, "functionNotCalledWithDifferentArgumentsFailsWithCorrectError", null);
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
    ], ToHaveBeenCalledWithTests.prototype, "checkingWhetherNonFunctionSpyOrSpiedOnFunctionHasBeenCalledShouldThrow", null);
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
    ], ToHaveBeenCalledWithTests.prototype, "checkingWhetherNonFunctionSpyOrSpiedOnFunctionHasNotBeenCalledShouldThrow", null);
    __decorate([
        alsatian_core_1.TestCase([[]]),
        alsatian_core_1.TestCase([[], []]),
        alsatian_core_1.TestCase([[1], [2], [3]]),
        alsatian_core_1.TestCase([["something", "and", "another", "thing"]]),
        alsatian_core_1.TestCase([["this", "or"], ["that", "other", "thing"]]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledWithTests.prototype, "actualValueAndShouldMatchShouldBeSetToFunctionWasNotCalledWithArguments", null);
    __decorate([
        alsatian_core_1.TestCase([[]]),
        alsatian_core_1.TestCase([[], []]),
        alsatian_core_1.TestCase([[1], [2], [3]]),
        alsatian_core_1.TestCase([["something", "and", "another", "thing"]]),
        alsatian_core_1.TestCase([["this", "or"], ["that", "other", "thing"]]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledWithTests.prototype, "actualValueAndShouldNotMatchShouldBeSetToFunctionWasCalledWithArguments", null);
    __decorate([
        alsatian_core_1.TestCase([]),
        alsatian_core_1.TestCase([1]),
        alsatian_core_1.TestCase(["something"]),
        alsatian_core_1.TestCase([1, "or", 2, "other", "things"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledWithTests.prototype, "expectedValueAndShouldMatchShouldBeSetToFunctionToBeCalledWithArguments", null);
    __decorate([
        alsatian_core_1.TestCase([]),
        alsatian_core_1.TestCase([1]),
        alsatian_core_1.TestCase(["something"]),
        alsatian_core_1.TestCase([1, "or", 2, "other", "things"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledWithTests.prototype, "expectedValueAndShouldNotMatchShouldBeSetToFunctionNotToBeCalledWithArguments", null);
    __decorate([
        alsatian_core_1.TestCase(undefined),
        alsatian_core_1.TestCase(null),
        alsatian_core_1.TestCase(0),
        alsatian_core_1.TestCase(1),
        alsatian_core_1.TestCase(42),
        alsatian_core_1.TestCase(-42),
        alsatian_core_1.TestCase(new Number(0)),
        alsatian_core_1.TestCase(new Number(1)),
        alsatian_core_1.TestCase(new Number(42)),
        alsatian_core_1.TestCase(new Number(-42)),
        alsatian_core_1.TestCase(""),
        alsatian_core_1.TestCase(new String("")),
        alsatian_core_1.TestCase("test"),
        alsatian_core_1.TestCase(new String("test")),
        alsatian_core_1.TestCase(true),
        alsatian_core_1.TestCase(false),
        alsatian_core_1.TestCase(new Boolean(true)),
        alsatian_core_1.TestCase(new Boolean(false)),
        alsatian_core_1.TestCase({}),
        alsatian_core_1.TestCase({ an: "object" }),
        alsatian_core_1.TestCase(new Object({})),
        alsatian_core_1.TestCase(new Object({ an: "object" })),
        alsatian_core_1.TestCase([]),
        alsatian_core_1.TestCase(["an", "array"]),
        alsatian_core_1.TestCase(new Array([])),
        alsatian_core_1.TestCase(new Array(["an", "array"])),
        alsatian_core_1.TestCase(new Error()),
        alsatian_core_1.TestCase(new Error("something went wrong")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledWithTests.prototype, "anyArgumentShouldNotThrowIfOneArgument", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledWithTests.prototype, "anyArgumentShouldNotThrowIfTwoArguments", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledWithTests.prototype, "anyArgumentShouldNotThrowIfThreeArguments", null);
    __decorate([
        alsatian_core_1.TestCase(),
        alsatian_core_1.TestCase(1, 2),
        alsatian_core_1.TestCase(42, undefined),
        alsatian_core_1.TestCase(1, 2, 3),
        alsatian_core_1.TestCase("some", "function", "arguments"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledWithTests.prototype, "anyArgumentShouldThrowIfOneArgumentExpectedAndNotProvided", null);
    __decorate([
        alsatian_core_1.TestCase(),
        alsatian_core_1.TestCase(42),
        alsatian_core_1.TestCase("argument"),
        alsatian_core_1.TestCase(1, 2, undefined),
        alsatian_core_1.TestCase("some", "function", "arguments"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledWithTests.prototype, "anyArgumentShouldThrowIfTwoArgumentsExpectedAndNotProvided", null);
    __decorate([
        alsatian_core_1.TestCase(),
        alsatian_core_1.TestCase(1, 2),
        alsatian_core_1.TestCase(42, undefined),
        alsatian_core_1.TestCase(1, 2, 3),
        alsatian_core_1.TestCase("some", "function", "arguments"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledWithTests.prototype, "anyArgumentShouldThrowWithExpectedMessageIfOneArgumentExpectedAndNotProvided", null);
    __decorate([
        alsatian_core_1.TestCase(),
        alsatian_core_1.TestCase(42),
        alsatian_core_1.TestCase("argument"),
        alsatian_core_1.TestCase(1, 2, undefined),
        alsatian_core_1.TestCase("some", "function", "arguments"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledWithTests.prototype, "anyArgumentShouldThrowWithexpectedMessageIfTwoArgumentsExpectedAndNotProvided", null);
    __decorate([
        alsatian_core_1.TestCase(0),
        alsatian_core_1.TestCase(1),
        alsatian_core_1.TestCase(42),
        alsatian_core_1.TestCase(-42),
        alsatian_core_1.TestCase(new Number(0)),
        alsatian_core_1.TestCase(new Number(1)),
        alsatian_core_1.TestCase(new Number(42)),
        alsatian_core_1.TestCase(new Number(-42)),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledWithTests.prototype, "anyNumberArgumentShouldNotThrowIfNumberArgument", null);
    __decorate([
        alsatian_core_1.TestCase(0),
        alsatian_core_1.TestCase(1),
        alsatian_core_1.TestCase(42),
        alsatian_core_1.TestCase(-42),
        alsatian_core_1.TestCase(new Number(0)),
        alsatian_core_1.TestCase(new Number(1)),
        alsatian_core_1.TestCase(new Number(42)),
        alsatian_core_1.TestCase(new Number(-42)),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledWithTests.prototype, "anyNumberArgumentShouldNotBeCalledShouldThrowIfNumberArgument", null);
    __decorate([
        alsatian_core_1.TestCase(undefined),
        alsatian_core_1.TestCase(null),
        alsatian_core_1.TestCase(""),
        alsatian_core_1.TestCase(new String("")),
        alsatian_core_1.TestCase("test"),
        alsatian_core_1.TestCase(new String("test")),
        alsatian_core_1.TestCase(true),
        alsatian_core_1.TestCase(false),
        alsatian_core_1.TestCase(new Boolean(true)),
        alsatian_core_1.TestCase(new Boolean(false)),
        alsatian_core_1.TestCase({}),
        alsatian_core_1.TestCase({ an: "object" }),
        alsatian_core_1.TestCase(new Object({})),
        alsatian_core_1.TestCase(new Object({ an: "object" })),
        alsatian_core_1.TestCase([]),
        alsatian_core_1.TestCase(["an", "array"]),
        alsatian_core_1.TestCase(new Array([])),
        alsatian_core_1.TestCase(new Array(["an", "array"])),
        alsatian_core_1.TestCase(new Error()),
        alsatian_core_1.TestCase(new Error("something went wrong")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledWithTests.prototype, "anyNumberArgumentShouldThrowIfNonNumberArgument", null);
    __decorate([
        alsatian_core_1.TestCase(undefined),
        alsatian_core_1.TestCase(null),
        alsatian_core_1.TestCase(""),
        alsatian_core_1.TestCase(new String("")),
        alsatian_core_1.TestCase("test"),
        alsatian_core_1.TestCase(new String("test")),
        alsatian_core_1.TestCase(true),
        alsatian_core_1.TestCase(false),
        alsatian_core_1.TestCase(new Boolean(true)),
        alsatian_core_1.TestCase(new Boolean(false)),
        alsatian_core_1.TestCase({}),
        alsatian_core_1.TestCase({ an: "object" }),
        alsatian_core_1.TestCase(new Object({})),
        alsatian_core_1.TestCase(new Object({ an: "object" })),
        alsatian_core_1.TestCase([]),
        alsatian_core_1.TestCase(["an", "array"]),
        alsatian_core_1.TestCase(new Array([])),
        alsatian_core_1.TestCase(new Array(["an", "array"])),
        alsatian_core_1.TestCase(new Error()),
        alsatian_core_1.TestCase(new Error("something went wrong")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledWithTests.prototype, "anyNumberArgumentShouldThrowWithExpectedValueIfNonNumberArgument", null);
    __decorate([
        alsatian_core_1.TestCase(""),
        alsatian_core_1.TestCase(new String("")),
        alsatian_core_1.TestCase("test"),
        alsatian_core_1.TestCase(new String("test")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledWithTests.prototype, "anyStringArgumentShouldNotThrowIfStringArgument", null);
    __decorate([
        alsatian_core_1.TestCase(""),
        alsatian_core_1.TestCase(new String("")),
        alsatian_core_1.TestCase("test"),
        alsatian_core_1.TestCase(new String("test")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledWithTests.prototype, "anyStringArgumentShouldNotBeCalledShouldThrowIfStringArgument", null);
    __decorate([
        alsatian_core_1.TestCase(undefined),
        alsatian_core_1.TestCase(null),
        alsatian_core_1.TestCase(0),
        alsatian_core_1.TestCase(1),
        alsatian_core_1.TestCase(42),
        alsatian_core_1.TestCase(-42),
        alsatian_core_1.TestCase(new Number(0)),
        alsatian_core_1.TestCase(new Number(1)),
        alsatian_core_1.TestCase(new Number(42)),
        alsatian_core_1.TestCase(new Number(-42)),
        alsatian_core_1.TestCase(true),
        alsatian_core_1.TestCase(false),
        alsatian_core_1.TestCase(new Boolean(true)),
        alsatian_core_1.TestCase(new Boolean(false)),
        alsatian_core_1.TestCase({}),
        alsatian_core_1.TestCase({ an: "object" }),
        alsatian_core_1.TestCase(new Object({})),
        alsatian_core_1.TestCase(new Object({ an: "object" })),
        alsatian_core_1.TestCase([]),
        alsatian_core_1.TestCase(["an", "array"]),
        alsatian_core_1.TestCase(new Array([])),
        alsatian_core_1.TestCase(new Array(["an", "array"])),
        alsatian_core_1.TestCase(new Error()),
        alsatian_core_1.TestCase(new Error("something went wrong")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledWithTests.prototype, "anyStringArgumentShouldThrowIfNonStringArgument", null);
    __decorate([
        alsatian_core_1.TestCase(undefined),
        alsatian_core_1.TestCase(null),
        alsatian_core_1.TestCase(0),
        alsatian_core_1.TestCase(1),
        alsatian_core_1.TestCase(42),
        alsatian_core_1.TestCase(-42),
        alsatian_core_1.TestCase(new Number(0)),
        alsatian_core_1.TestCase(new Number(1)),
        alsatian_core_1.TestCase(new Number(42)),
        alsatian_core_1.TestCase(new Number(-42)),
        alsatian_core_1.TestCase(true),
        alsatian_core_1.TestCase(false),
        alsatian_core_1.TestCase(new Boolean(true)),
        alsatian_core_1.TestCase(new Boolean(false)),
        alsatian_core_1.TestCase({}),
        alsatian_core_1.TestCase({ an: "object" }),
        alsatian_core_1.TestCase(new Object({})),
        alsatian_core_1.TestCase(new Object({ an: "object" })),
        alsatian_core_1.TestCase([]),
        alsatian_core_1.TestCase(["an", "array"]),
        alsatian_core_1.TestCase(new Array([])),
        alsatian_core_1.TestCase(new Array(["an", "array"])),
        alsatian_core_1.TestCase(new Error()),
        alsatian_core_1.TestCase(new Error("something went wrong")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledWithTests.prototype, "anyStringArgumentShouldThrowWithExpectedValueIfNonStringArgument", null);
    __decorate([
        alsatian_core_1.TestCase(true),
        alsatian_core_1.TestCase(false),
        alsatian_core_1.TestCase(new Boolean(true)),
        alsatian_core_1.TestCase(new Boolean(false)),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledWithTests.prototype, "anyBooleanArgumentShouldNotThrowIfBooleanArgument", null);
    __decorate([
        alsatian_core_1.TestCase(true),
        alsatian_core_1.TestCase(false),
        alsatian_core_1.TestCase(new Boolean(true)),
        alsatian_core_1.TestCase(new Boolean(false)),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledWithTests.prototype, "anyBooleanArgumentShouldNotBeCalledShouldThrowIfBooleanArgument", null);
    __decorate([
        alsatian_core_1.TestCase(undefined),
        alsatian_core_1.TestCase(null),
        alsatian_core_1.TestCase(0),
        alsatian_core_1.TestCase(1),
        alsatian_core_1.TestCase(42),
        alsatian_core_1.TestCase(-42),
        alsatian_core_1.TestCase(new Number(0)),
        alsatian_core_1.TestCase(new Number(1)),
        alsatian_core_1.TestCase(new Number(42)),
        alsatian_core_1.TestCase(new Number(-42)),
        alsatian_core_1.TestCase(""),
        alsatian_core_1.TestCase(new String("")),
        alsatian_core_1.TestCase("test"),
        alsatian_core_1.TestCase(new String("test")),
        alsatian_core_1.TestCase({}),
        alsatian_core_1.TestCase({ an: "object" }),
        alsatian_core_1.TestCase(new Object({})),
        alsatian_core_1.TestCase(new Object({ an: "object" })),
        alsatian_core_1.TestCase([]),
        alsatian_core_1.TestCase(["an", "array"]),
        alsatian_core_1.TestCase(new Array([])),
        alsatian_core_1.TestCase(new Array(["an", "array"])),
        alsatian_core_1.TestCase(new Error()),
        alsatian_core_1.TestCase(new Error("something went wrong")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledWithTests.prototype, "anyBooleanArgumentShouldThrowIfNonBooleanArgument", null);
    __decorate([
        alsatian_core_1.TestCase(undefined),
        alsatian_core_1.TestCase(null),
        alsatian_core_1.TestCase(0),
        alsatian_core_1.TestCase(1),
        alsatian_core_1.TestCase(42),
        alsatian_core_1.TestCase(-42),
        alsatian_core_1.TestCase(new Number(0)),
        alsatian_core_1.TestCase(new Number(1)),
        alsatian_core_1.TestCase(new Number(42)),
        alsatian_core_1.TestCase(new Number(-42)),
        alsatian_core_1.TestCase(""),
        alsatian_core_1.TestCase(new String("")),
        alsatian_core_1.TestCase("test"),
        alsatian_core_1.TestCase(new String("test")),
        alsatian_core_1.TestCase({}),
        alsatian_core_1.TestCase({ an: "object" }),
        alsatian_core_1.TestCase(new Object({})),
        alsatian_core_1.TestCase(new Object({ an: "object" })),
        alsatian_core_1.TestCase([]),
        alsatian_core_1.TestCase(["an", "array"]),
        alsatian_core_1.TestCase(new Array([])),
        alsatian_core_1.TestCase(new Array(["an", "array"])),
        alsatian_core_1.TestCase(new Error()),
        alsatian_core_1.TestCase(new Error("something went wrong")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledWithTests.prototype, "anyBooleanArgumentShouldThrowWithExpectedValueIfNonBooleanArgument", null);
    __decorate([
        alsatian_core_1.TestCase(new Number(0)),
        alsatian_core_1.TestCase(new Number(1)),
        alsatian_core_1.TestCase(new Number(42)),
        alsatian_core_1.TestCase(new Number(-42)),
        alsatian_core_1.TestCase(new String("")),
        alsatian_core_1.TestCase(new String("test")),
        alsatian_core_1.TestCase(new Boolean(true)),
        alsatian_core_1.TestCase(new Boolean(false)),
        alsatian_core_1.TestCase({}),
        alsatian_core_1.TestCase({ an: "object" }),
        alsatian_core_1.TestCase(new Object({})),
        alsatian_core_1.TestCase(new Object({ an: "object" })),
        alsatian_core_1.TestCase([]),
        alsatian_core_1.TestCase(["an", "array"]),
        alsatian_core_1.TestCase(new Array([])),
        alsatian_core_1.TestCase(new Array(["an", "array"])),
        alsatian_core_1.TestCase(new Error()),
        alsatian_core_1.TestCase(new Error("something went wrong")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledWithTests.prototype, "anyObjectArgumentShouldNotThrowIfObjectArgument", null);
    __decorate([
        alsatian_core_1.TestCase(new Number(0)),
        alsatian_core_1.TestCase(new Number(1)),
        alsatian_core_1.TestCase(new Number(42)),
        alsatian_core_1.TestCase(new Number(-42)),
        alsatian_core_1.TestCase(new String("")),
        alsatian_core_1.TestCase(new String("test")),
        alsatian_core_1.TestCase(new Boolean(true)),
        alsatian_core_1.TestCase(new Boolean(false)),
        alsatian_core_1.TestCase({}),
        alsatian_core_1.TestCase({ an: "object" }),
        alsatian_core_1.TestCase(new Object({})),
        alsatian_core_1.TestCase(new Object({ an: "object" })),
        alsatian_core_1.TestCase([]),
        alsatian_core_1.TestCase(["an", "array"]),
        alsatian_core_1.TestCase(new Array([])),
        alsatian_core_1.TestCase(new Array(["an", "array"])),
        alsatian_core_1.TestCase(new Error()),
        alsatian_core_1.TestCase(new Error("something went wrong")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledWithTests.prototype, "anyObjectArgumentShouldNotBeCalledShouldThrowIfObjectArgument", null);
    __decorate([
        alsatian_core_1.TestCase(undefined),
        alsatian_core_1.TestCase(null),
        alsatian_core_1.TestCase(0),
        alsatian_core_1.TestCase(1),
        alsatian_core_1.TestCase(42),
        alsatian_core_1.TestCase(-42),
        alsatian_core_1.TestCase(""),
        alsatian_core_1.TestCase("test"),
        alsatian_core_1.TestCase(true),
        alsatian_core_1.TestCase(false),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledWithTests.prototype, "anyObjectArgumentShouldThrowIfNonObjectArgument", null);
    __decorate([
        alsatian_core_1.TestCase(undefined),
        alsatian_core_1.TestCase(null),
        alsatian_core_1.TestCase(0),
        alsatian_core_1.TestCase(1),
        alsatian_core_1.TestCase(42),
        alsatian_core_1.TestCase(-42),
        alsatian_core_1.TestCase(""),
        alsatian_core_1.TestCase("test"),
        alsatian_core_1.TestCase(true),
        alsatian_core_1.TestCase(false),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledWithTests.prototype, "anyObjectArgumentShouldThrowWithExpectedValueIfNonObjectArgument", null);
    __decorate([
        alsatian_core_1.TestCase([]),
        alsatian_core_1.TestCase(["an", "array"]),
        alsatian_core_1.TestCase(new Array([])),
        alsatian_core_1.TestCase(new Array(["an", "array"])),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledWithTests.prototype, "anyArrayArgumentShouldNotThrowIfArrayArgument", null);
    __decorate([
        alsatian_core_1.TestCase([]),
        alsatian_core_1.TestCase(["an", "array"]),
        alsatian_core_1.TestCase(new Array([])),
        alsatian_core_1.TestCase(new Array(["an", "array"])),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledWithTests.prototype, "anyArrayArgumentShouldNotBeCalledShouldThrowIfArrayArgument", null);
    __decorate([
        alsatian_core_1.TestCase(undefined),
        alsatian_core_1.TestCase(null),
        alsatian_core_1.TestCase(0),
        alsatian_core_1.TestCase(1),
        alsatian_core_1.TestCase(42),
        alsatian_core_1.TestCase(-42),
        alsatian_core_1.TestCase(new Number(0)),
        alsatian_core_1.TestCase(new Number(1)),
        alsatian_core_1.TestCase(new Number(42)),
        alsatian_core_1.TestCase(new Number(-42)),
        alsatian_core_1.TestCase(""),
        alsatian_core_1.TestCase("test"),
        alsatian_core_1.TestCase(new String("")),
        alsatian_core_1.TestCase(new String("test")),
        alsatian_core_1.TestCase(true),
        alsatian_core_1.TestCase(false),
        alsatian_core_1.TestCase(new Boolean(true)),
        alsatian_core_1.TestCase(new Boolean(false)),
        alsatian_core_1.TestCase({}),
        alsatian_core_1.TestCase({ an: "object" }),
        alsatian_core_1.TestCase(new Object({})),
        alsatian_core_1.TestCase(new Object({ an: "object" })),
        alsatian_core_1.TestCase(new Error()),
        alsatian_core_1.TestCase(new Error("something went wrong")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledWithTests.prototype, "anyArrayArgumentShouldThrowIfNonArrayArgument", null);
    __decorate([
        alsatian_core_1.TestCase(undefined),
        alsatian_core_1.TestCase(null),
        alsatian_core_1.TestCase(0),
        alsatian_core_1.TestCase(1),
        alsatian_core_1.TestCase(42),
        alsatian_core_1.TestCase(-42),
        alsatian_core_1.TestCase(new Number(0)),
        alsatian_core_1.TestCase(new Number(1)),
        alsatian_core_1.TestCase(new Number(42)),
        alsatian_core_1.TestCase(new Number(-42)),
        alsatian_core_1.TestCase(""),
        alsatian_core_1.TestCase("test"),
        alsatian_core_1.TestCase(new String("")),
        alsatian_core_1.TestCase(new String("test")),
        alsatian_core_1.TestCase(true),
        alsatian_core_1.TestCase(false),
        alsatian_core_1.TestCase(new Boolean(true)),
        alsatian_core_1.TestCase(new Boolean(false)),
        alsatian_core_1.TestCase({}),
        alsatian_core_1.TestCase({ an: "object" }),
        alsatian_core_1.TestCase(new Object({})),
        alsatian_core_1.TestCase(new Object({ an: "object" })),
        alsatian_core_1.TestCase(new Error()),
        alsatian_core_1.TestCase(new Error("something went wrong")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledWithTests.prototype, "anyArrayArgumentShouldThrowWithExpectedValueIfNonArrayArgument", null);
    __decorate([
        alsatian_core_1.TestCase(new Error()),
        alsatian_core_1.TestCase(new Error("something went wrong")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledWithTests.prototype, "anyErrorArgumentShouldNotThrowIfErrorArgument", null);
    __decorate([
        alsatian_core_1.TestCase(new Error()),
        alsatian_core_1.TestCase(new Error("something went wrong")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledWithTests.prototype, "anyErrorArgumentShouldNotBeCalledShouldThrowIfErrorArgument", null);
    __decorate([
        alsatian_core_1.TestCase(undefined),
        alsatian_core_1.TestCase(null),
        alsatian_core_1.TestCase(0),
        alsatian_core_1.TestCase(1),
        alsatian_core_1.TestCase(42),
        alsatian_core_1.TestCase(-42),
        alsatian_core_1.TestCase(new Number(0)),
        alsatian_core_1.TestCase(new Number(1)),
        alsatian_core_1.TestCase(new Number(42)),
        alsatian_core_1.TestCase(new Number(-42)),
        alsatian_core_1.TestCase(""),
        alsatian_core_1.TestCase("test"),
        alsatian_core_1.TestCase(new String("")),
        alsatian_core_1.TestCase(new String("test")),
        alsatian_core_1.TestCase(true),
        alsatian_core_1.TestCase(false),
        alsatian_core_1.TestCase(new Boolean(true)),
        alsatian_core_1.TestCase(new Boolean(false)),
        alsatian_core_1.TestCase({}),
        alsatian_core_1.TestCase({ an: "object" }),
        alsatian_core_1.TestCase(new Object({})),
        alsatian_core_1.TestCase(new Object({ an: "object" })),
        alsatian_core_1.TestCase([]),
        alsatian_core_1.TestCase(["an", "array"]),
        alsatian_core_1.TestCase(new Array([])),
        alsatian_core_1.TestCase(new Array(["an", "array"])),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledWithTests.prototype, "anyErrorArgumentShouldThrowIfNonErrorArgument", null);
    __decorate([
        alsatian_core_1.TestCase(undefined),
        alsatian_core_1.TestCase(null),
        alsatian_core_1.TestCase(0),
        alsatian_core_1.TestCase(1),
        alsatian_core_1.TestCase(42),
        alsatian_core_1.TestCase(-42),
        alsatian_core_1.TestCase(new Number(0)),
        alsatian_core_1.TestCase(new Number(1)),
        alsatian_core_1.TestCase(new Number(42)),
        alsatian_core_1.TestCase(new Number(-42)),
        alsatian_core_1.TestCase(""),
        alsatian_core_1.TestCase("test"),
        alsatian_core_1.TestCase(new String("")),
        alsatian_core_1.TestCase(new String("test")),
        alsatian_core_1.TestCase(true),
        alsatian_core_1.TestCase(false),
        alsatian_core_1.TestCase(new Boolean(true)),
        alsatian_core_1.TestCase(new Boolean(false)),
        alsatian_core_1.TestCase({}),
        alsatian_core_1.TestCase({ an: "object" }),
        alsatian_core_1.TestCase(new Object({})),
        alsatian_core_1.TestCase(new Object({ an: "object" })),
        alsatian_core_1.TestCase([]),
        alsatian_core_1.TestCase(["an", "array"]),
        alsatian_core_1.TestCase(new Array([])),
        alsatian_core_1.TestCase(new Array(["an", "array"])),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledWithTests.prototype, "anyErrorArgumentShouldThrowWithExpectedValueIfNonErrorArgument", null);
    __decorate([
        alsatian_core_1.TestCase(0, Number),
        alsatian_core_1.TestCase(1, Number),
        alsatian_core_1.TestCase(42, Number),
        alsatian_core_1.TestCase(-42, Number),
        alsatian_core_1.TestCase(new Number(0), Number),
        alsatian_core_1.TestCase(new Number(1), Number),
        alsatian_core_1.TestCase(new Number(42), Number),
        alsatian_core_1.TestCase(new Number(-42), Number),
        alsatian_core_1.TestCase("", String),
        alsatian_core_1.TestCase("test", String),
        alsatian_core_1.TestCase(new String(""), String),
        alsatian_core_1.TestCase(new String("test"), String),
        alsatian_core_1.TestCase(true, Boolean),
        alsatian_core_1.TestCase(false, Boolean),
        alsatian_core_1.TestCase(new Boolean(true), Boolean),
        alsatian_core_1.TestCase(new Boolean(false), Boolean),
        alsatian_core_1.TestCase({}, Object),
        alsatian_core_1.TestCase({ an: "object" }, Object),
        alsatian_core_1.TestCase(new Object({}), Object),
        alsatian_core_1.TestCase(new Object({ an: "object" }), Object),
        alsatian_core_1.TestCase([], Array),
        alsatian_core_1.TestCase(["an", "array"], Array),
        alsatian_core_1.TestCase(new Array([]), Array),
        alsatian_core_1.TestCase(new Array(["an", "array"]), Array),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Function]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledWithTests.prototype, "expectedAnyArgumentAndAnyTypeArgumentGivenCorrectArgumentsPass", null);
    __decorate([
        alsatian_core_1.TestCase(0, String),
        alsatian_core_1.TestCase(1, Boolean),
        alsatian_core_1.TestCase(42, Object),
        alsatian_core_1.TestCase(-42, Array),
        alsatian_core_1.TestCase(new Number(0), String),
        alsatian_core_1.TestCase(new Number(1), Boolean),
        alsatian_core_1.TestCase(new Number(42), Error),
        alsatian_core_1.TestCase(new Number(-42), Array),
        alsatian_core_1.TestCase("", Number),
        alsatian_core_1.TestCase("test", Boolean),
        alsatian_core_1.TestCase(new String(""), Array),
        alsatian_core_1.TestCase(new String("test"), Error),
        alsatian_core_1.TestCase(true, Number),
        alsatian_core_1.TestCase(false, Error),
        alsatian_core_1.TestCase(new Boolean(true), Array),
        alsatian_core_1.TestCase(new Boolean(false), String),
        alsatian_core_1.TestCase({}, Error),
        alsatian_core_1.TestCase({ an: "object" }, Array),
        alsatian_core_1.TestCase(new Object({}), String),
        alsatian_core_1.TestCase(new Object({ an: "object" }), Number),
        alsatian_core_1.TestCase([], Number),
        alsatian_core_1.TestCase(["an", "array"], String),
        alsatian_core_1.TestCase(new Array([]), Boolean),
        alsatian_core_1.TestCase(new Array(["an", "array"]), Error),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Function]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledWithTests.prototype, "expectedAnyArgumentAndAnyTypeArgumentToThorwGivenIncorrectArgumentTypesPass", null);
    __decorate([
        alsatian_core_1.TestCase(0, Number),
        alsatian_core_1.TestCase(1, Number),
        alsatian_core_1.TestCase(42, Number),
        alsatian_core_1.TestCase(-42, Number),
        alsatian_core_1.TestCase(new Number(0), Number),
        alsatian_core_1.TestCase(new Number(1), Number),
        alsatian_core_1.TestCase(new Number(42), Number),
        alsatian_core_1.TestCase(new Number(-42), Number),
        alsatian_core_1.TestCase("", String),
        alsatian_core_1.TestCase("test", String),
        alsatian_core_1.TestCase(new String(""), String),
        alsatian_core_1.TestCase(new String("test"), String),
        alsatian_core_1.TestCase(true, Boolean),
        alsatian_core_1.TestCase(false, Boolean),
        alsatian_core_1.TestCase(new Boolean(true), Boolean),
        alsatian_core_1.TestCase(new Boolean(false), Boolean),
        alsatian_core_1.TestCase({}, Object),
        alsatian_core_1.TestCase({ an: "object" }, Object),
        alsatian_core_1.TestCase(new Object({}), Object),
        alsatian_core_1.TestCase(new Object({ an: "object" }), Object),
        alsatian_core_1.TestCase([], Array),
        alsatian_core_1.TestCase(["an", "array"], Array),
        alsatian_core_1.TestCase(new Array([]), Array),
        alsatian_core_1.TestCase(new Array(["an", "array"]), Array),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Function]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledWithTests.prototype, "expectedAnyTypeArgumentAndAnyArgumentGivenCorrectArgumentsPass", null);
    __decorate([
        alsatian_core_1.TestCase(0, String),
        alsatian_core_1.TestCase(1, Boolean),
        alsatian_core_1.TestCase(42, Object),
        alsatian_core_1.TestCase(-42, Array),
        alsatian_core_1.TestCase(new Number(0), String),
        alsatian_core_1.TestCase(new Number(1), Boolean),
        alsatian_core_1.TestCase(new Number(42), Error),
        alsatian_core_1.TestCase(new Number(-42), Array),
        alsatian_core_1.TestCase("", Number),
        alsatian_core_1.TestCase("test", Boolean),
        alsatian_core_1.TestCase(new String(""), Array),
        alsatian_core_1.TestCase(new String("test"), Error),
        alsatian_core_1.TestCase(true, Number),
        alsatian_core_1.TestCase(false, Error),
        alsatian_core_1.TestCase(new Boolean(true), Array),
        alsatian_core_1.TestCase(new Boolean(false), String),
        alsatian_core_1.TestCase({}, Error),
        alsatian_core_1.TestCase({ an: "object" }, Array),
        alsatian_core_1.TestCase(new Object({}), String),
        alsatian_core_1.TestCase(new Object({ an: "object" }), Number),
        alsatian_core_1.TestCase([], Number),
        alsatian_core_1.TestCase(["an", "array"], String),
        alsatian_core_1.TestCase(new Array([]), Boolean),
        alsatian_core_1.TestCase(new Array(["an", "array"]), Error),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Function]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledWithTests.prototype, "expectedAnyTypeArgumentAndAnyArgumentToThorwGivenIncorrectArgumentTypesPass", null);
    __decorate([
        alsatian_core_1.TestCase(0, Number),
        alsatian_core_1.TestCase(1, Number),
        alsatian_core_1.TestCase(42, Number),
        alsatian_core_1.TestCase(-42, Number),
        alsatian_core_1.TestCase(new Number(0), Number),
        alsatian_core_1.TestCase(new Number(1), Number),
        alsatian_core_1.TestCase(new Number(42), Number),
        alsatian_core_1.TestCase(new Number(-42), Number),
        alsatian_core_1.TestCase("", String),
        alsatian_core_1.TestCase("test", String),
        alsatian_core_1.TestCase(new String(""), String),
        alsatian_core_1.TestCase(new String("test"), String),
        alsatian_core_1.TestCase(true, Boolean),
        alsatian_core_1.TestCase(false, Boolean),
        alsatian_core_1.TestCase(new Boolean(true), Boolean),
        alsatian_core_1.TestCase(new Boolean(false), Boolean),
        alsatian_core_1.TestCase({}, Object),
        alsatian_core_1.TestCase({ an: "object" }, Object),
        alsatian_core_1.TestCase(new Object({}), Object),
        alsatian_core_1.TestCase(new Object({ an: "object" }), Object),
        alsatian_core_1.TestCase([], Array),
        alsatian_core_1.TestCase(["an", "array"], Array),
        alsatian_core_1.TestCase(new Array([]), Array),
        alsatian_core_1.TestCase(new Array(["an", "array"]), Array),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Function]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledWithTests.prototype, "expectedExactArgumentAndAnyTypeArgumentGivenCorrectArgumentsPass", null);
    __decorate([
        alsatian_core_1.TestCase(0, String),
        alsatian_core_1.TestCase(1, Boolean),
        alsatian_core_1.TestCase(42, Object),
        alsatian_core_1.TestCase(-42, Array),
        alsatian_core_1.TestCase(new Number(0), String),
        alsatian_core_1.TestCase(new Number(1), Boolean),
        alsatian_core_1.TestCase(new Number(42), Error),
        alsatian_core_1.TestCase(new Number(-42), Array),
        alsatian_core_1.TestCase("", Number),
        alsatian_core_1.TestCase("test", Boolean),
        alsatian_core_1.TestCase(new String(""), Array),
        alsatian_core_1.TestCase(new String("test"), Error),
        alsatian_core_1.TestCase(true, Number),
        alsatian_core_1.TestCase(false, Error),
        alsatian_core_1.TestCase(new Boolean(true), Array),
        alsatian_core_1.TestCase(new Boolean(false), String),
        alsatian_core_1.TestCase({}, Error),
        alsatian_core_1.TestCase({ an: "object" }, Array),
        alsatian_core_1.TestCase(new Object({}), String),
        alsatian_core_1.TestCase(new Object({ an: "object" }), Number),
        alsatian_core_1.TestCase([], Number),
        alsatian_core_1.TestCase(["an", "array"], String),
        alsatian_core_1.TestCase(new Array([]), Boolean),
        alsatian_core_1.TestCase(new Array(["an", "array"]), Error),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Function]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledWithTests.prototype, "expectedExactArgumentAndAnyTypeArgumentToThorwGivenIncorrectArgumentTypesPass", null);
    __decorate([
        alsatian_core_1.TestCase(0, Number),
        alsatian_core_1.TestCase(1, Number),
        alsatian_core_1.TestCase(42, Number),
        alsatian_core_1.TestCase(-42, Number),
        alsatian_core_1.TestCase(new Number(0), Number),
        alsatian_core_1.TestCase(new Number(1), Number),
        alsatian_core_1.TestCase(new Number(42), Number),
        alsatian_core_1.TestCase(new Number(-42), Number),
        alsatian_core_1.TestCase("", String),
        alsatian_core_1.TestCase("test", String),
        alsatian_core_1.TestCase(new String(""), String),
        alsatian_core_1.TestCase(new String("test"), String),
        alsatian_core_1.TestCase(true, Boolean),
        alsatian_core_1.TestCase(false, Boolean),
        alsatian_core_1.TestCase(new Boolean(true), Boolean),
        alsatian_core_1.TestCase(new Boolean(false), Boolean),
        alsatian_core_1.TestCase({}, Object),
        alsatian_core_1.TestCase({ an: "object" }, Object),
        alsatian_core_1.TestCase(new Object({}), Object),
        alsatian_core_1.TestCase(new Object({ an: "object" }), Object),
        alsatian_core_1.TestCase([], Array),
        alsatian_core_1.TestCase(["an", "array"], Array),
        alsatian_core_1.TestCase(new Array([]), Array),
        alsatian_core_1.TestCase(new Array(["an", "array"]), Array),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Function]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledWithTests.prototype, "expectedAnyTypeArgumentAndExactArgumentGivenCorrectArgumentsPass", null);
    __decorate([
        alsatian_core_1.TestCase(0, String),
        alsatian_core_1.TestCase(1, Boolean),
        alsatian_core_1.TestCase(42, Object),
        alsatian_core_1.TestCase(-42, Array),
        alsatian_core_1.TestCase(new Number(0), String),
        alsatian_core_1.TestCase(new Number(1), Boolean),
        alsatian_core_1.TestCase(new Number(42), Error),
        alsatian_core_1.TestCase(new Number(-42), Array),
        alsatian_core_1.TestCase("", Number),
        alsatian_core_1.TestCase("test", Boolean),
        alsatian_core_1.TestCase(new String(""), Array),
        alsatian_core_1.TestCase(new String("test"), Error),
        alsatian_core_1.TestCase(true, Number),
        alsatian_core_1.TestCase(false, Error),
        alsatian_core_1.TestCase(new Boolean(true), Array),
        alsatian_core_1.TestCase(new Boolean(false), String),
        alsatian_core_1.TestCase({}, Error),
        alsatian_core_1.TestCase({ an: "object" }, Array),
        alsatian_core_1.TestCase(new Object({}), String),
        alsatian_core_1.TestCase(new Object({ an: "object" }), Number),
        alsatian_core_1.TestCase([], Number),
        alsatian_core_1.TestCase(["an", "array"], String),
        alsatian_core_1.TestCase(new Array([]), Boolean),
        alsatian_core_1.TestCase(new Array(["an", "array"]), Error),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Function]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledWithTests.prototype, "expectedAnyTypeArgumentAndExactArgumentToThorwGivenIncorrectArgumentTypesPass", null);
    __decorate([
        alsatian_core_1.TestCase(0),
        alsatian_core_1.TestCase(1),
        alsatian_core_1.TestCase(42),
        alsatian_core_1.TestCase(-42),
        alsatian_core_1.TestCase(new Number(0)),
        alsatian_core_1.TestCase(new Number(1)),
        alsatian_core_1.TestCase(new Number(42)),
        alsatian_core_1.TestCase(new Number(-42)),
        alsatian_core_1.TestCase(""),
        alsatian_core_1.TestCase("test"),
        alsatian_core_1.TestCase(new String("")),
        alsatian_core_1.TestCase(new String("test")),
        alsatian_core_1.TestCase(true),
        alsatian_core_1.TestCase(false),
        alsatian_core_1.TestCase(new Boolean(true)),
        alsatian_core_1.TestCase(new Boolean(false)),
        alsatian_core_1.TestCase({}),
        alsatian_core_1.TestCase({ an: "object" }),
        alsatian_core_1.TestCase(new Object({})),
        alsatian_core_1.TestCase(new Object({ an: "object" })),
        alsatian_core_1.TestCase([]),
        alsatian_core_1.TestCase(["an", "array"]),
        alsatian_core_1.TestCase(new Array([])),
        alsatian_core_1.TestCase(new Array(["an", "array"])),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledWithTests.prototype, "expectedExactArgumentAndAnyArgumentGivenCorrectArgumentsPass", null);
    __decorate([
        alsatian_core_1.TestCase(0),
        alsatian_core_1.TestCase(1),
        alsatian_core_1.TestCase(42),
        alsatian_core_1.TestCase(-42),
        alsatian_core_1.TestCase(new Number(0)),
        alsatian_core_1.TestCase(new Number(1)),
        alsatian_core_1.TestCase(new Number(42)),
        alsatian_core_1.TestCase(new Number(-42)),
        alsatian_core_1.TestCase(""),
        alsatian_core_1.TestCase("test"),
        alsatian_core_1.TestCase(new String("")),
        alsatian_core_1.TestCase(new String("test")),
        alsatian_core_1.TestCase(true),
        alsatian_core_1.TestCase(false),
        alsatian_core_1.TestCase(new Boolean(true)),
        alsatian_core_1.TestCase(new Boolean(false)),
        alsatian_core_1.TestCase({}),
        alsatian_core_1.TestCase({ an: "object" }),
        alsatian_core_1.TestCase(new Object({})),
        alsatian_core_1.TestCase(new Object({ an: "object" })),
        alsatian_core_1.TestCase([]),
        alsatian_core_1.TestCase(["an", "array"]),
        alsatian_core_1.TestCase(new Array([])),
        alsatian_core_1.TestCase(new Array(["an", "array"])),
        alsatian_core_1.TestCase(new Array(["an", "array"])),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledWithTests.prototype, "expectedAnyArgumentAndExactArgumentGivenCorrectArgumentsPass", null);
    __decorate([
        alsatian_core_1.TestCase(1),
        alsatian_core_1.TestCase(2),
        alsatian_core_1.TestCase(42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledWithTests.prototype, "calledExactlyCorrectNumberOfTimesWithCorrectArgumentsPasses", null);
    __decorate([
        alsatian_core_1.TestCase(1),
        alsatian_core_1.TestCase(2),
        alsatian_core_1.TestCase(42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledWithTests.prototype, "calledExactlyCorrectNumberOfTimesWithCorrectAnyArgumentsPasses", null);
    __decorate([
        alsatian_core_1.TestCase(1),
        alsatian_core_1.TestCase(2),
        alsatian_core_1.TestCase(42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledWithTests.prototype, "calledExactlyCorrectNumberOfTimesWithCorrectAnyTypeArgumentsPasses", null);
    __decorate([
        alsatian_core_1.TestCase(2),
        alsatian_core_1.TestCase(3),
        alsatian_core_1.TestCase(42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledWithTests.prototype, "calledExactlyCorrectNumberOfTimesWithWrongArgumentsThrowsError", null);
    __decorate([
        alsatian_core_1.TestCase(2),
        alsatian_core_1.TestCase(3),
        alsatian_core_1.TestCase(42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledWithTests.prototype, "calledExactlyCorrectNumberOfTimesWithRightArgumentsInTheWrongOrderThrowsError", null);
    __decorate([
        alsatian_core_1.TestCase(1, 2),
        alsatian_core_1.TestCase(2, 1),
        alsatian_core_1.TestCase(42, 10),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledWithTests.prototype, "calledAnythingButCorrectNumberOfTimesWithCorrectArgumentsPasses", null);
    __decorate([
        alsatian_core_1.TestCase(1, 2),
        alsatian_core_1.TestCase(2, 1),
        alsatian_core_1.TestCase(42, 10),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledWithTests.prototype, "calledAnythingButCorrectNumberOfTimesWithCorrectAnyArgumentsPasses", null);
    __decorate([
        alsatian_core_1.TestCase(1, 2),
        alsatian_core_1.TestCase(2, 1),
        alsatian_core_1.TestCase(42, 10),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledWithTests.prototype, "calledAnythingButCorrectNumberOfTimesWithCorrectAnyTypeArgumentsPasses", null);
    __decorate([
        alsatian_core_1.TestCase(2),
        alsatian_core_1.TestCase(3),
        alsatian_core_1.TestCase(42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledWithTests.prototype, "calledAnythingButCorrectNumberOfTimesWithExtraCallWithWrongArgumentsThrowsError", null);
    __decorate([
        alsatian_core_1.TestCase(2),
        alsatian_core_1.TestCase(3),
        alsatian_core_1.TestCase(42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledWithTests.prototype, "calledAnythingButCorrectNumberOfTimesWithExtraCallWithArgumentsInWrongOrderThrowsError", null);
    __decorate([
        alsatian_core_1.TestCase(1, 2),
        alsatian_core_1.TestCase(2, 5),
        alsatian_core_1.TestCase(42, 100),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledWithTests.prototype, "calledGreaterThanCorrectNumberOfTimesWithCorrectArgumentsPasses", null);
    __decorate([
        alsatian_core_1.TestCase(1, 2),
        alsatian_core_1.TestCase(2, 5),
        alsatian_core_1.TestCase(42, 100),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledWithTests.prototype, "calledGreaterThanCorrectNumberOfTimesWithCorrectAnyArgumentsPasses", null);
    __decorate([
        alsatian_core_1.TestCase(1, 2),
        alsatian_core_1.TestCase(2, 5),
        alsatian_core_1.TestCase(42, 100),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledWithTests.prototype, "calledGreaterThanCorrectNumberOfTimesWithCorrectAnyTypeArgumentsPasses", null);
    __decorate([
        alsatian_core_1.TestCase(1),
        alsatian_core_1.TestCase(2),
        alsatian_core_1.TestCase(42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledWithTests.prototype, "calledGreaterThanCorrectNumberOfTimesWithOneCallWithWrongArgumentsThrowsError", null);
    __decorate([
        alsatian_core_1.TestCase(1),
        alsatian_core_1.TestCase(2),
        alsatian_core_1.TestCase(42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledWithTests.prototype, "calledGreaterThanCorrectNumberOfTimesWithExtraCallWithArgumentsInWrongOrderThrowsError", null);
    __decorate([
        alsatian_core_1.TestCase(2, 1),
        alsatian_core_1.TestCase(5, 2),
        alsatian_core_1.TestCase(100, 42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledWithTests.prototype, "calledLessThanCorrectNumberOfTimesWithCorrectArgumentsPasses", null);
    __decorate([
        alsatian_core_1.TestCase(2, 1),
        alsatian_core_1.TestCase(5, 2),
        alsatian_core_1.TestCase(100, 42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledWithTests.prototype, "calledLessThanCorrectNumberOfTimesWithCorrectAnyArgumentsPasses", null);
    __decorate([
        alsatian_core_1.TestCase(2, 1),
        alsatian_core_1.TestCase(5, 2),
        alsatian_core_1.TestCase(100, 42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledWithTests.prototype, "calledLessThanCorrectNumberOfTimesWithCorrectAnyTypeArgumentsPasses", null);
    __decorate([
        alsatian_core_1.TestCase(3),
        alsatian_core_1.TestCase(4),
        alsatian_core_1.TestCase(42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledWithTests.prototype, "calledLessThanCorrectNumberOfTimesWithOneCallWithWrongArgumentsPasses", null);
    __decorate([
        alsatian_core_1.TestCase(3),
        alsatian_core_1.TestCase(4),
        alsatian_core_1.TestCase(42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledWithTests.prototype, "calledLessThanCorrectNumberOfTimesWithExtraCallWithArgumentsInWrongOrderPasses", null);
    __decorate([
        alsatian_core_1.TestCase(1),
        alsatian_core_1.TestCase(2),
        alsatian_core_1.TestCase(42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledWithTests.prototype, "calledTheSameTimesWhenExpectedLessThanThrowsError", null);
    __decorate([
        alsatian_core_1.TestCase(1),
        alsatian_core_1.TestCase(2),
        alsatian_core_1.TestCase(42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], ToHaveBeenCalledWithTests.prototype, "calledOneMoreTimesWhenExpectedLessThanThrowsError", null);
    return ToHaveBeenCalledWithTests;
}());
exports.ToHaveBeenCalledWithTests = ToHaveBeenCalledWithTests;
//# sourceMappingURL=to-have-been-called-with.spec.js.map