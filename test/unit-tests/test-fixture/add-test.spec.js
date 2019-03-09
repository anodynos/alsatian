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
var core_1 = require("../../../core/");
var alsatian_core_1 = require("../../../core/alsatian-core");
var test_builder_1 = require("../../builders/test-builder");
var AddTestsTests = /** @class */ (function () {
    function AddTestsTests() {
    }
    AddTestsTests.prototype.shouldAddCorrectAmountOfTests = function (testCount) {
        var testFixture = new core_1.TestFixture("Unnamed Test Fixture");
        for (var i = 0; i < testCount; i++) {
            testFixture.addTest(new test_builder_1.TestBuilder().build());
        }
        alsatian_core_1.Expect(testFixture.tests.length).toBe(testCount);
    };
    AddTestsTests.prototype.shouldNotAddDuplicateTests = function (testCount) {
        var testFixture = new core_1.TestFixture("Unnamed Test Fixture");
        var test = new test_builder_1.TestBuilder().build();
        for (var i = 0; i < testCount; i++) {
            testFixture.addTest(test);
        }
        alsatian_core_1.Expect(testFixture.tests.length).toBe(1);
    };
    __decorate([
        alsatian_core_1.TestCase(1),
        alsatian_core_1.TestCase(2),
        alsatian_core_1.TestCase(3),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], AddTestsTests.prototype, "shouldAddCorrectAmountOfTests", null);
    __decorate([
        alsatian_core_1.TestCase(1),
        alsatian_core_1.TestCase(2),
        alsatian_core_1.TestCase(3),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], AddTestsTests.prototype, "shouldNotAddDuplicateTests", null);
    return AddTestsTests;
}());
exports.AddTestsTests = AddTestsTests;
//# sourceMappingURL=add-test.spec.js.map