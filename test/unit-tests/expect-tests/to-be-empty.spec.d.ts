export declare class ToBeEmptyTests {
    private readonly _typeErrorMessage;
    emptyShouldNotThrowTypeErrorForArrays(value: Array<any>): void;
    emptyShouldNotThrowTypeErrorForStrings(value: string): void;
    emptyShouldNotThrowTypeErrorForObjectLiterals(value: object): void;
    emptyShouldNotThrowTypeErrorForMaps(value: Map<any, any>): void;
    emptyShouldThrowTypeErrorForNullTypes(value: any): void;
    emptyShouldThrowTypeErrorForInvalidTypes(value: any): void;
    emptyShouldNotThrowErrorForEmptyArray(): void;
    emptyShouldThrowErrorForNonEmptyArray(): void;
    notEmptyShouldThrowErrorForEmptyArray(): void;
    notEmptyShouldNotThrowErrorForNonEmptyArray(): void;
    emptyShouldNotThrowErrorForEmptyString(): void;
    emptyShouldThrowErrorForNonEmptyString(): void;
    notEmptyShouldThrowErrorForEmptyString(): void;
    notEmptyShouldNotThrowErrorForNonEmptyString(): void;
    emptyShouldNotThrowErrorForEmptyObject(): void;
    emptyShouldThrowErrorForNonEmptyObject(): void;
    notEmptyShouldThrowErrorForEmptyObject(): void;
    notEmptyShouldNotThrowErrorForNonEmptyObject(): void;
    emptyShouldNotThrowErrorForEmptyMap(): void;
    emptyShouldThrowErrorForNonEmptyMap(): void;
    notEmptyShouldThrowErrorForEmptyMap(): void;
    notEmptyShouldNotThrowErrorForNonEmptyMap(): void;
}
