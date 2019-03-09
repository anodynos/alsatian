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
var FileSystem = require("fs");
var alsatian_core_1 = require("../../../core/alsatian-core");
var CliIntegrationTests = /** @class */ (function () {
    function CliIntegrationTests() {
    }
    CliIntegrationTests.prototype.toBeExpectations = function (expectationTestName) {
        var result = child.exec("alsatian " +
            ("./test/integration-tests/test-sets/expectations/" + expectationTestName + ".spec.js") +
            " --tap");
        var consoleOutput = "";
        result.stdout.on("data", function (data) { return (consoleOutput += data); });
        result.stderr.on("data", function (data) { return (consoleOutput += data); });
        var expectedOutput = FileSystem.readFileSync("./test/integration-tests/expected-output/" +
            ("expectations/" + expectationTestName + ".txt")).toString();
        return new Promise(function (resolve, reject) {
            result.on("close", function (code) {
                alsatian_core_1.Expect(consoleOutput).toBe(expectedOutput.replace(/\r/g, ""));
                resolve();
            });
        });
    };
    CliIntegrationTests.prototype.syntaxTests = function (syntaxTestName) {
        var result = child.exec("alsatian " +
            ("./test/integration-tests/test-sets/test-syntax/" + syntaxTestName + "*.spec.js ") +
            "--tap");
        var consoleOutput = "";
        result.stdout.on("data", function (data) { return (consoleOutput += data); });
        result.stderr.on("data", function (data) { return (consoleOutput += data); });
        var expectedOutput = FileSystem.readFileSync("./test/integration-tests/expected-output/test-syntax/" + syntaxTestName + ".txt").toString();
        return new Promise(function (resolve, reject) {
            result.on("close", function (code) {
                alsatian_core_1.Expect(consoleOutput).toBe(expectedOutput.replace(/\r/g, ""));
                resolve();
            });
        });
    };
    __decorate([
        alsatian_core_1.TestCase("to-be"),
        alsatian_core_1.TestCase("to-throw"),
        alsatian_core_1.AsyncTest(),
        alsatian_core_1.Timeout(5000),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], CliIntegrationTests.prototype, "toBeExpectations", null);
    __decorate([
        alsatian_core_1.TestCase("async-test"),
        alsatian_core_1.TestCase("setup"),
        alsatian_core_1.TestCase("teardown"),
        alsatian_core_1.TestCase("case-arguments"),
        alsatian_core_1.AsyncTest(),
        alsatian_core_1.Timeout(5000),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], CliIntegrationTests.prototype, "syntaxTests", null);
    return CliIntegrationTests;
}());
exports.CliIntegrationTests = CliIntegrationTests;
//# sourceMappingURL=runner.js.map