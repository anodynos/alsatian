"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var child_process_1 = require("child_process");
var get_package_json_1 = require("./get-package-json");
var packageJson = get_package_json_1.getPackageJson();
child_process_1.exec("git tag -a " + packageJson.version + " -m \"Release " + packageJson.version + "\"");
//# sourceMappingURL=tag-release.js.map