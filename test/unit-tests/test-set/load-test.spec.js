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
var test_set_1 = require("../../../core/test-set");
var path_1 = require("path");
var LoadTestTests = /** @class */ (function () {
    function LoadTestTests() {
    }
    LoadTestTests.prototype.noTestsAtLocationGivesNoTestFixtures = function () {
        var testLoader = new core_1.TestLoader(null);
        var testLoaderSpy = alsatian_core_1.SpyOn(testLoader, "loadTestFixture");
        testLoaderSpy.andReturn([]);
        testLoaderSpy.andStub();
        var globHelper = new core_1.GlobHelper();
        alsatian_core_1.SpyOn(globHelper, "isGlob").andReturn(false);
        var testSet = new test_set_1.TestSet(testLoader, globHelper);
        testSet.addTestsFromFiles("no-tests");
        alsatian_core_1.Expect(testSet.testFixtures.length).toBe(0);
    };
    LoadTestTests.prototype.absolutePathsAreResolved = function (path) {
        var testLoader = new core_1.TestLoader(null);
        var testLoaderSpy = alsatian_core_1.SpyOn(testLoader, "loadTestFixture");
        testLoaderSpy.andReturn([]);
        testLoaderSpy.andStub();
        var globHelper = new core_1.GlobHelper();
        alsatian_core_1.SpyOn(globHelper, "isGlob").andReturn(false);
        var testSet = new test_set_1.TestSet(testLoader, globHelper);
        testSet.addTestsFromFiles(path);
        alsatian_core_1.Expect(testLoader.loadTestFixture).toHaveBeenCalledWith(path_1.resolve(path));
    };
    LoadTestTests.prototype.relativePathsAreResolved = function (path) {
        var testLoader = new core_1.TestLoader(null);
        var testLoaderSpy = alsatian_core_1.SpyOn(testLoader, "loadTestFixture");
        testLoaderSpy.andReturn([]);
        testLoaderSpy.andStub();
        var globHelper = new core_1.GlobHelper();
        alsatian_core_1.SpyOn(globHelper, "isGlob").andReturn(false);
        var testSet = new test_set_1.TestSet(testLoader, globHelper);
        testSet.addTestsFromFiles(path);
        alsatian_core_1.Expect(testLoader.loadTestFixture).toHaveBeenCalledWith(path_1.resolve(path));
    };
    LoadTestTests.prototype.absoluteGlobsAreResolved = function (path) {
        var testLoader = new core_1.TestLoader(null);
        var testLoaderSpy = alsatian_core_1.SpyOn(testLoader, "loadTestFixture");
        testLoaderSpy.andReturn([]);
        testLoaderSpy.andStub();
        var globHelper = new core_1.GlobHelper();
        alsatian_core_1.SpyOn(globHelper, "resolve").andReturn([]);
        var testSet = new test_set_1.TestSet(testLoader, globHelper);
        testSet.addTestsFromFiles(path);
        alsatian_core_1.Expect(globHelper.resolve).toHaveBeenCalledWith(path_1.resolve(path));
    };
    LoadTestTests.prototype.relativeGlobsAreResolved = function (path) {
        var testLoader = new core_1.TestLoader(null);
        var testLoaderSpy = alsatian_core_1.SpyOn(testLoader, "loadTestFixture");
        testLoaderSpy.andReturn([]);
        testLoaderSpy.andStub();
        var globHelper = new core_1.GlobHelper();
        alsatian_core_1.SpyOn(globHelper, "resolve").andReturn([]);
        var testSet = new test_set_1.TestSet(testLoader, globHelper);
        testSet.addTestsFromFiles(path);
        alsatian_core_1.Expect(globHelper.resolve).toHaveBeenCalledWith(path_1.resolve(path));
    };
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], LoadTestTests.prototype, "noTestsAtLocationGivesNoTestFixtures", null);
    __decorate([
        alsatian_core_1.TestCase("/test/spec.js"),
        alsatian_core_1.TestCase("/another/spec.somewhere.js"),
        alsatian_core_1.Test("absolute paths are resolved"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], LoadTestTests.prototype, "absolutePathsAreResolved", null);
    __decorate([
        alsatian_core_1.TestCase("./spec.js"),
        alsatian_core_1.TestCase("spec.somewhere.js"),
        alsatian_core_1.TestCase("../another.test.js"),
        alsatian_core_1.Test("relative paths are resolved"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], LoadTestTests.prototype, "relativePathsAreResolved", null);
    __decorate([
        alsatian_core_1.TestCase("/*/spec.js"),
        alsatian_core_1.TestCase("/another/**/*.spec.somewhere.js"),
        alsatian_core_1.Test("absolute globs are resolved"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], LoadTestTests.prototype, "absoluteGlobsAreResolved", null);
    __decorate([
        alsatian_core_1.TestCase("./*.js"),
        alsatian_core_1.TestCase("**/*.js"),
        alsatian_core_1.TestCase("../*.test.js"),
        alsatian_core_1.Test("relative globs are resolved"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], LoadTestTests.prototype, "relativeGlobsAreResolved", null);
    return LoadTestTests;
}());
exports.LoadTestTests = LoadTestTests;
//# sourceMappingURL=load-test.spec.js.map