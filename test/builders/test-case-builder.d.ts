import { ITestCase } from "../../core/_interfaces/test-case.i";
export declare class TestCaseBuilder {
    private _testCase;
    constructor();
    addArgument(argument: any): TestCaseBuilder;
    withArguments(args: Array<any>): TestCaseBuilder;
    withArgumentCount(argumentCount: number): TestCaseBuilder;
    build(): ITestCase;
}
