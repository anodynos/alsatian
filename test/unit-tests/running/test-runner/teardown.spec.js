"use strict";
/* tslint:disable:no-unused-expression */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
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
var alsatian_core_1 = require("../../../../core/alsatian-core");
var test_runner_1 = require("../../../../core/running/test-runner");
var test_output_stream_1 = require("../../../../core/test-output-stream");
var test_builder_1 = require("../../../builders/test-builder");
var test_fixture_builder_1 = require("../../../builders/test-fixture-builder");
var test_set_builder_1 = require("../../../builders/test-set-builder");
var TeardownTests = /** @class */ (function () {
    function TeardownTests() {
    }
    TeardownTests.prototype._createTestFixture = function () {
        var test = new test_builder_1.TestBuilder()
            .withTestCaseCount(1)
            .withKey("testFunction")
            .build();
        var fixtureObject = {
            teardownFunction: new alsatian_core_1.FunctionSpy(),
            testFunction: function () { }
        };
        return new test_fixture_builder_1.TestFixtureBuilder()
            .withFixture(fixtureObject)
            .addTest(test)
            .build();
    };
    TeardownTests.prototype.singleTeardownFunctionCalled = function () {
        return __awaiter(this, void 0, void 0, function () {
            var testFixture, functionKey, testSet, outputStream, runner;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        testFixture = this._createTestFixture();
                        functionKey = "teardownFunction";
                        testFixture.fixture[functionKey] = new alsatian_core_1.FunctionSpy();
                        Reflect.defineMetadata(alsatian_core_1.METADATA_KEYS.TEARDOWN, [
                            {
                                propertyKey: functionKey
                            }
                        ], testFixture.fixture);
                        testSet = new test_set_builder_1.TestSetBuilder().addTestFixture(testFixture).build();
                        outputStream = new test_output_stream_1.TestOutputStream();
                        alsatian_core_1.SpyOn(outputStream, "push");
                        runner = new test_runner_1.TestRunner(outputStream);
                        return [4 /*yield*/, runner.run(testSet)];
                    case 1:
                        _a.sent();
                        alsatian_core_1.Expect(testFixture.fixture[functionKey]).toHaveBeenCalled();
                        return [2 /*return*/];
                }
            });
        });
    };
    TeardownTests.prototype.singleAsyncTeardownFunctionCalled = function () {
        return __awaiter(this, void 0, void 0, function () {
            var testFixture, functionKey, testSet, outputStream, runner;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        testFixture = this._createTestFixture();
                        functionKey = "teardownFunction";
                        testFixture.fixture[functionKey] = new alsatian_core_1.FunctionSpy();
                        Reflect.defineMetadata(alsatian_core_1.METADATA_KEYS.TEARDOWN, [
                            {
                                isAsync: true,
                                propertyKey: functionKey
                            }
                        ], testFixture.fixture);
                        testSet = new test_set_builder_1.TestSetBuilder().addTestFixture(testFixture).build();
                        outputStream = new test_output_stream_1.TestOutputStream();
                        alsatian_core_1.SpyOn(outputStream, "push");
                        runner = new test_runner_1.TestRunner(outputStream);
                        return [4 /*yield*/, runner.run(testSet)];
                    case 1:
                        _a.sent();
                        alsatian_core_1.Expect(testFixture.fixture[functionKey]).toHaveBeenCalled();
                        return [2 /*return*/];
                }
            });
        });
    };
    TeardownTests.prototype.multipleTeardownFunctionsCalled = function (teardownFunctionCount) {
        return __awaiter(this, void 0, void 0, function () {
            var testFixture, functionDetails, i, functionKey, testSet, outputStream, runner, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        testFixture = this._createTestFixture();
                        functionDetails = [];
                        for (i = 0; i < teardownFunctionCount; i++) {
                            functionKey = "teardownFunction" + i;
                            testFixture.fixture[functionKey] = new alsatian_core_1.FunctionSpy();
                            functionDetails.push({
                                propertyKey: functionKey
                            });
                        }
                        Reflect.defineMetadata(alsatian_core_1.METADATA_KEYS.TEARDOWN, functionDetails, testFixture.fixture);
                        testSet = new test_set_builder_1.TestSetBuilder().addTestFixture(testFixture).build();
                        outputStream = new test_output_stream_1.TestOutputStream();
                        alsatian_core_1.SpyOn(outputStream, "push");
                        runner = new test_runner_1.TestRunner(outputStream);
                        return [4 /*yield*/, runner.run(testSet)];
                    case 1:
                        _a.sent();
                        for (i = 0; i < teardownFunctionCount; i++) {
                            alsatian_core_1.Expect(testFixture.fixture["teardownFunction" + i]).toHaveBeenCalled();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    TeardownTests.prototype.multipleTestsTeardownFunctionCalledEachTime = function (testCount) {
        return __awaiter(this, void 0, void 0, function () {
            var testFixture, functionKey, testSet, outputStream, runner;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        testFixture = this._createTestFixture();
                        while (testFixture.tests.length < testCount) {
                            testFixture.tests.push(new test_builder_1.TestBuilder()
                                .withTestCaseCount(1)
                                .withKey("testFunction" + testFixture.tests.length)
                                .build());
                        }
                        functionKey = "teardownFunction";
                        testFixture.fixture[functionKey] = new alsatian_core_1.FunctionSpy();
                        Reflect.defineMetadata(alsatian_core_1.METADATA_KEYS.TEARDOWN, [
                            {
                                propertyKey: functionKey
                            }
                        ], testFixture.fixture);
                        testSet = new test_set_builder_1.TestSetBuilder().addTestFixture(testFixture).build();
                        outputStream = new test_output_stream_1.TestOutputStream();
                        alsatian_core_1.SpyOn(outputStream, "push");
                        runner = new test_runner_1.TestRunner(outputStream);
                        return [4 /*yield*/, runner.run(testSet)];
                    case 1:
                        _a.sent();
                        alsatian_core_1.Expect(testFixture.fixture[functionKey])
                            .toHaveBeenCalled()
                            .exactly(testCount).times;
                        return [2 /*return*/];
                }
            });
        });
    };
    TeardownTests.prototype.multipleTestCasesTeardownFunctionCalledEachTime = function (testCaseCount) {
        return __awaiter(this, void 0, void 0, function () {
            var testFixture, test, functionKey, testSet, outputStream, runner;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        testFixture = this._createTestFixture();
                        test = testFixture.tests[0];
                        while (test.testCases.length < testCaseCount) {
                            test.testCases.push({
                                caseArguments: []
                            });
                        }
                        functionKey = "teardownFunction";
                        testFixture.fixture[functionKey] = new alsatian_core_1.FunctionSpy();
                        Reflect.defineMetadata(alsatian_core_1.METADATA_KEYS.TEARDOWN, [
                            {
                                propertyKey: functionKey
                            }
                        ], testFixture.fixture);
                        testSet = new test_set_builder_1.TestSetBuilder().addTestFixture(testFixture).build();
                        outputStream = new test_output_stream_1.TestOutputStream();
                        alsatian_core_1.SpyOn(outputStream, "push");
                        runner = new test_runner_1.TestRunner(outputStream);
                        return [4 /*yield*/, runner.run(testSet)];
                    case 1:
                        _a.sent();
                        alsatian_core_1.Expect(testFixture.fixture[functionKey])
                            .toHaveBeenCalled()
                            .exactly(testCaseCount).times;
                        return [2 /*return*/];
                }
            });
        });
    };
    TeardownTests.prototype.singleTeardownFixtureFunctionCalled = function () {
        return __awaiter(this, void 0, void 0, function () {
            var testFixture, functionKey, testSet, outputStream, runner;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        testFixture = this._createTestFixture();
                        functionKey = "teardownFixtureFunction";
                        testFixture.fixture[functionKey] = new alsatian_core_1.FunctionSpy();
                        Reflect.defineMetadata(alsatian_core_1.METADATA_KEYS.TEARDOWN_FIXTURE, [
                            {
                                propertyKey: functionKey
                            }
                        ], testFixture.fixture);
                        testSet = new test_set_builder_1.TestSetBuilder().addTestFixture(testFixture).build();
                        outputStream = new test_output_stream_1.TestOutputStream();
                        alsatian_core_1.SpyOn(outputStream, "push");
                        runner = new test_runner_1.TestRunner(outputStream);
                        return [4 /*yield*/, runner.run(testSet)];
                    case 1:
                        _a.sent();
                        alsatian_core_1.Expect(testFixture.fixture[functionKey]).toHaveBeenCalled();
                        return [2 /*return*/];
                }
            });
        });
    };
    TeardownTests.prototype.singleAsyncTeardownFixtureFunctionCalled = function () {
        return __awaiter(this, void 0, void 0, function () {
            var testFixture, functionKey, testSet, outputStream, runner;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        testFixture = this._createTestFixture();
                        functionKey = "teardownFixtureFunction";
                        testFixture.fixture[functionKey] = new alsatian_core_1.FunctionSpy();
                        Reflect.defineMetadata(alsatian_core_1.METADATA_KEYS.TEARDOWN_FIXTURE, [
                            {
                                isAsync: true,
                                propertyKey: functionKey
                            }
                        ], testFixture.fixture);
                        testSet = new test_set_builder_1.TestSetBuilder().addTestFixture(testFixture).build();
                        outputStream = new test_output_stream_1.TestOutputStream();
                        alsatian_core_1.SpyOn(outputStream, "push");
                        runner = new test_runner_1.TestRunner(outputStream);
                        return [4 /*yield*/, runner.run(testSet)];
                    case 1:
                        _a.sent();
                        alsatian_core_1.Expect(testFixture.fixture[functionKey]).toHaveBeenCalled();
                        return [2 /*return*/];
                }
            });
        });
    };
    TeardownTests.prototype.multipleTeardownFixtureFunctionsCalled = function (teardownFunctionCount) {
        return __awaiter(this, void 0, void 0, function () {
            var testFixture, functionDetails, i, functionKey, testSet, outputStream, runner, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        testFixture = this._createTestFixture();
                        functionDetails = [];
                        for (i = 0; i < teardownFunctionCount; i++) {
                            functionKey = "teardownFixtureFunction" + i;
                            testFixture.fixture[functionKey] = new alsatian_core_1.FunctionSpy();
                            functionDetails.push({
                                propertyKey: functionKey
                            });
                        }
                        Reflect.defineMetadata(alsatian_core_1.METADATA_KEYS.TEARDOWN_FIXTURE, functionDetails, testFixture.fixture);
                        testSet = new test_set_builder_1.TestSetBuilder().addTestFixture(testFixture).build();
                        outputStream = new test_output_stream_1.TestOutputStream();
                        alsatian_core_1.SpyOn(outputStream, "push");
                        runner = new test_runner_1.TestRunner(outputStream);
                        return [4 /*yield*/, runner.run(testSet)];
                    case 1:
                        _a.sent();
                        for (i = 0; i < teardownFunctionCount; i++) {
                            alsatian_core_1.Expect(testFixture.fixture["teardownFixtureFunction" + i]).toHaveBeenCalled();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    TeardownTests.prototype.multipleTestsOnlyTeardownFixtureOnce = function (testCount) {
        return __awaiter(this, void 0, void 0, function () {
            var testFixture, functionKey, testSet, outputStream, runner;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        testFixture = this._createTestFixture();
                        while (testFixture.tests.length < testCount) {
                            testFixture.tests.push(new test_builder_1.TestBuilder()
                                .withTestCaseCount(1)
                                .withKey("testFunction" + testFixture.tests.length)
                                .build());
                        }
                        functionKey = "teardownFixtureFunction";
                        testFixture.fixture[functionKey] = new alsatian_core_1.FunctionSpy();
                        Reflect.defineMetadata(alsatian_core_1.METADATA_KEYS.TEARDOWN_FIXTURE, [
                            {
                                propertyKey: functionKey
                            }
                        ], testFixture.fixture);
                        testSet = new test_set_builder_1.TestSetBuilder().addTestFixture(testFixture).build();
                        outputStream = new test_output_stream_1.TestOutputStream();
                        alsatian_core_1.SpyOn(outputStream, "push");
                        runner = new test_runner_1.TestRunner(outputStream);
                        return [4 /*yield*/, runner.run(testSet)];
                    case 1:
                        _a.sent();
                        alsatian_core_1.Expect(testFixture.fixture[functionKey])
                            .toHaveBeenCalled()
                            .exactly(1).times;
                        return [2 /*return*/];
                }
            });
        });
    };
    TeardownTests.prototype.multipleTestCasesOnlyTeardownFixureOnce = function (testCaseCount) {
        return __awaiter(this, void 0, void 0, function () {
            var testFixture, test, functionKey, testSet, outputStream, runner;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        testFixture = this._createTestFixture();
                        test = testFixture.tests[0];
                        while (test.testCases.length < testCaseCount) {
                            test.testCases.push({
                                caseArguments: []
                            });
                        }
                        functionKey = "teardownFixtureFunction";
                        testFixture.fixture[functionKey] = new alsatian_core_1.FunctionSpy();
                        Reflect.defineMetadata(alsatian_core_1.METADATA_KEYS.TEARDOWN_FIXTURE, [
                            {
                                propertyKey: functionKey
                            }
                        ], testFixture.fixture);
                        testSet = new test_set_builder_1.TestSetBuilder().addTestFixture(testFixture).build();
                        outputStream = new test_output_stream_1.TestOutputStream();
                        alsatian_core_1.SpyOn(outputStream, "push");
                        runner = new test_runner_1.TestRunner(outputStream);
                        return [4 /*yield*/, runner.run(testSet)];
                    case 1:
                        _a.sent();
                        alsatian_core_1.Expect(testFixture.fixture[functionKey])
                            .toHaveBeenCalled()
                            .exactly(1).times;
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        alsatian_core_1.AsyncTest("single teardown function called"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], TeardownTests.prototype, "singleTeardownFunctionCalled", null);
    __decorate([
        alsatian_core_1.AsyncTest("single async teardown function called"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], TeardownTests.prototype, "singleAsyncTeardownFunctionCalled", null);
    __decorate([
        alsatian_core_1.TestCase(2),
        alsatian_core_1.TestCase(5),
        alsatian_core_1.AsyncTest("multiple teardown functions called"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", Promise)
    ], TeardownTests.prototype, "multipleTeardownFunctionsCalled", null);
    __decorate([
        alsatian_core_1.TestCase(2),
        alsatian_core_1.TestCase(5),
        alsatian_core_1.AsyncTest("multiple tests teardown correct amount of times"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", Promise)
    ], TeardownTests.prototype, "multipleTestsTeardownFunctionCalledEachTime", null);
    __decorate([
        alsatian_core_1.TestCase(2),
        alsatian_core_1.TestCase(5),
        alsatian_core_1.AsyncTest("multiple test cases teardown correct amount of times"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", Promise)
    ], TeardownTests.prototype, "multipleTestCasesTeardownFunctionCalledEachTime", null);
    __decorate([
        alsatian_core_1.AsyncTest("single teardown fixure function called"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], TeardownTests.prototype, "singleTeardownFixtureFunctionCalled", null);
    __decorate([
        alsatian_core_1.AsyncTest("single async teardown fixure function called"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], TeardownTests.prototype, "singleAsyncTeardownFixtureFunctionCalled", null);
    __decorate([
        alsatian_core_1.TestCase(2),
        alsatian_core_1.TestCase(5),
        alsatian_core_1.AsyncTest("multiple teardown fixture functions called"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", Promise)
    ], TeardownTests.prototype, "multipleTeardownFixtureFunctionsCalled", null);
    __decorate([
        alsatian_core_1.TestCase(2),
        alsatian_core_1.TestCase(5),
        alsatian_core_1.AsyncTest("multiple tests only teardown fixture once"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", Promise)
    ], TeardownTests.prototype, "multipleTestsOnlyTeardownFixtureOnce", null);
    __decorate([
        alsatian_core_1.TestCase(2),
        alsatian_core_1.TestCase(5),
        alsatian_core_1.AsyncTest("multiple test cases only teardown fixture once"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", Promise)
    ], TeardownTests.prototype, "multipleTestCasesOnlyTeardownFixureOnce", null);
    TeardownTests = __decorate([
        alsatian_core_1.TestFixture("tearing down tests")
    ], TeardownTests);
    return TeardownTests;
}());
exports.TeardownTests = TeardownTests;
//# sourceMappingURL=teardown.spec.js.map