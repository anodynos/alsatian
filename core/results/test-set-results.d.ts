import { ITestFixture } from "../_interfaces/test-fixture.i";
import { TestFixtureResults } from "./test-fixture-results";
import { TestOutcome } from "./test-outcome";
import { IResultWithOutcome } from "./result-with-outcome.i";
export declare class TestSetResults implements IResultWithOutcome {
    private _testFixtureResults;
    readonly testFixtureResults: TestFixtureResults[];
    readonly outcome: TestOutcome;
    addTestFixtureResult(testFixture: ITestFixture): TestFixtureResults;
}
