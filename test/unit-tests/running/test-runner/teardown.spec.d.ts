export declare class TeardownTests {
    private _createTestFixture;
    singleTeardownFunctionCalled(): Promise<void>;
    singleAsyncTeardownFunctionCalled(): Promise<void>;
    multipleTeardownFunctionsCalled(teardownFunctionCount: number): Promise<void>;
    multipleTestsTeardownFunctionCalledEachTime(testCount: number): Promise<void>;
    multipleTestCasesTeardownFunctionCalledEachTime(testCaseCount: number): Promise<void>;
    singleTeardownFixtureFunctionCalled(): Promise<void>;
    singleAsyncTeardownFixtureFunctionCalled(): Promise<void>;
    multipleTeardownFixtureFunctionsCalled(teardownFunctionCount: number): Promise<void>;
    multipleTestsOnlyTeardownFixtureOnce(testCount: number): Promise<void>;
    multipleTestCasesOnlyTeardownFixureOnce(testCaseCount: number): Promise<void>;
}
