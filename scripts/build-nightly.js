"use strict";
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
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var child_process_1 = require("child_process");
var fs_1 = require("fs");
var get_package_json_1 = require("./get-package-json");
var pad_number_1 = require("./pad-number");
if (process.env.TRAVIS_JOB_NUMBER &&
    process.env.TRAVIS_JOB_NUMBER.split(".")[1] !== "1") {
    process.stdout.write("nothing to do here, publishing is handled on another job\n");
    process.exit(0);
}
else {
    // tslint:disable-next-line
    require("dugite").GitProcess.exec(["log", "-1", "--format=%cd"], "./").then(function (response) { return __awaiter(_this, void 0, void 0, function () {
        var lastCommitDate, now, ONE_DAY_IN_MILLISECONDS, packageJson, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    lastCommitDate = new Date(response.stdout);
                    now = new Date();
                    ONE_DAY_IN_MILLISECONDS = 86400000;
                    if (!(now.getTime() - lastCommitDate.getTime() > ONE_DAY_IN_MILLISECONDS)) return [3 /*break*/, 1];
                    process.stdout.write("nothing new to publish today\n");
                    process.exit(0);
                    return [3 /*break*/, 8];
                case 1:
                    packageJson = get_package_json_1.getPackageJson();
                    packageJson.version =
                        packageJson.version.split("-")[0] +
                            "-" +
                            now.getFullYear() +
                            pad_number_1.padNumber(now.getMonth() + 1, 2) +
                            pad_number_1.padNumber(now.getDate(), 2);
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 7, , 8]);
                    process.stdout.write("updating package.json");
                    return [4 /*yield*/, writeFileAsync("./package.json", JSON.stringify(packageJson, null, 3))];
                case 3:
                    _a.sent();
                    process.stdout.write("updated package.json version to " + packageJson.version + "\n");
                    if (!process.env.NPM_AUTH_TOKEN) return [3 /*break*/, 5];
                    process.stdout.write("building .npmrc\n");
                    return [4 /*yield*/, writeFileAsync("./.npmrc", "//registry.npmjs.org/:_authToken=${NPM_AUTH_TOKEN}\n")];
                case 4:
                    _a.sent();
                    process.stdout.write("built .npmrc\n");
                    _a.label = 5;
                case 5:
                    process.stdout.write(packageJson.version + " ready to publish\n");
                    return [4 /*yield*/, npmPublish()];
                case 6:
                    _a.sent();
                    process.stdout.write(packageJson.version + " publishedh\n");
                    process.exit(0);
                    return [3 /*break*/, 8];
                case 7:
                    error_1 = _a.sent();
                    process.stderr.write("publish failed: " + error_1.message);
                    process.exit(1);
                    return [3 /*break*/, 8];
                case 8: return [2 /*return*/];
            }
        });
    }); });
}
function writeFileAsync(fileLocation, fileContents) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    fs_1.writeFile(fileLocation, fileContents, function (error) {
                        if (error) {
                            return reject(error);
                        }
                        resolve();
                    });
                })];
        });
    });
}
function npmPublish() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    var publishProcess = child_process_1.spawn("npm", ["publish", "--tag", "next"]);
                    publishProcess.on("close", function (code) { return resolve(); });
                    publishProcess.stdout.pipe(process.stdout);
                    publishProcess.stderr.pipe(process.stderr);
                })];
        });
    });
}
//# sourceMappingURL=build-nightly.js.map