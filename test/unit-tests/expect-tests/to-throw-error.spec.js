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
var error_match_error_1 = require("../../../core/errors/error-match-error");
var ToThrowErrorTests = /** @class */ (function () {
    function ToThrowErrorTests() {
    }
    ToThrowErrorTests.prototype.errorNotThrownWhenExpectedShouldThrowError = function () {
        var nonThrowFunction = function () { };
        alsatian_core_1.Expect(function () {
            return alsatian_core_1.Expect(nonThrowFunction).toThrowError(Error, "error message");
        }).toThrowError(error_match_error_1.ErrorMatchError, 'Expected an error with message "error message" and type Error to have been thrown, but it wasn\'t.');
    };
    ToThrowErrorTests.prototype.errorThrownWhenExpectedPasses = function () {
        var throwFunction = function () {
            throw new Error("error message");
        };
        alsatian_core_1.Expect(function () {
            return alsatian_core_1.Expect(throwFunction).toThrowError(Error, "error message");
        }).not.toThrow();
    };
    ToThrowErrorTests.prototype.differentErrorThrownWhenNoneExpectedFailsWithCorrectMessage = function (expectedErrorType, expectedErrorMessage) {
        var throwWrongErrorFunction = function () {
            throw new RangeError("another message");
        };
        alsatian_core_1.Expect(function () {
            return alsatian_core_1.Expect(throwWrongErrorFunction).toThrowError(expectedErrorType, expectedErrorMessage);
        }).toThrowError(error_match_error_1.ErrorMatchError, 'Expected an error with message "' +
            expectedErrorMessage +
            '" and type ' +
            expectedErrorType.name +
            " to have been thrown, but it wasn't.");
    };
    ToThrowErrorTests.prototype.differentTypeErrorThrownWhenNoneExpectedFailsWithCorrectMessage = function (expectedErrorType, actualErrorType) {
        var throwWrongTypeFunction = function () {
            throw new actualErrorType("error message");
        };
        alsatian_core_1.Expect(function () {
            return alsatian_core_1.Expect(throwWrongTypeFunction).toThrowError(expectedErrorType, "error message");
        }).toThrowError(error_match_error_1.ErrorMatchError, "Expected an error of type " +
            expectedErrorType.name +
            " to have been thrown, but " +
            actualErrorType.name +
            " was thrown instead.");
    };
    ToThrowErrorTests.prototype.differentMessageErrorThrownWhenNoneExpectedFailsWithCorrectMessage = function (expectedErrorMessage) {
        var throwWrongMessageFunction = function () {
            throw new Error("another message");
        };
        alsatian_core_1.Expect(function () {
            return alsatian_core_1.Expect(throwWrongMessageFunction).toThrowError(Error, expectedErrorMessage);
        }).toThrowError(error_match_error_1.ErrorMatchError, 'Expected an error with message "' +
            expectedErrorMessage +
            "\" to have been thrown, but it wasn't.");
    };
    ToThrowErrorTests.prototype.errorThrownWhenNoneExpectedShouldGiveCorrectMessage = function () {
        var throwFunction = function () {
            throw new Error("error message");
        };
        alsatian_core_1.Expect(function () {
            return alsatian_core_1.Expect(throwFunction).not.toThrowError(Error, "error message");
        }).toThrowError(error_match_error_1.ErrorMatchError, 'Expected an error with message "error message" and type Error to not have been thrown, but it was.');
    };
    ToThrowErrorTests.prototype.noErrorThrownWhenNoneExpectedPasses = function () {
        var nonThrowFunction = function () { };
        alsatian_core_1.Expect(function () {
            return alsatian_core_1.Expect(nonThrowFunction).not.toThrowError(Error, "error message");
        }).not.toThrow();
    };
    ToThrowErrorTests.prototype.differentErrorThrownWhenNoneExpectedPasses = function () {
        var throwWrongErrorFunction = function () {
            throw new RangeError("another message");
        };
        alsatian_core_1.Expect(function () {
            return alsatian_core_1.Expect(throwWrongErrorFunction).not.toThrowError(Error, "error message");
        }).not.toThrow();
    };
    ToThrowErrorTests.prototype.differentTypeErrorThrownWhenNoneExpectedPasses = function () {
        var throwWrongTypeFunction = function () {
            throw new RangeError("error message");
        };
        alsatian_core_1.Expect(function () {
            return alsatian_core_1.Expect(throwWrongTypeFunction).not.toThrowError(TypeError, "error message");
        }).not.toThrow();
    };
    ToThrowErrorTests.prototype.differentMessageErrorThrownWhenNoneExpectedPasses = function () {
        var throwWrongMessageFunction = function () {
            throw new Error("another message");
        };
        alsatian_core_1.Expect(function () {
            return alsatian_core_1.Expect(throwWrongMessageFunction).not.toThrowError(Error, "error message");
        }).not.toThrow();
    };
    ToThrowErrorTests.prototype.checkingWhetherNonFunctionThrowsErrorShouldThrow = function (actualValue) {
        var EXPECT = alsatian_core_1.Expect(function () { });
        EXPECT._actualValue = actualValue;
        alsatian_core_1.Expect(function () { return EXPECT.toThrowError(Error, ""); }).toThrowError(TypeError, "toThrowError requires value passed in to Expect to be a function.");
    };
    ToThrowErrorTests.prototype.checkingWhetherNonFunctionDoesNotThrowErrorShouldThrow = function (actualValue) {
        var EXPECT = alsatian_core_1.Expect(function () { });
        EXPECT._actualValue = actualValue;
        alsatian_core_1.Expect(function () { return EXPECT.not.toThrowError(Error, ""); }).toThrowError(TypeError, "toThrowError requires value passed in to Expect to be a function.");
    };
    ToThrowErrorTests.prototype.actualValueAndShouldMatchShouldBeSetToErrorWasNotThrown = function () {
        var errorMatchError;
        try {
            alsatian_core_1.Expect(function () { }).toThrowError(Error, "this error won't be thrown.");
        }
        catch (error) {
            errorMatchError = error;
        }
        alsatian_core_1.Expect(errorMatchError).toBeDefined();
        alsatian_core_1.Expect(errorMatchError).not.toBeNull();
        alsatian_core_1.Expect(errorMatchError.actual).toBe("error was not thrown.");
    };
    ToThrowErrorTests.prototype.actualValueAndShouldMatchAndExpectedErrorShouldBeSetToErrorWasNotThrown = function (expectedErrorType, expectedErrorMessage) {
        var errorMatchError;
        try {
            alsatian_core_1.Expect(function () { }).toThrowError(expectedErrorType, expectedErrorMessage);
        }
        catch (error) {
            errorMatchError = error;
        }
        alsatian_core_1.Expect(errorMatchError).toBeDefined();
        alsatian_core_1.Expect(errorMatchError).not.toBeNull();
        alsatian_core_1.Expect(errorMatchError.actual).toBe("error was not thrown.");
    };
    ToThrowErrorTests.prototype.actualValueAndShouldMatchAndExpectedErrorShouldBeSetToWrongErrorWasThrown = function (expectedErrorType, expectedErrorMessage, actualErrorType, actualErrorMessage) {
        var errorMatchError;
        try {
            alsatian_core_1.Expect(function () {
                throw new actualErrorType(actualErrorMessage);
            }).toThrowError(expectedErrorType, expectedErrorMessage);
        }
        catch (error) {
            errorMatchError = error;
        }
        alsatian_core_1.Expect(errorMatchError).toBeDefined();
        alsatian_core_1.Expect(errorMatchError).not.toBeNull();
        alsatian_core_1.Expect(errorMatchError.actual).toBe(actualErrorType.name + " error was thrown with message \"" + actualErrorMessage + "\".");
    };
    ToThrowErrorTests.prototype.actualValueAndShouldNotMatchAndExpectedErrorShouldBeSetToWrongErrorWasThrown = function (expectedErrorType, expectedErrorMessage) {
        var errorMatchError;
        try {
            alsatian_core_1.Expect(function () {
                throw new expectedErrorType(expectedErrorMessage);
            }).not.toThrowError(expectedErrorType, expectedErrorMessage);
        }
        catch (error) {
            errorMatchError = error;
        }
        alsatian_core_1.Expect(errorMatchError).toBeDefined();
        alsatian_core_1.Expect(errorMatchError).not.toBeNull();
        alsatian_core_1.Expect(errorMatchError.actual).toBe(expectedErrorType.name + " error was thrown with message \"" + expectedErrorMessage + "\".");
    };
    ToThrowErrorTests.prototype.expectedValueAndShouldMatchShouldBeSetToErrorShouldBeThrown = function (expectedErrorType, expectedErrorMessage) {
        var errorMatchError;
        try {
            alsatian_core_1.Expect(function () { }).toThrowError(expectedErrorType, expectedErrorMessage);
        }
        catch (error) {
            errorMatchError = error;
        }
        var errorName = expectedErrorType.name;
        alsatian_core_1.Expect(errorMatchError).toBeDefined();
        alsatian_core_1.Expect(errorMatchError).not.toBeNull();
        alsatian_core_1.Expect(errorMatchError.expected).toBe(errorName + " error to be thrown with message \"" + expectedErrorMessage + "\".");
    };
    ToThrowErrorTests.prototype.expectedValueAndShouldNotMatchShouldBeSetToErrorShouldNotBeThrown = function (expectedErrorType, expectedErrorMessage) {
        var errorMatchError;
        try {
            alsatian_core_1.Expect(function () {
                throw new expectedErrorType(expectedErrorMessage);
            }).not.toThrowError(expectedErrorType, expectedErrorMessage);
        }
        catch (error) {
            errorMatchError = error;
        }
        var errorName = expectedErrorType.name;
        alsatian_core_1.Expect(errorMatchError).toBeDefined();
        alsatian_core_1.Expect(errorMatchError).not.toBeNull();
        alsatian_core_1.Expect(errorMatchError.expected).toBe(errorName + " error not to be thrown with message \"" + expectedErrorMessage + "\".");
    };
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToThrowErrorTests.prototype, "errorNotThrownWhenExpectedShouldThrowError", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToThrowErrorTests.prototype, "errorThrownWhenExpectedPasses", null);
    __decorate([
        alsatian_core_1.TestCase(EvalError, "something went wrong"),
        alsatian_core_1.TestCase(ReferenceError, "A much worse thing happened!"),
        alsatian_core_1.TestCase(SyntaxError, "THE END IS NIGH"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function, String]),
        __metadata("design:returntype", void 0)
    ], ToThrowErrorTests.prototype, "differentErrorThrownWhenNoneExpectedFailsWithCorrectMessage", null);
    __decorate([
        alsatian_core_1.TestCase(EvalError, SyntaxError),
        alsatian_core_1.TestCase(ReferenceError, EvalError),
        alsatian_core_1.TestCase(SyntaxError, ReferenceError),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function, Function]),
        __metadata("design:returntype", void 0)
    ], ToThrowErrorTests.prototype, "differentTypeErrorThrownWhenNoneExpectedFailsWithCorrectMessage", null);
    __decorate([
        alsatian_core_1.TestCase("something went wrong"),
        alsatian_core_1.TestCase("A much worse thing happened!"),
        alsatian_core_1.TestCase("THE END IS NIGH"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], ToThrowErrorTests.prototype, "differentMessageErrorThrownWhenNoneExpectedFailsWithCorrectMessage", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToThrowErrorTests.prototype, "errorThrownWhenNoneExpectedShouldGiveCorrectMessage", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToThrowErrorTests.prototype, "noErrorThrownWhenNoneExpectedPasses", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToThrowErrorTests.prototype, "differentErrorThrownWhenNoneExpectedPasses", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToThrowErrorTests.prototype, "differentTypeErrorThrownWhenNoneExpectedPasses", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToThrowErrorTests.prototype, "differentMessageErrorThrownWhenNoneExpectedPasses", null);
    __decorate([
        alsatian_core_1.TestCase(undefined),
        alsatian_core_1.TestCase(null),
        alsatian_core_1.TestCase(""),
        alsatian_core_1.TestCase("something"),
        alsatian_core_1.TestCase(0),
        alsatian_core_1.TestCase(1),
        alsatian_core_1.TestCase(42),
        alsatian_core_1.TestCase({}),
        alsatian_core_1.TestCase({ an: "object" }),
        alsatian_core_1.TestCase([]),
        alsatian_core_1.TestCase(["an", "array"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ToThrowErrorTests.prototype, "checkingWhetherNonFunctionThrowsErrorShouldThrow", null);
    __decorate([
        alsatian_core_1.TestCase(undefined),
        alsatian_core_1.TestCase(null),
        alsatian_core_1.TestCase(""),
        alsatian_core_1.TestCase("something"),
        alsatian_core_1.TestCase(0),
        alsatian_core_1.TestCase(1),
        alsatian_core_1.TestCase(42),
        alsatian_core_1.TestCase({}),
        alsatian_core_1.TestCase({ an: "object" }),
        alsatian_core_1.TestCase([]),
        alsatian_core_1.TestCase(["an", "array"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ToThrowErrorTests.prototype, "checkingWhetherNonFunctionDoesNotThrowErrorShouldThrow", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToThrowErrorTests.prototype, "actualValueAndShouldMatchShouldBeSetToErrorWasNotThrown", null);
    __decorate([
        alsatian_core_1.TestCase(EvalError, "something went wrong"),
        alsatian_core_1.TestCase(ReferenceError, "A much worse thing happened!"),
        alsatian_core_1.TestCase(SyntaxError, "THE END IS NIGH"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function, String]),
        __metadata("design:returntype", void 0)
    ], ToThrowErrorTests.prototype, "actualValueAndShouldMatchAndExpectedErrorShouldBeSetToErrorWasNotThrown", null);
    __decorate([
        alsatian_core_1.TestCase(EvalError, "something went wrong", ReferenceError, "A much worse thing happened!"),
        alsatian_core_1.TestCase(ReferenceError, "A much worse thing happened!", SyntaxError, "THE END IS NIGH"),
        alsatian_core_1.TestCase(SyntaxError, "THE END IS NIGH", EvalError, "something went wrong"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function, String, Function, String]),
        __metadata("design:returntype", void 0)
    ], ToThrowErrorTests.prototype, "actualValueAndShouldMatchAndExpectedErrorShouldBeSetToWrongErrorWasThrown", null);
    __decorate([
        alsatian_core_1.TestCase(EvalError, "something went wrong"),
        alsatian_core_1.TestCase(ReferenceError, "A much worse thing happened!"),
        alsatian_core_1.TestCase(SyntaxError, "THE END IS NIGH"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function, String]),
        __metadata("design:returntype", void 0)
    ], ToThrowErrorTests.prototype, "actualValueAndShouldNotMatchAndExpectedErrorShouldBeSetToWrongErrorWasThrown", null);
    __decorate([
        alsatian_core_1.TestCase(EvalError, "something went wrong"),
        alsatian_core_1.TestCase(ReferenceError, "A much worse thing happened!"),
        alsatian_core_1.TestCase(SyntaxError, "THE END IS NIGH"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function, String]),
        __metadata("design:returntype", void 0)
    ], ToThrowErrorTests.prototype, "expectedValueAndShouldMatchShouldBeSetToErrorShouldBeThrown", null);
    __decorate([
        alsatian_core_1.TestCase(EvalError, "something went wrong"),
        alsatian_core_1.TestCase(ReferenceError, "A much worse thing happened!"),
        alsatian_core_1.TestCase(SyntaxError, "THE END IS NIGH"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function, String]),
        __metadata("design:returntype", void 0)
    ], ToThrowErrorTests.prototype, "expectedValueAndShouldNotMatchShouldBeSetToErrorShouldNotBeThrown", null);
    return ToThrowErrorTests;
}());
exports.ToThrowErrorTests = ToThrowErrorTests;
//# sourceMappingURL=to-throw-error.spec.js.map