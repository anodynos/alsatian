"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Gulp = require("gulp");
var alsatian_core_1 = require("../../../core/alsatian-core");
Gulp.task("test-to-be-expectations", function (done) {
    // create test set
    var testSet = alsatian_core_1.TestSet.create();
    testSet.addTestsFromFiles("./test/integration-tests/test-sets/expectations/to-be.spec.js");
    var testRunner = new alsatian_core_1.TestRunner();
    testRunner.outputStream
        // pipe to your favourite tap producer or not and just get TAP :)
        // .pipe(TapBark.create().getPipeable())
        .pipe(process.stdout);
    // run the test set
    testRunner.run(testSet).then(function () { return done(); });
});
Gulp.task("test-to-throw-expectations", function (done) {
    // create test set
    var testSet = alsatian_core_1.TestSet.create();
    testSet.addTestsFromFiles("./test/integration-tests/test-sets/expectations/to-throw.spec.js");
    var testRunner = new alsatian_core_1.TestRunner();
    testRunner.outputStream
        // pipe to your favourite tap producer or not and just get TAP :)
        // .pipe(TapBark.create().getPipeable())
        .pipe(process.stdout);
    // run the test set
    testRunner.run(testSet).then(function () { return done(); });
});
Gulp.task("test-syntax", function (done) {
    // create test set
    var testSet = alsatian_core_1.TestSet.create();
    testSet.addTestsFromFiles("./test/integration-tests/test-sets/test-syntax/**/*.spec.js");
    var testRunner = new alsatian_core_1.TestRunner();
    testRunner.outputStream
        // .pipe(TapBark.create().getPipeable())
        // pipe to your favourite tap producer or not and just get TAP :)
        .pipe(process.stdout);
    // run the test set
    testRunner.run(testSet).then(function () { return done(); });
});
//# sourceMappingURL=gulpfile.js.map