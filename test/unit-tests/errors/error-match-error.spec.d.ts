export declare class ErrorMatchErrorTests {
    noActualErrorShouldGiveCorrectMessage(): void;
    actualErrorThrownWhenNoneExpectedShouldGiveCorrectMessage(): void;
    actualErrorIsNotCorrectTypeGivesCorrectMessage(actualErrorType: new () => Error, expectedErrorType: new () => Error): void;
    actualErrorIsMatchingTypeButShouldntBeGivesCorrectMessage(errorType: new () => Error): void;
    actualErrorHasIncorrectMessageGivesCorrectMessage(message: string): void;
    actualErrorHasMatchingMessageButShouldntBeGivesCorrectMessage(message: string): void;
    actualErrorHasIncorrectTypeAndMessageGivesCorrectMessage(expectedErrorType: new () => Error, message: string): void;
    actualErrorHasMatchingMessageAndTypeButShouldntBeGivesCorrectMessage(expectedErrorType: new (message: string) => Error, message: string): void;
    actualValueAndShouldMatchShouldBeSetToErrorWasNotThrown(): void;
    actualValueAndShouldNotMatchShouldBeSetToErrorWasThrown(actualErrorType: new (message: string) => Error, actualErrorMessage: string): void;
    expectedValueAndShouldMatchShouldBeSetToErrorToBeThrown(): void;
    expectedValueAndShouldNotMatchShouldBeSetToErrorNotToBeThrown(): void;
    actualValueAndShouldMatchAndExpectedErrorShouldBeSetToErrorWasNotThrown(expectedErrorType: new (message: string) => Error, expectedErrorMessage: string): void;
    actualValueAndShouldMatchAndExpectedErrorShouldBeSetToWrongErrorWasThrown(expectedErrorType: new (message: string) => Error, expectedErrorMessage: string, actualErrorType: new (message: string) => Error, actualErrorMessage: string): void;
    actualValueAndShouldNotMatchAndExpectedErrorShouldBeSetToWrongErrorWasThrown(expectedErrorType: new (message: string) => Error, expectedErrorMessage: string): void;
    expectedValueAndShouldMatchShouldBeSetToErrorShouldBeThrown(expectedErrorType: new (message: string) => Error, expectedErrorMessage: string): void;
    expectedValueAndShouldNotMatchShouldBeSetToErrorShouldNotBeThrown(expectedErrorType: new (message: string) => Error, expectedErrorMessage: string): void;
}
