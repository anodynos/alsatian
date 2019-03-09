import "reflect-metadata";
export declare class TestCaseDecoratorTests {
    testAddedAsMetaData(): void;
    testKeyMetaDataAdded(key: string): void;
    correctTestCountAdded(testCount: number): void;
    noDuplicateTestKeysAdded(testCount: number): void;
    testCasesAddedAsMetaData(): void;
    noTestsAddedOnNull(): void;
    testCaseArgumentsFromArrayMetaDataAdded(expectedArguments: Array<Array<any>>): void;
    testCaseArgumentsFromArrayDelegateMetaDataAdded(expectedArguments: Array<Array<any>>): void;
    testCaseArgumentsFromGeneratorMetaDataAdded(expectedArguments: Array<Array<any>>): void;
    testCaseArgumentsFromGeneratorDelegateMetaDataAdded(expectedArguments: Array<Array<any>>): void;
    testCaseKeyMetaDataAddedWithCorrectKey(key: string): void;
    testCaseArgumentsAlwaysAddedAsFirstIndex(testCount: number): void;
}
