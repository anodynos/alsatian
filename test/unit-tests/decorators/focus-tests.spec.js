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
var focus_tests_decorator_1 = require("../../../core/decorators/focus-tests-decorator");
var FocusTestsDecoratorTests = /** @class */ (function () {
    function FocusTestsDecoratorTests() {
    }
    FocusTestsDecoratorTests.prototype.focusTestKeyMetaDataAdded = function (key) {
        var TestFixtureClass = /** @class */ (function () {
            function TestFixtureClass() {
            }
            return TestFixtureClass;
        }());
        focus_tests_decorator_1.FocusTests(TestFixtureClass);
        alsatian_core_1.Expect(Reflect.getMetadata(alsatian_core_1.METADATA_KEYS.FOCUS, TestFixtureClass)).toBe(true);
    };
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], FocusTestsDecoratorTests.prototype, "focusTestKeyMetaDataAdded", null);
    return FocusTestsDecoratorTests;
}());
exports.FocusTestsDecoratorTests = FocusTestsDecoratorTests;
//# sourceMappingURL=focus-tests.spec.js.map