"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errors_1 = require("../errors");
function fail(message) {
    throw new errors_1.MatchError(message);
}
exports.fail = fail;
//# sourceMappingURL=fail.js.map