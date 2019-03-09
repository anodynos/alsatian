export declare class ToThrowErrorTests {
    errorNotThrownWhenExpectedShouldThrowError(): void;
    errorThrownWhenExpectedPasses(): void;
    differentErrorThrownWhenNoneExpectedFailsWithCorrectMessage(expectedErrorType: new (...args: Array<any>) => Error, expectedErrorMessage: string): void;
    differentTypeErrorThrownWhenNoneExpectedFailsWithCorrectMessage(expectedErrorType: new (...args: Array<any>) => Error, actualErrorType: new (...args: Array<any>) => Error): void;
    differentMessageErrorThrownWhenNoneExpectedFailsWithCorrectMessage(expectedErrorMessage: string): void;
    errorThrownWhenNoneExpectedShouldGiveCorrectMessage(): void;
    noErrorThrownWhenNoneExpectedPasses(): void;
    differentErrorThrownWhenNoneExpectedPasses(): void;
    differentTypeErrorThrownWhenNoneExpectedPasses(): void;
    differentMessageErrorThrownWhenNoneExpectedPasses(): void;
    checkingWhetherNonFunctionThrowsErrorShouldThrow(actualValue: any): void;
    checkingWhetherNonFunctionDoesNotThrowErrorShouldThrow(actualValue: any): void;
    actualValueAndShouldMatchShouldBeSetToErrorWasNotThrown(): void;
    actualValueAndShouldMatchAndExpectedErrorShouldBeSetToErrorWasNotThrown(expectedErrorType: new (message: string) => Error, expectedErrorMessage: string): void;
    actualValueAndShouldMatchAndExpectedErrorShouldBeSetToWrongErrorWasThrown(expectedErrorType: new (message: string) => Error, expectedErrorMessage: string, actualErrorType: new (message: string) => Error, actualErrorMessage: string): void;
    actualValueAndShouldNotMatchAndExpectedErrorShouldBeSetToWrongErrorWasThrown(expectedErrorType: new (message: string) => Error, expectedErrorMessage: string): void;
    expectedValueAndShouldMatchShouldBeSetToErrorShouldBeThrown(expectedErrorType: new (message: string) => Error, expectedErrorMessage: string): void;
    expectedValueAndShouldNotMatchShouldBeSetToErrorShouldNotBeThrown(expectedErrorType: new (message: string) => Error, expectedErrorMessage: string): void;
}
