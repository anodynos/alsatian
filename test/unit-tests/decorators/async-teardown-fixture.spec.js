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
var alsatian_core_1 = require("../../../core/alsatian-core");
var async_teardown_fixture_decorator_1 = require("../../../core/decorators/async-teardown-fixture-decorator");
var AsyncTeadownFixtureDecoratorTests = /** @class */ (function () {
    function AsyncTeadownFixtureDecoratorTests() {
    }
    AsyncTeadownFixtureDecoratorTests.prototype.asyncTeardownFixtureFunctionAddedAsMetaData = function () {
        var testFixture = {};
        async_teardown_fixture_decorator_1.AsyncTeardownFixture(testFixture, "test", null);
        var asyncTeardownFixtureFunctions = Reflect.getMetadata(alsatian_core_1.METADATA_KEYS.TEARDOWN_FIXTURE, testFixture);
        alsatian_core_1.Expect(asyncTeardownFixtureFunctions).toBeDefined();
        alsatian_core_1.Expect(asyncTeardownFixtureFunctions).not.toBeNull();
    };
    AsyncTeadownFixtureDecoratorTests.prototype.asyncTeardownFixtureFunctionKeyMetaDataAdded = function (key) {
        var testFixture = {};
        async_teardown_fixture_decorator_1.AsyncTeardownFixture(testFixture, key, null);
        var asyncTeardownFixtureFunctions = Reflect.getMetadata(alsatian_core_1.METADATA_KEYS.TEARDOWN_FIXTURE, testFixture);
        alsatian_core_1.Expect(asyncTeardownFixtureFunctions[0].propertyKey).toBe(key);
    };
    AsyncTeadownFixtureDecoratorTests.prototype.asyncTeardownFixtureFunctionIsAsyncMetaDataAdded = function (key) {
        var testFixture = {};
        async_teardown_fixture_decorator_1.AsyncTeardownFixture(testFixture, key, null);
        var asyncTeardownFixtureFunctions = Reflect.getMetadata(alsatian_core_1.METADATA_KEYS.TEARDOWN_FIXTURE, testFixture);
        alsatian_core_1.Expect(asyncTeardownFixtureFunctions[0].isAsync).toBe(true);
    };
    AsyncTeadownFixtureDecoratorTests.prototype.correctTestCountAdded = function (asyncTeardownFixtureFunctionCount) {
        var testFixture = {};
        for (var i = 0; i < asyncTeardownFixtureFunctionCount; i++) {
            async_teardown_fixture_decorator_1.AsyncTeardownFixture(testFixture, "key " + i, null);
        }
        var asyncTeardownFixtureFunctions = Reflect.getMetadata(alsatian_core_1.METADATA_KEYS.TEARDOWN_FIXTURE, testFixture);
        alsatian_core_1.Expect(asyncTeardownFixtureFunctions.length).toBe(asyncTeardownFixtureFunctionCount);
    };
    __decorate([
        alsatian_core_1.Test("async teardown fixture function added to metadata"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AsyncTeadownFixtureDecoratorTests.prototype, "asyncTeardownFixtureFunctionAddedAsMetaData", null);
    __decorate([
        alsatian_core_1.TestCase("key"),
        alsatian_core_1.TestCase("another key"),
        alsatian_core_1.TestCase("something-different"),
        alsatian_core_1.Test("async teardown fixture function added to metadata with correct key"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], AsyncTeadownFixtureDecoratorTests.prototype, "asyncTeardownFixtureFunctionKeyMetaDataAdded", null);
    __decorate([
        alsatian_core_1.TestCase("key"),
        alsatian_core_1.TestCase("another key"),
        alsatian_core_1.TestCase("something-different"),
        alsatian_core_1.Test("async teardown fixture function added to metadata with isAsync = true"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], AsyncTeadownFixtureDecoratorTests.prototype, "asyncTeardownFixtureFunctionIsAsyncMetaDataAdded", null);
    __decorate([
        alsatian_core_1.TestCase(1),
        alsatian_core_1.TestCase(2),
        alsatian_core_1.TestCase(42),
        alsatian_core_1.Test("multiple async teardown fixture functions added to metadata"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], AsyncTeadownFixtureDecoratorTests.prototype, "correctTestCountAdded", null);
    AsyncTeadownFixtureDecoratorTests = __decorate([
        alsatian_core_1.TestFixture("@AsyncTeardownFixture decorator tests")
    ], AsyncTeadownFixtureDecoratorTests);
    return AsyncTeadownFixtureDecoratorTests;
}());
exports.AsyncTeadownFixtureDecoratorTests = AsyncTeadownFixtureDecoratorTests;
//# sourceMappingURL=async-teardown-fixture.spec.js.map