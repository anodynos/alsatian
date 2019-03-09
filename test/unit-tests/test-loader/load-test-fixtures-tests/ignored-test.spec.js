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
var IgnoredTestTests = /** @class */ (function () {
    function IgnoredTestTests() {
    }
    IgnoredTestTests.prototype.singleUnignoredTest = function () {
        var fileRequirer = new file_requirer_1.FileRequirer();
        var testFixtureInstance = {
            unignoredTest: function () { }
        };
        var unignoredTest = {
            key: "unignoredTest"
        };
        Reflect.defineMetadata(alsatian_core_1.METADATA_KEYS.TESTS, [unignoredTest], testFixtureInstance);
        var testFixtureConstructor = function () { return testFixtureInstance; };
        var spy = alsatian_core_1.SpyOn(fileRequirer, "require");
        spy.andStub();
        spy.andReturn(testFixtureConstructor);
        var testLoader = new test_loader_1.TestLoader(fileRequirer);
        alsatian_core_1.Expect(testLoader.loadTestFixture("test")[0].tests[0].ignored).toBe(false);
    };
    IgnoredTestTests.prototype.singleIgnoredTest = function () {
        var fileRequirer = new file_requirer_1.FileRequirer();
        var testFixtureInstance = {
            ignoredTest: function () { }
        };
        var unignoredTest = {
            key: "ignoredTest"
        };
        Reflect.defineMetadata(alsatian_core_1.METADATA_KEYS.TESTS, [unignoredTest], testFixtureInstance);
        Reflect.defineMetadata(alsatian_core_1.METADATA_KEYS.IGNORE, true, testFixtureInstance, "ignoredTest");
        var testFixtureConstructor = function () { return testFixtureInstance; };
        var spy = alsatian_core_1.SpyOn(fileRequirer, "require");
        spy.andStub();
        spy.andReturn(testFixtureConstructor);
        var testLoader = new test_loader_1.TestLoader(fileRequirer);
        alsatian_core_1.Expect(testLoader.loadTestFixture("test")[0].tests[0].ignored).toBe(true);
    };
    IgnoredTestTests.prototype.singleIgnoredTestWithReason = function (reason) {
        var fileRequirer = new file_requirer_1.FileRequirer();
        var testFixtureInstance = {
            ignoredTest: function () { }
        };
        var unignoredTest = {
            key: "ignoredTest"
        };
        Reflect.defineMetadata(alsatian_core_1.METADATA_KEYS.TESTS, [unignoredTest], testFixtureInstance);
        Reflect.defineMetadata(alsatian_core_1.METADATA_KEYS.IGNORE, true, testFixtureInstance, "ignoredTest");
        Reflect.defineMetadata(alsatian_core_1.METADATA_KEYS.IGNORE_REASON, reason, testFixtureInstance, "ignoredTest");
        var testFixtureConstructor = function () { return testFixtureInstance; };
        var spy = alsatian_core_1.SpyOn(fileRequirer, "require");
        spy.andStub();
        spy.andReturn(testFixtureConstructor);
        var testLoader = new test_loader_1.TestLoader(fileRequirer);
        alsatian_core_1.Expect(testLoader.loadTestFixture("test")[0].tests[0].ignoreReason).toBe(reason);
    };
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], IgnoredTestTests.prototype, "singleUnignoredTest", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], IgnoredTestTests.prototype, "singleIgnoredTest", null);
    __decorate([
        alsatian_core_1.TestCase("some reason"),
        alsatian_core_1.TestCase("another reason"),
        alsatian_core_1.TestCase("last one, promise!"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], IgnoredTestTests.prototype, "singleIgnoredTestWithReason", null);
    return IgnoredTestTests;
}());
exports.IgnoredTestTests = IgnoredTestTests;
//# sourceMappingURL=ignored-test.spec.js.map