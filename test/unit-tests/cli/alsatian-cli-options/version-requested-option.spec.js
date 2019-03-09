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
var VersionRequestedTests = /** @class */ (function () {
    function VersionRequestedTests() {
    }
    VersionRequestedTests.prototype.versionRequestedDefaultsToFalse = function () {
        var options = new alsatian_cli_options_1.AlsatianCliOptions([]);
        alsatian_core_1.Expect(options.versionRequested).toBe(false);
    };
    VersionRequestedTests.prototype.versionRequestedIfCalled = function (argument) {
        var options = new alsatian_cli_options_1.AlsatianCliOptions([argument]);
        alsatian_core_1.Expect(options.versionRequested).toBe(true);
    };
    VersionRequestedTests.prototype.duplicateTapArgumentsThrowsError = function (firstArgument, secondArgument) {
        alsatian_core_1.Expect(function () {
            var options = new alsatian_cli_options_1.AlsatianCliOptions([firstArgument, secondArgument]);
        }).toThrowError(duplicate_cli_argument_error_1.DuplicateCliArgumentError, 'Duplicate "version" arguments were provided.');
    };
    VersionRequestedTests.prototype.versionRequestedBeforeOrAfterGlobIsTrue = function (firstArgument, secondArgument) {
        var options = new alsatian_cli_options_1.AlsatianCliOptions([firstArgument, secondArgument]);
        alsatian_core_1.Expect(options.versionRequested).toBe(true);
    };
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], VersionRequestedTests.prototype, "versionRequestedDefaultsToFalse", null);
    __decorate([
        alsatian_core_1.TestCase("--version"),
        alsatian_core_1.TestCase("-v"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], VersionRequestedTests.prototype, "versionRequestedIfCalled", null);
    __decorate([
        alsatian_core_1.TestCase("--version", "-v"),
        alsatian_core_1.TestCase("--version", "--version"),
        alsatian_core_1.TestCase("-v", "-v"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", void 0)
    ], VersionRequestedTests.prototype, "duplicateTapArgumentsThrowsError", null);
    __decorate([
        alsatian_core_1.TestCase("--version", "/test/location.spec.js"),
        alsatian_core_1.TestCase("/another/set/of/**/*.spec.js", "-v"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", void 0)
    ], VersionRequestedTests.prototype, "versionRequestedBeforeOrAfterGlobIsTrue", null);
    return VersionRequestedTests;
}());
exports.VersionRequestedTests = VersionRequestedTests;
//# sourceMappingURL=version-requested-option.spec.js.map