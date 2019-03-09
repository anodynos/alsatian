export declare class PropertySpyConstructorTests {
    getterIsReplacedWithSpy(): void;
    setterIsReplacedWithSpy(): void;
    typescriptGetterIsReplacedWithSpy(): void;
    typescriptSetterIsOverridenWithSpy(): void;
    propertyStillReturnsOriginalValue(originalValue: any): void;
    spyShouldBeReturned(): void;
    spyingOnNonPropertyShouldThrowError(propertyName: string): void;
    spyingOnPropertyShouldNotThrowError(propertyName: string): void;
}
