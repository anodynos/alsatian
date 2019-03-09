export declare class SpyOnPropertyTests {
    getterIsReplacedWithSpy(): void;
    setterIsReplacedWithSpy(): void;
    propertyStillReturnsOriginalValue(originalValue: any): void;
    spyShouldBeReturned(): void;
    spyingOnNonPropertyShouldThrowError(propertyName: string): void;
    spyingOnPropertyShouldNotThrowError(propertyName: string): void;
}
