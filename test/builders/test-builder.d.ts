import { ITestCase } from "../../core/_interfaces/test-case.i";
import { ITest } from "../../core/_interfaces/test.i";
export declare class TestBuilder {
    private _test;
    constructor();
    withIsAsync(isAsync: boolean): TestBuilder;
    withKey(key: string): TestBuilder;
    withDescription(description: string): TestBuilder;
    addTestCase(testCase: ITestCase): TestBuilder;
    withTestCases(testCases: Array<ITestCase>): TestBuilder;
    withTestCaseCount(testCaseCount: number): TestBuilder;
    ignored(reason?: string): TestBuilder;
    focussed(): TestBuilder;
    build(): ITest;
}
