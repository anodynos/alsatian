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
var alsatian_cli_options_1 = require("../../../cli/alsatian-cli-options");
var cli_test_runner_1 = require("../../../cli/cli-test-runner");
var alsatian_core_1 = require("../../../core/alsatian-core");
var CliTestRunnerTests = /** @class */ (function () {
    function CliTestRunnerTests() {
    }
    CliTestRunnerTests.prototype._spyProcess = function () {
        this._originalProcessExit = process.exit;
        this._originalStdOut = process.stdout.write;
        this._originalStdErr = process.stderr.write;
        alsatian_core_1.SpyOn(process, "exit").andStub();
        alsatian_core_1.SpyOn(process.stderr, "write").andStub();
        alsatian_core_1.SpyOn(process.stdout, "write").andStub();
    };
    CliTestRunnerTests.prototype._resetProcess = function () {
        process.exit = this._originalProcessExit;
        process.stdout.write = this._originalStdOut;
        process.stderr.write = this._originalStdErr;
    };
    CliTestRunnerTests.prototype.nullOrUndefinedTestRunnerThrowsError = function (testRunner) {
        alsatian_core_1.Expect(function () { return new cli_test_runner_1.CliTestRunner(testRunner); }).toThrowError(TypeError, "_testRunner must not be null or undefined.");
    };
    CliTestRunnerTests.prototype.noTestFixturesExitsWithError = function () {
        return new Promise(function (resolve, reject) {
            var cliTestRunner = new cli_test_runner_1.CliTestRunner(new alsatian_core_1.TestRunner());
            var cliOptions = new alsatian_cli_options_1.AlsatianCliOptions([]);
            cliTestRunner.run(cliOptions);
            setTimeout(function () {
                try {
                    alsatian_core_1.Expect(process.exit).toHaveBeenCalledWith(1);
                    resolve();
                }
                catch (error) {
                    reject(error);
                }
            }, 0);
        });
    };
    CliTestRunnerTests.prototype.noTestFixturesPrintsErrorMessageWithNewLine = function () {
        return new Promise(function (resolve, reject) {
            var cliTestRunner = new cli_test_runner_1.CliTestRunner(new alsatian_core_1.TestRunner());
            var cliOptions = new alsatian_cli_options_1.AlsatianCliOptions([]);
            cliTestRunner.run(cliOptions);
            setTimeout(function () {
                try {
                    alsatian_core_1.Expect(process.stderr.write).toHaveBeenCalledWith("no tests to run.\n");
                    resolve();
                }
                catch (error) {
                    reject(error);
                }
            }, 0);
        });
    };
    CliTestRunnerTests.prototype.onePassingTestFixturesExitsWithNoError = function () {
        return new Promise(function (resolve, reject) {
            var testRunner = new alsatian_core_1.TestRunner();
            var cliTestRunner = new cli_test_runner_1.CliTestRunner(testRunner);
            var testRunnerRunSpy = alsatian_core_1.SpyOn(testRunner, "run");
            testRunnerRunSpy.andReturn(new Promise(function (cliResolve, cliReject) {
                cliResolve();
            }));
            testRunnerRunSpy.andStub();
            var cliOptions = new alsatian_cli_options_1.AlsatianCliOptions([]);
            cliTestRunner.run(cliOptions);
            setTimeout(function () {
                try {
                    alsatian_core_1.Expect(process.exit).not.toHaveBeenCalledWith(1);
                    resolve();
                }
                catch (error) {
                    reject(error);
                }
            }, 0);
        });
    };
    CliTestRunnerTests.prototype.runThrowsErrorExitsWithError = function (outcome) {
        return new Promise(function (resolve, reject) {
            var testRunner = new alsatian_core_1.TestRunner();
            var cliTestRunner = new cli_test_runner_1.CliTestRunner(testRunner);
            var testRunnerRunSpy = alsatian_core_1.SpyOn(testRunner, "run");
            testRunnerRunSpy.andCall(function () {
                throw new Error();
            });
            var cliOptions = new alsatian_cli_options_1.AlsatianCliOptions([]);
            cliTestRunner.run(cliOptions);
            setTimeout(function () {
                try {
                    alsatian_core_1.Expect(process.exit).toHaveBeenCalledWith(1);
                    resolve();
                }
                catch (error) {
                    reject(error);
                }
            }, 0);
        });
    };
    CliTestRunnerTests.prototype.runThrowsErrorOutputsErrorMessage = function (errorMessage) {
        return new Promise(function (resolve, reject) {
            var testRunner = new alsatian_core_1.TestRunner();
            var cliTestRunner = new cli_test_runner_1.CliTestRunner(testRunner);
            var testRunnerRunSpy = alsatian_core_1.SpyOn(testRunner, "run");
            testRunnerRunSpy.andCall(function () {
                throw new Error(errorMessage);
            });
            var cliOptions = new alsatian_cli_options_1.AlsatianCliOptions([]);
            cliTestRunner.run(cliOptions);
            setTimeout(function () {
                try {
                    alsatian_core_1.Expect(process.stderr.write).toHaveBeenCalledWith(errorMessage + "\n");
                    resolve();
                }
                catch (error) {
                    reject(error);
                }
            }, 0);
        });
    };
    CliTestRunnerTests.prototype.tapRequestedPipesOutputDirectlyToProcessStdOut = function () {
        return new Promise(function (resolve, reject) {
            var testRunner = new alsatian_core_1.TestRunner();
            alsatian_core_1.SpyOn(testRunner.outputStream, "pipe");
            var cliTestRunner = new cli_test_runner_1.CliTestRunner(testRunner);
            var testRunnerRunSpy = alsatian_core_1.SpyOn(testRunner, "run");
            testRunnerRunSpy.andReturn(new Promise(function (cliResolve, cliReject) {
                cliResolve();
            }));
            testRunnerRunSpy.andStub();
            var cliOptions = new alsatian_cli_options_1.AlsatianCliOptions(["--tap"]);
            cliTestRunner.run(cliOptions);
            setTimeout(function () {
                try {
                    alsatian_core_1.Expect(testRunner.outputStream.pipe).toHaveBeenCalledWith(process.stdout);
                    resolve();
                }
                catch (error) {
                    reject(error);
                }
            }, 0);
        });
    };
    CliTestRunnerTests.prototype.tapRequestedWithAliasPipesOutputDirectlyToProcessStdOut = function () {
        return new Promise(function (resolve, reject) {
            var testRunner = new alsatian_core_1.TestRunner();
            alsatian_core_1.SpyOn(testRunner.outputStream, "pipe");
            var cliTestRunner = new cli_test_runner_1.CliTestRunner(testRunner);
            var testRunnerRunSpy = alsatian_core_1.SpyOn(testRunner, "run");
            testRunnerRunSpy.andReturn(new Promise(function (cliResolve, cliReject) {
                cliResolve();
            }));
            testRunnerRunSpy.andStub();
            var cliOptions = new alsatian_cli_options_1.AlsatianCliOptions(["-T"]);
            cliTestRunner.run(cliOptions);
            setTimeout(function () {
                try {
                    alsatian_core_1.Expect(testRunner.outputStream.pipe).toHaveBeenCalledWith(process.stdout);
                    resolve();
                }
                catch (error) {
                    reject(error);
                }
            }, 0);
        });
    };
    CliTestRunnerTests.prototype.versionRequestedOutputsCurrentVersionNumber = function () {
        return new Promise(function (resolve, reject) {
            var testRunner = new alsatian_core_1.TestRunner();
            alsatian_core_1.SpyOn(testRunner.outputStream, "pipe");
            var cliTestRunner = new cli_test_runner_1.CliTestRunner(testRunner);
            alsatian_core_1.SpyOn(testRunner, "run");
            var cliOptions = new alsatian_cli_options_1.AlsatianCliOptions(["--version"]);
            cliTestRunner.run(cliOptions);
            setTimeout(function () {
                try {
                    alsatian_core_1.Expect(process.stdout.write).toHaveBeenCalledWith("alsatian version " + require("../../../package.json").version);
                    resolve();
                }
                catch (error) {
                    reject(error);
                }
            }, 0);
        });
    };
    CliTestRunnerTests.prototype.versionRequestedWithAliasOutputsCurrentVersionNumber = function () {
        return new Promise(function (resolve, reject) {
            var testRunner = new alsatian_core_1.TestRunner();
            alsatian_core_1.SpyOn(testRunner.outputStream, "pipe");
            var cliTestRunner = new cli_test_runner_1.CliTestRunner(testRunner);
            alsatian_core_1.SpyOn(testRunner, "run");
            var cliOptions = new alsatian_cli_options_1.AlsatianCliOptions(["-v"]);
            cliTestRunner.run(cliOptions);
            setTimeout(function () {
                try {
                    alsatian_core_1.Expect(process.stdout.write).toHaveBeenCalledWith("alsatian version " + require("../../../package.json").version);
                    resolve();
                }
                catch (error) {
                    reject(error);
                }
            }, 0);
        });
    };
    CliTestRunnerTests.prototype.versionRequestedDoesntCallTestRunnerRun = function () {
        return new Promise(function (resolve, reject) {
            var testRunner = new alsatian_core_1.TestRunner();
            alsatian_core_1.SpyOn(testRunner.outputStream, "pipe");
            var cliTestRunner = new cli_test_runner_1.CliTestRunner(testRunner);
            alsatian_core_1.SpyOn(testRunner, "run");
            var cliOptions = new alsatian_cli_options_1.AlsatianCliOptions(["--version"]);
            cliTestRunner.run(cliOptions);
            setTimeout(function () {
                try {
                    alsatian_core_1.Expect(testRunner.run).not.toHaveBeenCalled();
                    resolve();
                }
                catch (error) {
                    reject(error);
                }
            }, 0);
        });
    };
    CliTestRunnerTests.prototype.versionRequestedWithAliasPipesOutputDirectlyToProcessStdOut = function () {
        return new Promise(function (resolve, reject) {
            var testRunner = new alsatian_core_1.TestRunner();
            alsatian_core_1.SpyOn(testRunner.outputStream, "pipe");
            var cliTestRunner = new cli_test_runner_1.CliTestRunner(testRunner);
            alsatian_core_1.SpyOn(testRunner, "run");
            var cliOptions = new alsatian_cli_options_1.AlsatianCliOptions(["--version"]);
            cliTestRunner.run(cliOptions);
            setTimeout(function () {
                try {
                    alsatian_core_1.Expect(testRunner.run).not.toHaveBeenCalled();
                    resolve();
                }
                catch (error) {
                    reject(error);
                }
            }, 0);
        });
    };
    CliTestRunnerTests.prototype.helpRequestedOutputsCurrentVersionNumber = function () {
        return new Promise(function (resolve, reject) {
            var testRunner = new alsatian_core_1.TestRunner();
            alsatian_core_1.SpyOn(testRunner.outputStream, "pipe");
            var cliTestRunner = new cli_test_runner_1.CliTestRunner(testRunner);
            alsatian_core_1.SpyOn(testRunner, "run");
            var cliOptions = new alsatian_cli_options_1.AlsatianCliOptions(["--help"]);
            cliTestRunner.run(cliOptions);
            setTimeout(function () {
                try {
                    alsatian_core_1.Expect(process.stdout.write).toHaveBeenCalledWith("\n\n" +
                        "alsatian version " +
                        require("../../../package.json").version +
                        "\n" +
                        "=========================\n" +
                        "CLI options\n" +
                        "=========================\n" +
                        "HELP:    --help / -h                      " +
                        "(outputs CLI information)\n" +
                        "VERSION: --version / -v                   " +
                        "(outputs the version of the CLI)\n" +
                        "TAP:     --tap / -T                       " +
                        "(runs alsatian with TAP output)\n" +
                        "TIMEOUT: --timeout [number] / -t [number] " +
                        "(sets the timeout period for tests in milliseconds - default 500)\n" +
                        "\n");
                    resolve();
                }
                catch (error) {
                    reject(error);
                }
            }, 0);
        });
    };
    CliTestRunnerTests.prototype.helpRequestedWithAliasOutputsCurrentVersionNumber = function () {
        return new Promise(function (resolve, reject) {
            var testRunner = new alsatian_core_1.TestRunner();
            alsatian_core_1.SpyOn(testRunner.outputStream, "pipe");
            var cliTestRunner = new cli_test_runner_1.CliTestRunner(testRunner);
            alsatian_core_1.SpyOn(testRunner, "run");
            var cliOptions = new alsatian_cli_options_1.AlsatianCliOptions(["-h"]);
            cliTestRunner.run(cliOptions);
            setTimeout(function () {
                try {
                    alsatian_core_1.Expect(process.stdout.write).toHaveBeenCalledWith("\n\n" +
                        "alsatian version " +
                        require("../../../package.json").version +
                        "\n" +
                        "=========================\n" +
                        "CLI options\n" +
                        "=========================\n" +
                        "HELP:    --help / -h                      " +
                        "(outputs CLI information)\n" +
                        "VERSION: --version / -v                   " +
                        "(outputs the version of the CLI)\n" +
                        "TAP:     --tap / -T                       " +
                        "(runs alsatian with TAP output)\n" +
                        "TIMEOUT: --timeout [number] / -t [number] " +
                        "(sets the timeout period for tests in milliseconds - default 500)\n" +
                        "\n");
                    resolve();
                }
                catch (error) {
                    reject(error);
                }
            }, 0);
        });
    };
    CliTestRunnerTests.prototype.helpRequestedDoesntCallTestRunnerRun = function () {
        return new Promise(function (resolve, reject) {
            var testRunner = new alsatian_core_1.TestRunner();
            alsatian_core_1.SpyOn(testRunner.outputStream, "pipe");
            var cliTestRunner = new cli_test_runner_1.CliTestRunner(testRunner);
            alsatian_core_1.SpyOn(testRunner, "run");
            var cliOptions = new alsatian_cli_options_1.AlsatianCliOptions(["--help"]);
            cliTestRunner.run(cliOptions);
            setTimeout(function () {
                try {
                    alsatian_core_1.Expect(testRunner.run).not.toHaveBeenCalled();
                    resolve();
                }
                catch (error) {
                    reject(error);
                }
            }, 0);
        });
    };
    CliTestRunnerTests.prototype.helpRequestedWithAliasPipesOutputDirectlyToProcessStdOut = function () {
        return new Promise(function (resolve, reject) {
            var testRunner = new alsatian_core_1.TestRunner();
            alsatian_core_1.SpyOn(testRunner.outputStream, "pipe");
            var cliTestRunner = new cli_test_runner_1.CliTestRunner(testRunner);
            alsatian_core_1.SpyOn(testRunner, "run");
            var cliOptions = new alsatian_cli_options_1.AlsatianCliOptions(["-h"]);
            cliTestRunner.run(cliOptions);
            setTimeout(function () {
                try {
                    alsatian_core_1.Expect(testRunner.run).not.toHaveBeenCalled();
                    resolve();
                }
                catch (error) {
                    reject(error);
                }
            }, 0);
        });
    };
    __decorate([
        alsatian_core_1.Setup,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CliTestRunnerTests.prototype, "_spyProcess", null);
    __decorate([
        alsatian_core_1.Teardown,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CliTestRunnerTests.prototype, "_resetProcess", null);
    __decorate([
        alsatian_core_1.TestCase(null),
        alsatian_core_1.TestCase(undefined),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [alsatian_core_1.TestRunner]),
        __metadata("design:returntype", void 0)
    ], CliTestRunnerTests.prototype, "nullOrUndefinedTestRunnerThrowsError", null);
    __decorate([
        alsatian_core_1.AsyncTest(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CliTestRunnerTests.prototype, "noTestFixturesExitsWithError", null);
    __decorate([
        alsatian_core_1.AsyncTest(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CliTestRunnerTests.prototype, "noTestFixturesPrintsErrorMessageWithNewLine", null);
    __decorate([
        alsatian_core_1.AsyncTest(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CliTestRunnerTests.prototype, "onePassingTestFixturesExitsWithNoError", null);
    __decorate([
        alsatian_core_1.AsyncTest(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], CliTestRunnerTests.prototype, "runThrowsErrorExitsWithError", null);
    __decorate([
        alsatian_core_1.TestCase("something bad"),
        alsatian_core_1.TestCase("another even worse thing"),
        alsatian_core_1.TestCase("awfully terrible"),
        alsatian_core_1.AsyncTest(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], CliTestRunnerTests.prototype, "runThrowsErrorOutputsErrorMessage", null);
    __decorate([
        alsatian_core_1.AsyncTest(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CliTestRunnerTests.prototype, "tapRequestedPipesOutputDirectlyToProcessStdOut", null);
    __decorate([
        alsatian_core_1.AsyncTest(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CliTestRunnerTests.prototype, "tapRequestedWithAliasPipesOutputDirectlyToProcessStdOut", null);
    __decorate([
        alsatian_core_1.AsyncTest(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CliTestRunnerTests.prototype, "versionRequestedOutputsCurrentVersionNumber", null);
    __decorate([
        alsatian_core_1.AsyncTest(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CliTestRunnerTests.prototype, "versionRequestedWithAliasOutputsCurrentVersionNumber", null);
    __decorate([
        alsatian_core_1.AsyncTest(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CliTestRunnerTests.prototype, "versionRequestedDoesntCallTestRunnerRun", null);
    __decorate([
        alsatian_core_1.AsyncTest(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CliTestRunnerTests.prototype, "versionRequestedWithAliasPipesOutputDirectlyToProcessStdOut", null);
    __decorate([
        alsatian_core_1.AsyncTest(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CliTestRunnerTests.prototype, "helpRequestedOutputsCurrentVersionNumber", null);
    __decorate([
        alsatian_core_1.AsyncTest(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CliTestRunnerTests.prototype, "helpRequestedWithAliasOutputsCurrentVersionNumber", null);
    __decorate([
        alsatian_core_1.AsyncTest(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CliTestRunnerTests.prototype, "helpRequestedDoesntCallTestRunnerRun", null);
    __decorate([
        alsatian_core_1.AsyncTest(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CliTestRunnerTests.prototype, "helpRequestedWithAliasPipesOutputDirectlyToProcessStdOut", null);
    return CliTestRunnerTests;
}());
exports.CliTestRunnerTests = CliTestRunnerTests;
//# sourceMappingURL=cli-test-runner.spec.js.map