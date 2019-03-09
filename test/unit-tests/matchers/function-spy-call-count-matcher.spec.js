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
var function_spy_call_count_matcher_1 = require("../../../core/matchers/function-spy-call-count-matcher");
var FunctionSpyCallCountMatcherTests = /** @class */ (function () {
    function FunctionSpyCallCountMatcherTests() {
    }
    FunctionSpyCallCountMatcherTests.prototype.timesNotToBeDefined = function () {
        alsatian_core_1.Expect(new function_spy_call_count_matcher_1.FunctionSpyCallCountMatcher().times).not.toBeDefined();
    };
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FunctionSpyCallCountMatcherTests.prototype, "timesNotToBeDefined", null);
    return FunctionSpyCallCountMatcherTests;
}());
exports.FunctionSpyCallCountMatcherTests = FunctionSpyCallCountMatcherTests;
//# sourceMappingURL=function-spy-call-count-matcher.spec.js.map