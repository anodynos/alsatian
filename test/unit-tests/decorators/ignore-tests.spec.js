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
var alsatian_core_1 = require("../../../core/alsatian-core");
var ignore_tests_decorator_1 = require("../../../core/decorators/ignore-tests-decorator");
var IgnoreTestsDecoratorTests = /** @class */ (function () {
    function IgnoreTestsDecoratorTests() {
    }
    IgnoreTestsDecoratorTests.prototype.focusTestKeyMetaDataAdded = function (key) {
        var ignoreTestsDecorator = ignore_tests_decorator_1.IgnoreTests();
        var TestFixtureClass = /** @class */ (function () {
            function TestFixtureClass() {
            }
            return TestFixtureClass;
        }());
        ignoreTestsDecorator(TestFixtureClass);
        alsatian_core_1.Expect(Reflect.getMetadata(alsatian_core_1.METADATA_KEYS.IGNORE, TestFixtureClass)).toBe(true);
    };
    IgnoreTestsDecoratorTests.prototype.ignoreTestCorrectReasonAdded = function (reason) {
        var ignoreTestDecorator = ignore_tests_decorator_1.IgnoreTests(reason);
        var TestFixtureClass = /** @class */ (function () {
            function TestFixtureClass() {
            }
            return TestFixtureClass;
        }());
        ignoreTestDecorator(TestFixtureClass);
        alsatian_core_1.Expect(Reflect.getMetadata(alsatian_core_1.METADATA_KEYS.IGNORE_REASON, TestFixtureClass)).toBe(reason);
    };
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], IgnoreTestsDecoratorTests.prototype, "focusTestKeyMetaDataAdded", null);
    __decorate([
        alsatian_core_1.TestCase("Ignored because of bla bla bla"),
        alsatian_core_1.TestCase("another reason for it being ignored"),
        alsatian_core_1.TestCase("bla bla bla"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], IgnoreTestsDecoratorTests.prototype, "ignoreTestCorrectReasonAdded", null);
    return IgnoreTestsDecoratorTests;
}());
exports.IgnoreTestsDecoratorTests = IgnoreTestsDecoratorTests;
//# sourceMappingURL=ignore-tests.spec.js.map