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
var MatcherExtension = /** @class */ (function (_super) {
    __extends(MatcherExtension, _super);
    function MatcherExtension() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MatcherExtension.prototype.toBeTheAnswer = function () {
        if (this.actualValue !== 42) {
            throw new alsatian_core_1.MatchError("come on, 42 is the answer!", 42, this.actualValue);
        }
    };
    return MatcherExtension;
}(alsatian_core_1.MixedMatcher));
var EXTENDED_EXPECT = alsatian_core_1.buildExpect(MatcherExtension);
var ExtendingExpectTests = /** @class */ (function () {
    function ExtendingExpectTests() {
    }
    ExtendingExpectTests.prototype.extensionIsMixedMatcher = function () {
        alsatian_core_1.Expect(EXTENDED_EXPECT(42) instanceof alsatian_core_1.MixedMatcher).toBe(true);
    };
    ExtendingExpectTests.prototype.extensionHasNewFunctions = function () {
        alsatian_core_1.Expect(EXTENDED_EXPECT(42).toBeTheAnswer).toBeDefined();
        alsatian_core_1.Expect(EXTENDED_EXPECT(42).toBeTheAnswer).not.toBeNull();
        alsatian_core_1.Expect(typeof EXTENDED_EXPECT(42).toBeTheAnswer).toBe("function");
    };
    ExtendingExpectTests.prototype.extensionRetainsExistingFunctions = function () {
        alsatian_core_1.Expect(EXTENDED_EXPECT(42).toBe).toBeDefined();
        alsatian_core_1.Expect(EXTENDED_EXPECT(42).toBe).not.toBeNull();
        alsatian_core_1.Expect(typeof EXTENDED_EXPECT(42).toBe).toBe("function");
        alsatian_core_1.Expect(EXTENDED_EXPECT(42).not.toEqual).toBeDefined();
        alsatian_core_1.Expect(EXTENDED_EXPECT(42).not.toEqual).not.toBeNull();
        alsatian_core_1.Expect(typeof EXTENDED_EXPECT(42).not.toEqual).toBe("function");
    };
    __decorate([
        alsatian_core_1.Test("extension is a mixed matcher"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ExtendingExpectTests.prototype, "extensionIsMixedMatcher", null);
    __decorate([
        alsatian_core_1.Test("extension has new function"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ExtendingExpectTests.prototype, "extensionHasNewFunctions", null);
    __decorate([
        alsatian_core_1.Test("extension retains existing functions"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ExtendingExpectTests.prototype, "extensionRetainsExistingFunctions", null);
    return ExtendingExpectTests;
}());
exports.ExtendingExpectTests = ExtendingExpectTests;
//# sourceMappingURL=extending-expect.spec.js.map