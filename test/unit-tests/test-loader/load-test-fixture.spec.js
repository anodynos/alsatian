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
var core_1 = require("../../../core/");
var alsatian_core_1 = require("../../../core/alsatian-core");
var file_requirer_1 = require("../../../core/file-requirer");
var test_loader_1 = require("../../../core/test-loader");
var test_builder_1 = require("../../builders/test-builder");
var test_case_builder_1 = require("../../builders/test-case-builder");
var test_fixture_builder_1 = require("../../builders/test-fixture-builder");
var LoadTestTests = /** @class */ (function () {
    function LoadTestTests() {
    }
    LoadTestTests.prototype._spyOnProcess = function () {
        this._originalStdErr = process.stderr.write;
        alsatian_core_1.SpyOn(process.stderr, "write").andStub();
        this._originalExit = process.exit;
        alsatian_core_1.SpyOn(process, "exit").andStub();
    };
    LoadTestTests.prototype._resetProcess = function () {
        process.stderr.write = this._originalStdErr;
        process.exit = this._originalExit;
    };
    LoadTestTests.prototype.ignoredShouldBeFalseByDefault = function () {
        var fileRequirer = new file_requirer_1.FileRequirer();
        var testFixtureInstance = {};
        Reflect.defineMetadata(alsatian_core_1.METADATA_KEYS.TESTS, [], testFixtureInstance);
        var testFixtureSet = {
            testFixture: function () { return testFixtureInstance; }
        };
        var spy = alsatian_core_1.SpyOn(fileRequirer, "require");
        spy.andStub();
        spy.andReturn(testFixtureSet);
        var testLoader = new test_loader_1.TestLoader(fileRequirer);
        alsatian_core_1.Expect(testLoader.loadTestFixture("test")[0].ignored).toBe(false);
    };
    LoadTestTests.prototype.ignoredShouldBeTrueIfMetadataSet = function () {
        var fileRequirer = new file_requirer_1.FileRequirer();
        var testFixtureInstance = {};
        Reflect.defineMetadata(alsatian_core_1.METADATA_KEYS.TESTS, [], testFixtureInstance);
        var testFixtureSet = {
            testFixture: function () { return testFixtureInstance; }
        };
        Reflect.defineMetadata(alsatian_core_1.METADATA_KEYS.IGNORE, true, testFixtureSet.testFixture);
        var spy = alsatian_core_1.SpyOn(fileRequirer, "require");
        spy.andStub();
        spy.andReturn(testFixtureSet);
        var testLoader = new test_loader_1.TestLoader(fileRequirer);
        alsatian_core_1.Expect(testLoader.loadTestFixture("test")[0].ignored).toBe(true);
    };
    LoadTestTests.prototype.ignoreReasonShouldBeSetFromMetadata = function (reason) {
        var fileRequirer = new file_requirer_1.FileRequirer();
        var testFixtureInstance = {};
        Reflect.defineMetadata(alsatian_core_1.METADATA_KEYS.TESTS, [], testFixtureInstance);
        var testFixtureSet = {
            testFixture: function () { return testFixtureInstance; }
        };
        Reflect.defineMetadata(alsatian_core_1.METADATA_KEYS.IGNORE, true, testFixtureSet.testFixture);
        Reflect.defineMetadata(alsatian_core_1.METADATA_KEYS.IGNORE_REASON, reason, testFixtureSet.testFixture);
        var spy = alsatian_core_1.SpyOn(fileRequirer, "require");
        spy.andStub();
        spy.andReturn(testFixtureSet);
        var testLoader = new test_loader_1.TestLoader(fileRequirer);
        alsatian_core_1.Expect(testLoader.loadTestFixture("test")[0].ignoreReason).toBe(reason);
    };
    LoadTestTests.prototype.focussedShouldBeFalseByDefault = function () {
        var fileRequirer = new file_requirer_1.FileRequirer();
        var testFixtureInstance = {};
        Reflect.defineMetadata(alsatian_core_1.METADATA_KEYS.TESTS, [], testFixtureInstance);
        var testFixtureSet = {
            testFixture: function () { return testFixtureInstance; }
        };
        var spy = alsatian_core_1.SpyOn(fileRequirer, "require");
        spy.andStub();
        spy.andReturn(testFixtureSet);
        var testLoader = new test_loader_1.TestLoader(fileRequirer);
        alsatian_core_1.Expect(testLoader.loadTestFixture("test")[0].focussed).toBe(false);
    };
    LoadTestTests.prototype.focussedShouldBeTrueIfMetadataSet = function () {
        var fileRequirer = new file_requirer_1.FileRequirer();
        var testFixtureInstance = {};
        Reflect.defineMetadata(alsatian_core_1.METADATA_KEYS.TESTS, [], testFixtureInstance);
        var testFixtureSet = {
            testFixture: function () { return testFixtureInstance; }
        };
        Reflect.defineMetadata(alsatian_core_1.METADATA_KEYS.FOCUS, true, testFixtureSet.testFixture);
        var spy = alsatian_core_1.SpyOn(fileRequirer, "require");
        spy.andStub();
        spy.andReturn(testFixtureSet);
        var testLoader = new test_loader_1.TestLoader(fileRequirer);
        alsatian_core_1.Expect(testLoader.loadTestFixture("test")[0].focussed).toBe(true);
    };
    LoadTestTests.prototype.noTestsReturnsEmptyArray = function () {
        var fileRequirer = new file_requirer_1.FileRequirer();
        var testFixtureInstance = {};
        var testFixtureSet = {
            testFixture: function () { return testFixtureInstance; }
        };
        var spy = alsatian_core_1.SpyOn(fileRequirer, "require");
        spy.andStub();
        spy.andReturn(testFixtureSet);
        var testLoader = new test_loader_1.TestLoader(fileRequirer);
        alsatian_core_1.Expect(testLoader.loadTestFixture("test").length).toBe(0);
    };
    LoadTestTests.prototype.descriptionShouldBeSetWhenNotConstructor = function (propertyName) {
        var fileRequirer = new file_requirer_1.FileRequirer();
        var testFixtureInstance = {};
        Reflect.defineMetadata(alsatian_core_1.METADATA_KEYS.TESTS, [], testFixtureInstance);
        var testFixtureSet = {};
        testFixtureSet[propertyName] = function () { return testFixtureInstance; };
        var spy = alsatian_core_1.SpyOn(fileRequirer, "require");
        spy.andStub();
        spy.andReturn(testFixtureSet);
        var testLoader = new test_loader_1.TestLoader(fileRequirer);
        alsatian_core_1.Expect(testLoader.loadTestFixture("test")[0].description).toBe(propertyName);
    };
    LoadTestTests.prototype.descriptionShouldBeSetToConstructorNameWhenConstructor = function (constructorName) {
        var fileRequirer = new file_requirer_1.FileRequirer();
        var testFixtureInstance = {};
        Reflect.defineMetadata(alsatian_core_1.METADATA_KEYS.TESTS, [], testFixtureInstance);
        var testFixtureSet = function () { return testFixtureInstance; };
        alsatian_core_1.SpyOnProperty(testFixtureSet, "name").andReturnValue(constructorName);
        var spy = alsatian_core_1.SpyOn(fileRequirer, "require");
        spy.andStub();
        spy.andReturn(testFixtureSet);
        var testLoader = new test_loader_1.TestLoader(fileRequirer);
        alsatian_core_1.Expect(testLoader.loadTestFixture("test")[0].description).toBe(constructorName);
    };
    LoadTestTests.prototype.descriptionShouldBeSetWhenMetadataOnDefault = function (testFixtureDescription) {
        var fileRequirer = new file_requirer_1.FileRequirer();
        var testFixtureInstance = {};
        Reflect.defineMetadata(alsatian_core_1.METADATA_KEYS.TESTS, [], testFixtureInstance);
        var testFixtureSet = function () { return testFixtureInstance; };
        var testFixtureMetadata = new core_1.TestFixture(testFixtureDescription);
        Reflect.defineMetadata(alsatian_core_1.METADATA_KEYS.TEST_FIXTURE, testFixtureMetadata, testFixtureSet);
        var spy = alsatian_core_1.SpyOn(fileRequirer, "require");
        spy.andStub();
        spy.andReturn(testFixtureSet);
        var testLoader = new test_loader_1.TestLoader(fileRequirer);
        alsatian_core_1.Expect(testLoader.loadTestFixture("test")[0].description).toBe(testFixtureDescription);
    };
    LoadTestTests.prototype.descriptionShouldBeSetWhenMetadataOnExportedMember = function (testFixtureDescription) {
        var fileRequirer = new file_requirer_1.FileRequirer();
        var testFixtureInstance = {};
        Reflect.defineMetadata(alsatian_core_1.METADATA_KEYS.TESTS, [], testFixtureInstance);
        var testFixtureSet = {
            testFixture: function () { return testFixtureInstance; }
        };
        var testFixtureMetadata = new core_1.TestFixture(testFixtureDescription);
        Reflect.defineMetadata(alsatian_core_1.METADATA_KEYS.TEST_FIXTURE, testFixtureMetadata, testFixtureSet.testFixture);
        var spy = alsatian_core_1.SpyOn(fileRequirer, "require");
        spy.andStub();
        spy.andReturn(testFixtureSet);
        var testLoader = new test_loader_1.TestLoader(fileRequirer);
        alsatian_core_1.Expect(testLoader.loadTestFixture("test")[0].description).toBe(testFixtureDescription);
    };
    LoadTestTests.prototype.shouldIgnoreTestsIfFixtureIgnored = function () {
        var fileRequirer = new file_requirer_1.FileRequirer();
        var testOne = new test_builder_1.TestBuilder()
            .withKey("testOne")
            .addTestCase(new test_case_builder_1.TestCaseBuilder().build())
            .build();
        var testTwo = new test_builder_1.TestBuilder()
            .withKey("testTwo")
            .addTestCase(new test_case_builder_1.TestCaseBuilder().build())
            .build();
        var fixture = new test_fixture_builder_1.TestFixtureBuilder()
            .addTest(testOne)
            .addTest(testTwo)
            .build();
        var testFixtureSet = {
            testFixture: function () { return fixture; }
        };
        Reflect.defineMetadata(alsatian_core_1.METADATA_KEYS.IGNORE, true, testFixtureSet.testFixture);
        Reflect.defineMetadata(alsatian_core_1.METADATA_KEYS.TESTS, [testOne, testTwo], fixture);
        var spy = alsatian_core_1.SpyOn(fileRequirer, "require");
        spy.andStub();
        spy.andReturn(testFixtureSet);
        var testLoader = new test_loader_1.TestLoader(fileRequirer);
        var loadedFixture = testLoader.loadTestFixture("")[0]; // get the first (only) loaded fixture
        alsatian_core_1.Expect(loadedFixture.tests[0].ignored).toBe(true);
        alsatian_core_1.Expect(loadedFixture.tests[1].ignored).toBe(true);
    };
    LoadTestTests.prototype.shouldIgnoreTestsWithReasonIfFixtureIgnored = function (reason) {
        var fileRequirer = new file_requirer_1.FileRequirer();
        var testOne = new test_builder_1.TestBuilder()
            .withKey("testOne")
            .addTestCase(new test_case_builder_1.TestCaseBuilder().build())
            .build();
        var testTwo = new test_builder_1.TestBuilder()
            .withKey("testTwo")
            .addTestCase(new test_case_builder_1.TestCaseBuilder().build())
            .build();
        var fixture = new test_fixture_builder_1.TestFixtureBuilder()
            .addTest(testOne)
            .addTest(testTwo)
            .build();
        var testFixtureSet = {
            testFixture: function () { return fixture; }
        };
        Reflect.defineMetadata(alsatian_core_1.METADATA_KEYS.IGNORE, true, testFixtureSet.testFixture);
        Reflect.defineMetadata(alsatian_core_1.METADATA_KEYS.IGNORE_REASON, reason, testFixtureSet.testFixture);
        Reflect.defineMetadata(alsatian_core_1.METADATA_KEYS.TESTS, [testOne, testTwo], fixture);
        var spy = alsatian_core_1.SpyOn(fileRequirer, "require");
        spy.andStub();
        spy.andReturn(testFixtureSet);
        var testLoader = new test_loader_1.TestLoader(fileRequirer);
        var loadedFixture = testLoader.loadTestFixture("")[0]; // get the first (only) loaded fixture
        alsatian_core_1.Expect(loadedFixture.tests[0].ignoreReason).toBe(reason);
        alsatian_core_1.Expect(loadedFixture.tests[1].ignoreReason).toBe(reason);
    };
    LoadTestTests.prototype.shouldWriteToErrorLogWithCorrectMessage = function (path, stack) {
        var fileRequirer = new file_requirer_1.FileRequirer();
        var error = new Error("foo");
        error.stack = stack;
        var spy = alsatian_core_1.SpyOn(fileRequirer, "require");
        spy.andStub();
        spy.andCall(function () {
            throw error;
        });
        var testLoader = new test_loader_1.TestLoader(fileRequirer);
        testLoader.loadTestFixture(path);
        alsatian_core_1.Expect(process.stderr.write).toHaveBeenCalledWith("ERROR LOADING FILE: " + path + "\n");
        alsatian_core_1.Expect(process.stderr.write).toHaveBeenCalledWith(error.stack);
        alsatian_core_1.Expect(process.exit).toHaveBeenCalledWith(1);
    };
    __decorate([
        alsatian_core_1.Setup,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], LoadTestTests.prototype, "_spyOnProcess", null);
    __decorate([
        alsatian_core_1.Teardown,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], LoadTestTests.prototype, "_resetProcess", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], LoadTestTests.prototype, "ignoredShouldBeFalseByDefault", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], LoadTestTests.prototype, "ignoredShouldBeTrueIfMetadataSet", null);
    __decorate([
        alsatian_core_1.TestCase("first reason"),
        alsatian_core_1.TestCase("the second, and the last"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], LoadTestTests.prototype, "ignoreReasonShouldBeSetFromMetadata", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], LoadTestTests.prototype, "focussedShouldBeFalseByDefault", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], LoadTestTests.prototype, "focussedShouldBeTrueIfMetadataSet", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], LoadTestTests.prototype, "noTestsReturnsEmptyArray", null);
    __decorate([
        alsatian_core_1.TestCase("something"),
        alsatian_core_1.TestCase("wow, this is super!"),
        alsatian_core_1.TestCase("Mega Hyper AWESOME test..."),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], LoadTestTests.prototype, "descriptionShouldBeSetWhenNotConstructor", null);
    __decorate([
        alsatian_core_1.TestCase("something"),
        alsatian_core_1.TestCase("wow, this is super!"),
        alsatian_core_1.TestCase("Mega Hyper AWESOME test..."),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], LoadTestTests.prototype, "descriptionShouldBeSetToConstructorNameWhenConstructor", null);
    __decorate([
        alsatian_core_1.TestCase("something"),
        alsatian_core_1.TestCase("wow, this is super!"),
        alsatian_core_1.TestCase("Mega Hyper AWESOME test..."),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], LoadTestTests.prototype, "descriptionShouldBeSetWhenMetadataOnDefault", null);
    __decorate([
        alsatian_core_1.TestCase("something"),
        alsatian_core_1.TestCase("wow, this is super!"),
        alsatian_core_1.TestCase("Mega Hyper AWESOME test..."),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], LoadTestTests.prototype, "descriptionShouldBeSetWhenMetadataOnExportedMember", null);
    __decorate([
        alsatian_core_1.TestCase("first test ignore reason"),
        alsatian_core_1.TestCase("another one!"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], LoadTestTests.prototype, "shouldIgnoreTestsWithReasonIfFixtureIgnored", null);
    __decorate([
        alsatian_core_1.TestCase("/path/", "stack_trace"),
        alsatian_core_1.TestCase("C:\\some_other\\path", "a-bad-error-trace"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", void 0)
    ], LoadTestTests.prototype, "shouldWriteToErrorLogWithCorrectMessage", null);
    LoadTestTests = __decorate([
        alsatian_core_1.TestFixture("Load Tests")
    ], LoadTestTests);
    return LoadTestTests;
}());
exports.LoadTestTests = LoadTestTests;
//# sourceMappingURL=load-test-fixture.spec.js.map