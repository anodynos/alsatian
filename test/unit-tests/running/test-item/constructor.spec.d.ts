import { ITest, ITestCase, ITestFixture } from "../../../../core/_interfaces";
export declare class TestItemConstructorTests {
    nullOrUndefinedTestFixtureThrowsError(testFixture: ITestFixture): void;
    nullOrUndefinedTestThrowsError(test: ITest): void;
    nullOrUndefinedTestCaseThrowsError(testCase: ITestCase): void;
}
