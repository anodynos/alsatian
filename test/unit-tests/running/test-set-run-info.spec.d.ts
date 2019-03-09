import { TestSetResults } from "../../../core/results";
import { TestItem, TestPlan } from "../../../core/running";
export declare class TestSetRunInfoTests {
    correctTestPlanSet(testPlan: TestPlan): void;
    correctTestSetResultsSet(testSetResults: TestSetResults): void;
    correctTimeoutSet(timeout: number): void;
    settingNullOrUndefinedTestPlanItemThrowsError(testPlanItem: TestItem): void;
    settingTestPlanItemIsStored(): void;
}
