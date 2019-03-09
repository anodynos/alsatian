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
var invalid_argument_names_error_1 = require("../../../../cli/errors/invalid-argument-names-error");
var alsatian_core_1 = require("../../../../core/alsatian-core");
var UnknownArgumentsTests = /** @class */ (function () {
    function UnknownArgumentsTests() {
    }
    UnknownArgumentsTests.prototype.unknownArgumentThrowsError = function (unknownArgument, expectedMessage) {
        alsatian_core_1.Expect(function () { return new alsatian_cli_options_1.AlsatianCliOptions([unknownArgument]); }).toThrowError(invalid_argument_names_error_1.InvalidArgumentNamesError, expectedMessage);
    };
    UnknownArgumentsTests.prototype.multipleUnknownArgumentsThrowsError = function (unknownArguments, expectedMessage) {
        alsatian_core_1.Expect(function () { return new alsatian_cli_options_1.AlsatianCliOptions(unknownArguments); }).toThrowError(invalid_argument_names_error_1.InvalidArgumentNamesError, expectedMessage);
    };
    __decorate([
        alsatian_core_1.TestCase("--unknown", 'unrecognised argument "unknown".'),
        alsatian_core_1.TestCase("-q", 'unrecognised argument "q".'),
        alsatian_core_1.TestCase("--weird-er", 'unrecognised argument "weird-er".'),
        alsatian_core_1.TestCase("-X", 'unrecognised argument "X".'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", void 0)
    ], UnknownArgumentsTests.prototype, "unknownArgumentThrowsError", null);
    __decorate([
        alsatian_core_1.TestCase(["--unknown", "-q"], 'unrecognised arguments "unknown" and "q".'),
        alsatian_core_1.TestCase(["--weird", "-X", "--unknown-arg"], 'unrecognised arguments "weird" and "X" and "unknown-arg".'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array, String]),
        __metadata("design:returntype", void 0)
    ], UnknownArgumentsTests.prototype, "multipleUnknownArgumentsThrowsError", null);
    return UnknownArgumentsTests;
}());
exports.UnknownArgumentsTests = UnknownArgumentsTests;
//# sourceMappingURL=unknown-arguments.spec.js.map