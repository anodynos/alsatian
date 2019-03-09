import { TestRunner } from "../core/alsatian-core";
import { AlsatianCliOptions } from "./alsatian-cli-options";
export declare class CliTestRunner {
    private _testRunner;
    static create(): CliTestRunner;
    constructor(_testRunner: TestRunner);
    run(userArguments: AlsatianCliOptions): Promise<void>;
    private _handleTestSetRunError;
}
