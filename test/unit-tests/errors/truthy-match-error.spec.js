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
var truthy_match_error_1 = require("../../../core/errors/truthy-match-error");
var TruthyMatchErrorTests = /** @class */ (function () {
    function TruthyMatchErrorTests() {
    }
    TruthyMatchErrorTests.prototype.shouldBeTruthyMessage = function (actualValue) {
        var error = new truthy_match_error_1.TruthyMatchError(actualValue, true);
        alsatian_core_1.Expect(error.message).toBe("Expected " + JSON.stringify(actualValue) + " to be truthy.");
    };
    TruthyMatchErrorTests.prototype.shouldNotBeTruthyMessage = function (actualValue) {
        var error = new truthy_match_error_1.TruthyMatchError(actualValue, false);
        alsatian_core_1.Expect(error.message).toBe("Expected " + JSON.stringify(actualValue) + " not to be truthy.");
    };
    TruthyMatchErrorTests.prototype.actualValueSet = function (actualValue) {
        var error = new truthy_match_error_1.TruthyMatchError(actualValue, false);
        alsatian_core_1.Expect(error.actual).toBe(actualValue);
    };
    TruthyMatchErrorTests.prototype.expectedValueSetToTruthyIfShouldMatch = function () {
        var error = new truthy_match_error_1.TruthyMatchError(null, true);
        alsatian_core_1.Expect(error.expected).toBe("truthy");
    };
    TruthyMatchErrorTests.prototype.expectedValueSetToFalsyIfShouldNotMatch = function () {
        var error = new truthy_match_error_1.TruthyMatchError("something", false);
        alsatian_core_1.Expect(error.expected).toBe("falsy");
    };
    __decorate([
        alsatian_core_1.TestCase(0),
        alsatian_core_1.TestCase(-1),
        alsatian_core_1.TestCase(false),
        alsatian_core_1.TestCase(""),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TruthyMatchErrorTests.prototype, "shouldBeTruthyMessage", null);
    __decorate([
        alsatian_core_1.TestCase(1),
        alsatian_core_1.TestCase(42),
        alsatian_core_1.TestCase(true),
        alsatian_core_1.TestCase("something"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TruthyMatchErrorTests.prototype, "shouldNotBeTruthyMessage", null);
    __decorate([
        alsatian_core_1.TestCase(undefined),
        alsatian_core_1.TestCase(null),
        alsatian_core_1.TestCase(0),
        alsatian_core_1.TestCase(1),
        alsatian_core_1.TestCase(42),
        alsatian_core_1.TestCase(""),
        alsatian_core_1.TestCase("something"),
        alsatian_core_1.TestCase({}),
        alsatian_core_1.TestCase({ an: "object" }),
        alsatian_core_1.TestCase([]),
        alsatian_core_1.TestCase(["an", "array"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TruthyMatchErrorTests.prototype, "actualValueSet", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TruthyMatchErrorTests.prototype, "expectedValueSetToTruthyIfShouldMatch", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TruthyMatchErrorTests.prototype, "expectedValueSetToFalsyIfShouldNotMatch", null);
    return TruthyMatchErrorTests;
}());
exports.TruthyMatchErrorTests = TruthyMatchErrorTests;
//# sourceMappingURL=truthy-match-error.spec.js.map