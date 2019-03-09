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
var MatchErrorTests = /** @class */ (function () {
    function MatchErrorTests() {
    }
    MatchErrorTests.prototype.shouldStoreMessage = function (expectedMessage) {
        var error = new alsatian_core_1.MatchError(expectedMessage, null, null);
        alsatian_core_1.Expect(error.message).toBe(expectedMessage);
    };
    MatchErrorTests.prototype.shouldStoreExpectedValue = function (expectedValue) {
        var error = new alsatian_core_1.MatchError("", expectedValue, null);
        alsatian_core_1.Expect(error.expected).toBe(expectedValue);
    };
    MatchErrorTests.prototype.shouldStoreActualValue = function (actualValue) {
        var error = new alsatian_core_1.MatchError("", null, actualValue);
        alsatian_core_1.Expect(error.actual).toBe(actualValue);
    };
    __decorate([
        alsatian_core_1.TestCase("something"),
        alsatian_core_1.TestCase("something else"),
        alsatian_core_1.TestCase("another thing"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], MatchErrorTests.prototype, "shouldStoreMessage", null);
    __decorate([
        alsatian_core_1.TestCase(undefined),
        alsatian_core_1.TestCase(null),
        alsatian_core_1.TestCase(0),
        alsatian_core_1.TestCase(42),
        alsatian_core_1.TestCase(4.2),
        alsatian_core_1.TestCase(-4.2),
        alsatian_core_1.TestCase(""),
        alsatian_core_1.TestCase("something"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], MatchErrorTests.prototype, "shouldStoreExpectedValue", null);
    __decorate([
        alsatian_core_1.TestCase(undefined),
        alsatian_core_1.TestCase(null),
        alsatian_core_1.TestCase(0),
        alsatian_core_1.TestCase(42),
        alsatian_core_1.TestCase(4.2),
        alsatian_core_1.TestCase(-4.2),
        alsatian_core_1.TestCase(""),
        alsatian_core_1.TestCase("something"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], MatchErrorTests.prototype, "shouldStoreActualValue", null);
    return MatchErrorTests;
}());
exports.MatchErrorTests = MatchErrorTests;
//# sourceMappingURL=match-error.spec.js.map