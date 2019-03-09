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
var GulpIntegrationTests = /** @class */ (function () {
    function GulpIntegrationTests() {
    }
    GulpIntegrationTests.prototype.toBeExpectations = function () {
        var result = child.exec('gulp test-to-be-expectations --gulpfile "./test/integration-tests/gulp/gulpfile.js" --cwd ./');
        var consoleOutput = "";
        result.stdout.on("data", function (data) { return (consoleOutput += data); });
        result.stderr.on("data", function (data) { return (consoleOutput += data); });
        var expectedOutput = FileSystem.readFileSync("./test/integration-tests/expected-output/expectations/to-be.txt").toString();
        return new Promise(function (resolve, reject) {
            result.on("close", function (code) {
                alsatian_core_1.Expect(consoleOutput).toContain(expectedOutput.replace(/\r/g, ""));
                resolve();
            });
        });
    };
    GulpIntegrationTests.prototype.toThrowExpectations = function () {
        var result = child.exec('gulp test-to-throw-expectations --gulpfile "./test/integration-tests/gulp/gulpfile.js" --cwd ./');
        var consoleOutput = "";
        result.stdout.on("data", function (data) { return (consoleOutput += data); });
        result.stderr.on("data", function (data) { return (consoleOutput += data); });
        var expectedOutput = FileSystem.readFileSync("./test/integration-tests/expected-output/expectations/to-throw.txt").toString();
        return new Promise(function (resolve, reject) {
            result.on("close", function (code) {
                alsatian_core_1.Expect(consoleOutput).toContain(expectedOutput.replace(/\r/g, ""));
                resolve();
            });
        });
    };
    GulpIntegrationTests.prototype.syntaxTests = function (syntaxTestName) {
        var result = child.exec('gulp test-syntax --gulpfile "./test/integration-tests/gulp/gulpfile.js" --cwd ./');
        var consoleOutput = "";
        result.stdout.on("data", function (data) { return (consoleOutput += data); });
        result.stderr.on("data", function (data) { return (consoleOutput += data); });
        var expectedOutput = FileSystem.readFileSync("./test/integration-tests/expected-output/test-syntax/all-test-syntax.txt").toString();
        return new Promise(function (resolve, reject) {
            result.on("close", function (code) {
                alsatian_core_1.Expect(consoleOutput).toContain(expectedOutput.replace(/\r/g, ""));
                resolve();
            });
        });
    };
    __decorate([
        alsatian_core_1.AsyncTest(),
        alsatian_core_1.Timeout(10000),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], GulpIntegrationTests.prototype, "toBeExpectations", null);
    __decorate([
        alsatian_core_1.AsyncTest(),
        alsatian_core_1.Timeout(10000),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], GulpIntegrationTests.prototype, "toThrowExpectations", null);
    __decorate([
        alsatian_core_1.TestCase("async-test"),
        alsatian_core_1.TestCase("setup"),
        alsatian_core_1.TestCase("teardown"),
        alsatian_core_1.AsyncTest(),
        alsatian_core_1.Timeout(10000),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], GulpIntegrationTests.prototype, "syntaxTests", null);
    return GulpIntegrationTests;
}());
exports.GulpIntegrationTests = GulpIntegrationTests;
//# sourceMappingURL=runner.js.map