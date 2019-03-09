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
var alsatian_1 = require("alsatian");
var ErrorThrow = /** @class */ (function () {
    function ErrorThrow() {
    }
    ErrorThrow.prototype.errorThrown = function () {
        var errorFunction = function () {
            throw new Error("error");
        };
        alsatian_1.Expect(errorFunction).toThrow();
    };
    ErrorThrow.prototype.errorNotThrown = function () {
        var errorFunction = function () { };
        alsatian_1.Expect(errorFunction).toThrow();
    };
    ErrorThrow.prototype.noErrorThrown = function () {
        var errorFunction = function () { };
        alsatian_1.Expect(errorFunction).not.toThrow();
    };
    ErrorThrow.prototype.errorUnexpectedlyThrown = function () {
        var errorFunction = function () {
            throw new Error("error");
        };
        alsatian_1.Expect(errorFunction).not.toThrow();
    };
    ErrorThrow.prototype.exactErrorThrown = function () {
        var errorFunction = function () {
            throw new TypeError("specific error");
        };
        alsatian_1.Expect(errorFunction).toThrowError(TypeError, "specific error");
    };
    ErrorThrow.prototype.exactErrorNotThrown = function () {
        var errorFunction = function () {
            throw new Error("any old error");
        };
        alsatian_1.Expect(errorFunction).toThrowError(TypeError, "specific error");
    };
    ErrorThrow.prototype.notExactErrorThrown = function () {
        var errorFunction = function () {
            throw new Error("any old error");
        };
        alsatian_1.Expect(errorFunction).not.toThrowError(TypeError, "specific error");
    };
    ErrorThrow.prototype.exactErrorThrownUnexpectedly = function () {
        var errorFunction = function () {
            throw new TypeError("specific error");
        };
        alsatian_1.Expect(errorFunction).not.toThrowError(TypeError, "specific error");
    };
    ErrorThrow.prototype.asyncErrorThrown = function () {
        return __awaiter(this, void 0, void 0, function () {
            var errorFunction;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        errorFunction = function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                return [2 /*return*/, new Promise(function (resolve, reject) {
                                        setTimeout(function () { return reject(new Error("error")); }, 400);
                                    })];
                            });
                        }); };
                        return [4 /*yield*/, alsatian_1.Expect(errorFunction).toThrowAsync()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ErrorThrow.prototype.asyncErrorNotThrown = function () {
        return __awaiter(this, void 0, void 0, function () {
            var errorFunction;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        errorFunction = function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                return [2 /*return*/, new Promise(function (resolve, reject) {
                                        setTimeout(resolve, 400);
                                    })];
                            });
                        }); };
                        return [4 /*yield*/, alsatian_1.Expect(errorFunction).toThrowAsync()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ErrorThrow.prototype.asyncNoErrorThrown = function () {
        return __awaiter(this, void 0, void 0, function () {
            var errorFunction;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        errorFunction = function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                return [2 /*return*/, new Promise(function (resolve) {
                                        setTimeout(resolve, 400);
                                    })];
                            });
                        }); };
                        return [4 /*yield*/, alsatian_1.Expect(errorFunction).not.toThrowAsync()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ErrorThrow.prototype.asyncErrorUnexpectedly = function () {
        return __awaiter(this, void 0, void 0, function () {
            var errorFunction;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        errorFunction = function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                return [2 /*return*/, new Promise(function (resolve, reject) {
                                        setTimeout(function () { return reject(new Error("error")); }, 400);
                                    })];
                            });
                        }); };
                        return [4 /*yield*/, alsatian_1.Expect(errorFunction).not.toThrowAsync()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ErrorThrow.prototype.asnycExactErrorThrown = function () {
        return __awaiter(this, void 0, void 0, function () {
            var errorFunction;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        errorFunction = function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                return [2 /*return*/, new Promise(function (resolve, reject) {
                                        setTimeout(function () { return reject(new TypeError("specific error")); }, 400);
                                    })];
                            });
                        }); };
                        return [4 /*yield*/, alsatian_1.Expect(errorFunction).toThrowErrorAsync(TypeError, "specific error")];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ErrorThrow.prototype.asnycExactErrorNotThrown = function () {
        return __awaiter(this, void 0, void 0, function () {
            var errorFunction;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        errorFunction = function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                return [2 /*return*/, new Promise(function (resolve, reject) {
                                        setTimeout(function () { return reject(new Error("error")); }, 400);
                                    })];
                            });
                        }); };
                        return [4 /*yield*/, alsatian_1.Expect(errorFunction).toThrowErrorAsync(TypeError, "specific error")];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ErrorThrow.prototype.asyncNotExactErrorThrown = function () {
        return __awaiter(this, void 0, void 0, function () {
            var errorFunction;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        errorFunction = function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                return [2 /*return*/, new Promise(function (resolve, reject) {
                                        setTimeout(function () { return reject(new Error("any old error")); }, 400);
                                    })];
                            });
                        }); };
                        return [4 /*yield*/, alsatian_1.Expect(errorFunction).not.toThrowErrorAsync(TypeError, "specific error")];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ErrorThrow.prototype.asyncExactErrorThrownUnexpectedly = function () {
        return __awaiter(this, void 0, void 0, function () {
            var errorFunction;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        errorFunction = function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                return [2 /*return*/, new Promise(function (resolve, reject) {
                                        reject(new TypeError("specific error"));
                                    })];
                            });
                        }); };
                        return [4 /*yield*/, alsatian_1.Expect(errorFunction).not.toThrowErrorAsync(TypeError, "specific error")];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        alsatian_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ErrorThrow.prototype, "errorThrown", null);
    __decorate([
        alsatian_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ErrorThrow.prototype, "errorNotThrown", null);
    __decorate([
        alsatian_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ErrorThrow.prototype, "noErrorThrown", null);
    __decorate([
        alsatian_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ErrorThrow.prototype, "errorUnexpectedlyThrown", null);
    __decorate([
        alsatian_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ErrorThrow.prototype, "exactErrorThrown", null);
    __decorate([
        alsatian_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ErrorThrow.prototype, "exactErrorNotThrown", null);
    __decorate([
        alsatian_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ErrorThrow.prototype, "notExactErrorThrown", null);
    __decorate([
        alsatian_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ErrorThrow.prototype, "exactErrorThrownUnexpectedly", null);
    __decorate([
        alsatian_1.AsyncTest(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], ErrorThrow.prototype, "asyncErrorThrown", null);
    __decorate([
        alsatian_1.AsyncTest(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], ErrorThrow.prototype, "asyncErrorNotThrown", null);
    __decorate([
        alsatian_1.AsyncTest(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], ErrorThrow.prototype, "asyncNoErrorThrown", null);
    __decorate([
        alsatian_1.AsyncTest(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], ErrorThrow.prototype, "asyncErrorUnexpectedly", null);
    __decorate([
        alsatian_1.AsyncTest(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], ErrorThrow.prototype, "asnycExactErrorThrown", null);
    __decorate([
        alsatian_1.AsyncTest(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], ErrorThrow.prototype, "asnycExactErrorNotThrown", null);
    __decorate([
        alsatian_1.AsyncTest(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], ErrorThrow.prototype, "asyncNotExactErrorThrown", null);
    __decorate([
        alsatian_1.AsyncTest(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], ErrorThrow.prototype, "asyncExactErrorThrownUnexpectedly", null);
    ErrorThrow = __decorate([
        alsatian_1.TestFixture("error throwing")
    ], ErrorThrow);
    return ErrorThrow;
}());
exports.ErrorThrow = ErrorThrow;
//# sourceMappingURL=to-throw.spec.js.map