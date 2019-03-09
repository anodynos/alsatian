import "reflect-metadata";
export declare class RunTestTests {
    singlePassingTestRunsSuccessfully(): Promise<void>;
    singlePassingTestRunsSuccessfullyWithOnCompleteEventRaised(): Promise<void>;
    singlePassingTestRunsSuccessfullyWithoutOnCompleteEventRaised(): Promise<void>;
    singlePassingTestRunsSuccessfullyWithSeveralOnCompleteEventRaised(): Promise<void>;
    singleTestTakes501msFails(): Promise<void>;
    singleTestTakes100msWith50msTimeoutFails(): Promise<void>;
    singleTestThrowsErrorFails(): Promise<void>;
    twoPassingTestsRunsSuccessfully(): Promise<void>;
    twoTestsFirstTakes501msFails(): Promise<void>;
    twoTestsSecondTakes501msFails(): Promise<void>;
    twoTestsFirstTakes100msWith50msTimeoutFails(): Promise<void>;
    twoTestsSecondTakes100msWith50msTimeoutFails(): Promise<void>;
}
