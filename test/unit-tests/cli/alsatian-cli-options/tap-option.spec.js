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
var alsatian_core_1 = require("../../../../core/alsatian-core");
var TapOptionTests = /** @class */ (function () {
    function TapOptionTests() {
    }
    TapOptionTests.prototype.tapDefaultsToFalse = function () {
        var options = new alsatian_cli_options_1.AlsatianCliOptions([]);
        alsatian_core_1.Expect(options.tap).toBe(false);
    };
    TapOptionTests.prototype.tapTrueIfCalled = function (argument) {
        var options = new alsatian_cli_options_1.AlsatianCliOptions([argument]);
        alsatian_core_1.Expect(options.tap).toBe(true);
    };
    TapOptionTests.prototype.duplicateTapArgumentsThrowsError = function (firstArgument, secondArgument) {
        alsatian_core_1.Expect(function () {
            var options = new alsatian_cli_options_1.AlsatianCliOptions([firstArgument, secondArgument]);
        }).toThrowError(duplicate_cli_argument_error_1.DuplicateCliArgumentError, 'Duplicate "tap" arguments were provided.');
    };
    TapOptionTests.prototype.tapVeforeOrAfterGlobIsTrue = function (firstArgument, secondArgument) {
        var options = new alsatian_cli_options_1.AlsatianCliOptions([firstArgument, secondArgument]);
        alsatian_core_1.Expect(options.tap).toBe(true);
    };
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TapOptionTests.prototype, "tapDefaultsToFalse", null);
    __decorate([
        alsatian_core_1.TestCase("--tap"),
        alsatian_core_1.TestCase("-T"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], TapOptionTests.prototype, "tapTrueIfCalled", null);
    __decorate([
        alsatian_core_1.TestCase("--tap", "-T"),
        alsatian_core_1.TestCase("--tap", "--tap"),
        alsatian_core_1.TestCase("-T", "-T"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", void 0)
    ], TapOptionTests.prototype, "duplicateTapArgumentsThrowsError", null);
    __decorate([
        alsatian_core_1.TestCase("--tap", "/test/location.spec.js"),
        alsatian_core_1.TestCase("/another/set/of/**/*.spec.js", "-T"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", void 0)
    ], TapOptionTests.prototype, "tapVeforeOrAfterGlobIsTrue", null);
    return TapOptionTests;
}());
exports.TapOptionTests = TapOptionTests;
//# sourceMappingURL=tap-option.spec.js.map