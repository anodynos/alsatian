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
var alsatian_core_1 = require("../../../core/alsatian-core");
var test_plan_1 = require("../../../core/running/test-plan");
var test_builder_1 = require("../../builders/test-builder");
var test_fixture_builder_1 = require("../../builders/test-fixture-builder");
var test_set_builder_1 = require("../../builders/test-set-builder");
var TestPlanTests = /** @class */ (function () {
    function TestPlanTests() {
    }
    TestPlanTests.prototype.correctNumberOfTestItemsAdded = function (testFixtureCount, testCount, testCaseCount) {
        var testSetBuilder = new test_set_builder_1.TestSetBuilder();
        for (var i = 0; i < testFixtureCount; i++) {
            var testFixtureBuilder = new test_fixture_builder_1.TestFixtureBuilder();
            for (var j = 0; j < testCount; j++) {
                var test = new test_builder_1.TestBuilder().withTestCaseCount(testCaseCount).build();
                testFixtureBuilder.addTest(test);
            }
            testSetBuilder.addTestFixture(testFixtureBuilder.build());
        }
        var testSet = testSetBuilder.build();
        var testPlan = new test_plan_1.TestPlan(testSet);
        alsatian_core_1.Expect(testPlan.testItems.length).toBe(testFixtureCount * testCount * testCaseCount);
    };
    TestPlanTests.prototype.allTestFixturesAddedToTestItems = function (testFixtureCount, testCount, testCaseCount) {
        var testSetBuilder = new test_set_builder_1.TestSetBuilder();
        for (var i = 0; i < testFixtureCount; i++) {
            var testFixtureBuilder = new test_fixture_builder_1.TestFixtureBuilder();
            for (var j = 0; j < testCount; j++) {
                var test = new test_builder_1.TestBuilder().withTestCaseCount(testCaseCount).build();
                testFixtureBuilder.addTest(test);
            }
            testSetBuilder.addTestFixture(testFixtureBuilder.build());
        }
        var testSet = testSetBuilder.build();
        var testPlan = new test_plan_1.TestPlan(testSet);
        testSet.testFixtures.forEach(function (testFixture) {
            testFixture.tests.forEach(function (test) {
                test.testCases.forEach(function (testCase) {
                    alsatian_core_1.Expect(testPlan.testItems.filter(function (testItem) {
                        return testItem.test === test && testItem.testCase === testCase;
                    }).length).toBe(1);
                });
            });
        });
    };
    TestPlanTests.prototype.onlyFocussedFirstTestAddedToTestItems = function () {
        var testFixtureBuilder = new test_fixture_builder_1.TestFixtureBuilder();
        var firstTest = new test_builder_1.TestBuilder().withTestCaseCount(1).build();
        firstTest.focussed = true;
        testFixtureBuilder.addTest(firstTest);
        var secondTest = new test_builder_1.TestBuilder().withTestCaseCount(1).build();
        testFixtureBuilder.addTest(secondTest);
        var testSet = new test_set_builder_1.TestSetBuilder()
            .addTestFixture(testFixtureBuilder.build())
            .build();
        var testPlan = new test_plan_1.TestPlan(testSet);
        alsatian_core_1.Expect(testPlan.testItems.length).toBe(1);
        alsatian_core_1.Expect(testPlan.testItems[0].test).toBe(firstTest);
        alsatian_core_1.Expect(testPlan.testItems[0].testCase).toBe(firstTest.testCases[0]);
    };
    TestPlanTests.prototype.onlyFocussedSecondTestAddedToTestItems = function () {
        var testFixtureBuilder = new test_fixture_builder_1.TestFixtureBuilder();
        var firstTest = new test_builder_1.TestBuilder().withTestCaseCount(1).build();
        testFixtureBuilder.addTest(firstTest);
        var secondTest = new test_builder_1.TestBuilder().withTestCaseCount(1).build();
        secondTest.focussed = true;
        testFixtureBuilder.addTest(secondTest);
        var testSet = new test_set_builder_1.TestSetBuilder()
            .addTestFixture(testFixtureBuilder.build())
            .build();
        var testPlan = new test_plan_1.TestPlan(testSet);
        alsatian_core_1.Expect(testPlan.testItems.length).toBe(1);
        alsatian_core_1.Expect(testPlan.testItems[0].test).toBe(secondTest);
        alsatian_core_1.Expect(testPlan.testItems[0].testCase).toBe(secondTest.testCases[0]);
    };
    TestPlanTests.prototype.onlyFocussedFirstTestFixtureAddedToTestItems = function () {
        var firstTest = new test_builder_1.TestBuilder().withTestCaseCount(1).build();
        var secondTest = new test_builder_1.TestBuilder().withTestCaseCount(1).build();
        var firstTestFixture = new test_fixture_builder_1.TestFixtureBuilder()
            .addTest(firstTest)
            .addTest(secondTest)
            .build();
        firstTestFixture.focussed = true;
        var secondTestFixture = new test_fixture_builder_1.TestFixtureBuilder()
            .addTest(new test_builder_1.TestBuilder().build())
            .addTest(new test_builder_1.TestBuilder().build())
            .build();
        var testSet = new test_set_builder_1.TestSetBuilder()
            .addTestFixture(firstTestFixture)
            .addTestFixture(secondTestFixture)
            .build();
        var testPlan = new test_plan_1.TestPlan(testSet);
        alsatian_core_1.Expect(testPlan.testItems.length).toBe(2);
        alsatian_core_1.Expect(testPlan.testItems[0].test).toBe(firstTest);
        alsatian_core_1.Expect(testPlan.testItems[0].testCase).toBe(firstTest.testCases[0]);
        alsatian_core_1.Expect(testPlan.testItems[1].test).toBe(secondTest);
        alsatian_core_1.Expect(testPlan.testItems[1].testCase).toBe(secondTest.testCases[0]);
    };
    TestPlanTests.prototype.onlyFocussedSecondTestFixtureAddedToTestItems = function () {
        var firstTestFixture = new test_fixture_builder_1.TestFixtureBuilder()
            .addTest(new test_builder_1.TestBuilder().build())
            .addTest(new test_builder_1.TestBuilder().build())
            .build();
        var firstTest = new test_builder_1.TestBuilder().withTestCaseCount(1).build();
        var secondTest = new test_builder_1.TestBuilder().withTestCaseCount(1).build();
        var secondTestFixture = new test_fixture_builder_1.TestFixtureBuilder()
            .addTest(firstTest)
            .addTest(secondTest)
            .build();
        secondTestFixture.focussed = true;
        var testSet = new test_set_builder_1.TestSetBuilder()
            .addTestFixture(firstTestFixture)
            .addTestFixture(secondTestFixture)
            .build();
        var testPlan = new test_plan_1.TestPlan(testSet);
        alsatian_core_1.Expect(testPlan.testItems.length).toBe(2);
        alsatian_core_1.Expect(testPlan.testItems[0].test).toBe(firstTest);
        alsatian_core_1.Expect(testPlan.testItems[0].testCase).toBe(firstTest.testCases[0]);
        alsatian_core_1.Expect(testPlan.testItems[1].test).toBe(secondTest);
        alsatian_core_1.Expect(testPlan.testItems[1].testCase).toBe(secondTest.testCases[0]);
    };
    TestPlanTests.prototype.onlyFirstFocussedTestInSecondTestFixtureAddedToTestItems = function () {
        var firstTestFixture = new test_fixture_builder_1.TestFixtureBuilder()
            .addTest(new test_builder_1.TestBuilder().build())
            .addTest(new test_builder_1.TestBuilder().build())
            .build();
        var firstTest = new test_builder_1.TestBuilder().withTestCaseCount(1).build();
        var secondTest = new test_builder_1.TestBuilder().withTestCaseCount(1).build();
        var secondTestFixture = new test_fixture_builder_1.TestFixtureBuilder()
            .addTest(firstTest)
            .addTest(secondTest)
            .build();
        secondTestFixture.focussed = true;
        firstTest.focussed = true;
        var testSet = new test_set_builder_1.TestSetBuilder()
            .addTestFixture(firstTestFixture)
            .addTestFixture(secondTestFixture)
            .build();
        var testPlan = new test_plan_1.TestPlan(testSet);
        alsatian_core_1.Expect(testPlan.testItems.length).toBe(1);
        alsatian_core_1.Expect(testPlan.testItems[0].test).toBe(firstTest);
        alsatian_core_1.Expect(testPlan.testItems[0].testCase).toBe(firstTest.testCases[0]);
    };
    TestPlanTests.prototype.onlySecondFocussedTestInSecondTestFixtureAddedToTestItems = function () {
        var firstTestFixture = new test_fixture_builder_1.TestFixtureBuilder()
            .addTest(new test_builder_1.TestBuilder().build())
            .addTest(new test_builder_1.TestBuilder().build())
            .build();
        var firstTest = new test_builder_1.TestBuilder().withTestCaseCount(1).build();
        var secondTest = new test_builder_1.TestBuilder().withTestCaseCount(1).build();
        var secondTestFixture = new test_fixture_builder_1.TestFixtureBuilder()
            .addTest(firstTest)
            .addTest(secondTest)
            .build();
        secondTestFixture.focussed = true;
        secondTest.focussed = true;
        var testSet = new test_set_builder_1.TestSetBuilder()
            .addTestFixture(firstTestFixture)
            .addTestFixture(secondTestFixture)
            .build();
        var testPlan = new test_plan_1.TestPlan(testSet);
        alsatian_core_1.Expect(testPlan.testItems.length).toBe(1);
        alsatian_core_1.Expect(testPlan.testItems[0].test).toBe(secondTest);
        alsatian_core_1.Expect(testPlan.testItems[0].testCase).toBe(secondTest.testCases[0]);
    };
    __decorate([
        alsatian_core_1.TestCase(1, 1, 1),
        alsatian_core_1.TestCase(2, 1, 1),
        alsatian_core_1.TestCase(1, 2, 1),
        alsatian_core_1.TestCase(2, 2, 1),
        alsatian_core_1.TestCase(1, 1, 2),
        alsatian_core_1.TestCase(2, 1, 2),
        alsatian_core_1.TestCase(1, 2, 2),
        alsatian_core_1.TestCase(2, 2, 2),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number, Number]),
        __metadata("design:returntype", void 0)
    ], TestPlanTests.prototype, "correctNumberOfTestItemsAdded", null);
    __decorate([
        alsatian_core_1.TestCase(1, 1, 1),
        alsatian_core_1.TestCase(2, 1, 1),
        alsatian_core_1.TestCase(1, 2, 1),
        alsatian_core_1.TestCase(2, 2, 1),
        alsatian_core_1.TestCase(1, 1, 2),
        alsatian_core_1.TestCase(2, 1, 2),
        alsatian_core_1.TestCase(1, 2, 2),
        alsatian_core_1.TestCase(2, 2, 2),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number, Number]),
        __metadata("design:returntype", void 0)
    ], TestPlanTests.prototype, "allTestFixturesAddedToTestItems", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TestPlanTests.prototype, "onlyFocussedFirstTestAddedToTestItems", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TestPlanTests.prototype, "onlyFocussedSecondTestAddedToTestItems", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TestPlanTests.prototype, "onlyFocussedFirstTestFixtureAddedToTestItems", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TestPlanTests.prototype, "onlyFocussedSecondTestFixtureAddedToTestItems", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TestPlanTests.prototype, "onlyFirstFocussedTestInSecondTestFixtureAddedToTestItems", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TestPlanTests.prototype, "onlySecondFocussedTestInSecondTestFixtureAddedToTestItems", null);
    return TestPlanTests;
}());
exports.TestPlanTests = TestPlanTests;
//# sourceMappingURL=test-plan.spec.js.map