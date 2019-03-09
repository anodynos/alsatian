export declare class ToHaveBeenSetToTests {
    propertySetPasses(): void;
    propertyNotSetFails(): void;
    propertyNotSetFailsWithCorrectError(): void;
    propertySetToCorrectValuePasses(expectedValue: any): void;
    functionCalledWithSimilarArgumentsFailsWithCorrectError(expectedValue: any, actualValue: any): void;
    propertyNotSetPassesWhenShouldNotCall(): void;
    propertySetWhenShouldNotBeSetThrowsError(): void;
    propertySetWhenShouldNotBeSetThrowsCorrectError(expectedValue: any): void;
    propertySetToSimilarValuePassesWhenShouldNotBeSet(expectedValue: any, similarValue: any): void;
    propertySetToSimilarValueFailsWhenShouldBeSet(expectedValue: any, similarValue: any): void;
    checkingWhetherNonPropertySpyHasBeenSetToAValueShouldThrow(actualValue: any): void;
    checkingWhetherNonPropertySpyHasNotBeenSetToAValueShouldThrow(actualValue: any): void;
    actualValueAndShouldMatchShouldBeSetToPropertyWasNotSetToValue(values: Array<any>): void;
    actualValueAndShouldNotMatchShouldBeSetToPropertyWasSetToValue(values: Array<any>): void;
    expectedValueAndShouldMatchShouldBeSetToPropertyToBeSetToValue(expectedValue: any): void;
    expectedValueAndShouldNotMatchShouldBeSetToPropertyNotToBeSetToValue(expectedValue: any): void;
}
