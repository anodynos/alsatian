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
var TestTimeoutTests = /** @class */ (function () {
    function TestTimeoutTests() {
    }
    TestTimeoutTests.prototype.noTimeoutSetToNullTest = function () {
        var fileRequirer = new file_requirer_1.FileRequirer();
        var testFixtureInstance = {
            noTimeoutTest: function () { }
        };
        var noTimeoutTest = {
            key: "noTimeoutTest"
        };
        Reflect.defineMetadata(alsatian_core_1.METADATA_KEYS.TESTS, [noTimeoutTest], testFixtureInstance);
        var testFixtureConstructor = function () { return testFixtureInstance; };
        var spy = alsatian_core_1.SpyOn(fileRequirer, "require");
        spy.andStub();
        spy.andReturn(testFixtureConstructor);
        var testLoader = new test_loader_1.TestLoader(fileRequirer);
        alsatian_core_1.Expect(testLoader.loadTestFixture("test")[0].tests[0].timeout).toBe(null);
    };
    TestTimeoutTests.prototype.timeoutSetTest = function (timeoutPeriod) {
        var fileRequirer = new file_requirer_1.FileRequirer();
        var testFixtureInstance = {
            timeoutTest: function () { }
        };
        var timeoutTest = {
            key: "timeoutTest"
        };
        Reflect.defineMetadata(alsatian_core_1.METADATA_KEYS.TESTS, [timeoutTest], testFixtureInstance);
        Reflect.defineMetadata(alsatian_core_1.METADATA_KEYS.TIMEOUT, timeoutPeriod, testFixtureInstance, "timeoutTest");
        var testFixtureConstructor = function () { return testFixtureInstance; };
        var spy = alsatian_core_1.SpyOn(fileRequirer, "require");
        spy.andStub();
        spy.andReturn(testFixtureConstructor);
        var testLoader = new test_loader_1.TestLoader(fileRequirer);
        alsatian_core_1.Expect(testLoader.loadTestFixture("test")[0].tests[0].timeout).toBe(timeoutPeriod);
    };
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TestTimeoutTests.prototype, "noTimeoutSetToNullTest", null);
    __decorate([
        alsatian_core_1.TestCase(1),
        alsatian_core_1.TestCase(2),
        alsatian_core_1.TestCase(42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], TestTimeoutTests.prototype, "timeoutSetTest", null);
    return TestTimeoutTests;
}());
exports.TestTimeoutTests = TestTimeoutTests;
//# sourceMappingURL=test-timeout.spec.js.map