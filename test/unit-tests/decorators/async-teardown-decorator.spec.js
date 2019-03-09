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
var async_teardown_decorator_1 = require("../../../core/decorators/async-teardown-decorator");
var AsyncTeardownDecoratorTests = /** @class */ (function () {
    function AsyncTeardownDecoratorTests() {
    }
    AsyncTeardownDecoratorTests.prototype.teardownFunctionAddedAsMetaData = function () {
        var testFixture = {};
        async_teardown_decorator_1.AsyncTeardown(testFixture, "test", null);
        var teardownFunctions = Reflect.getMetadata(alsatian_core_1.METADATA_KEYS.TEARDOWN, testFixture);
        alsatian_core_1.Expect(teardownFunctions).toBeDefined();
        alsatian_core_1.Expect(teardownFunctions).not.toBeNull();
    };
    AsyncTeardownDecoratorTests.prototype.teardownFunctionKeyMetaDataAdded = function (key) {
        var testFixture = {};
        async_teardown_decorator_1.AsyncTeardown(testFixture, key, null);
        var teardownFunctions = Reflect.getMetadata(alsatian_core_1.METADATA_KEYS.TEARDOWN, testFixture);
        alsatian_core_1.Expect(teardownFunctions[0].propertyKey).toBe(key);
    };
    AsyncTeardownDecoratorTests.prototype.teardownFunctionIsAsyncMetaDataAdded = function (key) {
        var testFixture = {};
        async_teardown_decorator_1.AsyncTeardown(testFixture, key, null);
        var teardownFunctions = Reflect.getMetadata(alsatian_core_1.METADATA_KEYS.TEARDOWN, testFixture);
        alsatian_core_1.Expect(teardownFunctions[0].isAsync).toBe(true);
    };
    AsyncTeardownDecoratorTests.prototype.correctTestCountAdded = function (teardownFunctionCount) {
        var testFixture = {};
        for (var i = 0; i < teardownFunctionCount; i++) {
            async_teardown_decorator_1.AsyncTeardown(testFixture, "key " + i, null);
        }
        var teardownFunctions = Reflect.getMetadata(alsatian_core_1.METADATA_KEYS.TEARDOWN, testFixture);
        alsatian_core_1.Expect(teardownFunctions.length).toBe(teardownFunctionCount);
    };
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AsyncTeardownDecoratorTests.prototype, "teardownFunctionAddedAsMetaData", null);
    __decorate([
        alsatian_core_1.TestCase("key"),
        alsatian_core_1.TestCase("another key"),
        alsatian_core_1.TestCase("something-different"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], AsyncTeardownDecoratorTests.prototype, "teardownFunctionKeyMetaDataAdded", null);
    __decorate([
        alsatian_core_1.TestCase("key"),
        alsatian_core_1.TestCase("another key"),
        alsatian_core_1.TestCase("something-different"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], AsyncTeardownDecoratorTests.prototype, "teardownFunctionIsAsyncMetaDataAdded", null);
    __decorate([
        alsatian_core_1.TestCase(1),
        alsatian_core_1.TestCase(2),
        alsatian_core_1.TestCase(42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], AsyncTeardownDecoratorTests.prototype, "correctTestCountAdded", null);
    return AsyncTeardownDecoratorTests;
}());
exports.AsyncTeardownDecoratorTests = AsyncTeardownDecoratorTests;
//# sourceMappingURL=async-teardown-decorator.spec.js.map