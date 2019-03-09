export declare class TestResultsTests {
    oneTestCaseNoErrorOutcomePass(): void;
    oneIgnoredTestCaseNoErrorOutcomeSkip(): void;
    oneTestCaseErrorOutcomeError(errorType: new () => Error): void;
    oneTestCaseMatchErrorOutcomeError(errorType: new () => Error): void;
    twoTestCasesOnePassOneMatchErrorOutcomeFail(errorType: new () => Error): void;
    twoTestCasesOnePassOneErrorOutcomeError(errorType: new () => Error): void;
    twoTestCasesOneMatchErrorOneErrorOutcomeError(errorTypeA: new () => Error, errorTypeB: new () => Error): void;
    twoTestCasesNoErrorOutcomePass(): void;
    testInConstructorIsAccessible(description: string): void;
}
