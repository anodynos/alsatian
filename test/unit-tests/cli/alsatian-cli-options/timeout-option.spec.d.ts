export declare class TimeoutOptionTests {
    timeoutDefaultsToNull(): void;
    timeoutSetIfValid(timeout: number): void;
    timeoutSetIfValidWithShorthand(timeout: number): void;
    errorThrownIfTimeoutValueIsInvalid(invalidTimeout: string): void;
    duplicateTimeoutArgumentsThrowsError(...inputArguments: Array<string>): void;
    missingTimeoutPeriodThrowsError(timeoutArgument: string): void;
}
