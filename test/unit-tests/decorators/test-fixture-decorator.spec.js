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
require("reflect-metadata");
var core_1 = require("../../../core/");
var alsatian_core_1 = require("../../../core/alsatian-core");
var test_fixture_decorator_1 = require("../../../core/decorators/test-fixture-decorator");
var TestFixtureDecoratorTests = /** @class */ (function () {
    function TestFixtureDecoratorTests() {
    }
    TestFixtureDecoratorTests.prototype.metaDataIsSet = function () {
        var testFixtureDecorator = test_fixture_decorator_1.TestFixture();
        var TestFixtureClass = /** @class */ (function () {
            function TestFixtureClass() {
            }
            return TestFixtureClass;
        }());
        testFixtureDecorator(TestFixtureClass);
        var testFixtureMetadata = Reflect.getMetadata(alsatian_core_1.METADATA_KEYS.TEST_FIXTURE, TestFixtureClass);
        alsatian_core_1.Expect(testFixtureMetadata).toBeDefined();
        alsatian_core_1.Expect(testFixtureMetadata).not.toBeNull();
    };
    TestFixtureDecoratorTests.prototype.metaDataIsTestFixture = function () {
        var testFixtureDecorator = test_fixture_decorator_1.TestFixture();
        var TestFixtureClass = /** @class */ (function () {
            function TestFixtureClass() {
            }
            return TestFixtureClass;
        }());
        testFixtureDecorator(TestFixtureClass);
        var testFixtureMetadata = Reflect.getMetadata(alsatian_core_1.METADATA_KEYS.TEST_FIXTURE, TestFixtureClass);
        alsatian_core_1.Expect(testFixtureMetadata instanceof core_1.TestFixture).toBe(true);
    };
    TestFixtureDecoratorTests.prototype.testFixtureMetadataDescriptionSet = function (testFixtureDescription) {
        var testFixtureDecorator = test_fixture_decorator_1.TestFixture(testFixtureDescription);
        var TestFixtureClass = /** @class */ (function () {
            function TestFixtureClass() {
            }
            return TestFixtureClass;
        }());
        testFixtureDecorator(TestFixtureClass);
        var testFixtureMetadata = Reflect.getMetadata(alsatian_core_1.METADATA_KEYS.TEST_FIXTURE, TestFixtureClass);
        alsatian_core_1.Expect(testFixtureMetadata.description).toBe(testFixtureDescription);
    };
    TestFixtureDecoratorTests.prototype.testFixtureMetadataDescriptionDefaultsToClassName = function () {
        var testFixtureDecorator = test_fixture_decorator_1.TestFixture();
        var ExampleTestFixture = /** @class */ (function () {
            function ExampleTestFixture() {
            }
            return ExampleTestFixture;
        }());
        testFixtureDecorator(ExampleTestFixture);
        var SomeOtherTestFixture = /** @class */ (function () {
            function SomeOtherTestFixture() {
            }
            return SomeOtherTestFixture;
        }());
        testFixtureDecorator(SomeOtherTestFixture);
        var testFixtureMetadata = Reflect.getMetadata(alsatian_core_1.METADATA_KEYS.TEST_FIXTURE, ExampleTestFixture);
        var someOtherTestFixtureMetadata = Reflect.getMetadata(alsatian_core_1.METADATA_KEYS.TEST_FIXTURE, SomeOtherTestFixture);
        alsatian_core_1.Expect(testFixtureMetadata.description).toBe("ExampleTestFixture");
        alsatian_core_1.Expect(someOtherTestFixtureMetadata.description).toBe("SomeOtherTestFixture");
    };
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TestFixtureDecoratorTests.prototype, "metaDataIsSet", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TestFixtureDecoratorTests.prototype, "metaDataIsTestFixture", null);
    __decorate([
        alsatian_core_1.TestCase("something"),
        alsatian_core_1.TestCase("wow, this is super!"),
        alsatian_core_1.TestCase("Mega Hyper AWESOME test..."),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], TestFixtureDecoratorTests.prototype, "testFixtureMetadataDescriptionSet", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TestFixtureDecoratorTests.prototype, "testFixtureMetadataDescriptionDefaultsToClassName", null);
    TestFixtureDecoratorTests = __decorate([
        alsatian_core_1.TestFixture("Test Fixture Decorator Tests")
    ], TestFixtureDecoratorTests);
    return TestFixtureDecoratorTests;
}());
exports.TestFixtureDecoratorTests = TestFixtureDecoratorTests;
//# sourceMappingURL=test-fixture-decorator.spec.js.map