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
var TempTests = /** @class */ (function () {
    function TempTests() {
    }
    TempTests.prototype._setErrorMessage = function () { };
    TempTests.prototype.testErrors = function (error, className) {
        var mockMatch = {
            MatchError: function () { }
        };
        var mock = require("mock-require");
        mock("../../../core/errors/match-error", mockMatch);
        delete require.cache[require.resolve("../../../core/errors/" + error + ".js")];
        var errorModule = require("../../../core/errors/" + error);
        alsatian_core_1.Expect(errorModule[className].call({
            _setErrorMessage: function () { }
        }, {
            calls: [],
            setCalls: []
        })).toBeDefined();
        mock.stopAll();
        delete require.cache[require.resolve("../../../core/errors/" + error + ".js")];
    };
    __decorate([
        alsatian_core_1.TestCase("contents-match-error", "ContentsMatchError"),
        alsatian_core_1.TestCase("empty-match-error", "EmptyMatchError"),
        alsatian_core_1.TestCase("error-match-error", "ErrorMatchError"),
        alsatian_core_1.TestCase("equal-match-error", "EqualMatchError"),
        alsatian_core_1.TestCase("exact-match-error", "ExactMatchError"),
        alsatian_core_1.TestCase("function-call-count-match-error", "FunctionCallCountMatchError"),
        alsatian_core_1.TestCase("function-call-match-error", "FunctionCallMatchError"),
        alsatian_core_1.TestCase("greater-than-match-error", "GreaterThanMatchError"),
        alsatian_core_1.TestCase("less-than-match-error", "LessThanMatchError"),
        alsatian_core_1.TestCase("property-set-match-error", "PropertySetMatchError"),
        alsatian_core_1.TestCase("regex-match-error", "RegexMatchError"),
        alsatian_core_1.TestCase("test-timeout-error", "TestTimeoutError"),
        alsatian_core_1.TestCase("truthy-match-error", "TruthyMatchError"),
        alsatian_core_1.Test("give all those errors a go without a super"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", void 0)
    ], TempTests.prototype, "testErrors", null);
    TempTests = __decorate([
        alsatian_core_1.TestFixture("temporary tests to satisfy TypeScript quirk")
    ], TempTests);
    return TempTests;
}());
exports.TempTests = TempTests;
//# sourceMappingURL=temporary-branch-fix.spec.js.map