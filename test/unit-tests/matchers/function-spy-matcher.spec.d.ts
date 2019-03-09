import { FunctionSpy } from "../../../core/spying";
export declare class FunctionSpyMatcherTests {
    nullOrUndefinedSpyThrowsError(spy: FunctionSpy): void;
    negativeOrZeroExactlyValueThrowsError(expectedCallCount: number): void;
    exactlyMatchesDoesNotThrow(callCount: number): void;
    exactlyDoesntMatchThrowsError(expectedCallCount: number, actualCallCount: number): void;
    negativeOrZeroAnythingButValueThrowsError(expectedCallCount: number): void;
    anythingButMatchesDoesNotThrow(unexpectedCallCount: number, actualCallCount: number): void;
    anythingButDoesntMatchThrowsError(unexpectedCallCount: number): void;
    negativeOrZeroLessThanValueThrowsError(expectedCallCount: number): void;
    lessThanMatchesDoesNotThrow(maximumCallCount: number, actualCallCount: number): void;
    lessThanDoesntMatchThrowsError(maximumCallCount: number, actualCallCount: number): void;
    negativeOrZeroGreaterThanValueThrowsError(expectedCallCount: number): void;
    greaterThanMatchesDoesNotThrow(maximumCallCount: number, actualCallCount: number): void;
    greaterThanDoesntMatchThrowsError(maximumCallCount: number, actualCallCount: number): void;
}
