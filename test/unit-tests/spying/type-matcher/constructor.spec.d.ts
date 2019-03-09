export declare class TypeMatcherConstructorTests {
    nullOrUndefinedTypesThrowError(type: any): void;
    objectTypesDoNotThrow(type: new (...args: Array<any>) => object): void;
}
