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
var regex_match_error_1 = require("../../../core/errors/regex-match-error");
var EqualMatchErrorTests = /** @class */ (function () {
    function EqualMatchErrorTests() {
    }
    EqualMatchErrorTests.prototype.shouldMatchMessage = function (actualValue, expectedRegex) {
        var error = new regex_match_error_1.RegexMatchError(actualValue, expectedRegex, true);
        alsatian_core_1.Expect(error.message).toBe("Expected " +
            JSON.stringify(actualValue) +
            " to conform to " +
            expectedRegex +
            ".");
    };
    EqualMatchErrorTests.prototype.shouldNotMatchMessage = function (actualValue, expectedRegex) {
        var error = new regex_match_error_1.RegexMatchError(actualValue, expectedRegex, false);
        alsatian_core_1.Expect(error.message).toBe("Expected " + JSON.stringify(actualValue) + " not to conform to " + expectedRegex + ".");
    };
    __decorate([
        alsatian_core_1.TestCase("thing", /something/),
        alsatian_core_1.TestCase("another thing", /this and that/),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, RegExp]),
        __metadata("design:returntype", void 0)
    ], EqualMatchErrorTests.prototype, "shouldMatchMessage", null);
    __decorate([
        alsatian_core_1.TestCase("something", /another thing/),
        alsatian_core_1.TestCase("another thing", /thing/),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], EqualMatchErrorTests.prototype, "shouldNotMatchMessage", null);
    return EqualMatchErrorTests;
}());
exports.EqualMatchErrorTests = EqualMatchErrorTests;
//# sourceMappingURL=regex-match-error.spec.js.map