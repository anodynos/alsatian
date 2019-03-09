export declare class ToHaveBeenSetTests {
    propertySetPasses(): void;
    propertyNotSetFails(): void;
    propertyNotSetFailsWithCorrectError(): void;
    propertyNotSetPassesWhenShouldNotCall(): void;
    propertySetButShouldNotBeThrowsError(): void;
    propertySetButShouldNotBeThrowsCorrectError(): void;
    checkingWhetherNonPropertySpyHasBeenSetShouldThrow(actualValue: any): void;
    checkingWhetherNonPropertySpyHasNotBeenSetShouldThrow(actualValue: any): void;
    actualValueAndShouldMatchShouldBeSetToPropertyNotSet(): void;
    actualValueAndShouldNotMatchShouldBeSetToPropertySet(): void;
    expectedValueAndShouldMatchShouldBeSetToPropertyToBeSet(): void;
    expectedValueAndShouldNotMatchShouldBeSetToFunctionNotToBeCalled(): void;
}
