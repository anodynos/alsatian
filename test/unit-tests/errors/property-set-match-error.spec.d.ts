export declare class PropertySetMatchErrorTests {
    shouldBeSetMessage(): void;
    shouldNotBeSetMessage(): void;
    shouldBeSetToValueMessage(value: any): void;
    shouldNotBeSetToValueMessage(value: any): void;
    actualValueAndShouldMatchShouldBeSetToPropertyNotSet(): void;
    actualValueAndShouldNotMatchShouldBeSetToPropertySet(): void;
    expectedValueAndShouldMatchShouldBeSetToPropertyToBeSet(): void;
    expectedValueAndShouldNotMatchShouldBeSetToFunctionNotToBeCalled(): void;
    actualValueAndShouldMatchShouldBeSetToPropertyWasNotSetToValue(values: Array<any>): void;
    actualValueAndShouldNotMatchShouldBeSetToPropertyWasSetToValue(values: Array<any>): void;
    expectedValueAndShouldMatchShouldBeSetToPropertyToBeSetToValue(value: any): void;
    expectedValueAndShouldNotMatchShouldBeSetToPropertyNotToBeSetToValue(value: any): void;
}
