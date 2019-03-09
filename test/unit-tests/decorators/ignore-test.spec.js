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
var ignore_test_decorator_1 = require("../../../core/decorators/ignore-test-decorator");
var IgnoreTestDecoratorTests = /** @class */ (function () {
    function IgnoreTestDecoratorTests() {
    }
    IgnoreTestDecoratorTests.prototype.ignoreTestKeyMetaDataAddedToCorrectKey = function (key) {
        var ignoreTestDecorator = ignore_test_decorator_1.IgnoreTest();
        var testFixture = {};
        ignoreTestDecorator(testFixture, key, null);
        alsatian_core_1.Expect(Reflect.getMetadata(alsatian_core_1.METADATA_KEYS.IGNORE, testFixture, key)).toBe(true);
    };
    IgnoreTestDecoratorTests.prototype.ignoreTestCorrectReasonAdded = function (reason) {
        var key = "testKey";
        var ignoreTestDecorator = ignore_test_decorator_1.IgnoreTest(reason);
        var testFixture = {};
        ignoreTestDecorator(testFixture, key, null);
        alsatian_core_1.Expect(Reflect.getMetadata(alsatian_core_1.METADATA_KEYS.IGNORE_REASON, testFixture, key)).toBe(reason);
    };
    __decorate([
        alsatian_core_1.TestCase("key"),
        alsatian_core_1.TestCase("another key"),
        alsatian_core_1.TestCase("something-different"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], IgnoreTestDecoratorTests.prototype, "ignoreTestKeyMetaDataAddedToCorrectKey", null);
    __decorate([
        alsatian_core_1.TestCase("Ignored because of bla bla bla"),
        alsatian_core_1.TestCase("another reason for it being ignored"),
        alsatian_core_1.TestCase("bla bla bla"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], IgnoreTestDecoratorTests.prototype, "ignoreTestCorrectReasonAdded", null);
    return IgnoreTestDecoratorTests;
}());
exports.IgnoreTestDecoratorTests = IgnoreTestDecoratorTests;
//# sourceMappingURL=ignore-test.spec.js.map