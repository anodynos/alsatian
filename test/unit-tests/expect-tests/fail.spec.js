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
var match_error_1 = require("../../../core/errors/match-error");
var ExpectFailTests = /** @class */ (function () {
    function ExpectFailTests() {
    }
    ExpectFailTests.prototype.definedShouldNotThrowError = function (message) {
        alsatian_core_1.Expect(function () { return alsatian_core_1.Expect.fail(message); }).toThrowError(match_error_1.MatchError, message);
    };
    __decorate([
        alsatian_core_1.TestCase("something went wrong"),
        alsatian_core_1.TestCase("another thing that's much worse"),
        alsatian_core_1.Test("throws a match error with the given message"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], ExpectFailTests.prototype, "definedShouldNotThrowError", null);
    ExpectFailTests = __decorate([
        alsatian_core_1.TestFixture("Expect.fail() tests")
    ], ExpectFailTests);
    return ExpectFailTests;
}());
exports.ExpectFailTests = ExpectFailTests;
//# sourceMappingURL=fail.spec.js.map