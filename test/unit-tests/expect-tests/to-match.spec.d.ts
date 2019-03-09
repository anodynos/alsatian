export declare class ToMatchTests {
    shouldMatchAndDoesNotThrow(actualValue: string, expectedRegex: RegExp): void;
    shouldMatchAndDoesDoesNotThrow(actualValue: string, expectedRegex: RegExp): void;
    shouldNotMatchAndDoesNotDoesNotThrow(actualValue: string, expectedRegex: RegExp): void;
    shouldNotMatchAndDoesThrow(actualValue: string, expectedRegex: RegExp): void;
    checkingWhetherNonStringMatchesRegexShouldThrow(actualValue: string): void;
    checkingWhetherNonStringDoesNotMatchRegexShouldThrow(actualValue: string): void;
    checkingStringMatchesNullOrUndefinedRegularExpressionShouldThrow(regex: RegExp): void;
    checkingStringDoesNotMatchNullOrUndefinedRegularExpressionShouldThrow(regex: RegExp): void;
}
