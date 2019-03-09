import { TestOutcome, TestRunner } from "../../../core/alsatian-core";
export declare class CliTestRunnerTests {
    private _originalStdErr;
    private _originalStdOut;
    private _originalProcessExit;
    private _spyProcess;
    private _resetProcess;
    nullOrUndefinedTestRunnerThrowsError(testRunner: TestRunner): void;
    noTestFixturesExitsWithError(): Promise<void>;
    noTestFixturesPrintsErrorMessageWithNewLine(): Promise<void>;
    onePassingTestFixturesExitsWithNoError(): Promise<void>;
    runThrowsErrorExitsWithError(outcome: TestOutcome): Promise<void>;
    runThrowsErrorOutputsErrorMessage(errorMessage: string): Promise<void>;
    tapRequestedPipesOutputDirectlyToProcessStdOut(): Promise<void>;
    tapRequestedWithAliasPipesOutputDirectlyToProcessStdOut(): Promise<void>;
    versionRequestedOutputsCurrentVersionNumber(): Promise<void>;
    versionRequestedWithAliasOutputsCurrentVersionNumber(): Promise<void>;
    versionRequestedDoesntCallTestRunnerRun(): Promise<void>;
    versionRequestedWithAliasPipesOutputDirectlyToProcessStdOut(): Promise<void>;
    helpRequestedOutputsCurrentVersionNumber(): Promise<void>;
    helpRequestedWithAliasOutputsCurrentVersionNumber(): Promise<void>;
    helpRequestedDoesntCallTestRunnerRun(): Promise<void>;
    helpRequestedWithAliasPipesOutputDirectlyToProcessStdOut(): Promise<void>;
}
