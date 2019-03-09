import { GlobHelper, TestLoader } from "./";
import { ITestFixture } from "./_interfaces";
export declare class TestSet {
    static create(): TestSet;
    private _testLoader;
    private _globHelper;
    private _testFixtures;
    readonly testFixtures: Array<ITestFixture>;
    constructor(testLoader: TestLoader, globHelper: GlobHelper);
    addTestsFromFiles(testsFileLocations: string | Array<string>): void;
    private _loadTestFixtures;
}
