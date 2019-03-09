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
var ToThrowTests = /** @class */ (function () {
    function ToThrowTests() {
    }
    ToThrowTests.prototype.functionThrowsErrorPasses = function () {
        var throwFunction = function () {
            throw new Error();
        };
        alsatian_core_1.Expect(function () { return alsatian_core_1.Expect(throwFunction).toThrow(); }).not.toThrow();
    };
    ToThrowTests.prototype.functionDoesNotThrowErrorFails = function () {
        var nonThrowFunction = function () { };
        alsatian_core_1.Expect(function () { return alsatian_core_1.Expect(nonThrowFunction).toThrow(); }).toThrow();
    };
    ToThrowTests.prototype.functionDoesNotThrowErrorFailsWithCorrectError = function () {
        var nonThrowFunction = function () { };
        alsatian_core_1.Expect(function () { return alsatian_core_1.Expect(nonThrowFunction).toThrow(); }).toThrowError(error_match_error_1.ErrorMatchError, "Expected an error to be thrown but no errors were thrown.");
    };
    ToThrowTests.prototype.functionDoesNotThrowErrorPassesWhenShouldNotThrow = function () {
        var nonThrowFunction = function () { };
        alsatian_core_1.Expect(function () { return alsatian_core_1.Expect(nonThrowFunction).not.toThrow(); }).not.toThrow();
    };
    ToThrowTests.prototype.functionThrowsErrorFailsWhenShouldNotThrow = function () {
        var throwFunction = function () {
            throw new Error();
        };
        alsatian_core_1.Expect(function () { return alsatian_core_1.Expect(throwFunction).not.toThrow(); }).toThrow();
    };
    ToThrowTests.prototype.functionThrowsErrorFailsWithCorrectError = function () {
        var throwFunction = function () {
            throw new Error();
        };
        alsatian_core_1.Expect(function () { return alsatian_core_1.Expect(throwFunction).not.toThrow(); }).toThrowError(error_match_error_1.ErrorMatchError, "Expected an error not to be thrown but an error was thrown.");
    };
    ToThrowTests.prototype.checkingWhetherNonFunctionThrowsShouldThrow = function (actualValue) {
        var EXPECT = alsatian_core_1.Expect(function () { });
        EXPECT._actualValue = actualValue;
        alsatian_core_1.Expect(function () { return EXPECT.toThrow(); }).toThrowError(TypeError, "toThrow requires value passed in to Expect to be a function.");
    };
    ToThrowTests.prototype.checkingWhetherNonFunctionDoesNotThrowShouldThrow = function (actualValue) {
        var EXPECT = alsatian_core_1.Expect(function () { });
        EXPECT._actualValue = actualValue;
        alsatian_core_1.Expect(function () { return EXPECT.not.toThrow(); }).toThrowError(TypeError, "toThrow requires value passed in to Expect to be a function.");
    };
    ToThrowTests.prototype.actualValueAndShouldMatchShouldBeSetToErrorWasNotThrown = function () {
        var errorMatchError;
        try {
            alsatian_core_1.Expect(function () { }).toThrow();
        }
        catch (error) {
            errorMatchError = error;
        }
        alsatian_core_1.Expect(errorMatchError).toBeDefined();
        alsatian_core_1.Expect(errorMatchError).not.toBeNull();
        alsatian_core_1.Expect(errorMatchError.actual).toBe("error was not thrown.");
    };
    ToThrowTests.prototype.actualValueAndShouldNotMatchShouldBeSetToErrorWasThrown = function (actualErrorType, actualErrorMessage) {
        var errorMatchError;
        try {
            alsatian_core_1.Expect(function () {
                throw new actualErrorType(actualErrorMessage);
            }).not.toThrow();
        }
        catch (error) {
            errorMatchError = error;
        }
        alsatian_core_1.Expect(errorMatchError).toBeDefined();
        alsatian_core_1.Expect(errorMatchError).not.toBeNull();
        alsatian_core_1.Expect(errorMatchError.actual).toBe(actualErrorType.name + " error was thrown with message \"" + actualErrorMessage + "\".");
    };
    ToThrowTests.prototype.actualValueAndShouldMatchShouldBeSetToErrorToBeThrown = function () {
        var errorMatchError;
        try {
            alsatian_core_1.Expect(function () { }).toThrow();
        }
        catch (error) {
            errorMatchError = error;
        }
        alsatian_core_1.Expect(errorMatchError).toBeDefined();
        alsatian_core_1.Expect(errorMatchError).not.toBeNull();
        alsatian_core_1.Expect(errorMatchError.expected).toBe("error to be thrown.");
    };
    ToThrowTests.prototype.expectedValueAndShouldNotMatchShouldBeSetToErrorNotToBeThrown = function () {
        var errorMatchError;
        try {
            alsatian_core_1.Expect(function () {
                throw new Error();
            }).not.toThrow();
        }
        catch (error) {
            errorMatchError = error;
        }
        alsatian_core_1.Expect(errorMatchError).toBeDefined();
        alsatian_core_1.Expect(errorMatchError).not.toBeNull();
        alsatian_core_1.Expect(errorMatchError.expected).toBe("error not to be thrown.");
    };
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToThrowTests.prototype, "functionThrowsErrorPasses", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToThrowTests.prototype, "functionDoesNotThrowErrorFails", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToThrowTests.prototype, "functionDoesNotThrowErrorFailsWithCorrectError", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToThrowTests.prototype, "functionDoesNotThrowErrorPassesWhenShouldNotThrow", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToThrowTests.prototype, "functionThrowsErrorFailsWhenShouldNotThrow", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToThrowTests.prototype, "functionThrowsErrorFailsWithCorrectError", null);
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
    ], ToThrowTests.prototype, "checkingWhetherNonFunctionThrowsShouldThrow", null);
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
    ], ToThrowTests.prototype, "checkingWhetherNonFunctionDoesNotThrowShouldThrow", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToThrowTests.prototype, "actualValueAndShouldMatchShouldBeSetToErrorWasNotThrown", null);
    __decorate([
        alsatian_core_1.TestCase(EvalError, "something went wrong"),
        alsatian_core_1.TestCase(ReferenceError, "A much worse thing happened!"),
        alsatian_core_1.TestCase(SyntaxError, "THE END IS NIGH"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function, String]),
        __metadata("design:returntype", void 0)
    ], ToThrowTests.prototype, "actualValueAndShouldNotMatchShouldBeSetToErrorWasThrown", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToThrowTests.prototype, "actualValueAndShouldMatchShouldBeSetToErrorToBeThrown", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToThrowTests.prototype, "expectedValueAndShouldNotMatchShouldBeSetToErrorNotToBeThrown", null);
    return ToThrowTests;
}());
exports.ToThrowTests = ToThrowTests;
//# sourceMappingURL=to-throw.spec.js.map