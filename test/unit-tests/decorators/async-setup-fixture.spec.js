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
var async_setup_fixture_decorator_1 = require("../../../core/decorators/async-setup-fixture-decorator");
var AsyncSetupFixtureDecoratorTests = /** @class */ (function () {
    function AsyncSetupFixtureDecoratorTests() {
    }
    AsyncSetupFixtureDecoratorTests.prototype.asyncSetupFixtureFunctionAddedAsMetaData = function () {
        var testFixture = {};
        async_setup_fixture_decorator_1.AsyncSetupFixture(testFixture, "test");
        var asyncSetupFixtureFunctions = Reflect.getMetadata(alsatian_core_1.METADATA_KEYS.SETUP_FIXTURE, testFixture);
        alsatian_core_1.Expect(asyncSetupFixtureFunctions).toBeDefined();
        alsatian_core_1.Expect(asyncSetupFixtureFunctions).not.toBeNull();
    };
    AsyncSetupFixtureDecoratorTests.prototype.asyncSetupFixtureFunctionKeyMetaDataAdded = function (key) {
        var testFixture = {};
        async_setup_fixture_decorator_1.AsyncSetupFixture(testFixture, key);
        var asyncSetupFixtureFunctions = Reflect.getMetadata(alsatian_core_1.METADATA_KEYS.SETUP_FIXTURE, testFixture);
        alsatian_core_1.Expect(asyncSetupFixtureFunctions[0].propertyKey).toBe(key);
    };
    AsyncSetupFixtureDecoratorTests.prototype.asyncSetupFixtureFunctionIsAsyncMetaDataAdded = function (key) {
        var testFixture = {};
        async_setup_fixture_decorator_1.AsyncSetupFixture(testFixture, key);
        var asyncSetupFixtureFunctions = Reflect.getMetadata(alsatian_core_1.METADATA_KEYS.SETUP_FIXTURE, testFixture);
        alsatian_core_1.Expect(asyncSetupFixtureFunctions[0].isAsync).toBe(true);
    };
    AsyncSetupFixtureDecoratorTests.prototype.correctTestCountAdded = function (asyncSetupFixtureFunctionCount) {
        var testFixture = {};
        for (var i = 0; i < asyncSetupFixtureFunctionCount; i++) {
            async_setup_fixture_decorator_1.AsyncSetupFixture(testFixture, "key " + i);
        }
        var asyncSetupFixtureFunctions = Reflect.getMetadata(alsatian_core_1.METADATA_KEYS.SETUP_FIXTURE, testFixture);
        alsatian_core_1.Expect(asyncSetupFixtureFunctions.length).toBe(asyncSetupFixtureFunctionCount);
    };
    __decorate([
        alsatian_core_1.Test("async setup fixture function added to metadata"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AsyncSetupFixtureDecoratorTests.prototype, "asyncSetupFixtureFunctionAddedAsMetaData", null);
    __decorate([
        alsatian_core_1.TestCase("key"),
        alsatian_core_1.TestCase("another key"),
        alsatian_core_1.TestCase("something-different"),
        alsatian_core_1.Test("async setup fixture function added to metadata with correct key"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], AsyncSetupFixtureDecoratorTests.prototype, "asyncSetupFixtureFunctionKeyMetaDataAdded", null);
    __decorate([
        alsatian_core_1.TestCase("key"),
        alsatian_core_1.TestCase("another key"),
        alsatian_core_1.TestCase("something-different"),
        alsatian_core_1.Test("async setup fixture function added to metadata with isAsync = true"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], AsyncSetupFixtureDecoratorTests.prototype, "asyncSetupFixtureFunctionIsAsyncMetaDataAdded", null);
    __decorate([
        alsatian_core_1.TestCase(1),
        alsatian_core_1.TestCase(2),
        alsatian_core_1.TestCase(42),
        alsatian_core_1.Test("multiple async setup fixture functions added to metadata"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], AsyncSetupFixtureDecoratorTests.prototype, "correctTestCountAdded", null);
    AsyncSetupFixtureDecoratorTests = __decorate([
        alsatian_core_1.TestFixture("@AsyncSetupFixture decorator tests")
    ], AsyncSetupFixtureDecoratorTests);
    return AsyncSetupFixtureDecoratorTests;
}());
exports.AsyncSetupFixtureDecoratorTests = AsyncSetupFixtureDecoratorTests;
//# sourceMappingURL=async-setup-fixture.spec.js.map