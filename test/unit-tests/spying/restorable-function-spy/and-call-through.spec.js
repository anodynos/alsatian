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
var alsatian_core_1 = require("../../../../core/alsatian-core");
var restorable_function_spy_1 = require("../../../../core/spying/restorable-function-spy");
var AndCallThroughTests = /** @class */ (function () {
    function AndCallThroughTests() {
    }
    AndCallThroughTests.prototype.originalFunctionNotCalledIfSpyStub = function () {
        var object = {
            originalFunction: function () { }
        };
        alsatian_core_1.SpyOn(object, "originalFunction");
        var originalFunction = object.originalFunction;
        var spy = new restorable_function_spy_1.RestorableFunctionSpy(object, "originalFunction");
        spy.andStub();
        spy.call([]);
        alsatian_core_1.Expect(originalFunction).not.toHaveBeenCalled();
    };
    AndCallThroughTests.prototype.originalFunctionCalledIfSpyStubbedThenRestored = function () {
        var object = {
            originalFunction: function () { }
        };
        alsatian_core_1.SpyOn(object, "originalFunction");
        var originalFunction = object.originalFunction;
        var spy = new restorable_function_spy_1.RestorableFunctionSpy(object, "originalFunction");
        spy.andStub();
        spy.andCallThrough();
        spy.call([]);
        alsatian_core_1.Expect(originalFunction).toHaveBeenCalled();
    };
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AndCallThroughTests.prototype, "originalFunctionNotCalledIfSpyStub", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AndCallThroughTests.prototype, "originalFunctionCalledIfSpyStubbedThenRestored", null);
    return AndCallThroughTests;
}());
exports.AndCallThroughTests = AndCallThroughTests;
//# sourceMappingURL=and-call-through.spec.js.map