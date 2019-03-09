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
var alsatian_core_1 = require("../../../../core/alsatian-core");
var FileGlobsTests = /** @class */ (function () {
    function FileGlobsTests() {
    }
    FileGlobsTests.prototype.fileGlobsDefaultToEmpty = function () {
        var options = new alsatian_cli_options_1.AlsatianCliOptions([]);
        alsatian_core_1.Expect(options.fileGlobs.length).toBe(0);
    };
    FileGlobsTests.prototype.fileGlobSet = function () {
        var expectedFileGlobs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            expectedFileGlobs[_i] = arguments[_i];
        }
        var options = new alsatian_cli_options_1.AlsatianCliOptions(expectedFileGlobs);
        alsatian_core_1.Expect(options.fileGlobs).toEqual(expectedFileGlobs);
    };
    FileGlobsTests.prototype.multipleFileGlobSet = function () {
        var expectedFileGlobs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            expectedFileGlobs[_i] = arguments[_i];
        }
        var options = new alsatian_cli_options_1.AlsatianCliOptions(expectedFileGlobs);
        alsatian_core_1.Expect(options.fileGlobs).toEqual(expectedFileGlobs);
    };
    FileGlobsTests.prototype.knownArgumentsIgnoredFromFileGlobs = function (inputArguments, expectedFileGlobs) {
        var options = new alsatian_cli_options_1.AlsatianCliOptions(inputArguments);
        alsatian_core_1.Expect(options.fileGlobs).toEqual(expectedFileGlobs);
    };
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FileGlobsTests.prototype, "fileGlobsDefaultToEmpty", null);
    __decorate([
        alsatian_core_1.TestCase("file.ts"),
        alsatian_core_1.TestCase(".//*.css"),
        alsatian_core_1.TestCase(".//path/**/*.js"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], FileGlobsTests.prototype, "fileGlobSet", null);
    __decorate([
        alsatian_core_1.TestCase("file.ts", "./another-path/to/find/files.ts"),
        alsatian_core_1.TestCase(".//*.css", "./**/more/*.css", "/another*/location.css"),
        alsatian_core_1.TestCase(".//path/**/*.js", "more.js", "./again/and/again.js", "./**/*.finally.js"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], FileGlobsTests.prototype, "multipleFileGlobSet", null);
    __decorate([
        alsatian_core_1.TestCase(["file.ts", "./another-path/to/find/files.ts", "--timeout", "1"], ["file.ts", "./another-path/to/find/files.ts"]),
        alsatian_core_1.TestCase([".//*.css", "-t", "42", "./**/more/*.css", "/another*/location.css"], [".//*.css", "./**/more/*.css", "/another*/location.css"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array,
            Array]),
        __metadata("design:returntype", void 0)
    ], FileGlobsTests.prototype, "knownArgumentsIgnoredFromFileGlobs", null);
    return FileGlobsTests;
}());
exports.FileGlobsTests = FileGlobsTests;
//# sourceMappingURL=file-globs.spec.js.map