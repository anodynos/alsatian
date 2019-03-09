export declare class PreTestTests {
    private _originalStdOut;
    private _originalProcessExit;
    tapVersionHeaderOutput(): Promise<void>;
    multipleTestFixtureWithSingleTestOutputsCorrectTestNumber(testFixtureCount: number): Promise<void>;
    multipleTestFixtureWithMultipleTestsOutputsCorrectTestCount(testFixtureCount: number, testCount: number): Promise<void>;
    multipleTestFixtureWithMultipleTestsWithMultipleTestCasesOutputsCorrectTestCount(testFixtureCount: number, testCount: number, testCaseCount: number): Promise<void>;
    testFixtureWithMultipleTestsAndSecondWithNoneOutputsCorrectTestNumber(testFixtureCount: number): Promise<void>;
}
