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
var timeout_decorator_1 = require("../../../core/decorators/timeout-decorator");
var TimeoutDecoratorTests = /** @class */ (function () {
    function TimeoutDecoratorTests() {
    }
    TimeoutDecoratorTests.prototype.testTimeoutMetaDataAdded = function (timeout) {
        var timeoutDecorator = timeout_decorator_1.Timeout(timeout);
        var testFixture = {};
        timeoutDecorator(testFixture, "test", null);
        alsatian_core_1.Expect(Reflect.getMetadata(alsatian_core_1.METADATA_KEYS.TIMEOUT, testFixture, "test")).toBe(timeout);
    };
    TimeoutDecoratorTests.prototype.incorrectTestTimeoutThrowsError = function (timeout) {
        alsatian_core_1.Expect(function () { return timeout_decorator_1.Timeout(timeout); }).toThrowError(RangeError, "Timeout period must be greater than 0.");
    };
    __decorate([
        alsatian_core_1.TestCase(1),
        alsatian_core_1.TestCase(2),
        alsatian_core_1.TestCase(42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], TimeoutDecoratorTests.prototype, "testTimeoutMetaDataAdded", null);
    __decorate([
        alsatian_core_1.TestCase(0),
        alsatian_core_1.TestCase(-1),
        alsatian_core_1.TestCase(-42),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], TimeoutDecoratorTests.prototype, "incorrectTestTimeoutThrowsError", null);
    return TimeoutDecoratorTests;
}());
exports.TimeoutDecoratorTests = TimeoutDecoratorTests;
//# sourceMappingURL=timeout.spec.js.map