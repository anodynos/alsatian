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
var async_setup_decorator_1 = require("../../../core/decorators/async-setup-decorator");
var AsyncSetupDecoratorTests = /** @class */ (function () {
    function AsyncSetupDecoratorTests() {
    }
    AsyncSetupDecoratorTests.prototype.setupFunctionAddedAsMetaData = function () {
        var testFixture = {};
        async_setup_decorator_1.AsyncSetup(testFixture, "test");
        var setupFunctions = Reflect.getMetadata(alsatian_core_1.METADATA_KEYS.SETUP, testFixture);
        alsatian_core_1.Expect(setupFunctions).toBeDefined();
        alsatian_core_1.Expect(setupFunctions).not.toBeNull();
    };
    AsyncSetupDecoratorTests.prototype.setupFunctionKeyMetaDataAdded = function (key) {
        var testFixture = {};
        async_setup_decorator_1.AsyncSetup(testFixture, key);
        var setupFunctions = Reflect.getMetadata(alsatian_core_1.METADATA_KEYS.SETUP, testFixture);
        alsatian_core_1.Expect(setupFunctions[0].propertyKey).toBe(key);
    };
    AsyncSetupDecoratorTests.prototype.setupFunctionIsAsyncMetaDataAdded = function (key) {
        var testFixture = {};
        async_setup_decorator_1.AsyncSetup(testFixture, key);
        var setupFunctions = Reflect.getMetadata(alsatian_core_1.METADATA_KEYS.SETUP, testFixture);
        alsatian_core_1.Expect(setupFunctions[0].isAsync).toBe(true);
    };
    AsyncSetupDecoratorTests.prototype.correctTestCountAdded = function (setupFunctionCount) {
        var testFixture = {};
        for (var i = 0; i < setupFunctionCount; i++) {
            async_setup_decorator_1.AsyncSetup(testFixture, "key " + i);
        }
        var setupFunctions = Reflect.getMetadata(alsatian_core_1.METADATA_KEYS.SETUP, testFixture);
        alsatian_core_1.Expect(setupFunctions.length).toBe(setupFunctionCount);
    };
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AsyncSetupDecoratorTests.prototype, "setupFunctionAddedAsMetaData", null);
    __decorate([
        alsatian_core_1.TestCase("key"),
        alsatian_core_1.TestCase("another key"),
        alsatian_core_1.TestCase("something-different"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], AsyncSetupDecoratorTests.prototype, "setupFunctionKeyMetaDataAdded", null);
    __decorate([
        alsatian_core_1.TestCase("key"),
        alsatian_core_1.TestCase("another key"),
        alsatian_core_1.TestCase("something-different"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], AsyncSetupDecoratorTests.prototype, "setupFunctionIsAsyncMetaDataAdded", null);
    __decorate([
        alsatian_core_1.TestCase(1),
        alsatian_core_1.TestCase(2),
        alsatian_core_1.TestCase(42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], AsyncSetupDecoratorTests.prototype, "correctTestCountAdded", null);
    return AsyncSetupDecoratorTests;
}());
exports.AsyncSetupDecoratorTests = AsyncSetupDecoratorTests;
//# sourceMappingURL=async-setup-decorator.spec.js.map