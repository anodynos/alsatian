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
var DefaultExportFixtureTests = /** @class */ (function () {
    function DefaultExportFixtureTests() {
    }
    DefaultExportFixtureTests.prototype.ignoredShouldBeFalseByDefault = function () {
        var fileRequirer = new file_requirer_1.FileRequirer();
        var testFixtureInstance = {};
        Reflect.defineMetadata(alsatian_core_1.METADATA_KEYS.TESTS, [], testFixtureInstance);
        var testFixtureConstructor = function () { return testFixtureInstance; };
        var spy = alsatian_core_1.SpyOn(fileRequirer, "require");
        spy.andStub();
        spy.andReturn(testFixtureConstructor);
        var testLoader = new test_loader_1.TestLoader(fileRequirer);
        alsatian_core_1.Expect(testLoader.loadTestFixture("test")[0].ignored).toBe(false);
    };
    DefaultExportFixtureTests.prototype.ignoredShouldBeTrueIfMetadataSet = function () {
        var fileRequirer = new file_requirer_1.FileRequirer();
        var testFixtureInstance = {};
        Reflect.defineMetadata(alsatian_core_1.METADATA_KEYS.TESTS, [], testFixtureInstance);
        var testFixtureConstructor = function () { return testFixtureInstance; };
        Reflect.defineMetadata(alsatian_core_1.METADATA_KEYS.IGNORE, true, testFixtureConstructor);
        var spy = alsatian_core_1.SpyOn(fileRequirer, "require");
        spy.andStub();
        spy.andReturn(testFixtureConstructor);
        var testLoader = new test_loader_1.TestLoader(fileRequirer);
        alsatian_core_1.Expect(testLoader.loadTestFixture("test")[0].ignored).toBe(true);
    };
    DefaultExportFixtureTests.prototype.focussedShouldBeFalseByDefault = function () {
        var fileRequirer = new file_requirer_1.FileRequirer();
        var testFixtureInstance = {};
        Reflect.defineMetadata(alsatian_core_1.METADATA_KEYS.TESTS, [], testFixtureInstance);
        var testFixtureConstructor = function () { return testFixtureInstance; };
        var spy = alsatian_core_1.SpyOn(fileRequirer, "require");
        spy.andStub();
        spy.andReturn(testFixtureConstructor);
        var testLoader = new test_loader_1.TestLoader(fileRequirer);
        alsatian_core_1.Expect(testLoader.loadTestFixture("test")[0].focussed).toBe(false);
    };
    DefaultExportFixtureTests.prototype.focussedShouldBeTrueIfMetadataSet = function () {
        var fileRequirer = new file_requirer_1.FileRequirer();
        var testFixtureInstance = {};
        Reflect.defineMetadata(alsatian_core_1.METADATA_KEYS.TESTS, [], testFixtureInstance);
        var testFixtureConstructor = function () { return testFixtureInstance; };
        Reflect.defineMetadata(alsatian_core_1.METADATA_KEYS.FOCUS, true, testFixtureConstructor);
        var spy = alsatian_core_1.SpyOn(fileRequirer, "require");
        spy.andStub();
        spy.andReturn(testFixtureConstructor);
        var testLoader = new test_loader_1.TestLoader(fileRequirer);
        alsatian_core_1.Expect(testLoader.loadTestFixture("test")[0].focussed).toBe(true);
    };
    DefaultExportFixtureTests.prototype.noTestsReturnsEmptyArray = function () {
        var fileRequirer = new file_requirer_1.FileRequirer();
        var testFixtureInstance = {};
        var testFixtureConstructor = function () { return testFixtureInstance; };
        var spy = alsatian_core_1.SpyOn(fileRequirer, "require");
        spy.andStub();
        spy.andReturn(testFixtureConstructor);
        var testLoader = new test_loader_1.TestLoader(fileRequirer);
        alsatian_core_1.Expect(testLoader.loadTestFixture("test").length).toBe(0);
    };
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DefaultExportFixtureTests.prototype, "ignoredShouldBeFalseByDefault", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DefaultExportFixtureTests.prototype, "ignoredShouldBeTrueIfMetadataSet", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DefaultExportFixtureTests.prototype, "focussedShouldBeFalseByDefault", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DefaultExportFixtureTests.prototype, "focussedShouldBeTrueIfMetadataSet", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DefaultExportFixtureTests.prototype, "noTestsReturnsEmptyArray", null);
    return DefaultExportFixtureTests;
}());
exports.DefaultExportFixtureTests = DefaultExportFixtureTests;
//# sourceMappingURL=default-export-fixture.spec.js.map