"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var alsatian_core_1 = require("../../core/alsatian-core");
var TestSetBuilder = /** @class */ (function () {
    function TestSetBuilder() {
        this._testSet = {};
        this._testFixtures = [];
        Object.defineProperty(this._testSet, "testFixtures", {
            get: function () { return null; },
            configurable: true
        });
        alsatian_core_1.SpyOnProperty(this._testSet, "testFixtures").andReturnValue(this._testFixtures);
    }
    TestSetBuilder.prototype.withTestFixtures = function (testFixtures) {
        this._testFixtures = testFixtures;
        alsatian_core_1.SpyOnProperty(this._testSet, "testFixtures").andReturnValue(this._testFixtures);
        return this;
    };
    TestSetBuilder.prototype.addTestFixture = function (testFixture) {
        this._testFixtures.push(testFixture);
        return this;
    };
    TestSetBuilder.prototype.build = function () {
        return this._testSet;
    };
    return TestSetBuilder;
}());
exports.TestSetBuilder = TestSetBuilder;
//# sourceMappingURL=test-set-builder.js.map