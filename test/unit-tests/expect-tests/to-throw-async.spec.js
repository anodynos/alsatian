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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var alsatian_core_1 = require("../../../core/alsatian-core");
var error_match_error_1 = require("../../../core/errors/error-match-error");
var ToThrowAsyncTests = /** @class */ (function () {
    function ToThrowAsyncTests() {
    }
    // Asynchronous throw
    ToThrowAsyncTests.prototype.asyncThrowFunction = function (delayMs) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (_, reject) {
                        setTimeout(function () { return reject(new Error("Timeout then reject")); }, delayMs);
                    })];
            });
        });
    };
    // Asynchronous non-throw
    ToThrowAsyncTests.prototype.asyncNonThrowFunction = function (delayMs) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        setTimeout(function () { return resolve(); }, delayMs);
                    })];
            });
        });
    };
    ToThrowAsyncTests.prototype.asyncFunctionThrowsErrorPasses = function (delayMs) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, alsatian_core_1.Expect(function () { return __awaiter(_this, void 0, void 0, function () {
                            var _this = this;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, alsatian_core_1.Expect(function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4 /*yield*/, this.asyncThrowFunction(delayMs)];
                                                case 1: return [2 /*return*/, _a.sent()];
                                            }
                                        }); }); }).toThrowAsync()];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); }).not.toThrowAsync()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ToThrowAsyncTests.prototype.asyncFunctionThrowDoesNotErrorFails = function (delayMs) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, alsatian_core_1.Expect(function () { return __awaiter(_this, void 0, void 0, function () {
                            var _this = this;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, alsatian_core_1.Expect(function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4 /*yield*/, this.asyncNonThrowFunction(delayMs)];
                                                case 1: return [2 /*return*/, _a.sent()];
                                            }
                                        }); }); }).toThrowAsync()];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); }).toThrowAsync()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ToThrowAsyncTests.prototype.asyncFunctionDoesNotThrowErrorFailsWithCorrectError = function (delayMs) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, alsatian_core_1.Expect(function () { return __awaiter(_this, void 0, void 0, function () {
                            var _this = this;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, alsatian_core_1.Expect(function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4 /*yield*/, this.asyncNonThrowFunction(delayMs)];
                                                case 1: return [2 /*return*/, _a.sent()];
                                            }
                                        }); }); }).toThrowAsync()];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); }).toThrowErrorAsync(error_match_error_1.ErrorMatchError, "Expected an error to be thrown but no errors were thrown.")];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ToThrowAsyncTests.prototype.asyncFunctionDoesNotThrowErrorPassesWhenShouldNotThrow = function (delayMs) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, alsatian_core_1.Expect(function () { return __awaiter(_this, void 0, void 0, function () {
                            var _this = this;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, alsatian_core_1.Expect(function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4 /*yield*/, this.asyncNonThrowFunction(delayMs)];
                                                case 1: return [2 /*return*/, _a.sent()];
                                            }
                                        }); }); }).not.toThrowAsync()];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); }).not.toThrowAsync()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ToThrowAsyncTests.prototype.asyncFunctionThrowsErrorFailsWhenShouldNotThrow = function (delayMs) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, alsatian_core_1.Expect(function () { return __awaiter(_this, void 0, void 0, function () {
                            var _this = this;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, alsatian_core_1.Expect(function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4 /*yield*/, this.asyncThrowFunction(delayMs)];
                                                case 1: return [2 /*return*/, _a.sent()];
                                            }
                                        }); }); }).not.toThrowAsync()];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); }).toThrowAsync()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ToThrowAsyncTests.prototype.asyncFunctionThrowsErrorFailsWithCorrectError = function (delayMs) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, alsatian_core_1.Expect(function () { return __awaiter(_this, void 0, void 0, function () {
                            var _this = this;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, alsatian_core_1.Expect(function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4 /*yield*/, this.asyncThrowFunction(delayMs)];
                                                case 1: return [2 /*return*/, _a.sent()];
                                            }
                                        }); }); }).not.toThrowAsync()];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); }).toThrowErrorAsync(error_match_error_1.ErrorMatchError, "Expected an error not to be thrown but an error was thrown.")];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ToThrowAsyncTests.prototype.asyncCheckingWhetherNonFunctionThrowsShouldThrow = function (actualValue) {
        return __awaiter(this, void 0, void 0, function () {
            var EXPECT;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        EXPECT = alsatian_core_1.Expect(function () { });
                        EXPECT._actualValue = actualValue;
                        return [4 /*yield*/, alsatian_core_1.Expect(function () { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, EXPECT.toThrowAsync()];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); }).toThrowErrorAsync(TypeError, "toThrowAsync requires value passed in to Expect to be a function.")];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ToThrowAsyncTests.prototype.asyncCheckingWhetherNonFunctionDoesNotThrowShouldThrow = function (actualValue) {
        return __awaiter(this, void 0, void 0, function () {
            var EXPECT;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        EXPECT = alsatian_core_1.Expect(function () { });
                        EXPECT._actualValue = actualValue;
                        return [4 /*yield*/, alsatian_core_1.Expect(function () { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, EXPECT.not.toThrowAsync()];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); }).toThrowErrorAsync(TypeError, "toThrowAsync requires value passed in to Expect to be a function.")];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ToThrowAsyncTests.prototype.asyncActualValueAndShouldNotMatchErrorM = function () {
        return __awaiter(this, void 0, void 0, function () {
            var errorMatchError, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, alsatian_core_1.Expect(function () { }).toThrowAsync()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        errorMatchError = error_1;
                        return [3 /*break*/, 3];
                    case 3:
                        alsatian_core_1.Expect(errorMatchError).toBeDefined();
                        alsatian_core_1.Expect(errorMatchError).not.toBeNull();
                        alsatian_core_1.Expect(errorMatchError.actual).toBe("error was not thrown.");
                        return [2 /*return*/];
                }
            });
        });
    };
    ToThrowAsyncTests.prototype.asyncActualValueAndShouldNotMatchShouldBeSetToErrorWasThrown = function (actualErrorType, actualErrorMessage) {
        return __awaiter(this, void 0, void 0, function () {
            var errorMatchError, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, alsatian_core_1.Expect(function () {
                                throw new actualErrorType(actualErrorMessage);
                            }).not.toThrowAsync()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        errorMatchError = error_2;
                        return [3 /*break*/, 3];
                    case 3:
                        alsatian_core_1.Expect(errorMatchError).toBeDefined();
                        alsatian_core_1.Expect(errorMatchError).not.toBeNull();
                        alsatian_core_1.Expect(errorMatchError.actual).toBe(actualErrorType.name + " error was thrown with message \"" + actualErrorMessage + "\".");
                        return [2 /*return*/];
                }
            });
        });
    };
    ToThrowAsyncTests.prototype.asyncExpectedValueAndShouldNotMatchShouldBeSetToErrorNotToBeThrown = function () {
        return __awaiter(this, void 0, void 0, function () {
            var errorMatchError, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, alsatian_core_1.Expect(function () {
                                throw new Error();
                            }).not.toThrowAsync()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _a.sent();
                        errorMatchError = error_3;
                        return [3 /*break*/, 3];
                    case 3:
                        alsatian_core_1.Expect(errorMatchError).toBeDefined();
                        alsatian_core_1.Expect(errorMatchError).not.toBeNull();
                        alsatian_core_1.Expect(errorMatchError.expected).toBe("error not to be thrown.");
                        return [2 /*return*/];
                }
            });
        });
    };
    ToThrowAsyncTests.prototype.asyncCheckingToThrowErrorAsyncPassesWhenErrorsMatch = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, alsatian_core_1.Expect(function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, alsatian_core_1.Expect(function () {
                                            throw new EvalError("An EvalError");
                                        }).toThrowErrorAsync(EvalError, "An EvalError")];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); }).toBeTruthy()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ToThrowAsyncTests.prototype.asyncCheckingToThrowErrorAsyncFailsOnWhenErrorsDoNotMatch = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, alsatian_core_1.Expect(function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, alsatian_core_1.Expect(function () {
                                            throw new EvalError("An EvalError");
                                        }).toThrowErrorAsync(SyntaxError, "An SyntaxError")];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); }).toThrowAsync()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ToThrowAsyncTests.prototype.asyncCheckingWhetherNonFunctionForToThrowErrorAcyncDoesThrow = function (actualValue) {
        return __awaiter(this, void 0, void 0, function () {
            var EXPECT;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        EXPECT = alsatian_core_1.Expect(function () { });
                        EXPECT._actualValue = actualValue;
                        return [4 /*yield*/, alsatian_core_1.Expect(function () { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, EXPECT.toThrowErrorAsync(TypeError, "toThrowAsync requires value passed to Expect to be a function.")];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); }).toThrowAsync()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        alsatian_core_1.TestCase(0),
        alsatian_core_1.TestCase(100),
        alsatian_core_1.AsyncTest("Test toThrowAsync catches thrown errors and does not rethrow"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", Promise)
    ], ToThrowAsyncTests.prototype, "asyncFunctionThrowsErrorPasses", null);
    __decorate([
        alsatian_core_1.TestCase(0),
        alsatian_core_1.TestCase(100),
        alsatian_core_1.AsyncTest("Test toThrowAsync throws and error if an error is not thrown"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", Promise)
    ], ToThrowAsyncTests.prototype, "asyncFunctionThrowDoesNotErrorFails", null);
    __decorate([
        alsatian_core_1.TestCase(0),
        alsatian_core_1.TestCase(100),
        alsatian_core_1.AsyncTest("Test toThrowAsync throws a ErrorMatchError and toThrowErrorAsync catches it"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", Promise)
    ], ToThrowAsyncTests.prototype, "asyncFunctionDoesNotThrowErrorFailsWithCorrectError", null);
    __decorate([
        alsatian_core_1.TestCase(0),
        alsatian_core_1.TestCase(100),
        alsatian_core_1.AsyncTest("Test not.toThrowAsync does not throw when it shouldn't"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", Promise)
    ], ToThrowAsyncTests.prototype, "asyncFunctionDoesNotThrowErrorPassesWhenShouldNotThrow", null);
    __decorate([
        alsatian_core_1.TestCase(0),
        alsatian_core_1.TestCase(100),
        alsatian_core_1.AsyncTest("Test not.toThrowAsync does throw when it should"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", Promise)
    ], ToThrowAsyncTests.prototype, "asyncFunctionThrowsErrorFailsWhenShouldNotThrow", null);
    __decorate([
        alsatian_core_1.TestCase(0),
        alsatian_core_1.TestCase(100),
        alsatian_core_1.AsyncTest("Test not.toThrowAsync thows an ErrorMatchError when it should"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", Promise)
    ], ToThrowAsyncTests.prototype, "asyncFunctionThrowsErrorFailsWithCorrectError", null);
    __decorate([
        alsatian_core_1.TestCase(undefined),
        alsatian_core_1.TestCase(null),
        alsatian_core_1.TestCase(""),
        alsatian_core_1.TestCase("something"),
        alsatian_core_1.TestCase(0),
        alsatian_core_1.TestCase(1),
        alsatian_core_1.TestCase(42),
        alsatian_core_1.TestCase({}),
        alsatian_core_1.TestCase({ an: "object" }),
        alsatian_core_1.TestCase([]),
        alsatian_core_1.TestCase(["an", "array"]),
        alsatian_core_1.AsyncTest("Test toThrowAsync throws a TypeError when it should"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], ToThrowAsyncTests.prototype, "asyncCheckingWhetherNonFunctionThrowsShouldThrow", null);
    __decorate([
        alsatian_core_1.TestCase(undefined),
        alsatian_core_1.TestCase(null),
        alsatian_core_1.TestCase(""),
        alsatian_core_1.TestCase("something"),
        alsatian_core_1.TestCase(0),
        alsatian_core_1.TestCase(1),
        alsatian_core_1.TestCase(42),
        alsatian_core_1.TestCase({}),
        alsatian_core_1.TestCase({ an: "object" }),
        alsatian_core_1.TestCase([]),
        alsatian_core_1.TestCase(["an", "array"]),
        alsatian_core_1.AsyncTest("Test not.toThrowAsync throws a TypeError when it should"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], ToThrowAsyncTests.prototype, "asyncCheckingWhetherNonFunctionDoesNotThrowShouldThrow", null);
    __decorate([
        alsatian_core_1.AsyncTest("Test toThrowAsync errors are caught and error is type ErrorMatchError"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], ToThrowAsyncTests.prototype, "asyncActualValueAndShouldNotMatchErrorM", null);
    __decorate([
        alsatian_core_1.TestCase(EvalError, "something went wrong"),
        alsatian_core_1.TestCase(ReferenceError, "A much worse thing happened!"),
        alsatian_core_1.TestCase(SyntaxError, "THE END IS NIGH"),
        alsatian_core_1.AsyncTest("Test not.toThrowAsync errors are caught and error is type ErrorMatchError's"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function, String]),
        __metadata("design:returntype", Promise)
    ], ToThrowAsyncTests.prototype, "asyncActualValueAndShouldNotMatchShouldBeSetToErrorWasThrown", null);
    __decorate([
        alsatian_core_1.AsyncTest("Test not.toThrowAsync error are caught and error is ErrorMatchError"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], ToThrowAsyncTests.prototype, "asyncExpectedValueAndShouldNotMatchShouldBeSetToErrorNotToBeThrown", null);
    __decorate([
        alsatian_core_1.AsyncTest("Test toThrowErrorAsync catches errors of the correct type and passes"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], ToThrowAsyncTests.prototype, "asyncCheckingToThrowErrorAsyncPassesWhenErrorsMatch", null);
    __decorate([
        alsatian_core_1.AsyncTest("Test toThrowErrorAsync catches errors and if it isn't correct throws an Error"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], ToThrowAsyncTests.prototype, "asyncCheckingToThrowErrorAsyncFailsOnWhenErrorsDoNotMatch", null);
    __decorate([
        alsatian_core_1.TestCase(undefined),
        alsatian_core_1.TestCase(null),
        alsatian_core_1.TestCase(""),
        alsatian_core_1.TestCase("something"),
        alsatian_core_1.TestCase(0),
        alsatian_core_1.TestCase(1),
        alsatian_core_1.TestCase(42),
        alsatian_core_1.TestCase({}),
        alsatian_core_1.TestCase({ an: "object" }),
        alsatian_core_1.TestCase([]),
        alsatian_core_1.TestCase(["an", "array"]),
        alsatian_core_1.AsyncTest("Test toThrowErrorAsync throws a TypeError when it should"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], ToThrowAsyncTests.prototype, "asyncCheckingWhetherNonFunctionForToThrowErrorAcyncDoesThrow", null);
    return ToThrowAsyncTests;
}());
exports.ToThrowAsyncTests = ToThrowAsyncTests;
//# sourceMappingURL=to-throw-async.spec.js.map