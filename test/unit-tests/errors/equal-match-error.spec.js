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
var equal_match_error_1 = require("../../../core/errors/equal-match-error");
var EqualMatchErrorTests = /** @class */ (function () {
    function EqualMatchErrorTests() {
    }
    EqualMatchErrorTests.prototype.shouldMatchMessage = function (actualValue, expectedValue) {
        var error = new equal_match_error_1.EqualMatchError(actualValue, expectedValue, true);
        alsatian_core_1.Expect(error.message).toBe("Expected " + JSON.stringify(actualValue) + " to be equal to " + JSON.stringify(expectedValue) + ".");
    };
    EqualMatchErrorTests.prototype.shouldNotMatchMessage = function (actualValue, expectedValue) {
        var error = new equal_match_error_1.EqualMatchError(actualValue, expectedValue, false);
        alsatian_core_1.Expect(error.message).toBe("Expected " + JSON.stringify(actualValue) + " not to be equal to " + JSON.stringify(expectedValue) + ".");
    };
    __decorate([
        alsatian_core_1.TestCase("something", "something else"),
        alsatian_core_1.TestCase("", "something"),
        alsatian_core_1.TestCase(0, 42),
        alsatian_core_1.TestCase(42, 0),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], EqualMatchErrorTests.prototype, "shouldMatchMessage", null);
    __decorate([
        alsatian_core_1.TestCase(undefined, undefined),
        alsatian_core_1.TestCase(null, null),
        alsatian_core_1.TestCase(0, 0),
        alsatian_core_1.TestCase(42, 42),
        alsatian_core_1.TestCase(4.2, 4.2),
        alsatian_core_1.TestCase(-4.2, -4.2),
        alsatian_core_1.TestCase("", ""),
        alsatian_core_1.TestCase("something", "something"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], EqualMatchErrorTests.prototype, "shouldNotMatchMessage", null);
    return EqualMatchErrorTests;
}());
exports.EqualMatchErrorTests = EqualMatchErrorTests;
//# sourceMappingURL=equal-match-error.spec.js.map