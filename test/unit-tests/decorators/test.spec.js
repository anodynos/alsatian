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
var test_decorator_1 = require("../../../core/decorators/test-decorator");
var TestDecoratorTests = /** @class */ (function () {
    function TestDecoratorTests() {
    }
    TestDecoratorTests.prototype.testAddedAsMetaData = function () {
        var testDecorator = test_decorator_1.Test();
        var testFixture = {};
        testDecorator(testFixture, "test", null);
        var tests = Reflect.getMetadata(alsatian_core_1.METADATA_KEYS.TESTS, testFixture);
        alsatian_core_1.Expect(tests).toBeDefined();
        alsatian_core_1.Expect(tests).not.toBeNull();
    };
    TestDecoratorTests.prototype.testKeyMetaDataAdded = function (key) {
        var testDecorator = test_decorator_1.Test();
        var testFixture = {};
        testDecorator(testFixture, key, null);
        var tests = Reflect.getMetadata(alsatian_core_1.METADATA_KEYS.TESTS, testFixture);
        alsatian_core_1.Expect(tests[0].key).toBe(key);
    };
    TestDecoratorTests.prototype.correctTestCountAdded = function (testCount) {
        var testDecorator = test_decorator_1.Test();
        var testFixture = {};
        for (var i = 0; i < testCount; i++) {
            testDecorator(testFixture, "key " + i, null);
        }
        var tests = Reflect.getMetadata(alsatian_core_1.METADATA_KEYS.TESTS, testFixture);
        alsatian_core_1.Expect(tests.length).toBe(testCount);
    };
    TestDecoratorTests.prototype.noDuplicateTestKeysAdded = function (testCount) {
        var testDecorator = test_decorator_1.Test();
        var testFixture = {};
        for (var i = 0; i < testCount; i++) {
            testDecorator(testFixture, "key", null);
        }
        var tests = Reflect.getMetadata(alsatian_core_1.METADATA_KEYS.TESTS, testFixture);
        alsatian_core_1.Expect(tests.length).toBe(1);
    };
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TestDecoratorTests.prototype, "testAddedAsMetaData", null);
    __decorate([
        alsatian_core_1.TestCase("key"),
        alsatian_core_1.TestCase("another key"),
        alsatian_core_1.TestCase("something-different"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], TestDecoratorTests.prototype, "testKeyMetaDataAdded", null);
    __decorate([
        alsatian_core_1.TestCase(1),
        alsatian_core_1.TestCase(2),
        alsatian_core_1.TestCase(42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], TestDecoratorTests.prototype, "correctTestCountAdded", null);
    __decorate([
        alsatian_core_1.TestCase(1),
        alsatian_core_1.TestCase(2),
        alsatian_core_1.TestCase(42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], TestDecoratorTests.prototype, "noDuplicateTestKeysAdded", null);
    return TestDecoratorTests;
}());
exports.TestDecoratorTests = TestDecoratorTests;
//# sourceMappingURL=test.spec.js.map