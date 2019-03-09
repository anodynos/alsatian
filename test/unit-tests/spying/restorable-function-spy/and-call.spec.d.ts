export declare class AndCallTests {
    originalFunctionNotCalledIfSpyFaked(): void;
    spyShoulReturnCorrectValue(returnValue: any): void;
    originalFunctionNotCalledIfSpyNotFaked(): void;
    fakeFunctionNotCalledIfSpyNotFaked(fakeFunction: () => any): void;
}
