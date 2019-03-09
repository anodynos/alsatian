export declare class ToThrowAsyncTests {
    private asyncThrowFunction;
    private asyncNonThrowFunction;
    asyncFunctionThrowsErrorPasses(delayMs: number): Promise<void>;
    asyncFunctionThrowDoesNotErrorFails(delayMs: number): Promise<void>;
    asyncFunctionDoesNotThrowErrorFailsWithCorrectError(delayMs: number): Promise<void>;
    asyncFunctionDoesNotThrowErrorPassesWhenShouldNotThrow(delayMs: number): Promise<void>;
    asyncFunctionThrowsErrorFailsWhenShouldNotThrow(delayMs: number): Promise<void>;
    asyncFunctionThrowsErrorFailsWithCorrectError(delayMs: number): Promise<void>;
    asyncCheckingWhetherNonFunctionThrowsShouldThrow(actualValue: any): Promise<void>;
    asyncCheckingWhetherNonFunctionDoesNotThrowShouldThrow(actualValue: any): Promise<void>;
    asyncActualValueAndShouldNotMatchErrorM(): Promise<void>;
    asyncActualValueAndShouldNotMatchShouldBeSetToErrorWasThrown(actualErrorType: new (message: string) => Error, actualErrorMessage: string): Promise<void>;
    asyncExpectedValueAndShouldNotMatchShouldBeSetToErrorNotToBeThrown(): Promise<void>;
    asyncCheckingToThrowErrorAsyncPassesWhenErrorsMatch(): Promise<void>;
    asyncCheckingToThrowErrorAsyncFailsOnWhenErrorsDoNotMatch(): Promise<void>;
    asyncCheckingWhetherNonFunctionForToThrowErrorAcyncDoesThrow(actualValue: any): Promise<void>;
}
