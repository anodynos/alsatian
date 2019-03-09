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
var test_builder_1 = require("../../../builders/test-builder");
var test_case_builder_1 = require("../../../builders/test-case-builder");
var test_fixture_builder_1 = require("../../../builders/test-fixture-builder");
var FixtureInfoTests = /** @class */ (function () {
    function FixtureInfoTests() {
    }
    FixtureInfoTests._getExpectedFixtureOutput = function (fixtureName) {
        return "# FIXTURE " + fixtureName + "\n";
    };
    FixtureInfoTests.prototype.outputsFixtureNameWithPassingTest = function (description) {
        return __awaiter(this, void 0, void 0, function () {
            var output, testSet, test, testFixture, testRunner;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        output = new alsatian_core_1.TestOutputStream();
                        alsatian_core_1.SpyOn(output, "push");
                        testSet = {
                            testFixtures: []
                        };
                        test = new test_builder_1.TestBuilder()
                            .withKey("test")
                            .addTestCase(new test_case_builder_1.TestCaseBuilder().build())
                            .build();
                        testFixture = new test_fixture_builder_1.TestFixtureBuilder()
                            .withFixture({ test: function () { } })
                            .withDescription(description)
                            .addTest(test)
                            .build();
                        testSet.testFixtures.push(testFixture);
                        testRunner = new alsatian_core_1.TestRunner(output);
                        return [4 /*yield*/, testRunner.run(testSet)];
                    case 1:
                        _a.sent();
                        alsatian_core_1.Expect(output.push).toHaveBeenCalledWith(FixtureInfoTests._getExpectedFixtureOutput(description));
                        alsatian_core_1.Expect(output.push).toHaveBeenCalledWith("ok 1 " + test.description + "\n");
                        return [2 /*return*/];
                }
            });
        });
    };
    FixtureInfoTests.prototype.outputsFixtureNameWithFailingTest = function (description) {
        return __awaiter(this, void 0, void 0, function () {
            var output, testSet, test, testFixture, testRunner;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        output = new alsatian_core_1.TestOutputStream();
                        alsatian_core_1.SpyOn(output, "push");
                        testSet = {
                            testFixtures: []
                        };
                        test = new test_builder_1.TestBuilder()
                            .withKey("test")
                            .addTestCase(new test_case_builder_1.TestCaseBuilder().build())
                            .build();
                        testFixture = new test_fixture_builder_1.TestFixtureBuilder()
                            .withFixture({
                            test: function () {
                                throw new alsatian_core_1.MatchError("nothing", "something", "expected nothing to be something.");
                            }
                        })
                            .addTest(test)
                            .withDescription(description)
                            .build();
                        testSet.testFixtures.push(testFixture);
                        testRunner = new alsatian_core_1.TestRunner(output);
                        return [4 /*yield*/, testRunner.run(testSet)];
                    case 1:
                        _a.sent();
                        testSet.testFixtures.push(testFixture);
                        alsatian_core_1.Expect(output.push).toHaveBeenCalledWith(FixtureInfoTests._getExpectedFixtureOutput(description));
                        alsatian_core_1.Expect(output.push).toHaveBeenCalledWith("not ok 1 " + test.description + "\n");
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        alsatian_core_1.AsyncTest(),
        alsatian_core_1.TestCase("SomeFixtureName"),
        alsatian_core_1.TestCase("AnotherFixture"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], FixtureInfoTests.prototype, "outputsFixtureNameWithPassingTest", null);
    __decorate([
        alsatian_core_1.AsyncTest(),
        alsatian_core_1.TestCase("SomeFixtureName"),
        alsatian_core_1.TestCase("AnotherFixture"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], FixtureInfoTests.prototype, "outputsFixtureNameWithFailingTest", null);
    return FixtureInfoTests;
}());
exports.FixtureInfoTests = FixtureInfoTests;
//# sourceMappingURL=fixture-info.spec.js.map