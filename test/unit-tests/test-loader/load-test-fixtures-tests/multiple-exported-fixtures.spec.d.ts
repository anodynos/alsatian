import "reflect-metadata";
export declare class MultipleExportedFixtureTests {
    shouldContainCorrectNumberOfTestFixtures(expectedTestFixtureCount: number): void;
    shouldIgnoreNonTestFixtureConstructorAtStartOfWrapper(): void;
    shouldIgnoreObjectAtStartOfWrapper(): void;
    shouldIgnoreNonTestFixtureConstructorInMiddleOfWrapper(): void;
    shouldIgnoreObjectInMiddleOfWrapper(): void;
    shouldIgnoreNonTestFixtureConstructorAtEndOfWrapper(): void;
    shouldIgnoreObjectAtEndOfWrapper(): void;
}
