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
var Alsatian = require("../../core/alsatian-core");
var alsatian_core_1 = require("../../core/alsatian-core");
var AlsatianCoreTests = /** @class */ (function () {
    function AlsatianCoreTests() {
    }
    AlsatianCoreTests.prototype.expectShouldBeExposed = function () {
        alsatian_core_1.Expect(Alsatian.Expect).toBeDefined();
        alsatian_core_1.Expect(Alsatian.Expect).not.toBeNull();
    };
    AlsatianCoreTests.prototype.focusTestShouldBeExposed = function () {
        alsatian_core_1.Expect(Alsatian.FocusTest).toBeDefined();
        alsatian_core_1.Expect(Alsatian.FocusTest).not.toBeNull();
    };
    AlsatianCoreTests.prototype.focusTestsShouldBeExposed = function () {
        alsatian_core_1.Expect(Alsatian.FocusTests).toBeDefined();
        alsatian_core_1.Expect(Alsatian.FocusTests).not.toBeNull();
    };
    AlsatianCoreTests.prototype.ignoreTestShouldBeExposed = function () {
        alsatian_core_1.Expect(Alsatian.IgnoreTest).toBeDefined();
        alsatian_core_1.Expect(Alsatian.IgnoreTest).not.toBeNull();
    };
    AlsatianCoreTests.prototype.ignoreTestsShouldBeExposed = function () {
        alsatian_core_1.Expect(Alsatian.IgnoreTests).toBeDefined();
        alsatian_core_1.Expect(Alsatian.IgnoreTests).not.toBeNull();
    };
    AlsatianCoreTests.prototype.testShouldBeExposed = function () {
        alsatian_core_1.Expect(Alsatian.Test).toBeDefined();
        alsatian_core_1.Expect(Alsatian.Test).not.toBeNull();
    };
    AlsatianCoreTests.prototype.testCaseShouldBeExposed = function () {
        alsatian_core_1.Expect(Alsatian.TestCase).toBeDefined();
        alsatian_core_1.Expect(Alsatian.TestCase).not.toBeNull();
    };
    AlsatianCoreTests.prototype.testRunnerShouldBeExposed = function () {
        alsatian_core_1.Expect(Alsatian.TestRunner).toBeDefined();
        alsatian_core_1.Expect(Alsatian.TestRunner).not.toBeNull();
    };
    AlsatianCoreTests.prototype.spyOnShouldBeExposed = function () {
        alsatian_core_1.Expect(Alsatian.SpyOn).toBeDefined();
        alsatian_core_1.Expect(Alsatian.SpyOn).not.toBeNull();
    };
    AlsatianCoreTests.prototype.setupShouldBeExposed = function () {
        alsatian_core_1.Expect(Alsatian.Setup).toBeDefined();
        alsatian_core_1.Expect(Alsatian.Setup).not.toBeNull();
    };
    AlsatianCoreTests.prototype.asyncSetupShouldBeExposed = function () {
        alsatian_core_1.Expect(Alsatian.AsyncSetup).toBeDefined();
        alsatian_core_1.Expect(Alsatian.AsyncSetup).not.toBeNull();
    };
    AlsatianCoreTests.prototype.asyncSetupFixtureShouldBeExposed = function () {
        alsatian_core_1.Expect(Alsatian.AsyncSetupFixture).toBeDefined();
        alsatian_core_1.Expect(Alsatian.AsyncSetupFixture).not.toBeNull();
    };
    AlsatianCoreTests.prototype.teardownShouldBeExposed = function () {
        alsatian_core_1.Expect(Alsatian.Teardown).toBeDefined();
        alsatian_core_1.Expect(Alsatian.Teardown).not.toBeNull();
    };
    AlsatianCoreTests.prototype.asyncTeardownShouldBeExposed = function () {
        alsatian_core_1.Expect(Alsatian.AsyncTeardown).toBeDefined();
        alsatian_core_1.Expect(Alsatian.AsyncTeardown).not.toBeNull();
    };
    AlsatianCoreTests.prototype.asyncTeardownFixtureShouldBeExposed = function () {
        alsatian_core_1.Expect(Alsatian.AsyncTeardownFixture).toBeDefined();
        alsatian_core_1.Expect(Alsatian.AsyncTeardownFixture).not.toBeNull();
    };
    AlsatianCoreTests.prototype.anyShouldBeExposed = function () {
        alsatian_core_1.Expect(Alsatian.Any).toBeDefined();
        alsatian_core_1.Expect(Alsatian.Any).not.toBeNull();
    };
    AlsatianCoreTests.prototype.restorableFunctionSpyShouldBeExposed = function () {
        alsatian_core_1.Expect(Alsatian.RestorableFunctionSpy).toBeDefined();
        alsatian_core_1.Expect(Alsatian.RestorableFunctionSpy).not.toBeNull();
    };
    AlsatianCoreTests.prototype.createFunctionSpyShouldBeExposed = function () {
        alsatian_core_1.Expect(Alsatian.createFunctionSpy).toBeDefined();
        alsatian_core_1.Expect(Alsatian.createFunctionSpy).not.toBeNull();
    };
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AlsatianCoreTests.prototype, "expectShouldBeExposed", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AlsatianCoreTests.prototype, "focusTestShouldBeExposed", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AlsatianCoreTests.prototype, "focusTestsShouldBeExposed", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AlsatianCoreTests.prototype, "ignoreTestShouldBeExposed", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AlsatianCoreTests.prototype, "ignoreTestsShouldBeExposed", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AlsatianCoreTests.prototype, "testShouldBeExposed", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AlsatianCoreTests.prototype, "testCaseShouldBeExposed", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AlsatianCoreTests.prototype, "testRunnerShouldBeExposed", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AlsatianCoreTests.prototype, "spyOnShouldBeExposed", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AlsatianCoreTests.prototype, "setupShouldBeExposed", null);
    __decorate([
        alsatian_core_1.Test("AsyncSetup decorator is exposed"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AlsatianCoreTests.prototype, "asyncSetupShouldBeExposed", null);
    __decorate([
        alsatian_core_1.Test("AsyncSetupFixture decorator is exposed"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AlsatianCoreTests.prototype, "asyncSetupFixtureShouldBeExposed", null);
    __decorate([
        alsatian_core_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AlsatianCoreTests.prototype, "teardownShouldBeExposed", null);
    __decorate([
        alsatian_core_1.Test("AsyncTeardown decorator is exposed"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AlsatianCoreTests.prototype, "asyncTeardownShouldBeExposed", null);
    __decorate([
        alsatian_core_1.Test("AsyncTeardownFixture decorator is exposed"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AlsatianCoreTests.prototype, "asyncTeardownFixtureShouldBeExposed", null);
    __decorate([
        alsatian_core_1.Test("Any should be exposed"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AlsatianCoreTests.prototype, "anyShouldBeExposed", null);
    __decorate([
        alsatian_core_1.Test("RestorableFunctionSpy should be exposed"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AlsatianCoreTests.prototype, "restorableFunctionSpyShouldBeExposed", null);
    __decorate([
        alsatian_core_1.Test("createFunctionSpy should be exposed"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AlsatianCoreTests.prototype, "createFunctionSpyShouldBeExposed", null);
    return AlsatianCoreTests;
}());
exports.AlsatianCoreTests = AlsatianCoreTests;
//# sourceMappingURL=alsatian-core.spec.js.map