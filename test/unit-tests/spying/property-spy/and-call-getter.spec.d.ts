export declare class AndCallGetterTests {
    originalGetterCalled(): void;
    originalGetterNotCalledIfGetterOverloaded(): void;
    propertySpyIsReturned(): void;
    newValueIsReturned(value: any): void;
    andCallGetterValueIsReturnedWhenReturnValueIsCalledPreviously(getterValue: any, andReturnValue: any): void;
    andReturnValueValueIsReturnedWhenReturnValueIsCalledAfter(getterValue: any, andReturnValue: any): void;
}
