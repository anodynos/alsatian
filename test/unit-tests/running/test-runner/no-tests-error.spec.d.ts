export declare class NotestsErrorTests {
    private _originalStdErr;
    private _originalProcessExit;
    private _spyProcess;
    private _resetProcess;
    emptyTestFixturesThrowsError(): Promise<void>;
    testFixtureWithEmptyTestsOutputsNoTestError(testCount: number): Promise<void>;
    multipleTestFixtureWithEmptyTestOutputsNoTestError(testFixtureCount: number): Promise<void>;
    multipleTestFixtureWithMultipleEmptyTestOutputsNoTestError(testFixtureCount: number, testCount: number): Promise<void>;
}
