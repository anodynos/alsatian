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
var contents_match_error_1 = require("../../../core/errors/contents-match-error");
var ContentsMatchErrorTests = /** @class */ (function () {
    function ContentsMatchErrorTests() {
    }
    ContentsMatchErrorTests.prototype.shouldMatchMessage = function (container, expectedContent) {
        var error = new contents_match_error_1.ContentsMatchError(container, expectedContent, true);
        alsatian_core_1.Expect(error.message).toBe("Expected " + JSON.stringify(container).replace(",", ", ") + " " +
            ("to contain " + JSON.stringify(expectedContent) + "."));
    };
    ContentsMatchErrorTests.prototype.shouldNotMatchMessage = function (container, expectedContent) {
        var error = new contents_match_error_1.ContentsMatchError(container, expectedContent, false);
        alsatian_core_1.Expect(error.message).toBe("Expected " + JSON.stringify(container).replace(",", ", ") + " " +
            ("not to contain " + JSON.stringify(expectedContent) + "."));
    };
    ContentsMatchErrorTests.prototype.actualValueContainsTheContainer = function (container) {
        alsatian_core_1.Expect(new contents_match_error_1.ContentsMatchError(container, "", true).actual).toBe(container);
    };
    ContentsMatchErrorTests.prototype.expectedValueContainsTheExpectedContent = function (expectedContent) {
        alsatian_core_1.Expect(new contents_match_error_1.ContentsMatchError("", expectedContent, true).expected).toBe(expectedContent);
    };
    __decorate([
        alsatian_core_1.TestCase([], 1),
        alsatian_core_1.TestCase([1, 2], 42),
        alsatian_core_1.TestCase("", "something"),
        alsatian_core_1.TestCase("something", "another thing"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], ContentsMatchErrorTests.prototype, "shouldMatchMessage", null);
    __decorate([
        alsatian_core_1.TestCase([1], 1),
        alsatian_core_1.TestCase([1, 42], 42),
        alsatian_core_1.TestCase("something", "something"),
        alsatian_core_1.TestCase("something", "thing"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], ContentsMatchErrorTests.prototype, "shouldNotMatchMessage", null);
    __decorate([
        alsatian_core_1.TestCase([1]),
        alsatian_core_1.TestCase([1, 42]),
        alsatian_core_1.TestCase("something"),
        alsatian_core_1.TestCase("something"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ContentsMatchErrorTests.prototype, "actualValueContainsTheContainer", null);
    __decorate([
        alsatian_core_1.TestCase(1),
        alsatian_core_1.TestCase(42),
        alsatian_core_1.TestCase("something"),
        alsatian_core_1.TestCase("thing"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ContentsMatchErrorTests.prototype, "expectedValueContainsTheExpectedContent", null);
    return ContentsMatchErrorTests;
}());
exports.ContentsMatchErrorTests = ContentsMatchErrorTests;
//# sourceMappingURL=contents-match-error.spec.js.map