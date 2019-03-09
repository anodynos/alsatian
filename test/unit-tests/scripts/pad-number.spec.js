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
var alsatian_core_1 = require("../../../core/alsatian-core");
var pad_number_1 = require("../../../scripts/pad-number");
var PadNumberTests = /** @class */ (function () {
    function PadNumberTests() {
    }
    PadNumberTests.prototype.correctNumberOfZeros = function (numberOfZeros, expectedOutput) {
        alsatian_core_1.Expect(pad_number_1.padNumber(0, numberOfZeros)).toBe(expectedOutput);
    };
    PadNumberTests.prototype.singleDigitPaddedCorrectly = function (numberOfZeros, expectedOutput) {
        alsatian_core_1.Expect(pad_number_1.padNumber(1, numberOfZeros)).toBe(expectedOutput);
    };
    PadNumberTests.prototype.doubleDigitPaddedCorrectly = function (numberOfZeros, expectedOutput) {
        alsatian_core_1.Expect(pad_number_1.padNumber(42, numberOfZeros)).toBe(expectedOutput);
    };
    PadNumberTests.prototype.negativePaddedCorrectly = function (numberOfZeros, expectedOutput) {
        alsatian_core_1.Expect(pad_number_1.padNumber(-42, numberOfZeros)).toBe(expectedOutput);
    };
    PadNumberTests.prototype.singleDecimalPaddedCorrectly = function (numberOfZeros, expectedOutput) {
        alsatian_core_1.Expect(pad_number_1.padNumber(42.1, numberOfZeros)).toBe(expectedOutput);
    };
    PadNumberTests.prototype.doubleDecimalPaddedCorrectly = function (numberOfZeros, expectedOutput) {
        alsatian_core_1.Expect(pad_number_1.padNumber(42.42, numberOfZeros)).toBe(expectedOutput);
    };
    PadNumberTests.prototype.numbersCorrectlyPaddedOverCache = function (numberOfZeros, expectedOutput) {
        alsatian_core_1.Expect(pad_number_1.padNumber(1, numberOfZeros)).toBe(expectedOutput);
    };
    __decorate([
        alsatian_core_1.TestCase(1, "0"),
        alsatian_core_1.TestCase(2, "00"),
        alsatian_core_1.TestCase(3, "000"),
        alsatian_core_1.Test("returns correct number of zeros"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, String]),
        __metadata("design:returntype", void 0)
    ], PadNumberTests.prototype, "correctNumberOfZeros", null);
    __decorate([
        alsatian_core_1.TestCase(1, "1"),
        alsatian_core_1.TestCase(2, "01"),
        alsatian_core_1.TestCase(3, "001"),
        alsatian_core_1.Test("single digit integer padded correctly"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, String]),
        __metadata("design:returntype", void 0)
    ], PadNumberTests.prototype, "singleDigitPaddedCorrectly", null);
    __decorate([
        alsatian_core_1.TestCase(1, "42"),
        alsatian_core_1.TestCase(2, "42"),
        alsatian_core_1.TestCase(3, "042"),
        alsatian_core_1.Test("double digit integer padded correctly"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, String]),
        __metadata("design:returntype", void 0)
    ], PadNumberTests.prototype, "doubleDigitPaddedCorrectly", null);
    __decorate([
        alsatian_core_1.TestCase(1, "-42"),
        alsatian_core_1.TestCase(2, "-42"),
        alsatian_core_1.TestCase(3, "-042"),
        alsatian_core_1.Test("negative integer padded correctly"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, String]),
        __metadata("design:returntype", void 0)
    ], PadNumberTests.prototype, "negativePaddedCorrectly", null);
    __decorate([
        alsatian_core_1.TestCase(1, "42.1"),
        alsatian_core_1.TestCase(2, "42.1"),
        alsatian_core_1.TestCase(3, "042.1"),
        alsatian_core_1.Test("single decimal padded correctly"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, String]),
        __metadata("design:returntype", void 0)
    ], PadNumberTests.prototype, "singleDecimalPaddedCorrectly", null);
    __decorate([
        alsatian_core_1.TestCase(1, "42.42"),
        alsatian_core_1.TestCase(2, "42.42"),
        alsatian_core_1.TestCase(3, "042.42"),
        alsatian_core_1.Test("double decimal padded correctly"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, String]),
        __metadata("design:returntype", void 0)
    ], PadNumberTests.prototype, "doubleDecimalPaddedCorrectly", null);
    __decorate([
        alsatian_core_1.TestCase(11, "00000000001"),
        alsatian_core_1.TestCase(12, "000000000001"),
        alsatian_core_1.TestCase(13, "0000000000001"),
        alsatian_core_1.Test("numbers correctly padded that exceed the cached zeros"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, String]),
        __metadata("design:returntype", void 0)
    ], PadNumberTests.prototype, "numbersCorrectlyPaddedOverCache", null);
    PadNumberTests = __decorate([
        alsatian_core_1.TestFixture("padding numbers")
    ], PadNumberTests);
    return PadNumberTests;
}());
exports.PadNumberTests = PadNumberTests;
//# sourceMappingURL=pad-number.spec.js.map