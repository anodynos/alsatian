"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ClassBuilder = /** @class */ (function () {
    function ClassBuilder() {
    }
    ClassBuilder.prototype.ClassBuilder = function () {
        this.name = "SomeClass";
    };
    ClassBuilder.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    ClassBuilder.prototype.build = function () {
        var BuiltClass = /** @class */ (function () {
            function BuiltClass() {
            }
            return BuiltClass;
        }());
        Object.defineProperty(BuiltClass, "name", {
            enumerable: false,
            configurable: false,
            writable: false,
            value: this.name
        });
        return BuiltClass;
    };
    return ClassBuilder;
}());
exports.ClassBuilder = ClassBuilder;
//# sourceMappingURL=class-builder.js.map