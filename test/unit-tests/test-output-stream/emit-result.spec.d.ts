export declare class EmitResultTests {
    shouldEmitWithCorrectTestId(testId: number): void;
    shouldEmitWithCorrectTestDescription(description: string): void;
    shouldEmitWithCorrectCaseArguments(testCaseArguments: Array<any>, testCaseOutput: string): void;
    shouldEmitWithOkIfPass(): void;
    shouldEmitWithNotOkIfPass(): void;
    shouldEmitSkipCorrectly(): void;
    shouldEmitSkipWithReasonCorrectly(reason: string): void;
    shouldEmitErrorCorrectly(): void;
    shouldEmitYamlWithCorrectMessage(message: string): void;
    shouldEmitYamlWithCorrectActualValue(actualValue: any): void;
    shouldEmitYamlWithCorrectExpectedValue(expectedValue: any): void;
    invalidResultOutcomeThrowsError(testOutcome: number): void;
    shouldEmitCorrectUnhandledErrorStack(stack: string): void;
    shouldEmitCorrectUnhandledErrorWithUndefOrNullError(error: Error | null): void;
}
