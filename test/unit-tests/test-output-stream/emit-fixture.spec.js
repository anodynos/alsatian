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
var test_fixture_builder_1 = require("../../builders/test-fixture-builder");
var EmitFixtureTests = /** @class */ (function () {
    function EmitFixtureTests() {
    }
    EmitFixtureTests._getExpectedFixtureOutput = function (description) {
        return "# FIXTURE " + description + "\n";
    };
    EmitFixtureTests.prototype.shouldEmitCorrectFixtureInfo = function (description) {
        var testOutput = new alsatian_core_1.TestOutputStream();
        alsatian_core_1.SpyOn(testOutput, "push");
        var fixture = new test_fixture_builder_1.TestFixtureBuilder()
            .withDescription(description)
            .build();
        testOutput.emitFixture(fixture);
        alsatian_core_1.Expect(testOutput.push).toHaveBeenCalledWith(EmitFixtureTests._getExpectedFixtureOutput(description));
    };
    __decorate([
        alsatian_core_1.TestCase("SomeTestFixtureName"),
        alsatian_core_1.TestCase("AnotherTestFixture"),
        alsatian_core_1.TestCase("lastOneIPromise"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], EmitFixtureTests.prototype, "shouldEmitCorrectFixtureInfo", null);
    return EmitFixtureTests;
}());
exports.EmitFixtureTests = EmitFixtureTests;
//# sourceMappingURL=emit-fixture.spec.js.map