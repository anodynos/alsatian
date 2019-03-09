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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var alsatian_core_1 = require("../../../core/alsatian-core");
var test_cases_decorator_1 = require("../../../core/decorators/test-cases-decorator");
var TestCaseDecoratorTests = /** @class */ (function () {
    function TestCaseDecoratorTests() {
    }
    TestCaseDecoratorTests.prototype.testAddedAsMetaData = function () {
        var testCaseDecorator = test_cases_decorator_1.TestCases([[1]]);
        var testFixture = {};
        testCaseDecorator(testFixture, "test", null);
        var tests = Reflect.getMetadata(alsatian_core_1.METADATA_KEYS.TESTS, testFixture);
        alsatian_core_1.Expect(tests).toBeDefined();
        alsatian_core_1.Expect(tests).not.toBeNull();
    };
    TestCaseDecoratorTests.prototype.testKeyMetaDataAdded = function (key) {
        var testCaseDecorator = test_cases_decorator_1.TestCases([[1]]);
        var testFixture = {};
        testCaseDecorator(testFixture, key, null);
        var tests = Reflect.getMetadata(alsatian_core_1.METADATA_KEYS.TESTS, testFixture);
        alsatian_core_1.Expect(tests[0].key).toBe(key);
    };
    TestCaseDecoratorTests.prototype.correctTestCountAdded = function (testCount) {
        var testCaseDecorator = test_cases_decorator_1.TestCases([[1]]);
        var testFixture = {};
        for (var i = 0; i < testCount; i++) {
            testCaseDecorator(testFixture, "key " + i, null);
        }
        var tests = Reflect.getMetadata(alsatian_core_1.METADATA_KEYS.TESTS, testFixture);
        alsatian_core_1.Expect(tests.length).toBe(testCount);
    };
    TestCaseDecoratorTests.prototype.noDuplicateTestKeysAdded = function (testCount) {
        var testCaseDecorator = test_cases_decorator_1.TestCases([[1]]);
        var testFixture = {};
        for (var i = 0; i < testCount; i++) {
            testCaseDecorator(testFixture, "key", null);
        }
        var tests = Reflect.getMetadata(alsatian_core_1.METADATA_KEYS.TESTS, testFixture);
        alsatian_core_1.Expect(tests.length).toBe(1);
    };
    TestCaseDecoratorTests.prototype.testCasesAddedAsMetaData = function () {
        var testCaseDecorator = test_cases_decorator_1.TestCases([]);
        var testFixture = {};
        testCaseDecorator(testFixture, "test", null);
        var testCases = Reflect.getMetadata(alsatian_core_1.METADATA_KEYS.TEST_CASES, testFixture, "test");
        alsatian_core_1.Expect(testCases).toBeDefined();
        alsatian_core_1.Expect(testCases).not.toBeNull();
    };
    TestCaseDecoratorTests.prototype.noTestsAddedOnNull = function () {
        var testCaseDecorator = test_cases_decorator_1.TestCases(null);
        var testFixture = {};
        testCaseDecorator(testFixture, "key", null);
        var testCases = Reflect.getMetadata(alsatian_core_1.METADATA_KEYS.TEST_CASES, testFixture, "key");
        alsatian_core_1.Expect(testCases).toBeEmpty();
    };
    TestCaseDecoratorTests.prototype.testCaseArgumentsFromArrayMetaDataAdded = function (expectedArguments) {
        var testCaseDecorator = test_cases_decorator_1.TestCases(expectedArguments);
        var testFixture = {};
        testCaseDecorator(testFixture, "key", null);
        var testCases = Reflect.getMetadata(alsatian_core_1.METADATA_KEYS.TEST_CASES, testFixture, "key");
        alsatian_core_1.Expect(testCases[0].caseArguments).toEqual(expectedArguments[0]);
    };
    TestCaseDecoratorTests.prototype.testCaseArgumentsFromArrayDelegateMetaDataAdded = function (expectedArguments) {
        var testCaseDecorator = test_cases_decorator_1.TestCases(function () { return expectedArguments; });
        var testFixture = {};
        testCaseDecorator(testFixture, "key", null);
        var testCases = Reflect.getMetadata(alsatian_core_1.METADATA_KEYS.TEST_CASES, testFixture, "key");
        alsatian_core_1.Expect(testCases[0].caseArguments).toEqual(expectedArguments[0]);
    };
    TestCaseDecoratorTests.prototype.testCaseArgumentsFromGeneratorMetaDataAdded = function (expectedArguments) {
        function generator(args) {
            var _i, args_1, argument;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _i = 0, args_1 = args;
                        _a.label = 1;
                    case 1:
                        if (!(_i < args_1.length)) return [3 /*break*/, 4];
                        argument = args_1[_i];
                        return [4 /*yield*/, argument];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        }
        var testCaseDecorator = test_cases_decorator_1.TestCases(generator(expectedArguments));
        var testFixture = {};
        testCaseDecorator(testFixture, "key", null);
        var testCases = Reflect.getMetadata(alsatian_core_1.METADATA_KEYS.TEST_CASES, testFixture, "key");
        alsatian_core_1.Expect(testCases[0].caseArguments).toEqual(expectedArguments[0]);
    };
    TestCaseDecoratorTests.prototype.testCaseArgumentsFromGeneratorDelegateMetaDataAdded = function (expectedArguments) {
        function makeGenerator() {
            var _i, expectedArguments_1, argument;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _i = 0, expectedArguments_1 = expectedArguments;
                        _a.label = 1;
                    case 1:
                        if (!(_i < expectedArguments_1.length)) return [3 /*break*/, 4];
                        argument = expectedArguments_1[_i];
                        return [4 /*yield*/, argument];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        }
        var testCaseDecorator = test_cases_decorator_1.TestCases(makeGenerator);
        var testFixture = {};
        testCaseDecorator(testFixture, "key", null);
        var testCases = Reflect.getMetadata(alsatian_core_1.METADATA_KEYS.TEST_CASES, testFixture, "key");
        alsatian_core_1.Expect(testCases[0].caseArguments).toEqual(expectedArguments[0]);
    };
    TestCaseDecoratorTests.prototype.testCaseKeyMetaDataAddedWithCorrectKey = function (key) {
        var testCaseDecorator = test_cases_decorator_1.TestCases([]);
        var testFixture = {};
        testCaseDecorator(testFixture, key, null);
        var testCases = Reflect.getMetadata(alsatian_core_1.METADATA_KEYS.TEST_CASES, testFixture, key);
        alsatian_core_1.Expect(testCases).toBeDefined();
        alsatian_core_1.Expect(testCases).not.toBeNull();
    };
    TestCaseDecoratorTests.prototype.testCaseArgumentsAlwaysAddedAsFirstIndex = function (testCount) {
        var dummyTestCaseDecorator = test_cases_decorator_1.TestCases([]);
        var testFixture = {};
        for (var i = 0; i < testCount; i++) {
            dummyTestCaseDecorator(testFixture, "key " + i, null);
        }
        var args = [[1, 2, 3]];
        test_cases_decorator_1.TestCases(args)(testFixture, "key", null);
        var testCases = Reflect.getMetadata(alsatian_core_1.METADATA_KEYS.TEST_CASES, testFixture, "key");
        alsatian_core_1.Expect(testCases[0].caseArguments).toEqual(args[0]);
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
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TestCaseDecoratorTests.prototype, "noTestsAddedOnNull", null);
    __decorate([
        alsatian_core_1.TestCase([[]]),
        alsatian_core_1.TestCase([[1], [2], [3]]),
        alsatian_core_1.TestCase([["this"], ["that"], ["the other"]]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array]),
        __metadata("design:returntype", void 0)
    ], TestCaseDecoratorTests.prototype, "testCaseArgumentsFromArrayMetaDataAdded", null);
    __decorate([
        alsatian_core_1.TestCase([[]]),
        alsatian_core_1.TestCase([[1], [2], [3]]),
        alsatian_core_1.TestCase([["this"], ["that"], ["the other"]]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array]),
        __metadata("design:returntype", void 0)
    ], TestCaseDecoratorTests.prototype, "testCaseArgumentsFromArrayDelegateMetaDataAdded", null);
    __decorate([
        alsatian_core_1.TestCase([[]]),
        alsatian_core_1.TestCase([[1], [2], [3]]),
        alsatian_core_1.TestCase([["this"], ["that"], ["the other"]]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array]),
        __metadata("design:returntype", void 0)
    ], TestCaseDecoratorTests.prototype, "testCaseArgumentsFromGeneratorMetaDataAdded", null);
    __decorate([
        alsatian_core_1.TestCase([[]]),
        alsatian_core_1.TestCase([[1], [2], [3]]),
        alsatian_core_1.TestCase([["this"], ["that"], ["the other"]]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array]),
        __metadata("design:returntype", void 0)
    ], TestCaseDecoratorTests.prototype, "testCaseArgumentsFromGeneratorDelegateMetaDataAdded", null);
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
//# sourceMappingURL=test-cases.spec.js.map