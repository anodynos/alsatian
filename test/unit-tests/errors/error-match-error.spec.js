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
var ErrorMatchErrorTests = /** @class */ (function () {
    function ErrorMatchErrorTests() {
    }
    ErrorMatchErrorTests.prototype.noActualErrorShouldGiveCorrectMessage = function () {
        var error = new error_match_error_1.ErrorMatchError(null, true);
        alsatian_core_1.Expect(error.message).toBe("Expected an error to be thrown but no errors were thrown.");
    };
    ErrorMatchErrorTests.prototype.actualErrorThrownWhenNoneExpectedShouldGiveCorrectMessage = function () {
        var error = new error_match_error_1.ErrorMatchError(new Error(), false);
        alsatian_core_1.Expect(error.message).toBe("Expected an error not to be thrown but an error was thrown.");
    };
    ErrorMatchErrorTests.prototype.actualErrorIsNotCorrectTypeGivesCorrectMessage = function (actualErrorType, expectedErrorType) {
        var error = new error_match_error_1.ErrorMatchError(new actualErrorType(), true, expectedErrorType);
        alsatian_core_1.Expect(error.message).toBe("Expected an error of type " + expectedErrorType.name + " " +
            ("to have been thrown, but " + actualErrorType.name + " was thrown instead."));
    };
    ErrorMatchErrorTests.prototype.actualErrorIsMatchingTypeButShouldntBeGivesCorrectMessage = function (errorType) {
        var error = new error_match_error_1.ErrorMatchError(new errorType(), false, errorType);
        alsatian_core_1.Expect(error.message).toBe("Expected an error of type " +
            errorType.name +
            " to not have been thrown, but it was.");
    };
    ErrorMatchErrorTests.prototype.actualErrorHasIncorrectMessageGivesCorrectMessage = function (message) {
        var error = new error_match_error_1.ErrorMatchError(new Error(), true, null, message);
        alsatian_core_1.Expect(error.message).toBe('Expected an error with message "' +
            message +
            "\" to have been thrown, but it wasn't.");
    };
    ErrorMatchErrorTests.prototype.actualErrorHasMatchingMessageButShouldntBeGivesCorrectMessage = function (message) {
        var error = new error_match_error_1.ErrorMatchError(new Error(message), false, null, message);
        alsatian_core_1.Expect(error.message).toBe('Expected an error with message "' +
            message +
            '" to not have been thrown, but it was.');
    };
    ErrorMatchErrorTests.prototype.actualErrorHasIncorrectTypeAndMessageGivesCorrectMessage = function (expectedErrorType, message) {
        var error = new error_match_error_1.ErrorMatchError(new Error(), true, expectedErrorType, message);
        alsatian_core_1.Expect(error.message).toBe("Expected an error with message \"" + message + "\" " +
            ("and type " + expectedErrorType.name + " to have been thrown, but it wasn't."));
    };
    ErrorMatchErrorTests.prototype.actualErrorHasMatchingMessageAndTypeButShouldntBeGivesCorrectMessage = function (expectedErrorType, message) {
        var error = new error_match_error_1.ErrorMatchError(new expectedErrorType(message), false, expectedErrorType, message);
        alsatian_core_1.Expect(error.message).toBe("Expected an error with message \"" + message + "\" " +
            ("and type " + expectedErrorType.name + " to not have been thrown, but it was."));
    };
    ErrorMatchErrorTests.prototype.actualValueAndShouldMatchShouldBeSetToErrorWasNotThrown = function () {
        var error = new error_match_error_1.ErrorMatchError(undefined, true);
        alsatian_core_1.Expect(error.actual).toBe("error was not thrown.");
    };
    ErrorMatchErrorTests.prototype.actualValueAndShouldNotMatchShouldBeSetToErrorWasThrown = function (actualErrorType, actualErrorMessage) {
        var error = new error_match_error_1.ErrorMatchError(new actualErrorType(actualErrorMessage), false);
        alsatian_core_1.Expect(error.actual).toBe(actualErrorType.name + " error was thrown with message \"" + actualErrorMessage + "\".");
    };
    ErrorMatchErrorTests.prototype.expectedValueAndShouldMatchShouldBeSetToErrorToBeThrown = function () {
        var error = new error_match_error_1.ErrorMatchError(undefined, true);
        alsatian_core_1.Expect(error.expected).toBe("error to be thrown.");
    };
    ErrorMatchErrorTests.prototype.expectedValueAndShouldNotMatchShouldBeSetToErrorNotToBeThrown = function () {
        var error = new error_match_error_1.ErrorMatchError(new Error(), false);
        alsatian_core_1.Expect(error.expected).toBe("error not to be thrown.");
    };
    ErrorMatchErrorTests.prototype.actualValueAndShouldMatchAndExpectedErrorShouldBeSetToErrorWasNotThrown = function (expectedErrorType, expectedErrorMessage) {
        var error = new error_match_error_1.ErrorMatchError(undefined, true, expectedErrorType, expectedErrorMessage);
        alsatian_core_1.Expect(error.actual).toBe("error was not thrown.");
    };
    ErrorMatchErrorTests.prototype.actualValueAndShouldMatchAndExpectedErrorShouldBeSetToWrongErrorWasThrown = function (expectedErrorType, expectedErrorMessage, actualErrorType, actualErrorMessage) {
        var error = new error_match_error_1.ErrorMatchError(new actualErrorType(actualErrorMessage), true, expectedErrorType, expectedErrorMessage);
        alsatian_core_1.Expect(error.actual).toBe(actualErrorType.name + " error was thrown with message \"" + actualErrorMessage + "\".");
    };
    ErrorMatchErrorTests.prototype.actualValueAndShouldNotMatchAndExpectedErrorShouldBeSetToWrongErrorWasThrown = function (expectedErrorType, expectedErrorMessage) {
        var error = new error_match_error_1.ErrorMatchError(new expectedErrorType(expectedErrorMessage), false, expectedErrorType, expectedErrorMessage);
        alsatian_core_1.Expect(error.actual).toBe(expectedErrorType.name + " error was thrown with message \"" + expectedErrorMessage + "\".");
    };
    ErrorMatchErrorTests.prototype.expectedValueAndShouldMatchShouldBeSetToErrorShouldBeThrown = function (expectedErrorType, expectedErrorMessage) {
        var error = new error_match_error_1.ErrorMatchError(undefined, true, expectedErrorType, expectedErrorMessage);
        alsatian_core_1.Expect(error.expected).toBe(expectedErrorType.name + " error to be thrown with message \"" + expectedErrorMessage + "\".");
    };
    ErrorMatchErrorTests.prototype.expectedValueAndShouldNotMatchShouldBeSetToErrorShouldNotBeThrown = function (expectedErrorType, expectedErrorMessage) {
        var error = new error_match_error_1.ErrorMatchError(new expectedErrorType(expectedErrorMessage), false, expectedErrorType, expectedErrorMessage);
        var errorName = expectedErrorType.name;
        alsatian_core_1.Expect(error.expected).toBe(errorName + " error not to be thrown with message \"" + expectedErrorMessage + "\".");
    };
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ErrorMatchErrorTests.prototype, "noActualErrorShouldGiveCorrectMessage", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ErrorMatchErrorTests.prototype, "actualErrorThrownWhenNoneExpectedShouldGiveCorrectMessage", null);
    __decorate([
        alsatian_core_1.TestCase(Error, EvalError),
        alsatian_core_1.TestCase(Error, ReferenceError),
        alsatian_core_1.TestCase(Error, SyntaxError),
        alsatian_core_1.TestCase(Error, TypeError),
        alsatian_core_1.TestCase(Error, URIError),
        alsatian_core_1.TestCase(ReferenceError, EvalError),
        alsatian_core_1.TestCase(ReferenceError, SyntaxError),
        alsatian_core_1.TestCase(ReferenceError, TypeError),
        alsatian_core_1.TestCase(ReferenceError, URIError),
        alsatian_core_1.TestCase(SyntaxError, EvalError),
        alsatian_core_1.TestCase(SyntaxError, ReferenceError),
        alsatian_core_1.TestCase(SyntaxError, TypeError),
        alsatian_core_1.TestCase(SyntaxError, URIError),
        alsatian_core_1.TestCase(TypeError, EvalError),
        alsatian_core_1.TestCase(TypeError, ReferenceError),
        alsatian_core_1.TestCase(TypeError, SyntaxError),
        alsatian_core_1.TestCase(TypeError, URIError),
        alsatian_core_1.TestCase(URIError, EvalError),
        alsatian_core_1.TestCase(URIError, ReferenceError),
        alsatian_core_1.TestCase(URIError, TypeError),
        alsatian_core_1.TestCase(URIError, SyntaxError),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function, Function]),
        __metadata("design:returntype", void 0)
    ], ErrorMatchErrorTests.prototype, "actualErrorIsNotCorrectTypeGivesCorrectMessage", null);
    __decorate([
        alsatian_core_1.TestCase(EvalError),
        alsatian_core_1.TestCase(ReferenceError),
        alsatian_core_1.TestCase(SyntaxError),
        alsatian_core_1.TestCase(TypeError),
        alsatian_core_1.TestCase(URIError),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function]),
        __metadata("design:returntype", void 0)
    ], ErrorMatchErrorTests.prototype, "actualErrorIsMatchingTypeButShouldntBeGivesCorrectMessage", null);
    __decorate([
        alsatian_core_1.TestCase("something went wrong"),
        alsatian_core_1.TestCase("A much worse thing happened!"),
        alsatian_core_1.TestCase("THE END IS NIGH"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], ErrorMatchErrorTests.prototype, "actualErrorHasIncorrectMessageGivesCorrectMessage", null);
    __decorate([
        alsatian_core_1.TestCase("something went wrong"),
        alsatian_core_1.TestCase("A much worse thing happened!"),
        alsatian_core_1.TestCase("THE END IS NIGH"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], ErrorMatchErrorTests.prototype, "actualErrorHasMatchingMessageButShouldntBeGivesCorrectMessage", null);
    __decorate([
        alsatian_core_1.TestCase(EvalError, "something went wrong"),
        alsatian_core_1.TestCase(ReferenceError, "A much worse thing happened!"),
        alsatian_core_1.TestCase(SyntaxError, "THE END IS NIGH"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function, String]),
        __metadata("design:returntype", void 0)
    ], ErrorMatchErrorTests.prototype, "actualErrorHasIncorrectTypeAndMessageGivesCorrectMessage", null);
    __decorate([
        alsatian_core_1.TestCase(EvalError, "something went wrong"),
        alsatian_core_1.TestCase(ReferenceError, "A much worse thing happened!"),
        alsatian_core_1.TestCase(SyntaxError, "THE END IS NIGH"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function, String]),
        __metadata("design:returntype", void 0)
    ], ErrorMatchErrorTests.prototype, "actualErrorHasMatchingMessageAndTypeButShouldntBeGivesCorrectMessage", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ErrorMatchErrorTests.prototype, "actualValueAndShouldMatchShouldBeSetToErrorWasNotThrown", null);
    __decorate([
        alsatian_core_1.TestCase(EvalError, "something went wrong"),
        alsatian_core_1.TestCase(ReferenceError, "A much worse thing happened!"),
        alsatian_core_1.TestCase(SyntaxError, "THE END IS NIGH"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function, String]),
        __metadata("design:returntype", void 0)
    ], ErrorMatchErrorTests.prototype, "actualValueAndShouldNotMatchShouldBeSetToErrorWasThrown", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ErrorMatchErrorTests.prototype, "expectedValueAndShouldMatchShouldBeSetToErrorToBeThrown", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ErrorMatchErrorTests.prototype, "expectedValueAndShouldNotMatchShouldBeSetToErrorNotToBeThrown", null);
    __decorate([
        alsatian_core_1.TestCase(EvalError, "something went wrong"),
        alsatian_core_1.TestCase(ReferenceError, "A much worse thing happened!"),
        alsatian_core_1.TestCase(SyntaxError, "THE END IS NIGH"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function, String]),
        __metadata("design:returntype", void 0)
    ], ErrorMatchErrorTests.prototype, "actualValueAndShouldMatchAndExpectedErrorShouldBeSetToErrorWasNotThrown", null);
    __decorate([
        alsatian_core_1.TestCase(EvalError, "something went wrong", ReferenceError, "A much worse thing happened!"),
        alsatian_core_1.TestCase(ReferenceError, "A much worse thing happened!", SyntaxError, "THE END IS NIGH"),
        alsatian_core_1.TestCase(SyntaxError, "THE END IS NIGH", EvalError, "something went wrong"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function, String, Function, String]),
        __metadata("design:returntype", void 0)
    ], ErrorMatchErrorTests.prototype, "actualValueAndShouldMatchAndExpectedErrorShouldBeSetToWrongErrorWasThrown", null);
    __decorate([
        alsatian_core_1.TestCase(EvalError, "something went wrong"),
        alsatian_core_1.TestCase(ReferenceError, "A much worse thing happened!"),
        alsatian_core_1.TestCase(SyntaxError, "THE END IS NIGH"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function, String]),
        __metadata("design:returntype", void 0)
    ], ErrorMatchErrorTests.prototype, "actualValueAndShouldNotMatchAndExpectedErrorShouldBeSetToWrongErrorWasThrown", null);
    __decorate([
        alsatian_core_1.TestCase(EvalError, "something went wrong"),
        alsatian_core_1.TestCase(ReferenceError, "A much worse thing happened!"),
        alsatian_core_1.TestCase(SyntaxError, "THE END IS NIGH"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function, String]),
        __metadata("design:returntype", void 0)
    ], ErrorMatchErrorTests.prototype, "expectedValueAndShouldMatchShouldBeSetToErrorShouldBeThrown", null);
    __decorate([
        alsatian_core_1.TestCase(EvalError, "something went wrong"),
        alsatian_core_1.TestCase(ReferenceError, "A much worse thing happened!"),
        alsatian_core_1.TestCase(SyntaxError, "THE END IS NIGH"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function, String]),
        __metadata("design:returntype", void 0)
    ], ErrorMatchErrorTests.prototype, "expectedValueAndShouldNotMatchShouldBeSetToErrorShouldNotBeThrown", null);
    return ErrorMatchErrorTests;
}());
exports.ErrorMatchErrorTests = ErrorMatchErrorTests;
//# sourceMappingURL=error-match-error.spec.js.map