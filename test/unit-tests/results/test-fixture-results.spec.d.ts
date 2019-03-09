export declare class TestFixtureResultsTests {
    onePassingTestOutcomePass(): void;
    oneIgnoredTestOutcomeSkip(): void;
    oneTestErrorOutcomeError(errorType: new () => Error): void;
    oneTestMatchErrorOutcomeFail(errorType: new () => Error): void;
    twoTestsOnePassOneMatchErrorOutcomeFail(errorType: new () => Error): void;
    twoTestsOnePassOneErrorOutcomeError(errorType: new () => Error): void;
    twoTestsOneMatchErrorOneErrorOutcomeError(errorTypeA: new () => Error, errorTypeB: new () => Error): void;
    twoTestsNoErrorOutcomePass(): void;
    testFixtureInConstructorIsAccessible(description: string): void;
    correctNumberOfTestsAdded(testCount: number): void;
}
