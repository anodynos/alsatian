export declare class TestSetResultsTests {
    onePassingTestFixtureOutcomePass(): void;
    oneIgnoredTestFixtureOutcomeSkip(): void;
    oneTestFixtureErrorOutcomeError(errorType: new () => Error): void;
    oneTestFixtureMatchErrorOutcomeFail(errorType: new () => Error): void;
    twoTestFixturesOnePassOneMatchErrorOutcomeFail(errorType: new () => Error): void;
    twoTestFixturesOnePassOneErrorOutcomeError(errorType: new () => Error): void;
    twoTestFixturesOneMatchErrorOneErrorOutcomeError(errorTypeA: new () => Error, errorTypeB: new () => Error): void;
    twoTestFixturesNoErrorOutcomePass(): void;
    correctNumberOfTestFixtureResultsAdded(testFixtureCount: number): void;
}
