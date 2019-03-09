export declare class TestCaseResultTests {
    argumentsAreStored(...inputArguments: Array<any>): void;
    noErrorAndNotIgnoredTestOutcomeIsPass(): void;
    noErrorAndIgnoredTestOutcomeIsSkip(): void;
    errorOutcomeIsError(errorType: new () => Error): void;
    matchErrorOutcomeIsFail(errorType: new () => Error): void;
}
