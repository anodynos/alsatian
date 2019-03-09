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
require("reflect-metadata");
var alsatian_core_1 = require("../../../../core/alsatian-core");
var file_requirer_1 = require("../../../../core/file-requirer");
var test_loader_1 = require("../../../../core/test-loader");
var FocussedTestTests = /** @class */ (function () {
    function FocussedTestTests() {
    }
    FocussedTestTests.prototype.singleUnfocussedTest = function () {
        var fileRequirer = new file_requirer_1.FileRequirer();
        var testFixtureInstance = {
            unfocussedTest: function () { }
        };
        var unfocussedTest = {
            key: "unfocussedTest"
        };
        Reflect.defineMetadata(alsatian_core_1.METADATA_KEYS.TESTS, [unfocussedTest], testFixtureInstance);
        var testFixtureConstructor = function () { return testFixtureInstance; };
        var spy = alsatian_core_1.SpyOn(fileRequirer, "require");
        spy.andStub();
        spy.andReturn(testFixtureConstructor);
        var testLoader = new test_loader_1.TestLoader(fileRequirer);
        alsatian_core_1.Expect(testLoader.loadTestFixture("test")[0].tests[0].focussed).toBe(false);
    };
    FocussedTestTests.prototype.singleFocussedTest = function () {
        var fileRequirer = new file_requirer_1.FileRequirer();
        var testFixtureInstance = {
            focussedTest: function () { }
        };
        var unfocussedTest = {
            key: "focussedTest"
        };
        Reflect.defineMetadata(alsatian_core_1.METADATA_KEYS.TESTS, [unfocussedTest], testFixtureInstance);
        Reflect.defineMetadata(alsatian_core_1.METADATA_KEYS.FOCUS, true, testFixtureInstance, "focussedTest");
        var testFixtureConstructor = function () { return testFixtureInstance; };
        var spy = alsatian_core_1.SpyOn(fileRequirer, "require");
        spy.andStub();
        spy.andReturn(testFixtureConstructor);
        var testLoader = new test_loader_1.TestLoader(fileRequirer);
        alsatian_core_1.Expect(testLoader.loadTestFixture("test")[0].tests[0].focussed).toBe(true);
    };
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FocussedTestTests.prototype, "singleUnfocussedTest", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FocussedTestTests.prototype, "singleFocussedTest", null);
    return FocussedTestTests;
}());
exports.FocussedTestTests = FocussedTestTests;
//# sourceMappingURL=focussed-test.spec.js.map