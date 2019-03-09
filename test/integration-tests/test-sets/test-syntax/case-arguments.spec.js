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
var CaseArgumentTestsTests = /** @class */ (function () {
    function CaseArgumentTestsTests() {
    }
    CaseArgumentTestsTests.prototype.AddNumbers = function (first, second, expected) {
        alsatian_1.Expect(first + second).toBe(expected);
    };
    CaseArgumentTestsTests.prototype.AddStrings = function (first, second, expected) {
        alsatian_1.Expect(first + second).toBe(expected);
    };
    CaseArgumentTestsTests.prototype.AddObjectProperty = function (first, second, expected) {
        alsatian_1.Expect(first.a + second.a).toBe(expected);
    };
    CaseArgumentTestsTests.prototype.AddArray = function (first, second, expected) {
        var reduced = first.concat(second).reduce(function (agg, curr) { return agg + curr; }, 0);
        alsatian_1.Expect(reduced).toBe(expected);
    };
    __decorate([
        alsatian_1.TestCase(1, 2, 3),
        alsatian_1.TestCase(1.5, 2.5, 4),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number, Number]),
        __metadata("design:returntype", void 0)
    ], CaseArgumentTestsTests.prototype, "AddNumbers", null);
    __decorate([
        alsatian_1.TestCase("Hello", " world!", "Hello world!"),
        alsatian_1.TestCase("Far", "away", "Faraway"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number, Number]),
        __metadata("design:returntype", void 0)
    ], CaseArgumentTestsTests.prototype, "AddStrings", null);
    __decorate([
        alsatian_1.TestCase({ a: 1 }, { a: 2 }, 3),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Number]),
        __metadata("design:returntype", void 0)
    ], CaseArgumentTestsTests.prototype, "AddObjectProperty", null);
    __decorate([
        alsatian_1.TestCase([1, 2], [3, 4], 10),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array,
            Array, Number]),
        __metadata("design:returntype", void 0)
    ], CaseArgumentTestsTests.prototype, "AddArray", null);
    return CaseArgumentTestsTests;
}());
exports.CaseArgumentTestsTests = CaseArgumentTestsTests;
//# sourceMappingURL=case-arguments.spec.js.map