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
var MultipleExportedFixtureTests = /** @class */ (function () {
    function MultipleExportedFixtureTests() {
    }
    MultipleExportedFixtureTests.prototype.shouldContainCorrectNumberOfTestFixtures = function (expectedTestFixtureCount) {
        var fileRequirer = new file_requirer_1.FileRequirer();
        var testFixtureInstance = {};
        Reflect.defineMetadata(alsatian_core_1.METADATA_KEYS.TESTS, [], testFixtureInstance);
        var testFixtureConstructor = function () { return testFixtureInstance; };
        var testFixtureWrapper = {};
        for (var i = 0; i < expectedTestFixtureCount; i++) {
            testFixtureWrapper["TestFixture" + i] = testFixtureConstructor;
        }
        var spy = alsatian_core_1.SpyOn(fileRequirer, "require");
        spy.andStub();
        spy.andReturn(testFixtureWrapper);
        var testLoader = new test_loader_1.TestLoader(fileRequirer);
        alsatian_core_1.Expect(testLoader.loadTestFixture("test").length).toBe(expectedTestFixtureCount);
    };
    MultipleExportedFixtureTests.prototype.shouldIgnoreNonTestFixtureConstructorAtStartOfWrapper = function () {
        var fileRequirer = new file_requirer_1.FileRequirer();
        var testFixtureInstance = {};
        Reflect.defineMetadata(alsatian_core_1.METADATA_KEYS.TESTS, [], testFixtureInstance);
        var testFixtureConstructor = function () { return testFixtureInstance; };
        var testFixtureWrapper = {
            firstThing: function () { },
            secondThing: testFixtureConstructor,
            thirdThing: testFixtureConstructor
        };
        var spy = alsatian_core_1.SpyOn(fileRequirer, "require");
        spy.andStub();
        spy.andReturn(testFixtureWrapper);
        var testLoader = new test_loader_1.TestLoader(fileRequirer);
        alsatian_core_1.Expect(testLoader.loadTestFixture("test").length).toBe(2);
    };
    MultipleExportedFixtureTests.prototype.shouldIgnoreObjectAtStartOfWrapper = function () {
        var fileRequirer = new file_requirer_1.FileRequirer();
        var testFixtureInstance = {};
        Reflect.defineMetadata(alsatian_core_1.METADATA_KEYS.TESTS, [], testFixtureInstance);
        var testFixtureConstructor = function () { return testFixtureInstance; };
        var testFixtureWrapper = {
            firstThing: {},
            secondThing: testFixtureConstructor,
            thirdThing: testFixtureConstructor
        };
        var spy = alsatian_core_1.SpyOn(fileRequirer, "require");
        spy.andStub();
        spy.andReturn(testFixtureWrapper);
        var testLoader = new test_loader_1.TestLoader(fileRequirer);
        alsatian_core_1.Expect(testLoader.loadTestFixture("test").length).toBe(2);
    };
    MultipleExportedFixtureTests.prototype.shouldIgnoreNonTestFixtureConstructorInMiddleOfWrapper = function () {
        var fileRequirer = new file_requirer_1.FileRequirer();
        var testFixtureInstance = {};
        Reflect.defineMetadata(alsatian_core_1.METADATA_KEYS.TESTS, [], testFixtureInstance);
        var testFixtureConstructor = function () { return testFixtureInstance; };
        var testFixtureWrapper = {
            firstThing: testFixtureConstructor,
            secondThing: function () { },
            thirdThing: testFixtureConstructor
        };
        var spy = alsatian_core_1.SpyOn(fileRequirer, "require");
        spy.andStub();
        spy.andReturn(testFixtureWrapper);
        var testLoader = new test_loader_1.TestLoader(fileRequirer);
        alsatian_core_1.Expect(testLoader.loadTestFixture("test").length).toBe(2);
    };
    MultipleExportedFixtureTests.prototype.shouldIgnoreObjectInMiddleOfWrapper = function () {
        var fileRequirer = new file_requirer_1.FileRequirer();
        var testFixtureInstance = {};
        Reflect.defineMetadata(alsatian_core_1.METADATA_KEYS.TESTS, [], testFixtureInstance);
        var testFixtureConstructor = function () { return testFixtureInstance; };
        var testFixtureWrapper = {
            firstThing: testFixtureConstructor,
            secondThing: {},
            thirdThing: testFixtureConstructor
        };
        var spy = alsatian_core_1.SpyOn(fileRequirer, "require");
        spy.andStub();
        spy.andReturn(testFixtureWrapper);
        var testLoader = new test_loader_1.TestLoader(fileRequirer);
        alsatian_core_1.Expect(testLoader.loadTestFixture("test").length).toBe(2);
    };
    MultipleExportedFixtureTests.prototype.shouldIgnoreNonTestFixtureConstructorAtEndOfWrapper = function () {
        var fileRequirer = new file_requirer_1.FileRequirer();
        var testFixtureInstance = {};
        Reflect.defineMetadata(alsatian_core_1.METADATA_KEYS.TESTS, [], testFixtureInstance);
        var testFixtureConstructor = function () { return testFixtureInstance; };
        var testFixtureWrapper = {
            firstThing: testFixtureConstructor,
            secondThing: testFixtureConstructor,
            thirdThing: function () { }
        };
        var spy = alsatian_core_1.SpyOn(fileRequirer, "require");
        spy.andStub();
        spy.andReturn(testFixtureWrapper);
        var testLoader = new test_loader_1.TestLoader(fileRequirer);
        alsatian_core_1.Expect(testLoader.loadTestFixture("test").length).toBe(2);
    };
    MultipleExportedFixtureTests.prototype.shouldIgnoreObjectAtEndOfWrapper = function () {
        var fileRequirer = new file_requirer_1.FileRequirer();
        var testFixtureInstance = {};
        Reflect.defineMetadata(alsatian_core_1.METADATA_KEYS.TESTS, [], testFixtureInstance);
        var testFixtureConstructor = function () { return testFixtureInstance; };
        var testFixtureWrapper = {
            firstThing: testFixtureConstructor,
            secondThing: testFixtureConstructor,
            thirdThing: function () { }
        };
        var spy = alsatian_core_1.SpyOn(fileRequirer, "require");
        spy.andStub();
        spy.andReturn(testFixtureWrapper);
        var testLoader = new test_loader_1.TestLoader(fileRequirer);
        alsatian_core_1.Expect(testLoader.loadTestFixture("test").length).toBe(2);
    };
    __decorate([
        alsatian_core_1.TestCase(1),
        alsatian_core_1.TestCase(2),
        alsatian_core_1.TestCase(42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], MultipleExportedFixtureTests.prototype, "shouldContainCorrectNumberOfTestFixtures", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MultipleExportedFixtureTests.prototype, "shouldIgnoreNonTestFixtureConstructorAtStartOfWrapper", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MultipleExportedFixtureTests.prototype, "shouldIgnoreObjectAtStartOfWrapper", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MultipleExportedFixtureTests.prototype, "shouldIgnoreNonTestFixtureConstructorInMiddleOfWrapper", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MultipleExportedFixtureTests.prototype, "shouldIgnoreObjectInMiddleOfWrapper", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MultipleExportedFixtureTests.prototype, "shouldIgnoreNonTestFixtureConstructorAtEndOfWrapper", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MultipleExportedFixtureTests.prototype, "shouldIgnoreObjectAtEndOfWrapper", null);
    return MultipleExportedFixtureTests;
}());
exports.MultipleExportedFixtureTests = MultipleExportedFixtureTests;
//# sourceMappingURL=multiple-exported-fixtures.spec.js.map