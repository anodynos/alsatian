export declare class AndCallSetterTests {
    originalSetterCalled(): void;
    originalSetterNotCalledIfSetterOverloaded(): void;
    propertySpyIsReturned(): void;
    newValueIsSet(expectedValue: any): void;
    andCallSetterValueIsReturnedWhenReturnValueIsCalledPreviously(setterValue: any, andReturnValue: any): void;
    andReturnValueValueIsReturnedWhenReturnValueIsCalledAfter(setterValue: any, andReturnValue: any): void;
}
