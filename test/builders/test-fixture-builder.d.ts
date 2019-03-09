import { ITestFixture } from "../../core/_interfaces/test-fixture.i";
import { ITest } from "../../core/_interfaces/test.i";
export declare class TestFixtureBuilder {
    private _testFixture;
    constructor();
    withFixture(fixture: {
        [id: string]: (...args: Array<any>) => any;
    }): TestFixtureBuilder;
    addTest(test: ITest): TestFixtureBuilder;
    withTests(tests: Array<ITest>): TestFixtureBuilder;
    withTestCount(testCount: number): TestFixtureBuilder;
    withDescription(description: string): TestFixtureBuilder;
    build(): ITestFixture;
}
