"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var test_case_builder_1 = require("./test-case-builder");
var TestBuilder = /** @class */ (function () {
    function TestBuilder() {
        this._test = {
            description: "Test Function",
            focussed: false,
            ignoreReason: undefined,
            ignored: false,
            isAsync: false,
            key: "testFunction",
            testCases: [],
            timeout: null
        };
    }
    TestBuilder.prototype.withIsAsync = function (isAsync) {
        this._test.isAsync = isAsync;
        return this;
    };
    TestBuilder.prototype.withKey = function (key) {
        this._test.key = key;
        return this;
    };
    TestBuilder.prototype.withDescription = function (description) {
        this._test.description = description;
        return this;
    };
    TestBuilder.prototype.addTestCase = function (testCase) {
        this._test.testCases.push(testCase);
        return this;
    };
    TestBuilder.prototype.withTestCases = function (testCases) {
        this._test.testCases = testCases;
        return this;
    };
    TestBuilder.prototype.withTestCaseCount = function (testCaseCount) {
        for (var i = 0; i < testCaseCount; i++) {
            this._test.testCases.push(new test_case_builder_1.TestCaseBuilder().build());
        }
        return this;
    };
    TestBuilder.prototype.ignored = function (reason) {
        this._test.ignored = true;
        this._test.ignoreReason = reason;
        return this;
    };
    TestBuilder.prototype.focussed = function () {
        this._test.focussed = true;
        return this;
    };
    TestBuilder.prototype.build = function () {
        return this._test;
    };
    return TestBuilder;
}());
exports.TestBuilder = TestBuilder;
//# sourceMappingURL=test-builder.js.map