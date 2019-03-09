import { ITestFixture } from "../../core/_interfaces/test-fixture.i";
import { TestSet } from "../../core/test-set";
export declare class TestSetBuilder {
    private _testSet;
    private _testFixtures;
    constructor();
    withTestFixtures(testFixtures: Array<ITestFixture>): TestSetBuilder;
    addTestFixture(testFixture: ITestFixture): TestSetBuilder;
    build(): TestSet;
}
