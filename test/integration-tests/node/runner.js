"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Alsatian = require("../../../core/alsatian-core");
// create test set
var testSet = Alsatian.TestSet.create();
testSet.addTestsFromFiles("./test/integration-tests/test-sets/**/*.spec.js");
// run the test set
var testRunner = new Alsatian.TestRunner();
testRunner.run(testSet);
//# sourceMappingURL=runner.js.map