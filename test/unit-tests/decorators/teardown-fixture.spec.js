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
var teardown_fixture_decorator_1 = require("../../../core/decorators/teardown-fixture-decorator");
var TeardownFixtureDecoratorTests = /** @class */ (function () {
    function TeardownFixtureDecoratorTests() {
    }
    TeardownFixtureDecoratorTests.prototype.teardownFixtureFunctionAddedAsMetaData = function () {
        var testFixture = {};
        teardown_fixture_decorator_1.TeardownFixture(testFixture, "test", null);
        var teardownFixtureFunctions = Reflect.getMetadata(alsatian_core_1.METADATA_KEYS.TEARDOWN_FIXTURE, testFixture);
        alsatian_core_1.Expect(teardownFixtureFunctions).toBeDefined();
        alsatian_core_1.Expect(teardownFixtureFunctions).not.toBeNull();
    };
    TeardownFixtureDecoratorTests.prototype.teardownFixtureFunctionKeyMetaDataAdded = function (key) {
        var testFixture = {};
        teardown_fixture_decorator_1.TeardownFixture(testFixture, key, null);
        var teardownFixtureFunctions = Reflect.getMetadata(alsatian_core_1.METADATA_KEYS.TEARDOWN_FIXTURE, testFixture);
        alsatian_core_1.Expect(teardownFixtureFunctions[0].propertyKey).toBe(key);
    };
    TeardownFixtureDecoratorTests.prototype.teardownFixtureFunctionIsAsyncMetaDataAdded = function (key) {
        var testFixture = {};
        teardown_fixture_decorator_1.TeardownFixture(testFixture, key, null);
        var teardownFixtureFunctions = Reflect.getMetadata(alsatian_core_1.METADATA_KEYS.TEARDOWN_FIXTURE, testFixture);
        alsatian_core_1.Expect(teardownFixtureFunctions[0].isAsync).toBe(false);
    };
    TeardownFixtureDecoratorTests.prototype.correctTestCountAdded = function (teardownFixtureFunctionCount) {
        var testFixture = {};
        for (var i = 0; i < teardownFixtureFunctionCount; i++) {
            teardown_fixture_decorator_1.TeardownFixture(testFixture, "key " + i, null);
        }
        var teardownFixtureFunctions = Reflect.getMetadata(alsatian_core_1.METADATA_KEYS.TEARDOWN_FIXTURE, testFixture);
        alsatian_core_1.Expect(teardownFixtureFunctions.length).toBe(teardownFixtureFunctionCount);
    };
    __decorate([
        alsatian_core_1.Test("teardown fixture function added to metadata"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TeardownFixtureDecoratorTests.prototype, "teardownFixtureFunctionAddedAsMetaData", null);
    __decorate([
        alsatian_core_1.TestCase("key"),
        alsatian_core_1.TestCase("another key"),
        alsatian_core_1.TestCase("something-different"),
        alsatian_core_1.Test("teardown fixture function added to metadata with correct key"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], TeardownFixtureDecoratorTests.prototype, "teardownFixtureFunctionKeyMetaDataAdded", null);
    __decorate([
        alsatian_core_1.TestCase("key"),
        alsatian_core_1.TestCase("another key"),
        alsatian_core_1.TestCase("something-different"),
        alsatian_core_1.Test("teardown fixture function added to metadata with isAsync = false"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], TeardownFixtureDecoratorTests.prototype, "teardownFixtureFunctionIsAsyncMetaDataAdded", null);
    __decorate([
        alsatian_core_1.TestCase(1),
        alsatian_core_1.TestCase(2),
        alsatian_core_1.TestCase(42),
        alsatian_core_1.Test("multiple teardown fixture functions added to metadata"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], TeardownFixtureDecoratorTests.prototype, "correctTestCountAdded", null);
    TeardownFixtureDecoratorTests = __decorate([
        alsatian_core_1.TestFixture("@TeardownFixture decorator tests")
    ], TeardownFixtureDecoratorTests);
    return TeardownFixtureDecoratorTests;
}());
exports.TeardownFixtureDecoratorTests = TeardownFixtureDecoratorTests;
//# sourceMappingURL=teardown-fixture.spec.js.map