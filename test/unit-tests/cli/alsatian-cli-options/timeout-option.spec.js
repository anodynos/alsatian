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
var alsatian_cli_options_1 = require("../../../../cli/alsatian-cli-options");
var duplicate_cli_argument_error_1 = require("../../../../cli/errors/duplicate-cli-argument-error");
var invalid_timeout_value_error_1 = require("../../../../cli/errors/invalid-timeout-value-error");
var missing_argument_value_error_1 = require("../../../../cli/errors/missing-argument-value-error");
var alsatian_core_1 = require("../../../../core/alsatian-core");
var TimeoutOptionTests = /** @class */ (function () {
    function TimeoutOptionTests() {
    }
    TimeoutOptionTests.prototype.timeoutDefaultsToNull = function () {
        var options = new alsatian_cli_options_1.AlsatianCliOptions([]);
        alsatian_core_1.Expect(options.timeout).toBeNull();
    };
    TimeoutOptionTests.prototype.timeoutSetIfValid = function (timeout) {
        var options = new alsatian_cli_options_1.AlsatianCliOptions(["--timeout", timeout.toString()]);
        alsatian_core_1.Expect(options.timeout).toBe(timeout);
    };
    TimeoutOptionTests.prototype.timeoutSetIfValidWithShorthand = function (timeout) {
        var options = new alsatian_cli_options_1.AlsatianCliOptions(["-t", timeout.toString()]);
        alsatian_core_1.Expect(options.timeout).toBe(timeout);
    };
    TimeoutOptionTests.prototype.errorThrownIfTimeoutValueIsInvalid = function (invalidTimeout) {
        alsatian_core_1.Expect(function () { return new alsatian_cli_options_1.AlsatianCliOptions(["--timeout", invalidTimeout]); }).toThrowError(invalid_timeout_value_error_1.InvalidTimeoutValueError, "Invalid timeout value \"" + invalidTimeout + "\" given.");
    };
    TimeoutOptionTests.prototype.duplicateTimeoutArgumentsThrowsError = function () {
        var inputArguments = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            inputArguments[_i] = arguments[_i];
        }
        alsatian_core_1.Expect(function () {
            return new alsatian_cli_options_1.AlsatianCliOptions([
                inputArguments[0],
                "1",
                inputArguments[1],
                "42"
            ]);
        }).toThrowError(duplicate_cli_argument_error_1.DuplicateCliArgumentError, 'Duplicate "timeout" arguments were provided.');
    };
    TimeoutOptionTests.prototype.missingTimeoutPeriodThrowsError = function (timeoutArgument) {
        alsatian_core_1.Expect(function () { return new alsatian_cli_options_1.AlsatianCliOptions([timeoutArgument]); }).toThrowError(missing_argument_value_error_1.MissingArgumentValueError, 'Argument "timeout" requires a value.');
    };
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TimeoutOptionTests.prototype, "timeoutDefaultsToNull", null);
    __decorate([
        alsatian_core_1.TestCase(1),
        alsatian_core_1.TestCase(2),
        alsatian_core_1.TestCase(42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], TimeoutOptionTests.prototype, "timeoutSetIfValid", null);
    __decorate([
        alsatian_core_1.TestCase(1),
        alsatian_core_1.TestCase(2),
        alsatian_core_1.TestCase(42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], TimeoutOptionTests.prototype, "timeoutSetIfValidWithShorthand", null);
    __decorate([
        alsatian_core_1.TestCase("0"),
        alsatian_core_1.TestCase("-1"),
        alsatian_core_1.TestCase("-42"),
        alsatian_core_1.TestCase("abc"),
        alsatian_core_1.TestCase("42xyz"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], TimeoutOptionTests.prototype, "errorThrownIfTimeoutValueIsInvalid", null);
    __decorate([
        alsatian_core_1.TestCase("-t", "--timeout"),
        alsatian_core_1.TestCase("-t", "-t"),
        alsatian_core_1.TestCase("--timeout", "--timeout"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], TimeoutOptionTests.prototype, "duplicateTimeoutArgumentsThrowsError", null);
    __decorate([
        alsatian_core_1.TestCase("-t"),
        alsatian_core_1.TestCase("--timeout"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], TimeoutOptionTests.prototype, "missingTimeoutPeriodThrowsError", null);
    return TimeoutOptionTests;
}());
exports.TimeoutOptionTests = TimeoutOptionTests;
//# sourceMappingURL=timeout-option.spec.js.map