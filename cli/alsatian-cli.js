#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('ts-node/register');
var alsatian_cli_options_1 = require("./alsatian-cli-options");
var cli_test_runner_1 = require("./cli-test-runner");
// get all arguments from the user
var userArguments = new alsatian_cli_options_1.AlsatianCliOptions(process.argv.slice(2));
// run the test set
var cliTestRunner = cli_test_runner_1.CliTestRunner.create();
cliTestRunner.run(userArguments);
//# sourceMappingURL=alsatian-cli.js.map