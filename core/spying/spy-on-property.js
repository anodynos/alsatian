"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var spying_1 = require("../spying");
function SpyOnProperty(target, propertyName) {
    return new spying_1.PropertySpy(target, propertyName);
}
exports.SpyOnProperty = SpyOnProperty;
//# sourceMappingURL=spy-on-property.js.map