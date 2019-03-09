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
var alsatian_1 = require("alsatian");
var ToBeTests = /** @class */ (function () {
    function ToBeTests() {
    }
    ToBeTests.prototype.twoPlusTwoMakeFour = function () {
        alsatian_1.Expect(2 + 2).toBe(4);
    };
    ToBeTests.prototype.twoPlusTwoDoNotMakeFive = function () {
        alsatian_1.Expect(2 + 2).not.toBe(5);
    };
    ToBeTests.prototype.twoPlusTwoDoNotMakeFour = function () {
        alsatian_1.Expect(2 + 2).not.toBe(4);
    };
    ToBeTests.prototype.twoPlusTwoMakeFive = function () {
        alsatian_1.Expect(2 + 2).toBe(5);
    };
    __decorate([
        alsatian_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToBeTests.prototype, "twoPlusTwoMakeFour", null);
    __decorate([
        alsatian_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToBeTests.prototype, "twoPlusTwoDoNotMakeFive", null);
    __decorate([
        alsatian_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToBeTests.prototype, "twoPlusTwoDoNotMakeFour", null);
    __decorate([
        alsatian_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToBeTests.prototype, "twoPlusTwoMakeFive", null);
    return ToBeTests;
}());
exports.ToBeTests = ToBeTests;
//# sourceMappingURL=to-be.spec.js.map