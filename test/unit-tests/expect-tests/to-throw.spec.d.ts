export declare class ToThrowTests {
    functionThrowsErrorPasses(): void;
    functionDoesNotThrowErrorFails(): void;
    functionDoesNotThrowErrorFailsWithCorrectError(): void;
    functionDoesNotThrowErrorPassesWhenShouldNotThrow(): void;
    functionThrowsErrorFailsWhenShouldNotThrow(): void;
    functionThrowsErrorFailsWithCorrectError(): void;
    checkingWhetherNonFunctionThrowsShouldThrow(actualValue: any): void;
    checkingWhetherNonFunctionDoesNotThrowShouldThrow(actualValue: any): void;
    actualValueAndShouldMatchShouldBeSetToErrorWasNotThrown(): void;
    actualValueAndShouldNotMatchShouldBeSetToErrorWasThrown(actualErrorType: new (message: string) => Error, actualErrorMessage: string): void;
    actualValueAndShouldMatchShouldBeSetToErrorToBeThrown(): void;
    expectedValueAndShouldNotMatchShouldBeSetToErrorNotToBeThrown(): void;
}
