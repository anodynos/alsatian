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
var setup_fixture_decorator_1 = require("../../../core/decorators/setup-fixture-decorator");
var SetupFixtureDecoratorTests = /** @class */ (function () {
    function SetupFixtureDecoratorTests() {
    }
    SetupFixtureDecoratorTests.prototype.setupFixtureFunctionAddedAsMetaData = function () {
        var testFixture = {};
        setup_fixture_decorator_1.SetupFixture(testFixture, "test", null);
        var setupFixtureFunctions = Reflect.getMetadata(alsatian_core_1.METADATA_KEYS.SETUP_FIXTURE, testFixture);
        alsatian_core_1.Expect(setupFixtureFunctions).toBeDefined();
        alsatian_core_1.Expect(setupFixtureFunctions).not.toBeNull();
    };
    SetupFixtureDecoratorTests.prototype.setupFixtureFunctionKeyMetaDataAdded = function (key) {
        var testFixture = {};
        setup_fixture_decorator_1.SetupFixture(testFixture, key, null);
        var setupFixtureFunctions = Reflect.getMetadata(alsatian_core_1.METADATA_KEYS.SETUP_FIXTURE, testFixture);
        alsatian_core_1.Expect(setupFixtureFunctions[0].propertyKey).toBe(key);
    };
    SetupFixtureDecoratorTests.prototype.setupFixtureFunctionIsAsyncMetaDataAdded = function (key) {
        var testFixture = {};
        setup_fixture_decorator_1.SetupFixture(testFixture, key, null);
        var setupFixtureFunctions = Reflect.getMetadata(alsatian_core_1.METADATA_KEYS.SETUP_FIXTURE, testFixture);
        alsatian_core_1.Expect(setupFixtureFunctions[0].isAsync).toBe(false);
    };
    SetupFixtureDecoratorTests.prototype.correctTestCountAdded = function (setupFixtureFunctionCount) {
        var testFixture = {};
        for (var i = 0; i < setupFixtureFunctionCount; i++) {
            setup_fixture_decorator_1.SetupFixture(testFixture, "key " + i, null);
        }
        var setupFixtureFunctions = Reflect.getMetadata(alsatian_core_1.METADATA_KEYS.SETUP_FIXTURE, testFixture);
        alsatian_core_1.Expect(setupFixtureFunctions.length).toBe(setupFixtureFunctionCount);
    };
    __decorate([
        alsatian_core_1.Test("setup fixture function added to metadata"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SetupFixtureDecoratorTests.prototype, "setupFixtureFunctionAddedAsMetaData", null);
    __decorate([
        alsatian_core_1.TestCase("key"),
        alsatian_core_1.TestCase("another key"),
        alsatian_core_1.TestCase("something-different"),
        alsatian_core_1.Test("setup fixture function added to metadata with correct key"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], SetupFixtureDecoratorTests.prototype, "setupFixtureFunctionKeyMetaDataAdded", null);
    __decorate([
        alsatian_core_1.TestCase("key"),
        alsatian_core_1.TestCase("another key"),
        alsatian_core_1.TestCase("something-different"),
        alsatian_core_1.Test("setup fixture function added to metadata with isAsync = false"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], SetupFixtureDecoratorTests.prototype, "setupFixtureFunctionIsAsyncMetaDataAdded", null);
    __decorate([
        alsatian_core_1.TestCase(1),
        alsatian_core_1.TestCase(2),
        alsatian_core_1.TestCase(42),
        alsatian_core_1.Test("multiple setup fixture functions added to metadata"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], SetupFixtureDecoratorTests.prototype, "correctTestCountAdded", null);
    SetupFixtureDecoratorTests = __decorate([
        alsatian_core_1.TestFixture("@SetupFixture decorator tests")
    ], SetupFixtureDecoratorTests);
    return SetupFixtureDecoratorTests;
}());
exports.SetupFixtureDecoratorTests = SetupFixtureDecoratorTests;
//# sourceMappingURL=setup-fixture.spec.js.map