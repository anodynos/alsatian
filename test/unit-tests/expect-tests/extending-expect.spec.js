"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var ExtendedExpect = /** @class */ (function (_super) {
    __extends(ExtendedExpect, _super);
    function ExtendedExpect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ExtendedExpect.prototype, "exposedActualValue", {
        get: function () {
            return this.actualValue;
        },
        enumerable: true,
        configurable: true
    });
    return ExtendedExpect;
}(alsatian_core_1.Matcher));
var ExtendingExpectTests = /** @class */ (function () {
    function ExtendingExpectTests() {
    }
    ExtendingExpectTests.prototype.canReferenceActualValue = function (expectedActualValue) {
        alsatian_core_1.Expect(new ExtendedExpect(expectedActualValue).exposedActualValue).toBe(expectedActualValue);
    };
    __decorate([
        alsatian_core_1.TestCase(undefined),
        alsatian_core_1.TestCase(null),
        alsatian_core_1.TestCase(0),
        alsatian_core_1.TestCase(42),
        alsatian_core_1.TestCase(4.2),
        alsatian_core_1.TestCase(-4.2),
        alsatian_core_1.TestCase(""),
        alsatian_core_1.TestCase("something"),
        alsatian_core_1.Test("actual value can be accessed"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ExtendingExpectTests.prototype, "canReferenceActualValue", null);
    ExtendingExpectTests = __decorate([
        alsatian_core_1.TestFixture("extending expect")
    ], ExtendingExpectTests);
    return ExtendingExpectTests;
}());
exports.ExtendingExpectTests = ExtendingExpectTests;
//# sourceMappingURL=extending-expect.spec.js.map