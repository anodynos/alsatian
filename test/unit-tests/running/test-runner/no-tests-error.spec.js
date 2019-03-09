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
var alsatian_core_1 = require("../../../../core/alsatian-core");
var test_runner_1 = require("../../../../core/running/test-runner");
var test_builder_1 = require("../../../builders/test-builder");
var test_fixture_builder_1 = require("../../../builders/test-fixture-builder");
var test_set_builder_1 = require("../../../builders/test-set-builder");
var NotestsErrorTests = /** @class */ (function () {
    function NotestsErrorTests() {
    }
    NotestsErrorTests.prototype._spyProcess = function () {
        this._originalProcessExit = process.exit;
        this._originalStdErr = process.stderr.write;
        alsatian_core_1.SpyOn(process, "exit").andStub();
        alsatian_core_1.SpyOn(process.stderr, "write").andStub();
    };
    NotestsErrorTests.prototype._resetProcess = function () {
        process.exit = this._originalProcessExit;
        process.stderr.write = this._originalStdErr;
    };
    NotestsErrorTests.prototype.emptyTestFixturesThrowsError = function () {
        return __awaiter(this, void 0, void 0, function () {
            var testSet, testRunner, error, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        testSet = new test_set_builder_1.TestSetBuilder().build();
                        testRunner = new test_runner_1.TestRunner();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, testRunner.run(testSet)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        error = e_1;
                        return [3 /*break*/, 4];
                    case 4:
                        alsatian_core_1.Expect(error).toBeDefined();
                        alsatian_core_1.Expect(error).not.toBeNull();
                        alsatian_core_1.Expect(error.constructor).toBe(Error);
                        alsatian_core_1.Expect(error.message).toBe("no tests to run.");
                        return [2 /*return*/];
                }
            });
        });
    };
    NotestsErrorTests.prototype.testFixtureWithEmptyTestsOutputsNoTestError = function (testCount) {
        return __awaiter(this, void 0, void 0, function () {
            var testFixtureBuilder, i, fixture, testSet, testRunner, error, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        testFixtureBuilder = new test_fixture_builder_1.TestFixtureBuilder();
                        for (i = 0; i < testCount; i++) {
                            testFixtureBuilder.addTest(new test_builder_1.TestBuilder().build());
                        }
                        fixture = testFixtureBuilder.build();
                        testSet = new test_set_builder_1.TestSetBuilder().addTestFixture(fixture).build();
                        testRunner = new test_runner_1.TestRunner();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, testRunner.run(testSet)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_2 = _a.sent();
                        error = e_2;
                        return [3 /*break*/, 4];
                    case 4:
                        alsatian_core_1.Expect(error).toBeDefined();
                        alsatian_core_1.Expect(error).not.toBeNull();
                        alsatian_core_1.Expect(error.constructor).toBe(Error);
                        alsatian_core_1.Expect(error.message).toBe("no tests to run.");
                        return [2 /*return*/];
                }
            });
        });
    };
    NotestsErrorTests.prototype.multipleTestFixtureWithEmptyTestOutputsNoTestError = function (testFixtureCount) {
        return __awaiter(this, void 0, void 0, function () {
            var fixtures, i, testSet, testRunner, error, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fixtures = [];
                        for (i = 0; i < testFixtureCount; i++) {
                            fixtures.push(new test_fixture_builder_1.TestFixtureBuilder().build());
                        }
                        testSet = new test_set_builder_1.TestSetBuilder().withTestFixtures(fixtures).build();
                        testRunner = new test_runner_1.TestRunner();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, testRunner.run(testSet)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_3 = _a.sent();
                        error = e_3;
                        return [3 /*break*/, 4];
                    case 4:
                        alsatian_core_1.Expect(error).toBeDefined();
                        alsatian_core_1.Expect(error).not.toBeNull();
                        alsatian_core_1.Expect(error.constructor).toBe(Error);
                        alsatian_core_1.Expect(error.message).toBe("no tests to run.");
                        return [2 /*return*/];
                }
            });
        });
    };
    NotestsErrorTests.prototype.multipleTestFixtureWithMultipleEmptyTestOutputsNoTestError = function (testFixtureCount, testCount) {
        return __awaiter(this, void 0, void 0, function () {
            var fixtures, i, testFixtureBuilder, j, testSet, testRunner, error, e_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fixtures = [];
                        for (i = 0; i < testFixtureCount; i++) {
                            testFixtureBuilder = new test_fixture_builder_1.TestFixtureBuilder();
                            for (j = 0; j < testCount; j++) {
                                testFixtureBuilder.addTest(new test_builder_1.TestBuilder().build());
                            }
                            fixtures.push(testFixtureBuilder.build());
                        }
                        testSet = new test_set_builder_1.TestSetBuilder().withTestFixtures(fixtures).build();
                        testRunner = new test_runner_1.TestRunner();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, testRunner.run(testSet)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_4 = _a.sent();
                        error = e_4;
                        return [3 /*break*/, 4];
                    case 4:
                        alsatian_core_1.Expect(error).toBeDefined();
                        alsatian_core_1.Expect(error).not.toBeNull();
                        alsatian_core_1.Expect(error.constructor).toBe(Error);
                        alsatian_core_1.Expect(error.message).toBe("no tests to run.");
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        alsatian_core_1.Setup,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], NotestsErrorTests.prototype, "_spyProcess", null);
    __decorate([
        alsatian_core_1.Teardown,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], NotestsErrorTests.prototype, "_resetProcess", null);
    __decorate([
        alsatian_core_1.AsyncTest("empty test fixture throws no tests error"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], NotestsErrorTests.prototype, "emptyTestFixturesThrowsError", null);
    __decorate([
        alsatian_core_1.TestCase(1),
        alsatian_core_1.TestCase(2),
        alsatian_core_1.TestCase(13),
        alsatian_core_1.AsyncTest("one test fixture with multiple empty tests throws no tests error"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", Promise)
    ], NotestsErrorTests.prototype, "testFixtureWithEmptyTestsOutputsNoTestError", null);
    __decorate([
        alsatian_core_1.TestCase(1),
        alsatian_core_1.TestCase(2),
        alsatian_core_1.TestCase(13),
        alsatian_core_1.AsyncTest("multiple test fixtures with no tests throws no tests error"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", Promise)
    ], NotestsErrorTests.prototype, "multipleTestFixtureWithEmptyTestOutputsNoTestError", null);
    __decorate([
        alsatian_core_1.TestCase(1, 1),
        alsatian_core_1.TestCase(1, 2),
        alsatian_core_1.TestCase(1, 13),
        alsatian_core_1.TestCase(2, 1),
        alsatian_core_1.TestCase(2, 2),
        alsatian_core_1.TestCase(2, 13),
        alsatian_core_1.TestCase(13, 1),
        alsatian_core_1.TestCase(13, 2),
        alsatian_core_1.TestCase(13, 13),
        alsatian_core_1.AsyncTest("multiple test fixtures with multiple empty tests throws no tests error"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number]),
        __metadata("design:returntype", Promise)
    ], NotestsErrorTests.prototype, "multipleTestFixtureWithMultipleEmptyTestOutputsNoTestError", null);
    return NotestsErrorTests;
}());
exports.NotestsErrorTests = NotestsErrorTests;
//# sourceMappingURL=no-tests-error.spec.js.map