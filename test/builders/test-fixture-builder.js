"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var test_fixture_1 = require("../../core/test-fixture");
var test_builder_1 = require("./test-builder");
var TestFixtureBuilder = /** @class */ (function () {
    function TestFixtureBuilder() {
        this._testFixture = new test_fixture_1.TestFixture("Unnamed Test Fixture");
    }
    TestFixtureBuilder.prototype.withFixture = function (fixture) {
        this._testFixture.fixture = fixture;
        return this;
    };
    TestFixtureBuilder.prototype.addTest = function (test) {
        this._testFixture.tests.push(test);
        if (this._testFixture.fixture[test.key] === undefined) {
            this._testFixture.fixture[test.key] = function () { };
        }
        return this;
    };
    TestFixtureBuilder.prototype.withTests = function (tests) {
        var _this = this;
        tests.forEach(function (test) {
            _this._testFixture.addTest(test);
            _this._testFixture.fixture[test.key] = function () { };
        });
        return this;
    };
    TestFixtureBuilder.prototype.withTestCount = function (testCount) {
        var testBuilder = new test_builder_1.TestBuilder();
        for (var i = 0; i < testCount; i++) {
            this._testFixture.tests.push(testBuilder.build());
        }
        return this;
    };
    TestFixtureBuilder.prototype.withDescription = function (description) {
        this._testFixture.description = description;
        return this;
    };
    TestFixtureBuilder.prototype.build = function () {
        return this._testFixture;
    };
    return TestFixtureBuilder;
}());
exports.TestFixtureBuilder = TestFixtureBuilder;
//# sourceMappingURL=test-fixture-builder.js.map