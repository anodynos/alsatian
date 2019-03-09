export declare class SetupTests {
    private _createTestFixture;
    singleSetupFunctionCalled(): Promise<void>;
    singleAsyncSetupFunctionCalled(): Promise<void>;
    multipleSetupFunctionsCalled(setupFunctionCount: number): Promise<void>;
    multipleTestsSetupFunctionCalledEachTime(testCount: number): Promise<void>;
    multipleTestCasesSetupFunctionCalledEachTime(testCaseCount: number): Promise<void>;
    singleSetupFixtureFunctionCalled(): Promise<void>;
    singleAsyncSetupFixtureFunctionCalled(): Promise<void>;
    multipleSetupFixtureFunctionsCalled(setupFunctionCount: number): Promise<void>;
    multipleTestsOnlySetupFixtureOnce(testCount: number): Promise<void>;
    multipleTestCasesOnlySetupFixureOnce(testCaseCount: number): Promise<void>;
}
