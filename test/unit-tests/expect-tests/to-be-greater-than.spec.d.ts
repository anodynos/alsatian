export declare class ToBeGreaterThanTests {
    greaterThanShouldNotThrowError(value: number, lowerLimit: number): void;
    equalShouldThrowError(value: number, lowerLimit: number): void;
    lessThanShouldThrowError(value: number, lowerLimit: number): void;
    notGreaterThanShouldThrowError(value: number, lowerLimit: number): void;
    notEqualShouldNotThrowError(value: number, lowerLimit: number): void;
    notLessThanShouldNotThrowError(value: number, lowerLimit: number): void;
    shouldBeGreaterThanMessage(value: number, lowerLimit: number): void;
    shouldNotBeGreaterThanMessage(value: number, lowerLimit: number): void;
    greaterThanShouldSetErrorActualValueToGivenValue(actualValue: number): void;
    notGreaterThanShouldSetErrorActualValueToGivenValue(actualValue: number): void;
    shouldSetExpectedValueToGreaterThanLowerLimit(lowerLimit: number): void;
    shouldSetExpectedValueToNotGreaterThanLowerLimit(lowerLimit: number): void;
    checkingGreaterThanNullOrUndefinedShouldThrow(lowerLimit: number): void;
    checkingNonNumberGreaterThanSomethingShouldThrow(value: number): void;
}
