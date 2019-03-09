export declare class ToContainTests {
    shouldContainArrayItemAndDoesNotThrows<T>(actualValue: Array<T>, expectedContent: T): void;
    shouldContainStringAndDoesNotThrow(actualValue: string, expectedContent: string): void;
    shouldContainArrayItemAndDoesDoesNotThrow<T>(actualValue: Array<T>, expectedContent: T): void;
    shouldContainStringAndDoesDoesNotThrow(actualValue: string, expectedContent: string): void;
    shouldNotContainArrayItemAndDoesNotDoesNotThrow<T>(actualValue: Array<T>, expectedContent: T): void;
    shouldNotContainStringAndDoesNotDoesNotThrow(actualValue: string, expectedContent: string): void;
    shouldNotContainArrayItemAndDoesThrows<T>(actualValue: Array<T>, expectedContent: T): void;
    shouldNotContainStringAndDoesThrow(actualValue: string, expectedContent: string): void;
    shouldBeTruthyArrayActualValueSet<T>(container: Array<T>, expectedContent: T): void;
    shouldBeTruthyStringActualValueSet(container: string, expectedContent: string): void;
    shouldNotBeTruthyArrayActualValueSet<T>(container: Array<T>, expectedContent: T): void;
    shouldNotBeTruthyStringActualValueSet(container: string, expectedContent: string): void;
    shoulContainExpectedValueSetToArrayItemExpectedContent<T>(container: Array<T>, expectedContent: T): void;
    shoulContainExpectedValueSetToStringExpectedContent(container: string, expectedContent: string): void;
    shouldNotConrtainExpectedValueSetToArrayItemExpectedContent<T>(container: Array<T>, expectedContent: T): void;
    shouldNotContainExpectedValueSetToStringExpectedContent(container: string, expectedContent: string): void;
    checkingNonStringOrArraysContainShouldThrow(container: any): void;
    checkingNonStringOrArraysDoNotContainShouldThrow(container: any): void;
    checkingStringContainsNonStringShouldThrow(expectedContent: any): void;
    checkingStringDoesNotContainsNonStringShouldThrow(expectedContent: any): void;
}
