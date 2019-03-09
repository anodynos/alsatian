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
require("reflect-metadata");
var alsatian_core_1 = require("../../../../core/alsatian-core");
var test_runner_1 = require("../../../../core/running/test-runner");
var test_output_stream_1 = require("../../../../core/test-output-stream");
var test_builder_1 = require("../../../builders/test-builder");
var test_fixture_builder_1 = require("../../../builders/test-fixture-builder");
var test_set_builder_1 = require("../../../builders/test-set-builder");
var RunTestTests = /** @class */ (function () {
    function RunTestTests() {
    }
    RunTestTests.prototype.singlePassingTestRunsSuccessfully = function () {
        return __awaiter(this, void 0, void 0, function () {
            var test, testFixture, testSet, outputStream, testRunner;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        test = new test_builder_1.TestBuilder().withTestCaseCount(1).build();
                        testFixture = new test_fixture_builder_1.TestFixtureBuilder().addTest(test).build();
                        testSet = new test_set_builder_1.TestSetBuilder().addTestFixture(testFixture).build();
                        outputStream = new test_output_stream_1.TestOutputStream();
                        alsatian_core_1.SpyOn(outputStream, "push");
                        testRunner = new test_runner_1.TestRunner(outputStream);
                        return [4 /*yield*/, testRunner.run(testSet)];
                    case 1:
                        _a.sent();
                        alsatian_core_1.Expect(outputStream.push).toHaveBeenCalledWith("ok 1 Test Function\n");
                        return [2 /*return*/];
                }
            });
        });
    };
    RunTestTests.prototype.singlePassingTestRunsSuccessfullyWithOnCompleteEventRaised = function () {
        return __awaiter(this, void 0, void 0, function () {
            var testCompletedValue, testDescription, test, testFixtureDescription, testFixture, testSet, outputStream, testRunner, spyContainer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        testCompletedValue = null;
                        testDescription = "testDescriptionToCheck";
                        test = new test_builder_1.TestBuilder()
                            .withDescription(testDescription)
                            .withTestCaseCount(1)
                            .build();
                        testFixtureDescription = "testFixtureDescriptionToCheck";
                        testFixture = new test_fixture_builder_1.TestFixtureBuilder()
                            .withDescription(testFixtureDescription)
                            .addTest(test)
                            .build();
                        testSet = new test_set_builder_1.TestSetBuilder().addTestFixture(testFixture).build();
                        outputStream = new test_output_stream_1.TestOutputStream();
                        testRunner = new test_runner_1.TestRunner(outputStream);
                        spyContainer = {
                            onCompleteCB: function (testCompleted) {
                                testCompletedValue = testCompleted;
                            }
                        };
                        alsatian_core_1.SpyOn(spyContainer, "onCompleteCB");
                        testRunner.onTestComplete(spyContainer.onCompleteCB);
                        return [4 /*yield*/, testRunner.run(testSet)];
                    case 1:
                        _a.sent();
                        alsatian_core_1.Expect(spyContainer.onCompleteCB)
                            .toHaveBeenCalled()
                            .exactly(1);
                        alsatian_core_1.Expect(testCompletedValue.testId).toEqual(1);
                        alsatian_core_1.Expect(testCompletedValue.test.description).toEqual(testDescription);
                        alsatian_core_1.Expect(testCompletedValue.testFixture.description).toEqual(testFixtureDescription);
                        alsatian_core_1.Expect(testCompletedValue.outcome).not.toBeNull();
                        alsatian_core_1.Expect(testCompletedValue.testCase).not.toBeNull();
                        alsatian_core_1.Expect(testCompletedValue.error).toBeNull();
                        return [2 /*return*/];
                }
            });
        });
    };
    RunTestTests.prototype.singlePassingTestRunsSuccessfullyWithoutOnCompleteEventRaised = function () {
        return __awaiter(this, void 0, void 0, function () {
            var testCompletedValue, test, testFixture, testSet, outputStream, testRunner, spyContainer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        testCompletedValue = null;
                        test = new test_builder_1.TestBuilder().withTestCaseCount(1).build();
                        testFixture = new test_fixture_builder_1.TestFixtureBuilder().addTest(test).build();
                        testSet = new test_set_builder_1.TestSetBuilder().addTestFixture(testFixture).build();
                        outputStream = new test_output_stream_1.TestOutputStream();
                        testRunner = new test_runner_1.TestRunner(outputStream);
                        spyContainer = {
                            onCompleteCB: function (testCompleted) {
                                testCompletedValue = testCompleted;
                            }
                        };
                        alsatian_core_1.SpyOn(spyContainer, "onCompleteCB");
                        // same as before test, but no CB registered
                        // testRunner.onTestComplete(spyContainer.onCompleteCB);
                        return [4 /*yield*/, testRunner.run(testSet)];
                    case 1:
                        // same as before test, but no CB registered
                        // testRunner.onTestComplete(spyContainer.onCompleteCB);
                        _a.sent();
                        alsatian_core_1.Expect(spyContainer.onCompleteCB).not.toHaveBeenCalled();
                        return [2 /*return*/];
                }
            });
        });
    };
    RunTestTests.prototype.singlePassingTestRunsSuccessfullyWithSeveralOnCompleteEventRaised = function () {
        return __awaiter(this, void 0, void 0, function () {
            var testCompletedValue1, testCompletedValue2, test, testFixture, testSet, outputStream, testRunner, spyContainer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        testCompletedValue1 = null;
                        testCompletedValue2 = null;
                        test = new test_builder_1.TestBuilder().withTestCaseCount(1).build();
                        testFixture = new test_fixture_builder_1.TestFixtureBuilder().addTest(test).build();
                        testSet = new test_set_builder_1.TestSetBuilder().addTestFixture(testFixture).build();
                        outputStream = new test_output_stream_1.TestOutputStream();
                        testRunner = new test_runner_1.TestRunner(outputStream);
                        spyContainer = {
                            onCompleteCB1: function (testCompleted) {
                                testCompletedValue1 = testCompleted;
                            },
                            onCompleteCB2: function (testCompleted) {
                                testCompletedValue2 = testCompleted;
                            }
                        };
                        alsatian_core_1.SpyOn(spyContainer, "onCompleteCB1");
                        alsatian_core_1.SpyOn(spyContainer, "onCompleteCB2");
                        testRunner.onTestComplete(spyContainer.onCompleteCB1);
                        testRunner.onTestComplete(spyContainer.onCompleteCB2);
                        return [4 /*yield*/, testRunner.run(testSet)];
                    case 1:
                        _a.sent();
                        alsatian_core_1.Expect(spyContainer.onCompleteCB1)
                            .toHaveBeenCalled()
                            .exactly(1);
                        alsatian_core_1.Expect(spyContainer.onCompleteCB2)
                            .toHaveBeenCalled()
                            .exactly(1);
                        return [2 /*return*/];
                }
            });
        });
    };
    RunTestTests.prototype.singleTestTakes501msFails = function () {
        return __awaiter(this, void 0, void 0, function () {
            var test, fixtureObject, testFixture, testSet, outputStream, testRunner;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        test = new test_builder_1.TestBuilder()
                            .withTestCaseCount(1)
                            .withKey("testFunction")
                            .withIsAsync(true)
                            .build();
                        fixtureObject = {
                            testFunction: function () {
                                return new Promise(function (resolve, reject) {
                                    return setTimeout(function () { return resolve(); }, 501);
                                });
                            }
                        };
                        testFixture = new test_fixture_builder_1.TestFixtureBuilder()
                            .withFixture(fixtureObject)
                            .addTest(test)
                            .build();
                        testSet = new test_set_builder_1.TestSetBuilder().addTestFixture(testFixture).build();
                        outputStream = new test_output_stream_1.TestOutputStream();
                        alsatian_core_1.SpyOn(outputStream, "push");
                        testRunner = new test_runner_1.TestRunner(outputStream);
                        return [4 /*yield*/, testRunner.run(testSet)];
                    case 1:
                        _a.sent();
                        alsatian_core_1.Expect(outputStream.push).toHaveBeenCalledWith("not ok 1 Test Function\n");
                        return [2 /*return*/];
                }
            });
        });
    };
    RunTestTests.prototype.singleTestTakes100msWith50msTimeoutFails = function () {
        return __awaiter(this, void 0, void 0, function () {
            var test, fixtureObject, testFixture, testSet, outputStream, testRunner;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        test = new test_builder_1.TestBuilder()
                            .withTestCaseCount(1)
                            .withKey("testFunction")
                            .withIsAsync(true)
                            .build();
                        fixtureObject = {
                            testFunction: function () {
                                return new Promise(function (resolve, reject) {
                                    return setTimeout(function () { return resolve(); }, 100);
                                });
                            }
                        };
                        testFixture = new test_fixture_builder_1.TestFixtureBuilder()
                            .withFixture(fixtureObject)
                            .addTest(test)
                            .build();
                        testSet = new test_set_builder_1.TestSetBuilder().addTestFixture(testFixture).build();
                        outputStream = new test_output_stream_1.TestOutputStream();
                        alsatian_core_1.SpyOn(outputStream, "push");
                        testRunner = new test_runner_1.TestRunner(outputStream);
                        return [4 /*yield*/, testRunner.run(testSet, 50)];
                    case 1:
                        _a.sent();
                        alsatian_core_1.Expect(outputStream.push).toHaveBeenCalledWith("not ok 1 Test Function\n");
                        return [2 /*return*/];
                }
            });
        });
    };
    RunTestTests.prototype.singleTestThrowsErrorFails = function () {
        return __awaiter(this, void 0, void 0, function () {
            var test, fixtureObject, testFixture, testSet, outputStream, testRunner;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        test = new test_builder_1.TestBuilder()
                            .withTestCaseCount(1)
                            .withKey("testFunction")
                            .build();
                        fixtureObject = {
                            setupFunction: function () {
                                throw new Error("setup failed");
                            },
                            testFunction: function () {
                                throw new Error("everything has blown up");
                            }
                        };
                        Reflect.defineMetadata(alsatian_core_1.METADATA_KEYS.TEARDOWN, ["setupFunction"], fixtureObject);
                        testFixture = new test_fixture_builder_1.TestFixtureBuilder()
                            .withFixture(fixtureObject)
                            .addTest(test)
                            .build();
                        testSet = new test_set_builder_1.TestSetBuilder().addTestFixture(testFixture).build();
                        outputStream = new test_output_stream_1.TestOutputStream();
                        alsatian_core_1.SpyOn(outputStream, "push");
                        testRunner = new test_runner_1.TestRunner(outputStream);
                        return [4 /*yield*/, testRunner.run(testSet)];
                    case 1:
                        _a.sent();
                        alsatian_core_1.Expect(outputStream.push).toHaveBeenCalledWith("not ok 1 Test Function\n");
                        return [2 /*return*/];
                }
            });
        });
    };
    RunTestTests.prototype.twoPassingTestsRunsSuccessfully = function () {
        return __awaiter(this, void 0, void 0, function () {
            var firstTest, secondTest, testFixture, testSet, outputStream, testRunner;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        firstTest = new test_builder_1.TestBuilder().withTestCaseCount(1).build();
                        secondTest = new test_builder_1.TestBuilder().withTestCaseCount(1).build();
                        testFixture = new test_fixture_builder_1.TestFixtureBuilder()
                            .addTest(firstTest)
                            .addTest(secondTest)
                            .build();
                        testSet = new test_set_builder_1.TestSetBuilder().addTestFixture(testFixture).build();
                        outputStream = new test_output_stream_1.TestOutputStream();
                        alsatian_core_1.SpyOn(outputStream, "push");
                        testRunner = new test_runner_1.TestRunner(outputStream);
                        return [4 /*yield*/, testRunner.run(testSet)];
                    case 1:
                        _a.sent();
                        alsatian_core_1.Expect(outputStream.push).toHaveBeenCalledWith("ok 1 Test Function\n");
                        alsatian_core_1.Expect(outputStream.push).toHaveBeenCalledWith("ok 2 Test Function\n");
                        return [2 /*return*/];
                }
            });
        });
    };
    RunTestTests.prototype.twoTestsFirstTakes501msFails = function () {
        return __awaiter(this, void 0, void 0, function () {
            var firstTest, secondTest, fixtureObject, testFixture, testSet, outputStream, testRunner;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        firstTest = new test_builder_1.TestBuilder()
                            .withTestCaseCount(1)
                            .withKey("firstTestFunction")
                            .withIsAsync(true)
                            .build();
                        secondTest = new test_builder_1.TestBuilder()
                            .withTestCaseCount(1)
                            .withKey("secondTestFunction")
                            .withIsAsync(true)
                            .build();
                        fixtureObject = {
                            firstTestFunction: function () {
                                return new Promise(function (resolve, reject) {
                                    return setTimeout(function () { return resolve(); }, 501);
                                });
                            },
                            secondTestFunction: function () {
                                return new Promise(function (resolve, reject) {
                                    return setTimeout(function () { return resolve(); }, 10);
                                });
                            }
                        };
                        testFixture = new test_fixture_builder_1.TestFixtureBuilder()
                            .withFixture(fixtureObject)
                            .addTest(firstTest)
                            .addTest(secondTest)
                            .build();
                        testSet = new test_set_builder_1.TestSetBuilder().addTestFixture(testFixture).build();
                        outputStream = new test_output_stream_1.TestOutputStream();
                        alsatian_core_1.SpyOn(outputStream, "push");
                        testRunner = new test_runner_1.TestRunner(outputStream);
                        return [4 /*yield*/, testRunner.run(testSet)];
                    case 1:
                        _a.sent();
                        alsatian_core_1.Expect(outputStream.push).toHaveBeenCalledWith("not ok 1 Test Function\n");
                        alsatian_core_1.Expect(outputStream.push).toHaveBeenCalledWith("ok 2 Test Function\n");
                        return [2 /*return*/];
                }
            });
        });
    };
    RunTestTests.prototype.twoTestsSecondTakes501msFails = function () {
        return __awaiter(this, void 0, void 0, function () {
            var firstTest, secondTest, fixtureObject, testFixture, testSet, outputStream, testRunner;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        firstTest = new test_builder_1.TestBuilder()
                            .withTestCaseCount(1)
                            .withKey("firstTestFunction")
                            .withIsAsync(true)
                            .build();
                        secondTest = new test_builder_1.TestBuilder()
                            .withTestCaseCount(1)
                            .withKey("secondTestFunction")
                            .withIsAsync(true)
                            .build();
                        fixtureObject = {
                            firstTestFunction: function () {
                                return new Promise(function (resolve, reject) {
                                    return setTimeout(function () { return resolve(); }, 10);
                                });
                            },
                            secondTestFunction: function () {
                                return new Promise(function (resolve, reject) {
                                    return setTimeout(function () { return resolve(); }, 501);
                                });
                            }
                        };
                        testFixture = new test_fixture_builder_1.TestFixtureBuilder()
                            .withFixture(fixtureObject)
                            .addTest(firstTest)
                            .addTest(secondTest)
                            .build();
                        testSet = new test_set_builder_1.TestSetBuilder().addTestFixture(testFixture).build();
                        outputStream = new test_output_stream_1.TestOutputStream();
                        alsatian_core_1.SpyOn(outputStream, "push");
                        testRunner = new test_runner_1.TestRunner(outputStream);
                        return [4 /*yield*/, testRunner.run(testSet)];
                    case 1:
                        _a.sent();
                        alsatian_core_1.Expect(outputStream.push).toHaveBeenCalledWith("ok 1 Test Function\n");
                        alsatian_core_1.Expect(outputStream.push).toHaveBeenCalledWith("not ok 2 Test Function\n");
                        return [2 /*return*/];
                }
            });
        });
    };
    RunTestTests.prototype.twoTestsFirstTakes100msWith50msTimeoutFails = function () {
        return __awaiter(this, void 0, void 0, function () {
            var firstTest, secondTest, fixtureObject, testFixture, testSet, outputStream, testRunner;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        firstTest = new test_builder_1.TestBuilder()
                            .withTestCaseCount(1)
                            .withKey("firstTestFunction")
                            .withIsAsync(true)
                            .build();
                        secondTest = new test_builder_1.TestBuilder()
                            .withTestCaseCount(1)
                            .withKey("secondTestFunction")
                            .withIsAsync(true)
                            .build();
                        fixtureObject = {
                            firstTestFunction: function () {
                                return new Promise(function (resolve, reject) {
                                    return setTimeout(function () { return resolve(); }, 100);
                                });
                            },
                            secondTestFunction: function () {
                                return new Promise(function (resolve, reject) {
                                    return setTimeout(function () { return resolve(); }, 10);
                                });
                            }
                        };
                        testFixture = new test_fixture_builder_1.TestFixtureBuilder()
                            .withFixture(fixtureObject)
                            .addTest(firstTest)
                            .addTest(secondTest)
                            .build();
                        testSet = new test_set_builder_1.TestSetBuilder().addTestFixture(testFixture).build();
                        outputStream = new test_output_stream_1.TestOutputStream();
                        alsatian_core_1.SpyOn(outputStream, "push");
                        testRunner = new test_runner_1.TestRunner(outputStream);
                        return [4 /*yield*/, testRunner.run(testSet, 50)];
                    case 1:
                        _a.sent();
                        alsatian_core_1.Expect(outputStream.push).toHaveBeenCalledWith("not ok 1 Test Function\n");
                        alsatian_core_1.Expect(outputStream.push).toHaveBeenCalledWith("ok 2 Test Function\n");
                        return [2 /*return*/];
                }
            });
        });
    };
    RunTestTests.prototype.twoTestsSecondTakes100msWith50msTimeoutFails = function () {
        return __awaiter(this, void 0, void 0, function () {
            var firstTest, secondTest, fixtureObject, testFixture, testSet, outputStream, testRunner;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        firstTest = new test_builder_1.TestBuilder()
                            .withTestCaseCount(1)
                            .withKey("firstTestFunction")
                            .withIsAsync(true)
                            .build();
                        secondTest = new test_builder_1.TestBuilder()
                            .withTestCaseCount(1)
                            .withKey("secondTestFunction")
                            .withIsAsync(true)
                            .build();
                        fixtureObject = {
                            firstTestFunction: function () {
                                return new Promise(function (resolve, reject) {
                                    return setTimeout(function () { return resolve(); }, 10);
                                });
                            },
                            secondTestFunction: function () {
                                return new Promise(function (resolve, reject) {
                                    return setTimeout(function () { return resolve(); }, 100);
                                });
                            }
                        };
                        testFixture = new test_fixture_builder_1.TestFixtureBuilder()
                            .withFixture(fixtureObject)
                            .addTest(firstTest)
                            .addTest(secondTest)
                            .build();
                        testSet = new test_set_builder_1.TestSetBuilder().addTestFixture(testFixture).build();
                        outputStream = new test_output_stream_1.TestOutputStream();
                        alsatian_core_1.SpyOn(outputStream, "push");
                        testRunner = new test_runner_1.TestRunner(outputStream);
                        return [4 /*yield*/, testRunner.run(testSet, 50)];
                    case 1:
                        _a.sent();
                        alsatian_core_1.Expect(outputStream.push).toHaveBeenCalledWith("ok 1 Test Function\n");
                        alsatian_core_1.Expect(outputStream.push).toHaveBeenCalledWith("not ok 2 Test Function\n");
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        alsatian_core_1.AsyncTest(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], RunTestTests.prototype, "singlePassingTestRunsSuccessfully", null);
    __decorate([
        alsatian_core_1.AsyncTest(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], RunTestTests.prototype, "singlePassingTestRunsSuccessfullyWithOnCompleteEventRaised", null);
    __decorate([
        alsatian_core_1.AsyncTest(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], RunTestTests.prototype, "singlePassingTestRunsSuccessfullyWithoutOnCompleteEventRaised", null);
    __decorate([
        alsatian_core_1.AsyncTest(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], RunTestTests.prototype, "singlePassingTestRunsSuccessfullyWithSeveralOnCompleteEventRaised", null);
    __decorate([
        alsatian_core_1.AsyncTest(),
        alsatian_core_1.Timeout(600),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], RunTestTests.prototype, "singleTestTakes501msFails", null);
    __decorate([
        alsatian_core_1.AsyncTest(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], RunTestTests.prototype, "singleTestTakes100msWith50msTimeoutFails", null);
    __decorate([
        alsatian_core_1.AsyncTest(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], RunTestTests.prototype, "singleTestThrowsErrorFails", null);
    __decorate([
        alsatian_core_1.AsyncTest(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], RunTestTests.prototype, "twoPassingTestsRunsSuccessfully", null);
    __decorate([
        alsatian_core_1.AsyncTest(),
        alsatian_core_1.Timeout(1000),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], RunTestTests.prototype, "twoTestsFirstTakes501msFails", null);
    __decorate([
        alsatian_core_1.AsyncTest(),
        alsatian_core_1.Timeout(1000),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], RunTestTests.prototype, "twoTestsSecondTakes501msFails", null);
    __decorate([
        alsatian_core_1.AsyncTest(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], RunTestTests.prototype, "twoTestsFirstTakes100msWith50msTimeoutFails", null);
    __decorate([
        alsatian_core_1.AsyncTest(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], RunTestTests.prototype, "twoTestsSecondTakes100msWith50msTimeoutFails", null);
    return RunTestTests;
}());
exports.RunTestTests = RunTestTests;
//# sourceMappingURL=run-test.spec.js.map