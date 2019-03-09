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
var test_case_decorator_1 = require("../../../core/decorators/test-case-decorator");
var TestCaseDecoratorTests = /** @class */ (function () {
    function TestCaseDecoratorTests() {
    }
    TestCaseDecoratorTests.prototype.testAddedAsMetaData = function () {
        var testCaseDecorator = test_case_decorator_1.TestCase();
        var testFixture = {};
        testCaseDecorator(testFixture, "test", null);
        var tests = Reflect.getMetadata(alsatian_core_1.METADATA_KEYS.TESTS, testFixture);
        alsatian_core_1.Expect(tests).toBeDefined();
        alsatian_core_1.Expect(tests).not.toBeNull();
    };
    TestCaseDecoratorTests.prototype.testKeyMetaDataAdded = function (key) {
        var testCaseDecorator = test_case_decorator_1.TestCase();
        var testFixture = {};
        testCaseDecorator(testFixture, key, null);
        var tests = Reflect.getMetadata(alsatian_core_1.METADATA_KEYS.TESTS, testFixture);
        alsatian_core_1.Expect(tests[0].key).toBe(key);
    };
    TestCaseDecoratorTests.prototype.correctTestCountAdded = function (testCount) {
        var testCaseDecorator = test_case_decorator_1.TestCase();
        var testFixture = {};
        for (var i = 0; i < testCount; i++) {
            testCaseDecorator(testFixture, "key " + i, null);
        }
        var tests = Reflect.getMetadata(alsatian_core_1.METADATA_KEYS.TESTS, testFixture);
        alsatian_core_1.Expect(tests.length).toBe(testCount);
    };
    TestCaseDecoratorTests.prototype.noDuplicateTestKeysAdded = function (testCount) {
        var testCaseDecorator = test_case_decorator_1.TestCase();
        var testFixture = {};
        for (var i = 0; i < testCount; i++) {
            testCaseDecorator(testFixture, "key", null);
        }
        var tests = Reflect.getMetadata(alsatian_core_1.METADATA_KEYS.TESTS, testFixture);
        alsatian_core_1.Expect(tests.length).toBe(1);
    };
    TestCaseDecoratorTests.prototype.testCasesAddedAsMetaData = function () {
        var testCaseDecorator = test_case_decorator_1.TestCase();
        var testFixture = {};
        testCaseDecorator(testFixture, "test", null);
        var testCases = Reflect.getMetadata(alsatian_core_1.METADATA_KEYS.TEST_CASES, testFixture, "test");
        alsatian_core_1.Expect(testCases).toBeDefined();
        alsatian_core_1.Expect(testCases).not.toBeNull();
    };
    TestCaseDecoratorTests.prototype.testCaseArgumentsMetaDataAdded = function (expectedArguments) {
        var testCaseDecorator = test_case_decorator_1.TestCase.apply(test_case_decorator_1.TestCase, expectedArguments);
        var testFixture = {};
        testCaseDecorator(testFixture, "key", null);
        var testCases = Reflect.getMetadata(alsatian_core_1.METADATA_KEYS.TEST_CASES, testFixture, "key");
        alsatian_core_1.Expect(testCases[0].caseArguments).toEqual(expectedArguments);
    };
    TestCaseDecoratorTests.prototype.testCaseKeyMetaDataAddedWithCorrectKey = function (key) {
        var testCaseDecorator = test_case_decorator_1.TestCase();
        var testFixture = {};
        testCaseDecorator(testFixture, key, null);
        var testCases = Reflect.getMetadata(alsatian_core_1.METADATA_KEYS.TEST_CASES, testFixture, key);
        alsatian_core_1.Expect(testCases).toBeDefined();
        alsatian_core_1.Expect(testCases).not.toBeNull();
    };
    TestCaseDecoratorTests.prototype.testCaseArgumentsAlwaysAddedAsFirstIndex = function (testCount) {
        var dummyTestCaseDecorator = test_case_decorator_1.TestCase();
        var testFixture = {};
        for (var i = 0; i < testCount; i++) {
            dummyTestCaseDecorator(testFixture, "key " + i, null);
        }
        var args = [1, 2, 3];
        test_case_decorator_1.TestCase.apply(test_case_decorator_1.TestCase, args)(testFixture, "key", null);
        var testCases = Reflect.getMetadata(alsatian_core_1.METADATA_KEYS.TEST_CASES, testFixture, "key");
        alsatian_core_1.Expect(testCases[0].caseArguments).toEqual(args);
    };
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TestCaseDecoratorTests.prototype, "testAddedAsMetaData", null);
    __decorate([
        alsatian_core_1.TestCase("key"),
        alsatian_core_1.TestCase("another key"),
        alsatian_core_1.TestCase("something-different"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], TestCaseDecoratorTests.prototype, "testKeyMetaDataAdded", null);
    __decorate([
        alsatian_core_1.TestCase(1),
        alsatian_core_1.TestCase(2),
        alsatian_core_1.TestCase(42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], TestCaseDecoratorTests.prototype, "correctTestCountAdded", null);
    __decorate([
        alsatian_core_1.TestCase(1),
        alsatian_core_1.TestCase(2),
        alsatian_core_1.TestCase(42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], TestCaseDecoratorTests.prototype, "noDuplicateTestKeysAdded", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TestCaseDecoratorTests.prototype, "testCasesAddedAsMetaData", null);
    __decorate([
        alsatian_core_1.TestCase([]),
        alsatian_core_1.TestCase([1, 2, 3]),
        alsatian_core_1.TestCase(["this", "that", "the other"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array]),
        __metadata("design:returntype", void 0)
    ], TestCaseDecoratorTests.prototype, "testCaseArgumentsMetaDataAdded", null);
    __decorate([
        alsatian_core_1.TestCase("key"),
        alsatian_core_1.TestCase("another key"),
        alsatian_core_1.TestCase("something-different"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], TestCaseDecoratorTests.prototype, "testCaseKeyMetaDataAddedWithCorrectKey", null);
    __decorate([
        alsatian_core_1.TestCase(1),
        alsatian_core_1.TestCase(2),
        alsatian_core_1.TestCase(42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], TestCaseDecoratorTests.prototype, "testCaseArgumentsAlwaysAddedAsFirstIndex", null);
    return TestCaseDecoratorTests;
}());
exports.TestCaseDecoratorTests = TestCaseDecoratorTests;
//# sourceMappingURL=test-case.spec.js.map