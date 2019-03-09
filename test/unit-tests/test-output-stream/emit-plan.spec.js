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
var EmitPlanTests = /** @class */ (function () {
    function EmitPlanTests() {
    }
    EmitPlanTests._getExpectedTestPlan = function (testCount) {
        return "1.." + testCount + "\n";
    };
    EmitPlanTests.prototype.shouldEmitCorrectTestPlan = function (testCount) {
        var testOutput = new alsatian_core_1.TestOutputStream();
        alsatian_core_1.SpyOn(testOutput, "push");
        testOutput.emitPlan(testCount);
        alsatian_core_1.Expect(testOutput.push).toHaveBeenCalledWith(EmitPlanTests._getExpectedTestPlan(testCount));
    };
    __decorate([
        alsatian_core_1.TestCase(10),
        alsatian_core_1.TestCase(25),
        alsatian_core_1.TestCase(200),
        alsatian_core_1.TestCase(250),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], EmitPlanTests.prototype, "shouldEmitCorrectTestPlan", null);
    return EmitPlanTests;
}());
exports.EmitPlanTests = EmitPlanTests;
//# sourceMappingURL=emit-plan.spec.js.map