"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TestCaseBuilder = /** @class */ (function () {
    function TestCaseBuilder() {
        this._testCase = {
            caseArguments: []
        };
    }
    TestCaseBuilder.prototype.addArgument = function (argument) {
        this._testCase.caseArguments.push(argument);
        return this;
    };
    TestCaseBuilder.prototype.withArguments = function (args) {
        this._testCase.caseArguments = args;
        return this;
    };
    TestCaseBuilder.prototype.withArgumentCount = function (argumentCount) {
        for (var i = 0; i < argumentCount; i++) {
            this._testCase.caseArguments.push(0);
        }
        return this;
    };
    TestCaseBuilder.prototype.build = function () {
        return this._testCase;
    };
    return TestCaseBuilder;
}());
exports.TestCaseBuilder = TestCaseBuilder;
//# sourceMappingURL=test-case-builder.js.map