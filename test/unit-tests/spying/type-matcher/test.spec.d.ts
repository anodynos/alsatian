export declare class DerivedError extends Error {
    state: any;
    constructor(state: any, message?: string);
}
export declare class Testable<TA, TB> {
    a: TA;
    b: TB;
    constructor(a: TA, b: TB);
}
export declare class TypeMatcherTestFunctionTests {
    numberTypeAndNumberValueReturnsTrue(value: number): void;
    numberTypeAndNonNumberValueReturnsTrue(value: any): void;
    stringTypeAndStringValueReturnsTrue(value: string): void;
    stringTypeAndNonStringValueReturnsTrue(value: any): void;
    booleanTypeAndBooleanValueReturnsTrue(value: boolean): void;
    booleanTypeAndNonBooleanValueReturnsTrue(value: any): void;
    objectTypeAndObjectValueReturnsTrue(value: object): void;
    objectTypeAndNonObjectValueReturnsTrue(value: any): void;
    arrayTypeAndArrayValueReturnsTrue(value: Array<any>): void;
    arrayTypeAndNonArrayValueReturnsTrue(value: any): void;
    errorTypeAndArrayValueReturnsTrue(value: Error): void;
    errorTypeAndNonErrorValueReturnsTrue(value: any): void;
    thatMatchesWithValidArgumentsDoesNotThrow(): void;
    thatMatchesWithInvalidArgumentsDoesThrow(): void;
    thatMatchesWithKeyAndValueReturnsExpected<ItemType extends object>(item: ItemType, key: string, value: any, output: boolean): void;
    thatMatchesWithObjectLiteralReturnsExpected<ItemType extends object>(item: ItemType, properties: object, output: boolean): void;
    thatMatchesWithDelegateReturnsExpected<ItemType extends object>(item: ItemType, delegate: (v: ItemType) => boolean, output: boolean): void;
    thatMatchesWithKeyAndValueStringifiesAsExpected(): void;
    thatMatchesWithObjectLiteralStringifiesAsExpected(): void;
    thatMatchesShouldMatchAClassInstance(instance: Testable<any, any>, matcher: Testable<any, any>): void;
    thatMatchesWithDelegateStringifiesAsExpected(): void;
    thatMatchesWithChainStringifiesAsExpected(): void;
}
