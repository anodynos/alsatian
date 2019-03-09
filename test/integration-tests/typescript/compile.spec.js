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
var child = require("child_process");
var alsatian_core_1 = require("../../../core/alsatian-core");
var TypeScriptCompilerTests = /** @class */ (function () {
    function TypeScriptCompilerTests() {
    }
    TypeScriptCompilerTests.prototype.targetBuildCompiles = function (target) {
        var result = child.exec("tsc -p ./test/integration-tests/typescript --target " + target);
        var consoleOutput = "";
        result.stdout.on("data", function (data) { return (consoleOutput += data); });
        result.stderr.on("data", function (data) { return (consoleOutput += data); });
        return new Promise(function (resolve, reject) {
            result.on("close", function (code) {
                // console.log(consoleOutput);
                alsatian_core_1.Expect(code).toBe(0);
                resolve();
            });
        });
    };
    __decorate([
        alsatian_core_1.TestCase("es3"),
        alsatian_core_1.TestCase("es5"),
        alsatian_core_1.TestCase("es6"),
        alsatian_core_1.TestCase("es2015"),
        alsatian_core_1.AsyncTest("Compiler supports all targets"),
        alsatian_core_1.Timeout(5000),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], TypeScriptCompilerTests.prototype, "targetBuildCompiles", null);
    TypeScriptCompilerTests = __decorate([
        alsatian_core_1.TestFixture("TypeScript compiler tests")
    ], TypeScriptCompilerTests);
    return TypeScriptCompilerTests;
}());
exports.TypeScriptCompilerTests = TypeScriptCompilerTests;
//# sourceMappingURL=compile.spec.js.map